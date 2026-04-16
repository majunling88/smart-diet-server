/**
 * 百炼（阿里云）AI 服务封装
 * 支持图像识别和OCR
 */

const axios = require('axios');

// 百炼API配置
const BAILIAN_CONFIG = {
  // API Key（从环境变量或配置获取）
  apiKey: process.env.BAILIAN_API_KEY || '',
  // 百炼API地址
  baseUrl: 'https://dashscope.aliyuncs.com/api/v1/services/aigc/multimodal-generation/generation',
  // 图像理解模型 - 使用Qwen3-VL-Plus最新版本
  model: 'qwen-vl-plus', // Qwen3-VL-Plus视觉大模型（最新推荐版本）
};

/**
 * 设置API Key
 */
function setApiKey(apiKey) {
  BAILIAN_CONFIG.apiKey = apiKey;
}

/**
 * 食物识别
 * @param {string} imageBase64 - Base64编码的图片
 * @returns {Promise<Array>} 识别结果
 */
async function recognizeFood(imageBase64) {
  if (!BAILIAN_CONFIG.apiKey) {
    throw new Error('请先配置百炼API Key');
  }

  try {
    const prompt = `你是一个专业的食品营养分析专家。请仔细分析这张图片，识别其中的食物或食品包装。

【识别流程 - 请严格按照以下步骤执行】

**第一步：识别产品基本信息**
- 产品名称（如：卡乐比薯条、河童虾条等）
- 品牌（如：Calbee、卡乐比等）
- 包装规格/净含量（如：90g、520mL等）

**第二步：提取营养成分表数据（优先级最高）**
- 仔细查看包装上的营养成分表
- 提取每100g或每份的热量(kcal/kJ)、蛋白质、碳水化合物、脂肪
- 注意单位换算：1 kcal = 4.184 kJ

**第三步：数据来源判断**
- 如果图片中有营养成分表 → 直接提取，标记 source: "packaging"
- 如果没有营养表但有产品名称 → 查询行业数据库估算，标记 source: "database"
- 如果无法识别 → 标记 source: "estimation"

**第四步：包装规格换算**
- 用每100g热量 × 包装净含量(g) = 总热量
- 如：热量480kcal/100g × 90g包装 = 432kcal

**第五步：版本与批次说明**
- 海外版/内地版配方可能有差异，给出5%-10%浮动区间
- 注明数据来源和可信度

【返回格式】必须是纯JSON：
{
  "foods": [
    {
      "name": "产品全称",
      "brand": "品牌名称",
      "confidence": 0.95,
      "portion": "净含量描述",
      "weight_grams": 90,
      "nutrition": {
        "calories": 每份总热量,
        "calories_per_100g": 每100g热量,
        "protein": 蛋白质,
        "carbs": 碳水,
        "fat": 脂肪
      },
      "source": "packaging/database/estimation",
      "data_quality": "high/medium/low",
      "notes": "数据来源说明和注意事项"
    }
  ]
}

【重要提示】
- 优先从包装营养成分表提取数据，这是最准确的
- 如果是日本进口食品，注意区分日本版和内地版配方差异
- 给出热量时，同时标注每份总热量和每100g热量
- 如果数据是估算的，请明确说明`;

    const response = await callBailianVision(imageBase64, prompt);
    return parseFoodResult(response);

  } catch (error) {
    console.error('百炼食物识别失败:', error.message);
    throw error;
  }
}

/**
 * 营养成分表OCR识别
 * @param {string} imageBase64 - Base64编码的图片
 * @returns {Promise<Object>} 识别结果
 */
async function recognizeNutritionLabel(imageBase64) {
  if (!BAILIAN_CONFIG.apiKey) {
    throw new Error('请先配置百炼API Key');
  }

  try {
    const prompt = `请识别这张图片中的营养成分表，提取所有营养数据。

要求：
1. 识别所有营养成分及其数值
2. 返回格式必须是纯JSON，不要有任何其他文字
3. 数值只保留数字，不要单位

返回格式：
{
  "name": "食品名称",
  "servingSize": "每份大小",
  "calories": 热量数值,
  "protein": 蛋白质数值,
  "carbs": 碳水数值,
  "fat": 脂肪数值,
  "fiber": 膳食纤维数值,
  "sodium": 钠数值
}

如果不是营养成分表，返回空对象{}`;

    const response = await callBailianVision(imageBase64, prompt);
    return parseNutritionResult(response);

  } catch (error) {
    console.error('百炼OCR识别失败:', error.message);
    throw error;
  }
}

/**
 * 调用百炼视觉大模型
 * @param {string} imageBase64 - Base64图片
 * @param {string} prompt - 提示词
 * @returns {Promise<string>} 识别结果
 */
async function callBailianVision(imageBase64, prompt) {
  console.log('🔍 开始调用百炼AI...');
  console.log('📋 使用模型:', BAILIAN_CONFIG.model);
  console.log('📏 图片大小:', Math.round(imageBase64.length / 1024), 'KB');
  
  // 压缩图片：如果图片太大，降低质量
  let processedImage = imageBase64;
  const maxSize = 500 * 1024; // 500KB
  if (imageBase64.length > maxSize) {
    console.log('📦 图片较大，建议前端压缩');
  }
  
  try {
    const response = await axios.post(
      BAILIAN_CONFIG.baseUrl,
      {
        model: BAILIAN_CONFIG.model,
        input: {
          messages: [
            {
              role: 'user',
              content: [
                { image: `data:image/jpeg;base64,${processedImage}` },
                { text: prompt },
              ],
            },
          ],
        },
        // 添加参数优化响应速度
        parameters: {
          max_tokens: 1000,  // 限制输出长度
          temperature: 0.1,  // 降低随机性，加快生成
        }
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${BAILIAN_CONFIG.apiKey}`,
        },
        timeout: 30000,  // 减少超时时间到30秒
      }
    );

    console.log('✅ 百炼API响应成功');

    // 解析返回结果
    if (response.data && response.data.output && response.data.output.choices) {
      const result = response.data.output.choices[0].message.content[0].text;
      console.log('📝 AI返回内容:', result.substring(0, 300));
      return result;
    }

    throw new Error('百炼API返回格式异常: ' + JSON.stringify(response.data));
  } catch (error) {
    console.error('❌ 百炼API调用失败:', error.message);
    if (error.response) {
      console.error('📄 错误响应:', JSON.stringify(error.response.data, null, 2));
    }
    throw error;
  }
}

/**
 * 解析食物识别结果
 */
function parseFoodResult(response) {
  try {
    let data;
    
    if (typeof response === 'string') {
      // 提取JSON
      const jsonMatch = response.match(/\{[\s\S]*"foods"[\s\S]*\}/);
      if (jsonMatch) {
        data = JSON.parse(jsonMatch[0]);
      } else {
        // 从文本提取食物
        return extractFoodFromText(response);
      }
    } else {
      data = response;
    }

    if (data && data.foods && Array.isArray(data.foods)) {
      return data.foods.map(food => {
        // 如果AI已经返回了营养信息，直接使用
        if (food.nutrition) {
          return {
            keyword: food.name,
            score: food.confidence || 0.85,
            portion: food.portion || `${food.weight_grams || 100}g`,
            weight_grams: food.weight_grams || 100,
            nutrition: {
              calories: food.nutrition.calories || 0,
              calories_per_100g: food.nutrition.calories_per_100g || food.nutrition.calories || 0,
              protein: food.nutrition.protein || 0,
              carbs: food.nutrition.carbs || 0,
              fat: food.nutrition.fat || 0,
            },
            source: food.source || 'ai',
            brand: food.brand || '',
            data_quality: food.data_quality || 'medium',
            notes: food.notes || '',
          };
        }
        
        // 否则从本地数据库匹配
        return {
          keyword: food.name,
          score: food.confidence || 0.85,
          portion: food.portion || '约100g',
        };
      });
    }

    return [];
  } catch (error) {
    console.error('解析食物结果失败:', error);
    if (typeof response === 'string') {
      return extractFoodFromText(response);
    }
    return [];
  }
}

/**
 * 从文本中提取食物名称
 */
function extractFoodFromText(text) {
  const foodKeywords = [
    '米饭', '面条', '馒头', '包子', '饺子', '粥', '炒饭', '盖饭',
    '苹果', '香蕉', '橙子', '西瓜', '葡萄', '草莓', '芒果', '梨',
    '鸡蛋', '煎蛋', '煮蛋', '茶叶蛋', '牛奶', '豆浆', '酸奶',
    '猪肉', '牛肉', '鸡肉', '鸭肉', '鱼肉', '虾', '螃蟹',
    '青菜', '白菜', '菠菜', '生菜', '番茄', '黄瓜', '土豆', '茄子',
    '蛋糕', '面包', '饼干', '巧克力', '冰淇淋',
    '可乐', '咖啡', '奶茶', '果汁', '茶',
    '沙拉', '汉堡', '披萨', '寿司', '三明治',
    '火锅', '烧烤', '麻辣烫', '炸鸡',
  ];

  const found = [];
  for (const food of foodKeywords) {
    if (text.includes(food)) {
      found.push({
        keyword: food,
        score: 0.85,
        portion: '约100g',
      });
    }
  }

  return found.slice(0, 5);
}

/**
 * 解析营养成分识别结果
 */
function parseNutritionResult(response) {
  try {
    let data;
    
    if (typeof response === 'string') {
      const jsonMatch = response.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        data = JSON.parse(jsonMatch[0]);
      } else {
        return { name: '', rawText: response };
      }
    } else {
      data = response;
    }

    return {
      name: data.name || '',
      servingSize: data.servingSize || '100g',
      calories: data.calories || null,
      protein: data.protein || null,
      carbs: data.carbs || null,
      fat: data.fat || null,
      fiber: data.fiber || null,
      sodium: data.sodium || null,
      rawText: JSON.stringify(data),
    };
  } catch (error) {
    console.error('解析营养结果失败:', error);
    return {
      name: '',
      rawText: typeof response === 'string' ? response : JSON.stringify(response),
    };
  }
}

module.exports = {
  setApiKey,
  recognizeFood,
  recognizeNutritionLabel,
};

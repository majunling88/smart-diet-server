/**
 * 小艺 AI 服务封装（直连版）
 * 直接调用小艺图像理解能力
 */

const axios = require('axios');

// 小艺图像理解服务配置
const XIAOYI_CONFIG = {
  // OpenClaw服务地址（小程序和后端在同一环境时使用）
  openclawUrl: process.env.OPENCLAW_URL || 'http://localhost:3100',
};

/**
 * 食物识别（使用小艺图像理解）
 * @param {string} imageBase64 - Base64编码的图片
 * @returns {Promise<Array>} 识别结果
 */
async function recognizeFood(imageBase64) {
  try {
    // 构造识别提示词
    const prompt = `请仔细识别这张图片中的食物，返回JSON格式结果。

要求：
1. 如果是食物图片，识别出食物名称
2. 如果有多种食物，全部列出
3. 估算食物的大致份量

请严格按以下JSON格式返回，不要添加任何其他文字：
{"foods":[{"name":"食物名称","confidence":0.95,"portion":"约100g"}]}

如果图片中没有食物，返回：{"foods":[]}`;

    // 调用小艺图像理解
    const result = await callXiaoyiImageUnderstanding(imageBase64, prompt);
    
    // 解析结果
    return parseFoodResult(result);

  } catch (error) {
    console.error('小艺食物识别失败:', error.message);
    throw error;
  }
}

/**
 * 营养成分表OCR识别
 * @param {string} imageBase64 - Base64编码的图片
 * @returns {Promise<Object>} 识别结果
 */
async function recognizeNutritionLabel(imageBase64) {
  try {
    const prompt = `请识别这张图片中的营养成分表，提取营养数据。

请严格按以下JSON格式返回，不要添加任何其他文字：
{
  "name": "食品名称",
  "servingSize": "每份大小",
  "calories": 热量数值,
  "protein": 蛋白质数值,
  "carbs": 碳水数值,
  "fat": 脂肪数值
}

如果某项数值没有，设为null。如果不是营养成分表，返回空对象{}`;

    const result = await callXiaoyiImageUnderstanding(imageBase64, prompt);
    return parseNutritionResult(result);

  } catch (error) {
    console.error('小艺OCR识别失败:', error.message);
    throw error;
  }
}

/**
 * 调用小艺图像理解API
 * 通过OpenClaw的image_reading工具实现
 */
async function callXiaoyiImageUnderstanding(imageBase64, prompt) {
  // 方式1: 通过HTTP调用OpenClaw的图像理解接口
  try {
    // 构造data URL
    const dataUrl = `data:image/jpeg;base64,${imageBase64}`;
    
    const response = await axios.post(`${XIAOYI_CONFIG.openclawUrl}/api/image/understand`, {
      image: dataUrl,
      prompt: prompt,
    }, {
      headers: { 'Content-Type': 'application/json' },
      timeout: 60000, // 60秒超时
    });

    return response.data.result || response.data.description || response.data;
    
  } catch (httpError) {
    console.log('HTTP调用失败:', httpError.message);
    
    // 方式2: 如果HTTP不可用，返回一个标记让前端知道需要通过其他方式处理
    throw new Error('XIAOYI_DIRECT_MODE');
  }
}

/**
 * 解析食物识别结果
 */
function parseFoodResult(response) {
  try {
    let data;
    
    if (typeof response === 'string') {
      // 尝试提取JSON
      const jsonMatch = response.match(/\{[\s\S]*"foods"[\s\S]*\}/);
      if (jsonMatch) {
        data = JSON.parse(jsonMatch[0]);
      } else {
        // 从文本中提取食物
        return extractFoodFromText(response);
      }
    } else {
      data = response;
    }

    if (data && data.foods && Array.isArray(data.foods)) {
      return data.foods.map(food => ({
        keyword: food.name,
        score: food.confidence || 0.85,
        portion: food.portion || '约100g',
      }));
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
  recognizeFood,
  recognizeNutritionLabel,
};

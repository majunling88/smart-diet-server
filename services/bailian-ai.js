/**
 * 百炼AI服务 - 优化版
 * 核心原则：精简prompt，节约token，精准识别
 */

const axios = require('axios');

const BAILIAN_CONFIG = {
  apiKey: process.env.BAILIAN_API_KEY || '',
  baseUrl: 'https://dashscope.aliyuncs.com/api/v1/services/aigc/multimodal-generation/generation',
  model: 'qwen-vl-plus',
};

function setApiKey(apiKey) {
  BAILIAN_CONFIG.apiKey = apiKey;
}

/**
 * 食物识别 - 精简prompt版
 */
async function recognizeFood(imageBase64) {
  if (!BAILIAN_CONFIG.apiKey) {
    throw new Error('请先配置百炼API Key');
  }

  // 精简prompt，只保留核心指令
  const prompt = `分析图片中的食物，返回JSON格式数据。

【识别规则】
1. 包装食品：读取营养成分表，提取热量/蛋白质/脂肪/碳水
2. 散装食物：根据大小估算重量，计算营养值
3. 纯净水/矿泉水：所有营养值=0（重要！）

【重量估算】
- 包装：读取净含量
- 水果：小120g/中180g/大250g
- 菜肴：小盘150g/中盘250g/大盘400g

【返回格式】
{
  "foods": [{
    "name": "食物名称",
    "category": "水果/蔬菜/肉类/主食/包装食品/饮料",
    "confidence": 0.95,
    "estimated_weight": 180,
    "weight_source": "packaging/size_reference",
    "nutrition": {
      "calories": 总热量,
      "calories_per_100g": 每100g热量,
      "protein": 蛋白质,
      "carbs": 碳水,
      "fat": 脂肪,
      "fiber": 纤维,
      "sodium": 钠,
      "potassium": 钾,
      "calcium": 钙,
      "iron": 铁,
      "vitaminC": 维C
    },
    "source": "packaging/database/estimation",
    "data_quality": "high/medium/low"
  }]
}`;

  return callBailianVision(imageBase64, prompt);
}

/**
 * 调用百炼API - 优化参数
 */
async function callBailianVision(imageBase64, prompt) {
  console.log('🔍 调用百炼AI...');
  console.log('📏 图片:', Math.round(imageBase64.length / 1024), 'KB');
  
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
                { image: `data:image/jpeg;base64,${imageBase64}` },
                { text: prompt },
              ],
            },
          ],
        },
        parameters: {
          max_tokens: 800,      // 减少输出token
          temperature: 0.05,    // 降低随机性，提高精准度
          top_p: 0.9,           // 控制采样范围
        }
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${BAILIAN_CONFIG.apiKey}`,
        },
        timeout: 30000,
      }
    );

    if (response.data?.output?.choices) {
      const result = response.data.output.choices[0].message.content[0].text;
      console.log('✅ AI响应:', result.substring(0, 200));
      return parseFoodResult(result);
    }

    throw new Error('API返回格式异常');
  } catch (error) {
    console.error('❌ 百炼API失败:', error.message);
    throw error;
  }
}

/**
 * 解析结果 - 优化版
 */
function parseFoodResult(response) {
  try {
    let data;
    
    if (typeof response === 'string') {
      const jsonMatch = response.match(/\{[\s\S]*"foods"[\s\S]*\}/);
      if (jsonMatch) {
        data = JSON.parse(jsonMatch[0]);
      } else {
        return extractFoodFromText(response);
      }
    } else {
      data = response;
    }

    if (!data?.foods?.length) return [];

    return data.foods.map(food => {
      // 水产品特殊处理
      const waterKeywords = ['水', '纯净水', '矿泉水', '农夫山泉', '怡宝', '娃哈哈', '苏打水'];
      const isWater = waterKeywords.some(kw => 
        (food.name?.includes(kw)) || (food.brand?.includes(kw))
      );
      
      if (isWater) {
        return {
          keyword: food.name || '纯净水',
          name: food.name || '纯净水',
          category: '饮料',
          score: 0.98,
          brand: food.brand || '',
          weight_grams: food.estimated_weight || 550,
          nutrition: createEmptyNutrition(),
          source: 'packaging',
          data_quality: 'high',
          notes: '纯净水',
        };
      }
      
      // 普通食物
      const n = food.nutrition || {};
      return {
        keyword: food.name,
        name: food.name,
        category: food.category || '其他',
        score: food.confidence || 0.85,
        brand: food.brand || '',
        weight_grams: food.estimated_weight || 100,
        size_description: food.size_description || '',
        nutrition: {
          calories: n.calories || 0,
          calories_per_100g: n.calories_per_100g || 0,
          protein: n.protein || 0,
          fat: n.fat || 0,
          carbs: n.carbs || 0,
          fiber: n.fiber || 0,
          sodium: n.sodium || 0,
          potassium: n.potassium || 0,
          calcium: n.calcium || 0,
          magnesium: n.magnesium || 0,
          phosphorus: n.phosphorus || 0,
          iron: n.iron || 0,
          zinc: n.zinc || 0,
          selenium: n.selenium || 0,
          copper: n.copper || 0,
          vitaminA: n.vitaminA || 0,
          vitaminB1: n.vitaminB1 || 0,
          vitaminB2: n.vitaminB2 || 0,
          vitaminB3: n.vitaminB3 || 0,
          vitaminC: n.vitaminC || 0,
          vitaminE: n.vitaminE || 0,
          folate: n.folate || 0,
        },
        source: food.source || 'ai',
        data_quality: food.data_quality || 'medium',
        notes: food.notes || '',
      };
    });
  } catch (error) {
    console.error('解析失败:', error);
    return typeof response === 'string' ? extractFoodFromText(response) : [];
  }
}

/**
 * 创建空营养对象
 */
function createEmptyNutrition() {
  return {
    calories: 0, calories_per_100g: 0, protein: 0, fat: 0, carbs: 0, fiber: 0,
    sodium: 0, potassium: 0, calcium: 0, magnesium: 0, phosphorus: 0,
    iron: 0, zinc: 0, selenium: 0, copper: 0,
    vitaminA: 0, vitaminB1: 0, vitaminB2: 0, vitaminB3: 0,
    vitaminC: 0, vitaminE: 0, folate: 0,
  };
}

/**
 * 从文本提取食物
 */
function extractFoodFromText(text) {
  const keywords = [
    '米饭', '面条', '苹果', '香蕉', '鸡蛋', '牛奶', '牛肉', '猪肉', '鸡肉',
    '青菜', '白菜', '番茄', '黄瓜', '蛋糕', '面包', '可乐', '咖啡',
  ];
  
  const found = [];
  for (const food of keywords) {
    if (text.includes(food)) {
      found.push({ keyword: food, score: 0.85, name: food });
    }
  }
  return found.slice(0, 3);
}

module.exports = {
  setApiKey,
  recognizeFood,
};

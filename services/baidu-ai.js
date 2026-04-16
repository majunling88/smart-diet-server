/**
 * 百度智能云 AI 服务封装
 * 包含：图像识别（食物）、OCR识别（营养成分表）
 * 
 * 使用前需要：
 * 1. 注册百度智能云账号
 * 2. 创建图像识别应用，获取 API Key 和 Secret Key
 * 3. 创建 OCR 应用
 */

const axios = require('axios');

// 百度AI配置（需要替换为你的真实密钥）
const BAIDU_CONFIG = {
  // 图像识别（食物识别）
  IMAGE_API_KEY: process.env.BAIDU_IMAGE_API_KEY || 'YOUR_IMAGE_API_KEY',
  IMAGE_SECRET_KEY: process.env.BAIDU_IMAGE_SECRET_KEY || 'YOUR_IMAGE_SECRET_KEY',
  
  // OCR识别
  OCR_API_KEY: process.env.BAIDU_OCR_API_KEY || 'YOUR_OCR_API_KEY',
  OCR_SECRET_KEY: process.env.BAIDU_OCR_SECRET_KEY || 'YOUR_OCR_SECRET_KEY',
};

// Token缓存
let imageToken = null;
let ocrToken = null;

/**
 * 获取百度AI Access Token
 */
async function getAccessToken(apiKey, secretKey, tokenCache) {
  // 如果有缓存且未过期，直接返回
  if (tokenCache && tokenCache.expiresAt > Date.now()) {
    return tokenCache.token;
  }

  const url = 'https://aip.baidubce.com/oauth/2.0/token';
  const response = await axios.post(url, null, {
    params: {
      grant_type: 'client_credentials',
      client_id: apiKey,
      client_secret: secretKey,
    },
  });

  return {
    token: response.data.access_token,
    expiresAt: Date.now() + (response.data.expires_in - 300) * 1000, // 提前5分钟过期
  };
}

/**
 * 食物识别
 * @param {string} imageBase64 - Base64编码的图片
 * @returns {Promise<Array>} 识别结果
 */
async function recognizeFood(imageBase64) {
  try {
    // 获取Token
    const tokenData = await getAccessToken(
      BAIDU_CONFIG.IMAGE_API_KEY,
      BAIDU_CONFIG.IMAGE_SECRET_KEY,
      imageToken
    );
    imageToken = tokenData;

    // 调用图像识别API（通用物体识别）
    const url = `https://aip.baidubce.com/rest/2.0/image-classify/v2/advanced_general?access_token=${tokenData.token}`;
    
    const response = await axios.post(url, `image=${encodeURIComponent(imageBase64)}`, {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    });

    // 过滤出食物相关的结果
    const foodKeywords = ['食物', '食品', '菜', '饭', '面', '肉', '水果', '蔬菜', '饮料', '甜品', '餐'];
    const results = response.data.result || [];
    
    const foodResults = results.filter(item => 
      foodKeywords.some(keyword => item.keyword.includes(keyword))
    );

    return foodResults.length > 0 ? foodResults : results.slice(0, 3);
  } catch (error) {
    console.error('食物识别失败:', error.message);
    throw new Error('食物识别服务暂时不可用');
  }
}

/**
 * 营养成分表OCR识别
 * @param {string} imageBase64 - Base64编码的图片
 * @returns {Promise<Object>} 识别结果
 */
async function recognizeNutritionLabel(imageBase64) {
  try {
    // 获取Token
    const tokenData = await getAccessToken(
      BAIDU_CONFIG.OCR_API_KEY,
      BAIDU_CONFIG.OCR_SECRET_KEY,
      ocrToken
    );
    ocrToken = tokenData;

    // 调用通用文字识别API
    const url = `https://aip.baidubce.com/rest/2.0/ocr/v1/general_basic?access_token=${tokenData.token}`;
    
    const response = await axios.post(url, `image=${encodeURIComponent(imageBase64)}`, {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    });

    // 解析营养成分
    const text = response.data.words_result?.map(item => item.words).join('\n') || '';
    return parseNutritionText(text);
  } catch (error) {
    console.error('OCR识别失败:', error.message);
    throw new Error('OCR识别服务暂时不可用');
  }
}

/**
 * 解析营养成分文本
 * @param {string} text - OCR识别的文本
 * @returns {Object} 结构化的营养数据
 */
function parseNutritionText(text) {
  const nutrition = {
    name: '',
    servingSize: '',
    calories: null,
    protein: null,
    carbs: null,
    fat: null,
    fiber: null,
    sodium: null,
    rawText: text,
  };

  // 常见营养素关键词映射
  const patterns = {
    calories: [/能量[：:]\s*(\d+(?:\.\d+)?)\s*(kJ|kcal|千焦|千卡)/i, /热量[：:]\s*(\d+(?:\.\d+)?)\s*(kJ|kcal|千焦|千卡)/i],
    protein: [/蛋白质[：:]\s*(\d+(?:\.\d+)?)\s*g/i, /蛋白质[：:]\s*(\d+(?:\.\d+)?)\s*克/i],
    carbs: [/碳水化合物[：:]\s*(\d+(?:\.\d+)?)\s*g/i, /碳水[：:]\s*(\d+(?:\.\d+)?)\s*g/i],
    fat: [/脂肪[：:]\s*(\d+(?:\.\d+)?)\s*g/i, /总脂肪[：:]\s*(\d+(?:\.\d+)?)\s*g/i],
    fiber: [/膳食纤维[：:]\s*(\d+(?:\.\d+)?)\s*g/i],
    sodium: [/钠[：:]\s*(\d+(?:\.\d+)?)\s*mg/i, /钠[：:]\s*(\d+(?:\.\d+)?)\s*毫克/i],
  };

  // 提取各项营养数据
  for (const [key, regexList] of Object.entries(patterns)) {
    for (const regex of regexList) {
      const match = text.match(regex);
      if (match) {
        nutrition[key] = parseFloat(match[1]);
        break;
      }
    }
  }

  // 尝试提取食品名称（通常在第一行）
  const lines = text.split('\n').filter(line => line.trim());
  if (lines.length > 0) {
    nutrition.name = lines[0].replace(/[营养成分表|营养信息]/g, '').trim();
  }

  return nutrition;
}

module.exports = {
  recognizeFood,
  recognizeNutritionLabel,
};

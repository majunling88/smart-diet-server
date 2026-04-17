/**
 * 食物识别路由 - 优化版
 * 核心原则：本地优先，AI兜底，节约token
 */

const express = require('express');
const router = express.Router();

const { NUTRITION_DB, findNutrition, getAllFoods, getCategories } = require('../data/nutrition-db');
const smartMatch = require('../services/smart-match');

// 缓存配置
const searchCache = new Map();
const CACHE_DURATION = 10 * 60 * 1000; // 10分钟缓存

// AI服务
let aiService = null;
let aiType = 'none';

try {
  const bailian = require('../services/bailian-ai');
  if (process.env.BAILIAN_API_KEY) {
    aiService = bailian;
    aiType = 'bailian';
    console.log('✅ 使用百炼AI服务');
  }
} catch (e) {
  console.log('⚠️ 百炼AI不可用');
}

console.log(`📊 已加载 ${Object.keys(NUTRITION_DB).length} 种食物营养数据`);

/**
 * 判断是否需要调用AI
 * @returns {boolean} true=需要AI, false=本地可处理
 */
function shouldUseAI(image, text) {
  // 文本模式：本地优先
  if (text && !image) {
    const localResult = smartMatch.smartRecognize(text);
    // 本地匹配成功且置信度高，不需要AI
    if (localResult.length > 0 && localResult[0].confidence >= 0.9) {
      return false;
    }
    // 本地匹配失败或置信度低，需要AI
    return true;
  }
  
  // 图片模式：必须用AI
  if (image) {
    return true;
  }
  
  return false;
}

/**
 * 判断图片是否可能是水/饮料
 * @returns {boolean}
 */
function mightBeWater(imageBase64) {
  // 简单判断：如果图片很小，可能是简单的瓶装水
  // 实际应用中可以用更复杂的逻辑
  return false;
}

/**
 * POST /api/food/recognize
 * 食物识别 - 优化执行路径
 */
router.post('/recognize', async (req, res) => {
  try {
    const { image, text } = req.body;

    // ========== 路径1: 文本模式（本地优先）==========
    if (text && !image) {
      console.log('📝 文本模式，尝试本地匹配...');
      
      // 检查缓存
      const cacheKey = `text:${text}`;
      if (searchCache.has(cacheKey)) {
        console.log('✅ 命中缓存');
        return res.json(searchCache.get(cacheKey));
      }
      
      // 本地智能匹配
      const results = smartMatch.smartRecognize(text);
      
      if (results.length > 0 && results[0].confidence >= 0.85) {
        const response = {
          success: true,
          useAI: false,
          aiType: 'smart-match',
          foods: formatResults(results),
          message: `本地匹配成功 (${results[0].matchType})`,
          savedTokens: true,
        };
        
        // 存入缓存
        searchCache.set(cacheKey, response);
        setTimeout(() => searchCache.delete(cacheKey), CACHE_DURATION);
        
        return res.json(response);
      }
      
      // 本地匹配失败，需要AI（但文本模式通常不需要）
      return res.json({
        success: true,
        useAI: false,
        aiType: 'smart-match',
        foods: formatResults(results),
        message: '本地匹配完成',
        confidence: results[0]?.confidence || 0,
      });
    }

    // ========== 路径2: 图片模式（AI识别）==========
    if (!image) {
      return res.status(400).json({ error: '请提供图片数据或食物描述文本' });
    }

    if (!aiService || aiType !== 'bailian') {
      return res.json({
        success: false,
        error: 'AI服务未配置',
        foods: [],
        needTextInput: true,
        message: '请输入食物名称进行识别',
      });
    }

    console.log('🚀 图片模式，调用AI识别...');
    console.log('📏 图片大小:', Math.round(image.length / 1024), 'KB');

    try {
      // 调用AI识别
      const recognizedFoods = await aiService.recognizeFood(image);
      console.log('🎯 AI识别结果:', recognizedFoods.length, '项');

      // 处理结果
      const results = processAIResults(recognizedFoods);

      return res.json({
        success: true,
        useAI: true,
        aiType: 'bailian',
        foods: results,
        message: results[0]?.matchType === 'ai-packaging' 
          ? 'AI从包装提取营养信息' 
          : 'AI识别成功',
      });

    } catch (aiError) {
      console.error('❌ AI识别失败:', aiError.message);
      return res.json({
        success: false,
        error: 'AI识别失败: ' + aiError.message,
        foods: [],
      });
    }

  } catch (error) {
    console.error('食物识别错误:', error);
    res.status(500).json({ error: '识别失败，请重试' });
  }
});

/**
 * 处理AI识别结果
 */
function processAIResults(recognizedFoods) {
  return recognizedFoods.map(item => {
    console.log('📦 处理:', item.keyword || item.name);
    
    // 特殊处理：水产品
    const waterKeywords = ['水', '纯净水', '矿泉水', '农夫山泉', '怡宝', '娃哈哈', '冰露', '苏打水', '气泡水'];
    const isWater = waterKeywords.some(kw => 
      (item.name && item.name.includes(kw)) || 
      (item.keyword && item.keyword.includes(kw)) ||
      (item.brand && item.brand.includes(kw))
    );
    
    if (isWater) {
      console.log('💧 检测到水产品');
      return createWaterResult(item);
    }
    
    // AI返回了营养信息，直接使用
    if (item.nutrition && (item.nutrition.calories > 0 || item.source === 'packaging')) {
      return createAIResult(item);
    }
    
    // 尝试本地数据库匹配
    const localNutrition = findNutrition(item.keyword || item.name);
    if (localNutrition && !localNutrition.isEstimated) {
      return createLocalResult(item, localNutrition);
    }
    
    // 使用AI估算结果
    return createAIResult(item);
  });
}

/**
 * 创建水产品结果
 */
function createWaterResult(item) {
  return {
    name: item.name || item.keyword || '纯净水',
    category: item.category || '饮料',
    confidence: item.score || 0.98,
    brand: item.brand || '',
    weight_grams: item.weight_grams || 550,
    size_description: item.size_description || '',
    nutrition: {
      calories: 0, calories_per_100g: 0, protein: 0, fat: 0, carbs: 0, fiber: 0,
      sodium: 0, potassium: 0, calcium: 0, magnesium: 0, phosphorus: 0,
      iron: 0, zinc: 0, selenium: 0, copper: 0,
      vitaminA: 0, vitaminB1: 0, vitaminB2: 0, vitaminB3: 0,
      vitaminC: 0, vitaminE: 0, folate: 0,
      unit: `${item.weight_grams || 550}mL`,
    },
    matchType: 'ai-packaging',
    isEstimated: false,
    data_quality: 'high',
    notes: '纯净水，无营养成分',
  };
}

/**
 * 创建AI结果
 */
function createAIResult(item) {
  const nutrition = item.nutrition || {};
  return {
    name: item.keyword || item.name,
    category: item.category || '其他',
    confidence: item.score || 0.85,
    brand: item.brand || '',
    weight_grams: item.weight_grams || 100,
    size_description: item.size_description || '',
    nutrition: {
      calories: nutrition.calories || 0,
      calories_per_100g: nutrition.calories_per_100g || 0,
      protein: nutrition.protein || 0,
      fat: nutrition.fat || 0,
      carbs: nutrition.carbs || 0,
      fiber: nutrition.fiber || 0,
      sodium: nutrition.sodium || 0,
      potassium: nutrition.potassium || 0,
      calcium: nutrition.calcium || 0,
      magnesium: nutrition.magnesium || 0,
      phosphorus: nutrition.phosphorus || 0,
      iron: nutrition.iron || 0,
      zinc: nutrition.zinc || 0,
      selenium: nutrition.selenium || 0,
      copper: nutrition.copper || 0,
      vitaminA: nutrition.vitaminA || 0,
      vitaminB1: nutrition.vitaminB1 || 0,
      vitaminB2: nutrition.vitaminB2 || 0,
      vitaminB3: nutrition.vitaminB3 || 0,
      vitaminC: nutrition.vitaminC || 0,
      vitaminE: nutrition.vitaminE || 0,
      folate: nutrition.folate || 0,
      unit: item.weight_grams ? `${item.weight_grams}g` : '100g',
    },
    matchType: item.source === 'packaging' ? 'ai-packaging' : 'ai-estimation',
    isEstimated: item.source !== 'packaging',
    data_quality: item.data_quality || 'medium',
    notes: item.notes || '',
  };
}

/**
 * 创建本地匹配结果
 */
function createLocalResult(item, nutrition) {
  return {
    name: nutrition.name,
    category: nutrition.category || '其他',
    confidence: item.score || 0.85,
    weight_grams: item.weight_grams || 100,
    nutrition: {
      calories: nutrition.calories,
      calories_per_100g: nutrition.calories,
      protein: nutrition.protein,
      fat: nutrition.fat,
      carbs: nutrition.carbs,
      fiber: nutrition.fiber,
      sodium: nutrition.sodium,
      potassium: nutrition.potassium || 0,
      calcium: nutrition.calcium,
      magnesium: nutrition.magnesium || 0,
      phosphorus: nutrition.phosphorus || 0,
      iron: nutrition.iron,
      zinc: nutrition.zinc || 0,
      selenium: nutrition.selenium || 0,
      copper: nutrition.copper || 0,
      vitaminA: nutrition.vitaminA,
      vitaminB1: nutrition.vitaminB1 || 0,
      vitaminB2: nutrition.vitaminB2 || 0,
      vitaminB3: nutrition.vitaminB3 || 0,
      vitaminC: nutrition.vitaminC,
      vitaminE: nutrition.vitaminE || 0,
      folate: nutrition.folate || 0,
      unit: '100g',
    },
    matchType: 'ai-local',
    isEstimated: false,
    data_quality: 'high',
    notes: '本地数据库匹配',
  };
}

/**
 * 格式化本地匹配结果
 */
function formatResults(results) {
  return results.map(r => ({
    name: r.name,
    confidence: r.confidence,
    nutrition: {
      calories: r.nutrition.calories,
      protein: r.nutrition.protein,
      carbs: r.nutrition.carbs,
      fat: r.nutrition.fat,
      fiber: r.nutrition.fiber,
      sodium: r.nutrition.sodium || 0,
      potassium: r.nutrition.potassium || 0,
      calcium: r.nutrition.calcium || 0,
      iron: r.nutrition.iron || 0,
      vitaminA: r.nutrition.vitaminA || 0,
      vitaminC: r.nutrition.vitaminC || 0,
      unit: '100g',
    },
    matchType: r.matchType,
    isEstimated: r.nutrition.isEstimated || false,
  }));
}

/**
 * POST /api/food/recognize-text
 * 文本识别（纯本地，不消耗token）
 */
router.post('/recognize-text', (req, res) => {
  try {
    const { text } = req.body;
    if (!text) {
      return res.status(400).json({ error: '请提供食物描述' });
    }

    // 检查缓存
    const cacheKey = `text:${text}`;
    if (searchCache.has(cacheKey)) {
      return res.json(searchCache.get(cacheKey));
    }

    const results = smartMatch.smartRecognize(text);
    const response = {
      success: true,
      useAI: false,
      aiType: 'smart-match',
      foods: formatResults(results),
      message: '本地匹配成功',
      savedTokens: true,
    };

    searchCache.set(cacheKey, response);
    setTimeout(() => searchCache.delete(cacheKey), CACHE_DURATION);

    res.json(response);
  } catch (error) {
    console.error('文本识别错误:', error);
    res.status(500).json({ error: '识别失败' });
  }
});

/**
 * GET /api/food/suggest
 * 自动补全（纯本地）
 */
router.get('/suggest', (req, res) => {
  try {
    const { q } = req.query;
    if (!q || q.length < 1) {
      return res.json({ success: true, suggestions: [] });
    }
    const suggestions = smartMatch.getSuggestions(q);
    res.json({ success: true, suggestions });
  } catch (error) {
    res.status(500).json({ error: '获取失败' });
  }
});

/**
 * GET /api/food/search
 * 搜索食物（纯本地）
 */
router.get('/search', (req, res) => {
  const { name } = req.query;
  if (!name) {
    return res.status(400).json({ error: '请提供食物名称' });
  }
  const nutrition = findNutrition(name);
  res.json({ success: true, food: nutrition });
});

/**
 * GET /api/food/list
 * 获取所有食物（纯本地）
 */
router.get('/list', (req, res) => {
  const foods = getAllFoods();
  res.json({ success: true, total: foods.length, foods });
});

/**
 * GET /api/food/categories
 * 获取类别（纯本地）
 */
router.get('/categories', (req, res) => {
  const categories = getCategories();
  res.json({ success: true, categories });
});

/**
 * GET /api/food/category/:name
 * 获取某个品类的食物列表
 */
router.get('/category/:name', (req, res) => {
  const { name } = req.params;
  const foods = getFoodsByCategory(name);
  
  // 返回前10个最常见食物作为示例
  const topFoods = foods.slice(0, 10);
  
  res.json({ 
    success: true, 
    category: name,
    total: foods.length,
    topFoods,
    allFoods: foods 
  });
});

/**
 * GET /api/food/barcode
 * 条形码查询（纯本地）
 */
router.get('/barcode', (req, res) => {
  const { code } = req.query;
  if (!code) {
    return res.status(400).json({ error: '请提供条形码' });
  }

  const barcodeDB = require('../data/barcode-db');
  const product = barcodeDB.findByBarcode(code);
  
  if (product) {
    res.json({
      success: true,
      source: 'local',
      product: { ...product, barcode: code, unit: '100g' },
      savedTokens: true,
    });
  } else {
    res.json({
      success: false,
      error: '未找到该条形码',
      barcode: code,
      needManualInput: true,
    });
  }
});

/**
 * GET /api/food/ai-status
 * AI状态
 */
router.get('/ai-status', (req, res) => {
  res.json({
    success: true,
    aiType,
    hasApiKey: !!process.env.BAILIAN_API_KEY,
    message: aiType === 'bailian' ? '百炼AI已配置' : '使用本地匹配',
  });
});

/**
 * POST /api/food/set-api-key
 * 设置API Key
 */
router.post('/set-api-key', (req, res) => {
  try {
    const { apiKey } = req.body;
    if (!apiKey) {
      return res.status(400).json({ error: '请提供API Key' });
    }

    process.env.BAILIAN_API_KEY = apiKey;
    
    try {
      const bailian = require('../services/bailian-ai');
      bailian.setApiKey(apiKey);
      aiService = bailian;
      aiType = 'bailian';
      res.json({ success: true, message: 'API Key设置成功', aiType: 'bailian' });
    } catch (e) {
      res.status(500).json({ error: '加载AI服务失败' });
    }
  } catch (error) {
    res.status(500).json({ error: '设置失败' });
  }
});

module.exports = router;

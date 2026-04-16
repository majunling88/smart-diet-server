/**
 * 食物识别路由
 */

const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

// 导入营养数据库和智能匹配服务
const { NUTRITION_DB, findNutrition, getAllFoods, getCategories } = require('../data/nutrition-db');
const smartMatch = require('../services/smart-match');

// 搜索缓存
const searchCache = new Map();
const CACHE_DURATION = 5 * 60 * 1000; // 5分钟

// AI服务优先级：百炼 > 小艺 > 百度
let aiService = null;
let aiType = 'none';

// 尝试加载百炼AI
try {
  const bailian = require('../services/bailian-ai');
  // 检查是否配置了API Key
  if (process.env.BAILIAN_API_KEY) {
    aiService = bailian;
    aiType = 'bailian';
    console.log('✅ 使用百炼AI服务');
  }
} catch (e) {
  console.log('⚠️ 百炼AI不可用');
}

// 如果百炼不可用，尝试小艺AI
if (!aiService) {
  try {
    aiService = require('../services/xiaoyi-ai');
    aiType = 'xiaoyi';
    console.log('✅ 使用小艺AI服务');
  } catch (e) {
    console.log('⚠️ 小艺AI不可用');
  }
}

// 如果都不可用，使用智能匹配
if (!aiService) {
  console.log('ℹ️ 使用本地智能匹配服务');
}

console.log(`📊 已加载 ${Object.keys(NUTRITION_DB).length} 种食物营养数据`);

/**
 * POST /api/food/recognize
 * 食物图片识别（智能匹配模式）
 * 
 * 请求体：{ image: "base64编码的图片" } 或 { text: "食物描述" }
 * 响应：{ foods: [...], nutrition: {...} }
 */
router.post('/recognize', async (req, res) => {
  try {
    const { image, text } = req.body;

    // 文本识别模式（优先）
    if (text) {
      const results = smartMatch.smartRecognize(text);
      
      return res.json({
        success: true,
        useAI: false,
        aiType: 'smart-match',
        foods: results.map(r => ({
          name: r.name,
          confidence: r.confidence,
          nutrition: {
            calories: r.nutrition.calories,
            protein: r.nutrition.protein,
            carbs: r.nutrition.carbs,
            fat: r.nutrition.fat,
            fiber: r.nutrition.fiber,
            unit: '100g',
          },
          matchType: r.matchType,
          isEstimated: r.nutrition.isEstimated || false,
        })),
        message: `智能匹配成功 (${results[0]?.matchType || 'unknown'})`,
      });
    }

    // 图片识别模式（需要AI，暂时返回提示）
    if (!image) {
      return res.status(400).json({ error: '请提供图片数据或食物描述文本' });
    }

    // 调用百炼AI识别图片
    if (aiService && aiType === 'bailian') {
      console.log('🚀 开始AI图片识别...');
      console.log('📏 图片Base64长度:', image ? image.length : 0);
      
      try {
        const recognizedFoods = await aiService.recognizeFood(image);
        console.log('🎯 AI识别结果:', JSON.stringify(recognizedFoods, null, 2));
        
        // 处理识别结果
        const results = recognizedFoods.map(item => {
          console.log('📦 处理识别项:', item.keyword || item.name);
          
          // 如果AI已经返回了营养信息（从包装提取），直接使用
          if (item.nutrition && item.nutrition.calories > 0) {
            console.log('✅ 使用AI提取的营养信息:', item.nutrition);
            return {
              name: item.keyword || item.name,
              confidence: item.score || 0.85,
              brand: item.brand || '',
              weight_grams: item.weight_grams || 100,
              nutrition: {
                calories: item.nutrition.calories,
                calories_per_100g: item.nutrition.calories_per_100g || item.nutrition.calories,
                protein: item.nutrition.protein || 0,
                carbs: item.nutrition.carbs || 0,
                fat: item.nutrition.fat || 0,
                fiber: 0,
                unit: item.weight_grams ? `${item.weight_grams}g包装` : '100g',
              },
              matchType: item.source === 'packaging' ? 'ai-packaging' : 
                         item.source === 'database' ? 'ai-database' : 'ai-estimation',
              isEstimated: item.source !== 'packaging',
              data_quality: item.data_quality || 'medium',
              notes: item.notes || '',
            };
          }
          
          // 否则从本地数据库匹配
          console.log('📚 从本地数据库匹配...');
          const nutrition = findNutrition(item.keyword || item.name);
          return {
            name: nutrition.name,
            confidence: item.score || 0.85,
            nutrition: {
              calories: nutrition.calories,
              protein: nutrition.protein,
              carbs: nutrition.carbs,
              fat: nutrition.fat,
              fiber: nutrition.fiber,
              unit: '100g',
            },
            matchType: 'ai-local',
            isEstimated: nutrition.isEstimated || false,
          };
        });

        console.log('✅ 最终返回结果:', JSON.stringify(results, null, 2));
        return res.json({
          success: true,
          useAI: true,
          aiType: 'bailian',
          foods: results,
          message: results[0]?.matchType === 'ai-packaging' 
            ? 'AI从包装提取营养信息成功' 
            : 'AI识别成功',
        });
      } catch (aiError) {
        console.error('❌ 百炼AI识别失败:', aiError.message);
        console.error('📄 错误堆栈:', aiError.stack);
        return res.json({
          success: false,
          error: 'AI识别失败: ' + aiError.message,
          foods: [],
        });
      }
    }

    // 没有AI服务，返回提示
    res.json({
      success: true,
      useAI: false,
      needTextInput: true,
      foods: [],
      message: '请输入食物名称进行识别',
    });

  } catch (error) {
    console.error('食物识别错误:', error);
    res.status(500).json({ error: '识别失败，请重试' });
  }
});

/**
 * POST /api/food/recognize-text
 * 文本识别食物（核心接口）
 * 
 * 请求体：{ text: "米饭 红烧肉 炒青菜" }
 */
router.post('/recognize-text', (req, res) => {
  try {
    const { text } = req.body;

    if (!text) {
      return res.status(400).json({ error: '请提供食物描述' });
    }

    const results = smartMatch.smartRecognize(text);
    
    res.json({
      success: true,
      useAI: false,
      aiType: 'smart-match',
      foods: results.map(r => ({
        name: r.name,
        confidence: r.confidence,
        nutrition: {
          calories: r.nutrition.calories,
          protein: r.nutrition.protein,
          carbs: r.nutrition.carbs,
          fat: r.nutrition.fat,
          fiber: r.nutrition.fiber,
          unit: '100g',
        },
        matchType: r.matchType,
        isEstimated: r.nutrition.isEstimated || false,
      })),
      message: `智能匹配成功`,
    });

  } catch (error) {
    console.error('文本识别错误:', error);
    res.status(500).json({ error: '识别失败，请重试' });
  }
});

/**
 * GET /api/food/suggest
 * 获取食物建议（自动补全）
 * 
 * 参数：?q=米
 */
router.get('/suggest', (req, res) => {
  try {
    const { q } = req.query;

    if (!q || q.length < 1) {
      return res.json({ success: true, suggestions: [] });
    }

    const suggestions = smartMatch.getSuggestions(q);
    
    res.json({
      success: true,
      suggestions,
    });

  } catch (error) {
    console.error('获取建议失败:', error);
    res.status(500).json({ error: '获取失败' });
  }
});

/**
 * POST /api/food/recognize-direct
 * 接收小艺直连识别的结果
 * 
 * 请求体：{ foods: [{name: "米饭", confidence: 0.95}] }
 */
router.post('/recognize-direct', (req, res) => {
  try {
    const { foods } = req.body;

    if (!foods || !Array.isArray(foods)) {
      return res.status(400).json({ error: '请提供识别结果' });
    }

    // 匹配营养数据
    const results = foods.map(item => {
      const nutrition = findNutrition(item.name || item.keyword);
      return {
        name: nutrition.name,
        confidence: item.confidence || item.score || 0.85,
        nutrition: {
          calories: nutrition.calories,
          protein: nutrition.protein,
          carbs: nutrition.carbs,
          fat: nutrition.fat,
          unit: nutrition.unit,
        },
        isEstimated: nutrition.isEstimated || false,
      };
    });

    res.json({
      success: true,
      useAI: true,
      aiType: 'xiaoyi-direct',
      foods: results,
      message: '小艺直连识别成功',
    });

  } catch (error) {
    console.error('处理直连结果错误:', error);
    res.status(500).json({ error: '处理失败，请重试' });
  }
});

/**
 * GET /api/food/search
 * 搜索食物营养信息
 * 
 * 参数：?name=米饭
 */
router.get('/search', (req, res) => {
  const { name } = req.query;

  if (!name) {
    return res.status(400).json({ error: '请提供食物名称' });
  }

  const nutrition = findNutrition(name);
  res.json({
    success: true,
    food: nutrition,
  });
});

/**
 * GET /api/food/list
 * 获取所有食物列表
 */
router.get('/list', (req, res) => {
  const foods = getAllFoods();

  res.json({
    success: true,
    total: foods.length,
    foods,
  });
});

/**
 * GET /api/food/categories
 * 获取所有食物类别
 */
router.get('/categories', (req, res) => {
  const categories = getCategories();

  res.json({
    success: true,
    categories,
  });
});

/**
 * GET /api/food/barcode
 * 条形码查询产品信息
 * 
 * 参数：?code=6901234567890
 */
router.get('/barcode', async (req, res) => {
  const { code } = req.query;

  if (!code) {
    return res.status(400).json({ error: '请提供条形码' });
  }

  // 导入条形码数据库
  const barcodeDB = require('../data/barcode-db');
  let product = barcodeDB.findByBarcode(code);
  
  if (product) {
    // 本地数据库找到
    res.json({
      success: true,
      source: 'local',
      product: {
        ...product,
        barcode: code,
        unit: '100g',
      },
    });
  } else {
    // 本地没有，尝试外部API查询
    try {
      const externalProduct = await queryExternalBarcodeAPI(code);
      
      if (externalProduct) {
        res.json({
          success: true,
          source: 'external',
          product: externalProduct,
        });
      } else {
        // 外部也没有，返回手动添加提示
        res.json({
          success: false,
          error: '未找到该条形码对应的产品',
          barcode: code,
          message: `当前数据库包含 ${barcodeDB.getCount()} 种产品，请手动添加`,
          needManualInput: true,
        });
      }
    } catch (error) {
      console.error('外部API查询失败:', error.message);
      res.json({
        success: false,
        error: '查询失败，请手动添加',
        barcode: code,
        needManualInput: true,
      });
    }
  }
});

/**
 * 查询外部条码API
 * 可以接入多个数据源
 */
async function queryExternalBarcodeAPI(code) {
  // 方案1：使用开放条码数据库（如 upcitemdb.com）
  // 注意：这些API可能有调用限制
  
  const axios = require('axios');
  
  // 尝试多个数据源
  const sources = [
    // 数据源1：UPC Item DB（免费，有限制）
    {
      name: 'upcitemdb',
      url: `https://api.upcitemdb.com/prod/trial/lookup`,
      method: 'GET',
      params: { upc: code },
      parser: (data) => {
        if (data && data.items && data.items.length > 0) {
          const item = data.items[0];
          return {
            name: item.title || item.description || '未知产品',
            barcode: code,
            calories: 0, // 外部API通常没有营养数据
            protein: 0,
            carbs: 0,
            fat: 0,
            brand: item.brand || '',
            unit: '100g',
            source: 'upcitemdb',
          };
        }
        return null;
      }
    },
    // 可以添加更多数据源...
  ];
  
  for (const source of sources) {
    try {
      const response = await axios({
        method: source.method,
        url: source.url,
        params: source.params,
        timeout: 5000,
      });
      
      const product = source.parser(response.data);
      if (product) {
        console.log(`从 ${source.name} 查询到产品:`, product.name);
        return product;
      }
    } catch (error) {
      console.log(`${source.name} 查询失败:`, error.message);
      continue;
    }
  }
  
  return null;
}

/**
 * POST /api/food/set-api-key
 * 设置百炼API Key
 * 
 * 请求体：{ apiKey: "sk-xxx" }
 */
router.post('/set-api-key', (req, res) => {
  try {
    const { apiKey } = req.body;

    if (!apiKey) {
      return res.status(400).json({ error: '请提供API Key' });
    }

    // 设置API Key
    process.env.BAILIAN_API_KEY = apiKey;
    
    // 重新加载百炼AI服务
    try {
      const bailian = require('../services/bailian-ai');
      bailian.setApiKey(apiKey);
      aiService = bailian;
      aiType = 'bailian';
      
      res.json({
        success: true,
        message: '百炼API Key设置成功',
        aiType: 'bailian',
      });
    } catch (e) {
      res.status(500).json({ error: '加载百炼AI服务失败' });
    }

  } catch (error) {
    console.error('设置API Key失败:', error);
    res.status(500).json({ error: '设置失败' });
  }
});

/**
 * GET /api/food/ai-status
 * 获取当前AI服务状态
 */
router.get('/ai-status', (req, res) => {
  res.json({
    success: true,
    aiType,
    hasApiKey: !!process.env.BAILIAN_API_KEY,
    message: aiType === 'bailian' ? '百炼AI已配置' : 
             aiType === 'xiaoyi' ? '使用小艺AI' : 
             '使用本地智能匹配',
  });
});

module.exports = router;

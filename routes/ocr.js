/**
 * OCR识别路由（营养成分表识别）
 */

const express = require('express');
const router = express.Router();

// 优先使用小艺AI
let aiService;
try {
  aiService = require('../services/xiaoyi-ai');
} catch (e) {
  aiService = require('../services/baidu-ai');
}

/**
 * POST /api/ocr/recognize
 * 识别营养成分表
 * 
 * 请求体：{ image: "base64编码的图片" }
 * 响应：{ nutrition: {...}, rawText: "..." }
 */
router.post('/recognize', async (req, res) => {
  try {
    const { image } = req.body;

    if (!image) {
      return res.status(400).json({ error: '请提供图片数据' });
    }

    // 调用OCR识别
    let nutrition = null;
    let useAI = false;
    let aiType = 'xiaoyi';

    try {
      nutrition = await aiService.recognizeNutritionLabel(image);
      useAI = true;
      aiType = aiService === require('../services/xiaoyi-ai') ? 'xiaoyi' : 'baidu';
    } catch (aiError) {
      console.log('OCR识别失败，使用模拟数据:', aiError.message);
      // AI不可用时返回模拟数据
      nutrition = {
        name: '示例食品',
        servingSize: '100g',
        calories: 150,
        protein: 5.2,
        carbs: 25.0,
        fat: 3.5,
        fiber: 2.0,
        sodium: 200,
        rawText: '营养成分表\n每100g含量\n能量：628kJ (150kcal)\n蛋白质：5.2g\n脂肪：3.5g\n碳水化合物：25.0g\n膳食纤维：2.0g\n钠：200mg',
      };
    }

    res.json({
      success: true,
      useAI,
      aiType,
      nutrition,
      message: useAI 
        ? (aiType === 'xiaoyi' ? '小艺OCR识别成功' : '百度OCR识别成功')
        : '使用模拟数据（AI服务未配置）',
    });

  } catch (error) {
    console.error('OCR识别错误:', error);
    res.status(500).json({ error: '识别失败，请重试' });
  }
});

/**
 * POST /api/ocr/save
 * 保存识别的营养数据到食物库
 * 
 * 请求体：{ name, calories, protein, carbs, fat, ... }
 */
router.post('/save', (req, res) => {
  try {
    const { name, calories, protein, carbs, fat, fiber, sodium, servingSize } = req.body;

    if (!name || calories === undefined) {
      return res.status(400).json({ error: '请提供食品名称和热量数据' });
    }

    // 这里应该保存到数据库，Demo中只返回成功
    const savedFood = {
      id: Date.now(),
      name,
      calories: parseFloat(calories),
      protein: parseFloat(protein) || 0,
      carbs: parseFloat(carbs) || 0,
      fat: parseFloat(fat) || 0,
      fiber: parseFloat(fiber) || 0,
      sodium: parseFloat(sodium) || 0,
      servingSize: servingSize || '100g',
      createdAt: new Date().toISOString(),
    };

    res.json({
      success: true,
      message: '保存成功',
      food: savedFood,
    });

  } catch (error) {
    console.error('保存失败:', error);
    res.status(500).json({ error: '保存失败，请重试' });
  }
});

module.exports = router;

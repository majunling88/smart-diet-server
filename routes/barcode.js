const express = require('express');
const router = express.Router();
const barcodeService = require('../services/barcode-service');

/**
 * POST /api/barcode/lookup
 * 根据条形码查询营养信息
 * 
 * 请求体：{ barcode: "6901234567890" }
 */
router.post('/lookup', async (req, res) => {
  try {
    const { barcode } = req.body;

    if (!barcode) {
      return res.status(400).json({ error: '请提供条形码' });
    }

    // 清理条形码（去除空格等）
    const cleanBarcode = barcode.trim();

    const result = await barcodeService.lookupBarcode(cleanBarcode);

    if (result.success) {
      res.json({
        success: true,
        barcode: cleanBarcode,
        ...result.data,
      });
    } else {
      res.json({
        success: false,
        error: result.error,
        barcode: cleanBarcode,
      });
    }

  } catch (error) {
    console.error('条形码查询失败:', error);
    res.status(500).json({ error: '查询失败，请重试' });
  }
});

/**
 * POST /api/barcode/add
 * 添加自定义条形码数据
 * 
 * 请求体：{ barcode: "xxx", name: "xxx", calories: 100, ... }
 */
router.post('/add', (req, res) => {
  try {
    const { barcode, ...data } = req.body;

    if (!barcode || !data.name) {
      return res.status(400).json({ error: '请提供条形码和商品名称' });
    }

    const result = barcodeService.addBarcodeData(barcode, data);

    res.json({
      success: true,
      message: '添加成功',
      data: result,
    });

  } catch (error) {
    console.error('添加条形码失败:', error);
    res.status(500).json({ error: '添加失败' });
  }
});

/**
 * GET /api/barcode/list
 * 获取所有本地条形码数据
 */
router.get('/list', (req, res) => {
  const list = barcodeService.getAllBarcodes();

  res.json({
    success: true,
    total: list.length,
    data: list,
  });
});

module.exports = router;

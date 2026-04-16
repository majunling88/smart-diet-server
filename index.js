/**
 * 智能饮食追踪 - 后端服务
 * 核心功能：食物识别、OCR识别、营养数据查询
 */

const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');

const foodRoute = require('./routes/food');
const ocrRoute = require('./routes/ocr');

const app = express();
const PORT = 3000;

// 中间件
app.use(cors());
app.use(express.json({ limit: '50mb' })); // 增大限制，支持大图片
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// 文件上传配置
const upload = multer({ 
  dest: 'uploads/',
  limits: { fileSize: 5 * 1024 * 1024 } // 5MB限制
});

// 路由
app.use('/api/food', foodRoute);
app.use('/api/ocr', ocrRoute);

// 健康检查
app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: '智能饮食追踪服务运行中' });
});

// 启动服务
app.listen(PORT, () => {
  console.log(`🚀 服务已启动: http://localhost:${PORT}`);
  console.log(`📸 食物识别接口: POST /api/food/recognize`);
  console.log(`📝 OCR识别接口: POST /api/ocr/recognize`);
});

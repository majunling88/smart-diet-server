/**
 * 条形码服务
 * 支持扫描商品条形码获取营养信息
 */

const axios = require('axios');

// 条形码数据库（本地缓存）
const BARCODE_DB = {
  // 常见食品条形码数据
  '6901234567890': {
    name: '康师傅红烧牛肉面',
    brand: '康师傅',
    servingSize: '100g',
    calories: 472,
    protein: 9.5,
    carbs: 62.5,
    fat: 18.5,
    fiber: 2.1,
    sodium: 1800,
  },
  '6921168509256': {
    name: '农夫山泉矿泉水',
    brand: '农夫山泉',
    servingSize: '550ml',
    calories: 0,
    protein: 0,
    carbs: 0,
    fat: 0,
    fiber: 0,
    sodium: 5,
  },
  '6901939621103': {
    name: '旺旺雪饼',
    brand: '旺旺',
    servingSize: '100g',
    calories: 485,
    protein: 6.2,
    carbs: 68.5,
    fat: 20.1,
    fiber: 1.5,
    sodium: 320,
  },
  '6902083891089': {
    name: '统一冰红茶',
    brand: '统一',
    servingSize: '500ml',
    calories: 180,
    protein: 0,
    carbs: 45,
    fat: 0,
    fiber: 0,
    sodium: 25,
  },
  '6920237111001': {
    name: '蒙牛纯牛奶',
    brand: '蒙牛',
    servingSize: '250ml',
    calories: 135,
    protein: 7.5,
    carbs: 12.5,
    fat: 7.5,
    fiber: 0,
    sodium: 100,
  },
  '6903148040330': {
    name: '奥利奥原味饼干',
    brand: '奥利奥',
    servingSize: '100g',
    calories: 480,
    protein: 5.5,
    carbs: 67.5,
    fat: 21.5,
    fiber: 2.5,
    sodium: 380,
  },
  '6901939658963': {
    name: '旺仔牛奶',
    brand: '旺旺',
    servingSize: '245ml',
    calories: 165,
    protein: 6.5,
    carbs: 25,
    fat: 5,
    fiber: 0,
    sodium: 85,
  },
  '6911988006521': {
    name: '可口可乐',
    brand: '可口可乐',
    servingSize: '330ml',
    calories: 139,
    protein: 0,
    carbs: 35,
    fat: 0,
    fiber: 0,
    sodium: 12,
  },
  '6924187221089': {
    name: '乐事薯片原味',
    brand: '乐事',
    servingSize: '100g',
    calories: 536,
    protein: 6.2,
    carbs: 52.5,
    fat: 34.5,
    fiber: 4.5,
    sodium: 520,
  },
  '6908566100018': {
    name: '三只松鼠坚果',
    brand: '三只松鼠',
    servingSize: '100g',
    calories: 580,
    protein: 18.5,
    carbs: 22.5,
    fat: 48.5,
    fiber: 8.5,
    sodium: 180,
  },
};

/**
 * 根据条形码查询营养信息
 * @param {string} barcode - 条形码
 * @returns {Promise<Object>} 营养信息
 */
async function lookupBarcode(barcode) {
  // 1. 先查本地数据库
  if (BARCODE_DB[barcode]) {
    return {
      success: true,
      source: 'local',
      data: BARCODE_DB[barcode],
    };
  }

  // 2. 调用在线API（可选）
  try {
    // 可以接入开放食品数据库API
    // 例如：Open Food Facts、中国商品信息服务平台等
    const result = await queryOnlineDatabase(barcode);
    if (result) {
      // 缓存到本地
      BARCODE_DB[barcode] = result;
      return {
        success: true,
        source: 'online',
        data: result,
      };
    }
  } catch (error) {
    console.log('在线查询失败:', error.message);
  }

  // 3. 未找到
  return {
    success: false,
    error: '未找到该商品信息',
    barcode,
  };
}

/**
 * 在线查询条形码
 * 支持多个数据源：
 * 1. Open Food Facts（国际商品）
 * 2. 条码通API（中国商品）
 * 3. 心知天气条码API（中国商品）
 */
async function queryOnlineDatabase(barcode) {
  // 方案1: 条码通API（推荐，中国商品覆盖好）
  try {
    const result = await queryBarcodeTong(barcode);
    if (result) return result;
  } catch (e) {
    console.log('条码通查询失败:', e.message);
  }

  // 方案2: Open Food Facts（国际商品）
  try {
    const result = await queryOpenFoodFacts(barcode);
    if (result) return result;
  } catch (e) {
    console.log('Open Food Facts查询失败:', e.message);
  }

  return null;
}

/**
 * 条码通API查询
 * 官网: https://www.maitaobao.com/
 * 免费额度: 100次/天
 */
async function queryBarcodeTong(barcode) {
  // 条码通API（需要注册获取key，这里使用演示模式）
  // 实际使用时请替换为你的API Key
  const API_KEY = process.env.BARCODE_API_KEY || '';
  
  if (!API_KEY) {
    // 没有API Key时，使用模拟数据
    return queryMockDatabase(barcode);
  }

  const response = await axios.get(
    `https://api.maitaobao.com/barcode/query`,
    {
      params: {
        barcode: barcode,
        key: API_KEY,
      },
      timeout: 5000,
    }
  );

  if (response.data && response.data.code === 200) {
    const product = response.data.data;
    return {
      name: product.name || product.goods_name,
      brand: product.brand || '',
      servingSize: product.spec || '100g',
      calories: parseInt(product.calorie) || 0,
      protein: parseFloat(product.protein) || 0,
      carbs: parseFloat(product.carbohydrate) || 0,
      fat: parseFloat(product.fat) || 0,
      fiber: parseFloat(product.fiber) || 0,
      sodium: parseInt(product.sodium) || 0,
    };
  }

  return null;
}

/**
 * Open Food Facts API查询
 */
async function queryOpenFoodFacts(barcode) {
  const response = await axios.get(
    `https://world.openfoodfacts.org/api/v0/product/${barcode}.json`,
    { timeout: 5000 }
  );

  if (response.data && response.data.status === 1) {
    const product = response.data.product;
    
    return {
      name: product.product_name_zh || product.product_name || '未知商品',
      brand: product.brands || '',
      servingSize: product.serving_size || '100g',
      calories: Math.round(product.nutriments['energy-kcal_100g'] || 0),
      protein: Math.round((product.nutriments.proteins_100g || 0) * 10) / 10,
      carbs: Math.round((product.nutriments.carbohydrates_100g || 0) * 10) / 10,
      fat: Math.round((product.nutriments.fat_100g || 0) * 10) / 10,
      fiber: Math.round((product.nutriments.fiber_100g || 0) * 10) / 10,
      sodium: Math.round((product.nutriments.sodium_100g || 0) * 1000),
    };
  }

  return null;
}

/**
 * 模拟数据库（常见中国商品）
 * 用于演示和测试
 */
function queryMockDatabase(barcode) {
  // 扩展的中国商品数据库
  const CHINA_PRODUCTS = {
    // 饮料类
    '6911988006521': { name: '可口可乐', brand: '可口可乐', servingSize: '330ml', calories: 139, protein: 0, carbs: 35, fat: 0, fiber: 0, sodium: 12 },
    '6921168509256': { name: '农夫山泉矿泉水', brand: '农夫山泉', servingSize: '550ml', calories: 0, protein: 0, carbs: 0, fat: 0, fiber: 0, sodium: 5 },
    '6902083891089': { name: '统一冰红茶', brand: '统一', servingSize: '500ml', calories: 180, protein: 0, carbs: 45, fat: 0, fiber: 0, sodium: 25 },
    '6901939658963': { name: '旺仔牛奶', brand: '旺旺', servingSize: '245ml', calories: 165, protein: 6.5, carbs: 25, fat: 5, fiber: 0, sodium: 85 },
    '6920237111001': { name: '蒙牛纯牛奶', brand: '蒙牛', servingSize: '250ml', calories: 135, protein: 7.5, carbs: 12.5, fat: 7.5, fiber: 0, sodium: 100 },
    '6903488900019': { name: '伊利纯牛奶', brand: '伊利', servingSize: '250ml', calories: 135, protein: 7.5, carbs: 12.5, fat: 7.5, fiber: 0, sodium: 95 },
    
    // 零食类
    '6901939621103': { name: '旺旺雪饼', brand: '旺旺', servingSize: '100g', calories: 485, protein: 6.2, carbs: 68.5, fat: 20.1, fiber: 1.5, sodium: 320 },
    '6903148040330': { name: '奥利奥原味饼干', brand: '奥利奥', servingSize: '100g', calories: 480, protein: 5.5, carbs: 67.5, fat: 21.5, fiber: 2.5, sodium: 380 },
    '6924187221089': { name: '乐事薯片原味', brand: '乐事', servingSize: '100g', calories: 536, protein: 6.2, carbs: 52.5, fat: 34.5, fiber: 4.5, sodium: 520 },
    '6901234567890': { name: '康师傅红烧牛肉面', brand: '康师傅', servingSize: '100g', calories: 472, protein: 9.5, carbs: 62.5, fat: 18.5, fiber: 2.1, sodium: 1800 },
    
    // 坚果类
    '6908566100018': { name: '三只松鼠坚果', brand: '三只松鼠', servingSize: '100g', calories: 580, protein: 18.5, carbs: 22.5, fat: 48.5, fiber: 8.5, sodium: 180 },
    '6920946600010': { name: '洽洽瓜子', brand: '洽洽', servingSize: '100g', calories: 606, protein: 23.9, carbs: 13.1, fat: 53.4, fiber: 11.8, sodium: 15 },
    
    // 方便食品
    '6920237111087': { name: '康师傅红烧牛肉面（袋装）', brand: '康师傅', servingSize: '103g', calories: 485, protein: 9.8, carbs: 64.2, fat: 19.2, fiber: 2.3, sodium: 1950 },
    '6921168509019': { name: '统一老坛酸菜面', brand: '统一', servingSize: '110g', calories: 495, protein: 10.2, carbs: 65.8, fat: 19.8, fiber: 2.1, sodium: 2100 },
    
    // 乳制品
    '6903488900125': { name: '伊利安慕希酸奶', brand: '伊利', servingSize: '205g', calories: 156, protein: 3.8, carbs: 24.5, fat: 4.5, fiber: 0, sodium: 65 },
    '6920237111155': { name: '蒙牛真果粒', brand: '蒙牛', servingSize: '250g', calories: 175, protein: 4.2, carbs: 28.5, fat: 5.2, fiber: 0.5, sodium: 75 },
    
    // 调味品
    '6902083800105': { name: '海天酱油', brand: '海天', servingSize: '100ml', calories: 63, protein: 6.8, carbs: 4.2, fat: 0.1, fiber: 0, sodium: 5700 },
    '6921168509300': { name: '老干妈辣酱', brand: '老干妈', servingSize: '100g', calories: 578, protein: 6.5, carbs: 18.2, fat: 52.5, fiber: 5.2, sodium: 3500 },
  };

  return CHINA_PRODUCTS[barcode] || null;
}

/**
 * 添加自定义条形码数据
 */
function addBarcodeData(barcode, data) {
  BARCODE_DB[barcode] = {
    name: data.name,
    brand: data.brand || '',
    servingSize: data.servingSize || '100g',
    calories: data.calories || 0,
    protein: data.protein || 0,
    carbs: data.carbs || 0,
    fat: data.fat || 0,
    fiber: data.fiber || 0,
    sodium: data.sodium || 0,
  };
  
  return BARCODE_DB[barcode];
}

/**
 * 获取所有本地条形码数据
 */
function getAllBarcodes() {
  return Object.entries(BARCODE_DB).map(([barcode, data]) => ({
    barcode,
    ...data,
  }));
}

module.exports = {
  lookupBarcode,
  addBarcodeData,
  getAllBarcodes,
};

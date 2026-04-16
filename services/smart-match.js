/**
 * 智能食物识别服务
 * 基于本地数据库的智能匹配，不依赖外部AI
 */

const { NUTRITION_DB, findNutrition } = require('../data/nutrition-db');

// 食物关键词映射表（用于从描述中提取食物名称）
const FOOD_KEYWORDS_MAP = {
  // 主食类
  '饭': ['米饭', '白米饭', '炒饭', '盖饭'],
  '面': ['面条', '炒面', '拉面', '刀削面'],
  '馒头': ['馒头', '花卷'],
  '包子': ['包子', '肉包子', '菜包子'],
  '饺子': ['饺子', '水饺', '煎饺'],
  '粥': ['粥', '白粥', '小米粥'],
  '面包': ['面包', '吐司', '全麦面包'],
  '汉堡': ['汉堡'],
  '披萨': ['披萨'],
  '寿司': ['寿司'],
  
  // 肉类
  '猪肉': ['猪肉', '瘦肉', '五花肉'],
  '牛肉': ['牛肉', '牛排', '牛腩'],
  '羊肉': ['羊肉', '羊排'],
  '鸡肉': ['鸡肉', '鸡胸肉', '鸡腿', '鸡翅'],
  '鸭肉': ['鸭肉', '烤鸭'],
  '排骨': ['排骨'],
  '炸鸡': ['炸鸡', '鸡米花', '鸡块'],
  
  // 海鲜
  '鱼': ['鱼', '鱼肉', '草鱼', '鲤鱼', '鲈鱼', '带鱼'],
  '虾': ['虾', '大虾', '基围虾', '小龙虾'],
  '蟹': ['螃蟹', '大闸蟹'],
  '三文鱼': ['三文鱼'],
  '扇贝': ['扇贝'],
  '生蚝': ['生蚝', '牡蛎'],
  
  // 蛋类
  '鸡蛋': ['鸡蛋', '煎蛋', '荷包蛋', '茶叶蛋'],
  '鸭蛋': ['鸭蛋', '咸鸭蛋'],
  '皮蛋': ['皮蛋', '松花蛋'],
  
  // 豆制品
  '豆腐': ['豆腐', '嫩豆腐', '老豆腐'],
  '豆浆': ['豆浆'],
  '豆干': ['豆腐干'],
  '腐竹': ['腐竹'],
  
  // 蔬菜
  '青菜': ['青菜', '小白菜'],
  '白菜': ['大白菜', '小白菜'],
  '菠菜': ['菠菜'],
  '生菜': ['生菜'],
  '西兰花': ['西兰花'],
  '番茄': ['番茄', '西红柿'],
  '黄瓜': ['黄瓜'],
  '土豆': ['土豆', '马铃薯'],
  '茄子': ['茄子'],
  '辣椒': ['辣椒', '青椒'],
  '蘑菇': ['蘑菇', '香菇', '金针菇'],
  '木耳': ['木耳'],
  
  // 水果
  '苹果': ['苹果', '红富士'],
  '香蕉': ['香蕉'],
  '橙子': ['橙子'],
  '橘子': ['橘子', '柑橘'],
  '西瓜': ['西瓜'],
  '葡萄': ['葡萄', '提子'],
  '草莓': ['草莓'],
  '芒果': ['芒果'],
  '菠萝': ['菠萝', '凤梨'],
  '梨': ['梨', '雪梨'],
  '桃': ['桃子', '水蜜桃'],
  '樱桃': ['樱桃', '车厘子'],
  '猕猴桃': ['猕猴桃', '奇异果'],
  '火龙果': ['火龙果'],
  '榴莲': ['榴莲'],
  
  // 坚果
  '花生': ['花生'],
  '核桃': ['核桃'],
  '杏仁': ['杏仁'],
  '腰果': ['腰果'],
  
  // 乳制品
  '牛奶': ['牛奶', '全脂牛奶'],
  '酸奶': ['酸奶'],
  '奶酪': ['奶酪', '芝士'],
  
  // 饮料
  '可乐': ['可乐'],
  '奶茶': ['奶茶', '珍珠奶茶'],
  '咖啡': ['咖啡', '黑咖啡', '拿铁'],
  '茶': ['茶', '绿茶', '红茶'],
  '果汁': ['果汁', '橙汁', '苹果汁'],
  
  // 零食
  '蛋糕': ['蛋糕', '奶油蛋糕'],
  '巧克力': ['巧克力', '黑巧克力'],
  '冰淇淋': ['冰淇淋'],
  '薯片': ['薯片'],
  '饼干': ['饼干', '曲奇'],
  
  // 快餐
  '麻辣烫': ['麻辣烫'],
  '火锅': ['火锅'],
  '烧烤': ['烧烤', '烤串'],
  '沙拉': ['沙拉', '凯撒沙拉'],
  '凉皮': ['凉皮'],
  '煎饼': ['煎饼', '煎饼果子'],
};

// 菜品关键词（用于识别中式菜品）
const DISH_KEYWORDS = {
  '红烧': { baseFood: '猪肉', cooking: '红烧', caloriesMultiplier: 1.3 },
  '糖醋': { baseFood: '猪肉', cooking: '糖醋', caloriesMultiplier: 1.4 },
  '清蒸': { baseFood: '鱼', cooking: '清蒸', caloriesMultiplier: 1.0 },
  '油炸': { baseFood: '鸡肉', cooking: '油炸', caloriesMultiplier: 1.8 },
  '煎': { baseFood: '鸡蛋', cooking: '煎', caloriesMultiplier: 1.3 },
  '炒': { baseFood: '蔬菜', cooking: '炒', caloriesMultiplier: 1.2 },
  '炖': { baseFood: '猪肉', cooking: '炖', caloriesMultiplier: 1.1 },
  '烤': { baseFood: '鸡肉', cooking: '烤', caloriesMultiplier: 1.1 },
  '凉拌': { baseFood: '蔬菜', cooking: '凉拌', caloriesMultiplier: 0.8 },
  '水煮': { baseFood: '蔬菜', cooking: '水煮', caloriesMultiplier: 0.9 },
};

/**
 * 智能识别食物
 * @param {string} text - 用户输入或识别文本
 * @returns {Array} 识别结果
 */
function smartRecognize(text) {
  const results = [];
  const normalizedText = text.toLowerCase().trim();
  
  // 1. 精确匹配
  if (NUTRITION_DB[normalizedText]) {
    const nutrition = findNutrition(normalizedText);
    results.push({
      name: normalizedText,
      confidence: 1.0,
      nutrition,
      matchType: 'exact',
    });
    return results;
  }
  
  // 2. 关键词匹配
  for (const [keyword, foodNames] of Object.entries(FOOD_KEYWORDS_MAP)) {
    if (normalizedText.includes(keyword)) {
      // 找到最匹配的食物
      for (const foodName of foodNames) {
        if (NUTRITION_DB[foodName]) {
          const nutrition = findNutrition(foodName);
          results.push({
            name: foodName,
            confidence: 0.9,
            nutrition,
            matchType: 'keyword',
            matchedKeyword: keyword,
          });
          break;
        }
      }
    }
  }
  
  // 3. 菜品识别（如"红烧肉"、"糖醋排骨"）
  for (const [cooking, config] of Object.entries(DISH_KEYWORDS)) {
    if (normalizedText.includes(cooking)) {
      const baseNutrition = findNutrition(config.baseFood);
      results.push({
        name: `${cooking}${config.baseFood}`,
        confidence: 0.85,
        nutrition: {
          ...baseNutrition,
          calories: Math.round(baseNutrition.calories * config.caloriesMultiplier),
          name: `${cooking}${config.baseFood}`,
        },
        matchType: 'dish',
        cooking: config.cooking,
      });
    }
  }
  
  // 4. 模糊匹配（遍历数据库）
  if (results.length === 0) {
    for (const [name, data] of Object.entries(NUTRITION_DB)) {
      if (normalizedText.includes(name) || name.includes(normalizedText)) {
        results.push({
          name,
          confidence: 0.8,
          nutrition: findNutrition(name),
          matchType: 'fuzzy',
        });
        break;
      }
    }
  }
  
  // 5. 去重并排序
  const uniqueResults = [];
  const seen = new Set();
  for (const result of results) {
    if (!seen.has(result.name)) {
      seen.add(result.name);
      uniqueResults.push(result);
    }
  }
  
  return uniqueResults.sort((a, b) => b.confidence - a.confidence).slice(0, 5);
}

/**
 * 从图片描述中提取食物
 * @param {string} description - 图片描述
 * @returns {Array} 食物列表
 */
function extractFoodsFromDescription(description) {
  const foods = [];
  
  // 分词处理
  const words = description.split(/[，,、和与及\s]+/);
  
  for (const word of words) {
    const recognized = smartRecognize(word);
    if (recognized.length > 0) {
      foods.push(...recognized);
    }
  }
  
  // 如果分词没找到，尝试整体匹配
  if (foods.length === 0) {
    const recognized = smartRecognize(description);
    foods.push(...recognized);
  }
  
  return foods;
}

/**
 * 获取食物建议
 * @param {string} partialName - 部分食物名称
 * @returns {Array} 建议列表
 */
function getSuggestions(partialName) {
  const suggestions = [];
  const lower = partialName.toLowerCase();
  
  for (const [name, data] of Object.entries(NUTRITION_DB)) {
    if (name.includes(lower)) {
      suggestions.push({
        name,
        calories: data.calories,
        category: data.category,
      });
    }
  }
  
  return suggestions.slice(0, 10);
}

/**
 * 批量识别多个食物
 * @param {string[]} foodNames - 食物名称数组
 * @returns {Object[]} 识别结果
 */
function batchRecognize(foodNames) {
  return foodNames.map(name => {
    const result = smartRecognize(name);
    return result[0] || {
      name,
      confidence: 0.3,
      nutrition: findNutrition(name),
      matchType: 'estimated',
    };
  });
}

module.exports = {
  smartRecognize,
  extractFoodsFromDescription,
  getSuggestions,
  batchRecognize,
};

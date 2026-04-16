/**
 * 中国食物成分表 - 完整版
 * 数据来源：《中国食物成分表（第6版）》、USDA Food Data Central
 * 单位：每100g可食部分
 * 
 * 说明：
 * - calories: 热量 (kcal)
 * - protein: 蛋白质 (g)
 * - carbs: 碳水化合物 (g)
 * - fat: 脂肪 (g)
 * - fiber: 膳食纤维 (g)
 * - sodium: 钠 (mg)
 * - cholesterol: 胆固醇 (mg)
 * - vitaminA: 维生素A (μgRE)
 * - vitaminC: 维生素C (mg)
 * - calcium: 钙 (mg)
 * - iron: 铁 (mg)
 */

const NUTRITION_DB = {
  // ==================== 谷薯类 ====================
  '米饭': { 
    calories: 116, protein: 2.6, carbs: 25.9, fat: 0.3, fiber: 0.3,
    sodium: 2, cholesterol: 0, vitaminA: 0, vitaminC: 0, calcium: 7, iron: 0.2,
    category: '谷薯类', glycemicIndex: 83 
  },
  '白米饭': { 
    calories: 116, protein: 2.6, carbs: 25.9, fat: 0.3, fiber: 0.3,
    sodium: 2, cholesterol: 0, vitaminA: 0, vitaminC: 0, calcium: 7, iron: 0.2,
    category: '谷薯类', glycemicIndex: 83 
  },
  '糙米饭': { 
    calories: 111, protein: 2.6, carbs: 23.5, fat: 0.9, fiber: 1.8,
    sodium: 5, cholesterol: 0, vitaminA: 0, vitaminC: 0, calcium: 11, iron: 0.4,
    category: '谷薯类', glycemicIndex: 56 
  },
  '黑米饭': { 
    calories: 109, protein: 3.0, carbs: 23.0, fat: 0.8, fiber: 2.5,
    sodium: 4, cholesterol: 0, vitaminA: 0, vitaminC: 0, calcium: 12, iron: 1.5,
    category: '谷薯类', glycemicIndex: 55 
  },
  '糯米饭': { 
    calories: 116, protein: 2.8, carbs: 25.6, fat: 0.3, fiber: 0.2,
    sodium: 2, cholesterol: 0, vitaminA: 0, vitaminC: 0, calcium: 8, iron: 0.3,
    category: '谷薯类', glycemicIndex: 87 
  },
  '面条': { 
    calories: 137, protein: 4.5, carbs: 28.0, fat: 0.8, fiber: 0.8,
    sodium: 183, cholesterol: 0, vitaminA: 0, vitaminC: 0, calcium: 13, iron: 1.5,
    category: '谷薯类', glycemicIndex: 81 
  },
  '挂面': { 
    calories: 346, protein: 11.0, carbs: 73.0, fat: 1.2, fiber: 0.5,
    sodium: 60, cholesterol: 0, vitaminA: 0, vitaminC: 0, calcium: 14, iron: 2.5,
    category: '谷薯类', glycemicIndex: 80 
  },
  '手擀面': { 
    calories: 142, protein: 4.8, carbs: 29.0, fat: 0.9, fiber: 0.6,
    sodium: 150, cholesterol: 0, vitaminA: 0, vitaminC: 0, calcium: 12, iron: 1.2,
    category: '谷薯类', glycemicIndex: 79 
  },
  '拉面': { 
    calories: 145, protein: 5.0, carbs: 30.0, fat: 1.0, fiber: 0.5,
    sodium: 200, cholesterol: 0, vitaminA: 0, vitaminC: 0, calcium: 15, iron: 1.3,
    category: '谷薯类', glycemicIndex: 78 
  },
  '刀削面': { 
    calories: 140, protein: 4.6, carbs: 29.0, fat: 0.8, fiber: 0.6,
    sodium: 180, cholesterol: 0, vitaminA: 0, vitaminC: 0, calcium: 13, iron: 1.4,
    category: '谷薯类', glycemicIndex: 77 
  },
  '馒头': { 
    calories: 221, protein: 7.0, carbs: 45.0, fat: 1.1, fiber: 1.3,
    sodium: 165, cholesterol: 0, vitaminA: 0, vitaminC: 0, calcium: 38, iron: 1.8,
    category: '谷薯类', glycemicIndex: 88 
  },
  '花卷': { 
    calories: 212, protein: 6.4, carbs: 44.0, fat: 1.0, fiber: 1.2,
    sodium: 150, cholesterol: 0, vitaminA: 0, vitaminC: 0, calcium: 35, iron: 1.6,
    category: '谷薯类', glycemicIndex: 86 
  },
  '包子': { 
    calories: 227, protein: 6.4, carbs: 39.0, fat: 5.2, fiber: 0.8,
    sodium: 200, cholesterol: 15, vitaminA: 10, vitaminC: 0, calcium: 25, iron: 1.5,
    category: '谷薯类', glycemicIndex: 75 
  },
  '肉包子': { 
    calories: 250, protein: 8.0, carbs: 38.0, fat: 7.0, fiber: 0.5,
    sodium: 350, cholesterol: 35, vitaminA: 15, vitaminC: 0, calcium: 20, iron: 1.8,
    category: '谷薯类', glycemicIndex: 72 
  },
  '菜包子': { 
    calories: 180, protein: 5.0, carbs: 35.0, fat: 2.0, fiber: 1.5,
    sodium: 180, cholesterol: 0, vitaminA: 50, vitaminC: 5, calcium: 40, iron: 1.2,
    category: '谷薯类', glycemicIndex: 70 
  },
  '豆沙包': { 
    calories: 240, protein: 5.5, carbs: 48.0, fat: 3.0, fiber: 1.0,
    sodium: 120, cholesterol: 0, vitaminA: 0, vitaminC: 0, calcium: 22, iron: 1.0,
    category: '谷薯类', glycemicIndex: 76 
  },
  '饺子': { 
    calories: 198, protein: 7.5, carbs: 28.0, fat: 6.0, fiber: 0.8,
    sodium: 280, cholesterol: 30, vitaminA: 20, vitaminC: 2, calcium: 25, iron: 1.5,
    category: '谷薯类', glycemicIndex: 68 
  },
  '水饺': { 
    calories: 198, protein: 7.5, carbs: 28.0, fat: 6.0, fiber: 0.8,
    sodium: 280, cholesterol: 30, vitaminA: 20, vitaminC: 2, calcium: 25, iron: 1.5,
    category: '谷薯类', glycemicIndex: 68 
  },
  '煎饺': { 
    calories: 265, protein: 7.0, carbs: 30.0, fat: 13.0, fiber: 0.6,
    sodium: 350, cholesterol: 35, vitaminA: 15, vitaminC: 1, calcium: 22, iron: 1.3,
    category: '谷薯类', glycemicIndex: 70 
  },
  '蒸饺': { 
    calories: 185, protein: 7.2, carbs: 27.0, fat: 5.0, fiber: 0.7,
    sodium: 250, cholesterol: 28, vitaminA: 18, vitaminC: 2, calcium: 23, iron: 1.4,
    category: '谷薯类', glycemicIndex: 66 
  },
  '馄饨': { 
    calories: 180, protein: 6.0, carbs: 25.0, fat: 5.0, fiber: 0.5,
    sodium: 320, cholesterol: 25, vitaminA: 15, vitaminC: 1, calcium: 20, iron: 1.2,
    category: '谷薯类', glycemicIndex: 65 
  },
  '抄手': { 
    calories: 185, protein: 6.5, carbs: 26.0, fat: 5.5, fiber: 0.5,
    sodium: 350, cholesterol: 28, vitaminA: 16, vitaminC: 1, calcium: 22, iron: 1.3,
    category: '谷薯类', glycemicIndex: 66 
  },
  '粥': { 
    calories: 46, protein: 1.1, carbs: 9.8, fat: 0.3, fiber: 0.1,
    sodium: 2, cholesterol: 0, vitaminA: 0, vitaminC: 0, calcium: 4, iron: 0.1,
    category: '谷薯类', glycemicIndex: 69 
  },
  '白粥': { 
    calories: 46, protein: 1.1, carbs: 9.8, fat: 0.3, fiber: 0.1,
    sodium: 2, cholesterol: 0, vitaminA: 0, vitaminC: 0, calcium: 4, iron: 0.1,
    category: '谷薯类', glycemicIndex: 69 
  },
  '小米粥': { 
    calories: 46, protein: 1.4, carbs: 9.6, fat: 0.3, fiber: 0.2,
    sodium: 3, cholesterol: 0, vitaminA: 5, vitaminC: 0, calcium: 6, iron: 0.3,
    category: '谷薯类', glycemicIndex: 62 
  },
  '八宝粥': { 
    calories: 85, protein: 2.5, carbs: 18.0, fat: 0.5, fiber: 1.2,
    sodium: 5, cholesterol: 0, vitaminA: 8, vitaminC: 1, calcium: 12, iron: 0.8,
    category: '谷薯类', glycemicIndex: 55 
  },
  '皮蛋瘦肉粥': { 
    calories: 78, protein: 4.5, carbs: 12.0, fat: 2.0, fiber: 0.3,
    sodium: 180, cholesterol: 45, vitaminA: 10, vitaminC: 0, calcium: 8, iron: 0.6,
    category: '谷薯类', glycemicIndex: 65 
  },
  '炒饭': { 
    calories: 188, protein: 4.5, carbs: 30.0, fat: 6.0, fiber: 0.5,
    sodium: 350, cholesterol: 50, vitaminA: 15, vitaminC: 2, calcium: 15, iron: 0.8,
    category: '谷薯类', glycemicIndex: 78 
  },
  '蛋炒饭': { 
    calories: 195, protein: 5.5, carbs: 28.0, fat: 7.0, fiber: 0.4,
    sodium: 380, cholesterol: 80, vitaminA: 30, vitaminC: 2, calcium: 18, iron: 1.0,
    category: '谷薯类', glycemicIndex: 76 
  },
  '扬州炒饭': { 
    calories: 210, protein: 6.5, carbs: 28.0, fat: 8.5, fiber: 0.5,
    sodium: 450, cholesterol: 90, vitaminA: 35, vitaminC: 3, calcium: 22, iron: 1.2,
    category: '谷薯类', glycemicIndex: 75 
  },
  '炒面': { 
    calories: 163, protein: 5.0, carbs: 28.0, fat: 4.0, fiber: 0.8,
    sodium: 420, cholesterol: 25, vitaminA: 10, vitaminC: 5, calcium: 18, iron: 1.2,
    category: '谷薯类', glycemicIndex: 72 
  },
  '凉皮': { 
    calories: 117, protein: 3.8, carbs: 25.0, fat: 0.1, fiber: 0.2,
    sodium: 15, cholesterol: 0, vitaminA: 0, vitaminC: 0, calcium: 8, iron: 0.5,
    category: '谷薯类', glycemicIndex: 65 
  },
  '米线': { 
    calories: 98, protein: 2.2, carbs: 22.0, fat: 0.2, fiber: 0.3,
    sodium: 8, cholesterol: 0, vitaminA: 0, vitaminC: 0, calcium: 6, iron: 0.3,
    category: '谷薯类', glycemicIndex: 68 
  },
  '米粉': { 
    calories: 346, protein: 7.3, carbs: 77.0, fat: 0.5, fiber: 0.2,
    sodium: 12, cholesterol: 0, vitaminA: 0, vitaminC: 0, calcium: 10, iron: 0.8,
    category: '谷薯类', glycemicIndex: 70 
  },
  '年糕': { 
    calories: 154, protein: 3.3, carbs: 34.0, fat: 0.5, fiber: 0.4,
    sodium: 5, cholesterol: 0, vitaminA: 0, vitaminC: 0, calcium: 8, iron: 0.4,
    category: '谷薯类', glycemicIndex: 85 
  },
  '汤圆': { 
    calories: 311, protein: 5.0, carbs: 52.0, fat: 10.0, fiber: 0.5,
    sodium: 8, cholesterol: 0, vitaminA: 0, vitaminC: 0, calcium: 12, iron: 0.6,
    category: '谷薯类', glycemicIndex: 78 
  },
  '烧麦': { 
    calories: 238, protein: 6.8, carbs: 32.0, fat: 9.0, fiber: 0.5,
    sodium: 380, cholesterol: 45, vitaminA: 20, vitaminC: 1, calcium: 18, iron: 1.5,
    category: '谷薯类', glycemicIndex: 70 
  },
  '春卷': { 
    calories: 285, protein: 5.0, carbs: 35.0, fat: 14.0, fiber: 0.8,
    sodium: 420, cholesterol: 20, vitaminA: 25, vitaminC: 3, calcium: 15, iron: 1.0,
    category: '谷薯类', glycemicIndex: 72 
  },
  '油条': { 
    calories: 386, protein: 6.9, carbs: 51.0, fat: 17.0, fiber: 0.9,
    sodium: 585, cholesterol: 0, vitaminA: 0, vitaminC: 0, calcium: 25, iron: 1.8,
    category: '谷薯类', glycemicIndex: 75 
  },
  '煎饼': { 
    calories: 336, protein: 9.0, carbs: 52.0, fat: 10.0, fiber: 1.5,
    sodium: 320, cholesterol: 0, vitaminA: 5, vitaminC: 0, calcium: 35, iron: 2.5,
    category: '谷薯类', glycemicIndex: 70 
  },
  '煎饼果子': { 
    calories: 355, protein: 10.0, carbs: 50.0, fat: 12.0, fiber: 1.2,
    sodium: 450, cholesterol: 80, vitaminA: 35, vitaminC: 2, calcium: 40, iron: 2.8,
    category: '谷薯类', glycemicIndex: 72 
  },
  '大饼': { 
    calories: 277, protein: 7.5, carbs: 50.0, fat: 5.0, fiber: 1.2,
    sodium: 280, cholesterol: 0, vitaminA: 0, vitaminC: 0, calcium: 30, iron: 2.0,
    category: '谷薯类', glycemicIndex: 82 
  },
  '烧饼': { 
    calories: 293, protein: 7.5, carbs: 52.0, fat: 6.5, fiber: 1.0,
    sodium: 350, cholesterol: 0, vitaminA: 0, vitaminC: 0, calcium: 28, iron: 1.8,
    category: '谷薯类', glycemicIndex: 80 
  },
  '面包': { 
    calories: 265, protein: 9.0, carbs: 49.0, fat: 3.2, fiber: 1.8,
    sodium: 450, cholesterol: 0, vitaminA: 0, vitaminC: 0, calcium: 25, iron: 1.5,
    category: '谷薯类', glycemicIndex: 75 
  },
  '全麦面包': { 
    calories: 246, protein: 10.0, carbs: 45.0, fat: 3.0, fiber: 6.0,
    sodium: 400, cholesterol: 0, vitaminA: 0, vitaminC: 0, calcium: 30, iron: 2.5,
    category: '谷薯类', glycemicIndex: 50 
  },
  '吐司': { 
    calories: 267, protein: 9.0, carbs: 48.0, fat: 3.5, fiber: 1.5,
    sodium: 480, cholesterol: 0, vitaminA: 0, vitaminC: 0, calcium: 22, iron: 1.3,
    category: '谷薯类', glycemicIndex: 78 
  },
  '法棍': { 
    calories: 278, protein: 10.0, carbs: 52.0, fat: 2.0, fiber: 2.5,
    sodium: 520, cholesterol: 0, vitaminA: 0, vitaminC: 0, calcium: 28, iron: 2.0,
    category: '谷薯类', glycemicIndex: 68 
  },
  '披萨': { 
    calories: 266, protein: 11.0, carbs: 33.0, fat: 10.0, fiber: 1.8,
    sodium: 530, cholesterol: 20, vitaminA: 50, vitaminC: 2, calcium: 120, iron: 1.5,
    category: '谷薯类', glycemicIndex: 60 
  },
  '汉堡': { 
    calories: 295, protein: 14.0, carbs: 30.0, fat: 13.0, fiber: 1.2,
    sodium: 580, cholesterol: 45, vitaminA: 20, vitaminC: 2, calcium: 80, iron: 2.5,
    category: '谷薯类', glycemicIndex: 66 
  },
  '三明治': { 
    calories: 244, protein: 10.0, carbs: 28.0, fat: 10.0, fiber: 1.5,
    sodium: 450, cholesterol: 35, vitaminA: 25, vitaminC: 3, calcium: 60, iron: 1.8,
    category: '谷薯类', glycemicIndex: 65 
  },
  '寿司': { 
    calories: 150, protein: 5.0, carbs: 30.0, fat: 0.5, fiber: 0.5,
    sodium: 420, cholesterol: 5, vitaminA: 0, vitaminC: 0, calcium: 10, iron: 0.3,
    category: '谷薯类', glycemicIndex: 64 
  },
  '紫菜包饭': { 
    calories: 145, protein: 4.5, carbs: 28.0, fat: 0.8, fiber: 0.8,
    sodium: 380, cholesterol: 5, vitaminA: 15, vitaminC: 2, calcium: 15, iron: 0.5,
    category: '谷薯类', glycemicIndex: 62 
  },
  '红薯': { 
    calories: 86, protein: 1.6, carbs: 20.0, fat: 0.1, fiber: 1.6,
    sodium: 28, cholesterol: 0, vitaminA: 125, vitaminC: 26, calcium: 23, iron: 0.5,
    category: '谷薯类', glycemicIndex: 54 
  },
  '地瓜': { 
    calories: 86, protein: 1.6, carbs: 20.0, fat: 0.1, fiber: 1.6,
    sodium: 28, cholesterol: 0, vitaminA: 125, vitaminC: 26, calcium: 23, iron: 0.5,
    category: '谷薯类', glycemicIndex: 54 
  },
  '紫薯': { 
    calories: 82, protein: 1.5, carbs: 19.0, fat: 0.2, fiber: 1.7,
    sodium: 25, cholesterol: 0, vitaminA: 15, vitaminC: 20, calcium: 25, iron: 0.6,
    category: '谷薯类', glycemicIndex: 52 
  },
  '土豆': { 
    calories: 77, protein: 2.0, carbs: 17.0, fat: 0.2, fiber: 1.3,
    sodium: 2, cholesterol: 0, vitaminA: 0, vitaminC: 27, calcium: 8, iron: 0.8,
    category: '谷薯类', glycemicIndex: 62 
  },
  '马铃薯': { 
    calories: 77, protein: 2.0, carbs: 17.0, fat: 0.2, fiber: 1.3,
    sodium: 2, cholesterol: 0, vitaminA: 0, vitaminC: 27, calcium: 8, iron: 0.8,
    category: '谷薯类', glycemicIndex: 62 
  },
  '山药': { 
    calories: 56, protein: 1.9, carbs: 12.0, fat: 0.2, fiber: 0.8,
    sodium: 18, cholesterol: 0, vitaminA: 3, vitaminC: 5, calcium: 16, iron: 0.3,
    category: '谷薯类', glycemicIndex: 51 
  },
  '芋头': { 
    calories: 56, protein: 2.2, carbs: 12.0, fat: 0.2, fiber: 1.0,
    sodium: 5, cholesterol: 0, vitaminA: 0, vitaminC: 6, calcium: 36, iron: 1.0,
    category: '谷薯类', glycemicIndex: 53 
  },
  '玉米': { 
    calories: 112, protein: 4.0, carbs: 22.0, fat: 1.2, fiber: 2.9,
    sodium: 2, cholesterol: 0, vitaminA: 17, vitaminC: 16, calcium: 0, iron: 0.4,
    category: '谷薯类', glycemicIndex: 55 
  },
  '甜玉米': { 
    calories: 107, protein: 3.5, carbs: 23.0, fat: 0.8, fiber: 2.5,
    sodium: 2, cholesterol: 0, vitaminA: 20, vitaminC: 12, calcium: 2, iron: 0.3,
    category: '谷薯类', glycemicIndex: 55 
  },
  '燕麦': { 
    calories: 367, protein: 15.0, carbs: 66.0, fat: 6.7, fiber: 5.3,
    sodium: 5, cholesterol: 0, vitaminA: 0, vitaminC: 0, calcium: 54, iron: 4.7,
    category: '谷薯类', glycemicIndex: 55 
  },
  '燕麦片': { 
    calories: 367, protein: 15.0, carbs: 66.0, fat: 6.7, fiber: 5.3,
    sodium: 5, cholesterol: 0, vitaminA: 0, vitaminC: 0, calcium: 54, iron: 4.7,
    category: '谷薯类', glycemicIndex: 55 
  },
  '小米': { 
    calories: 358, protein: 9.0, carbs: 75.0, fat: 3.1, fiber: 1.6,
    sodium: 5, cholesterol: 0, vitaminA: 17, vitaminC: 0, calcium: 41, iron: 5.1,
    category: '谷薯类', glycemicIndex: 71 
  },

  // ==================== 蔬菜类 ====================
  '青菜': { 
    calories: 15, protein: 1.5, carbs: 2.0, fat: 0.3, fiber: 1.1,
    sodium: 72, cholesterol: 0, vitaminA: 280, vitaminC: 28, calcium: 90, iron: 1.9,
    category: '蔬菜类' 
  },
  '小白菜': { 
    calories: 15, protein: 1.5, carbs: 2.0, fat: 0.3, fiber: 1.1,
    sodium: 72, cholesterol: 0, vitaminA: 280, vitaminC: 28, calcium: 90, iron: 1.9,
    category: '蔬菜类' 
  },
  '大白菜': { 
    calories: 17, protein: 1.5, carbs: 3.0, fat: 0.2, fiber: 0.8,
    sodium: 48, cholesterol: 0, vitaminA: 42, vitaminC: 31, calcium: 50, iron: 0.7,
    category: '蔬菜类' 
  },
  '菠菜': { 
    calories: 23, protein: 2.6, carbs: 3.0, fat: 0.3, fiber: 1.7,
    sodium: 85, cholesterol: 0, vitaminA: 487, vitaminC: 32, calcium: 66, iron: 2.9,
    category: '蔬菜类' 
  },
  '生菜': { 
    calories: 13, protein: 0.8, carbs: 2.0, fat: 0.3, fiber: 0.7,
    sodium: 32, cholesterol: 0, vitaminA: 298, vitaminC: 13, calcium: 34, iron: 0.9,
    category: '蔬菜类' 
  },
  '油麦菜': { 
    calories: 15, protein: 1.4, carbs: 2.0, fat: 0.4, fiber: 0.6,
    sodium: 55, cholesterol: 0, vitaminA: 350, vitaminC: 20, calcium: 60, iron: 1.2,
    category: '蔬菜类' 
  },
  '芹菜': { 
    calories: 14, protein: 0.7, carbs: 3.0, fat: 0.1, fiber: 1.2,
    sodium: 159, cholesterol: 0, vitaminA: 57, vitaminC: 5, calcium: 48, iron: 0.8,
    category: '蔬菜类' 
  },
  '西芹': { 
    calories: 14, protein: 0.7, carbs: 3.0, fat: 0.1, fiber: 1.2,
    sodium: 159, cholesterol: 0, vitaminA: 57, vitaminC: 5, calcium: 48, iron: 0.8,
    category: '蔬菜类' 
  },
  '韭菜': { 
    calories: 26, protein: 2.4, carbs: 4.0, fat: 0.4, fiber: 1.4,
    sodium: 8, cholesterol: 0, vitaminA: 235, vitaminC: 24, calcium: 42, iron: 1.6,
    category: '蔬菜类' 
  },
  '香菜': { 
    calories: 31, protein: 1.8, carbs: 6.0, fat: 0.4, fiber: 1.2,
    sodium: 48, cholesterol: 0, vitaminA: 193, vitaminC: 48, calcium: 101, iron: 2.9,
    category: '蔬菜类' 
  },
  '空心菜': { 
    calories: 20, protein: 2.2, carbs: 3.0, fat: 0.3, fiber: 1.4,
    sodium: 94, cholesterol: 0, vitaminA: 253, vitaminC: 25, calcium: 99, iron: 2.3,
    category: '蔬菜类' 
  },
  '芥蓝': { 
    calories: 19, protein: 2.5, carbs: 2.0, fat: 0.3, fiber: 1.6,
    sodium: 40, cholesterol: 0, vitaminA: 575, vitaminC: 76, calcium: 128, iron: 2.0,
    category: '蔬菜类' 
  },
  '菜心': { 
    calories: 19, protein: 1.3, carbs: 4.0, fat: 0.2, fiber: 0.8,
    sodium: 26, cholesterol: 0, vitaminA: 160, vitaminC: 44, calcium: 96, iron: 1.3,
    category: '蔬菜类' 
  },
  '西兰花': { 
    calories: 33, protein: 4.1, carbs: 4.0, fat: 0.6, fiber: 2.6,
    sodium: 18, cholesterol: 0, vitaminA: 1202, vitaminC: 51, calcium: 67, iron: 1.0,
    category: '蔬菜类' 
  },
  '花菜': { 
    calories: 24, protein: 2.1, carbs: 4.0, fat: 0.2, fiber: 1.2,
    sodium: 31, cholesterol: 0, vitaminA: 5, vitaminC: 61, calcium: 23, iron: 0.7,
    category: '蔬菜类' 
  },
  '菜花': { 
    calories: 24, protein: 2.1, carbs: 4.0, fat: 0.2, fiber: 1.2,
    sodium: 31, cholesterol: 0, vitaminA: 5, vitaminC: 61, calcium: 23, iron: 0.7,
    category: '蔬菜类' 
  },
  '卷心菜': { 
    calories: 22, protein: 1.5, carbs: 4.0, fat: 0.2, fiber: 1.3,
    sodium: 27, cholesterol: 0, vitaminA: 12, vitaminC: 40, calcium: 49, iron: 0.6,
    category: '蔬菜类' 
  },
  '包菜': { 
    calories: 22, protein: 1.5, carbs: 4.0, fat: 0.2, fiber: 1.3,
    sodium: 27, cholesterol: 0, vitaminA: 12, vitaminC: 40, calcium: 49, iron: 0.6,
    category: '蔬菜类' 
  },
  '紫甘蓝': { 
    calories: 31, protein: 1.8, carbs: 6.0, fat: 0.2, fiber: 2.2,
    sodium: 22, cholesterol: 0, vitaminA: 5, vitaminC: 57, calcium: 42, iron: 0.7,
    category: '蔬菜类' 
  },
  '番茄': { 
    calories: 18, protein: 0.9, carbs: 4.0, fat: 0.2, fiber: 1.2,
    sodium: 5, cholesterol: 0, vitaminA: 63, vitaminC: 14, calcium: 10, iron: 0.4,
    category: '蔬菜类' 
  },
  '西红柿': { 
    calories: 18, protein: 0.9, carbs: 4.0, fat: 0.2, fiber: 1.2,
    sodium: 5, cholesterol: 0, vitaminA: 63, vitaminC: 14, calcium: 10, iron: 0.4,
    category: '蔬菜类' 
  },
  '圣女果': { 
    calories: 22, protein: 1.0, carbs: 5.0, fat: 0.2, fiber: 1.3,
    sodium: 5, cholesterol: 0, vitaminA: 75, vitaminC: 33, calcium: 12, iron: 0.5,
    category: '蔬菜类' 
  },
  '小番茄': { 
    calories: 22, protein: 1.0, carbs: 5.0, fat: 0.2, fiber: 1.3,
    sodium: 5, cholesterol: 0, vitaminA: 75, vitaminC: 33, calcium: 12, iron: 0.5,
    category: '蔬菜类' 
  },
  '黄瓜': { 
    calories: 15, protein: 0.8, carbs: 3.0, fat: 0.2, fiber: 0.5,
    sodium: 2, cholesterol: 0, vitaminA: 15, vitaminC: 9, calcium: 24, iron: 0.5,
    category: '蔬菜类' 
  },
  '冬瓜': { 
    calories: 11, protein: 0.4, carbs: 2.0, fat: 0.2, fiber: 0.7,
    sodium: 1, cholesterol: 0, vitaminA: 0, vitaminC: 18, calcium: 19, iron: 0.2,
    category: '蔬菜类' 
  },
  '丝瓜': { 
    calories: 20, protein: 1.0, carbs: 4.0, fat: 0.2, fiber: 0.6,
    sodium: 3, cholesterol: 0, vitaminA: 15, vitaminC: 5, calcium: 14, iron: 0.4,
    category: '蔬菜类' 
  },
  '苦瓜': { 
    calories: 19, protein: 1.0, carbs: 4.0, fat: 0.1, fiber: 1.4,
    sodium: 3, cholesterol: 0, vitaminA: 17, vitaminC: 56, calcium: 14, iron: 0.7,
    category: '蔬菜类' 
  },
  '南瓜': { 
    calories: 22, protein: 0.7, carbs: 5.0, fat: 0.1, fiber: 0.8,
    sodium: 1, cholesterol: 0, vitaminA: 148, vitaminC: 8, calcium: 16, iron: 0.4,
    category: '蔬菜类' 
  },
  '茄子': { 
    calories: 21, protein: 1.1, carbs: 4.0, fat: 0.2, fiber: 1.3,
    sodium: 3, cholesterol: 0, vitaminA: 8, vitaminC: 5, calcium: 24, iron: 0.5,
    category: '蔬菜类' 
  },
  '胡萝卜': { 
    calories: 37, protein: 1.0, carbs: 8.0, fat: 0.2, fiber: 1.3,
    sodium: 72, cholesterol: 0, vitaminA: 688, vitaminC: 9, calcium: 27, iron: 0.3,
    category: '蔬菜类' 
  },
  '白萝卜': { 
    calories: 21, protein: 0.9, carbs: 4.0, fat: 0.1, fiber: 1.0,
    sodium: 61, cholesterol: 0, vitaminA: 3, vitaminC: 21, calcium: 36, iron: 0.5,
    category: '蔬菜类' 
  },
  '洋葱': { 
    calories: 39, protein: 1.1, carbs: 9.0, fat: 0.1, fiber: 0.9,
    sodium: 4, cholesterol: 0, vitaminA: 3, vitaminC: 8, calcium: 24, iron: 0.6,
    category: '蔬菜类' 
  },
  '大蒜': { 
    calories: 126, protein: 4.5, carbs: 27.0, fat: 0.2, fiber: 1.1,
    sodium: 19, cholesterol: 0, vitaminA: 0, vitaminC: 7, calcium: 39, iron: 1.3,
    category: '蔬菜类' 
  },
  '生姜': { 
    calories: 41, protein: 1.3, carbs: 10.0, fat: 0.6, fiber: 2.7,
    sodium: 27, cholesterol: 0, vitaminA: 0, vitaminC: 4, calcium: 27, iron: 1.4,
    category: '蔬菜类' 
  },
  '辣椒': { 
    calories: 23, protein: 1.4, carbs: 5.0, fat: 0.3, fiber: 1.9,
    sodium: 6, cholesterol: 0, vitaminA: 57, vitaminC: 144, calcium: 15, iron: 0.7,
    category: '蔬菜类' 
  },
  '青椒': { 
    calories: 22, protein: 1.0, carbs: 5.0, fat: 0.2, fiber: 1.4,
    sodium: 6, cholesterol: 0, vitaminA: 18, vitaminC: 130, calcium: 11, iron: 0.5,
    category: '蔬菜类' 
  },
  '彩椒': { 
    calories: 26, protein: 0.9, carbs: 6.0, fat: 0.2, fiber: 1.3,
    sodium: 5, cholesterol: 0, vitaminA: 25, vitaminC: 150, calcium: 9, iron: 0.5,
    category: '蔬菜类' 
  },
  '豆角': { 
    calories: 28, protein: 2.7, carbs: 5.0, fat: 0.2, fiber: 1.8,
    sodium: 3, cholesterol: 0, vitaminA: 20, vitaminC: 18, calcium: 29, iron: 1.5,
    category: '蔬菜类' 
  },
  '四季豆': { 
    calories: 28, protein: 2.7, carbs: 5.0, fat: 0.2, fiber: 1.8,
    sodium: 3, cholesterol: 0, vitaminA: 20, vitaminC: 18, calcium: 29, iron: 1.5,
    category: '蔬菜类' 
  },
  '豇豆': { 
    calories: 29, protein: 2.7, carbs: 5.0, fat: 0.2, fiber: 1.8,
    sodium: 4, cholesterol: 0, vitaminA: 22, vitaminC: 19, calcium: 32, iron: 1.6,
    category: '蔬菜类' 
  },
  '荷兰豆': { 
    calories: 27, protein: 2.5, carbs: 4.0, fat: 0.2, fiber: 1.4,
    sodium: 2, cholesterol: 0, vitaminA: 80, vitaminC: 16, calcium: 20, iron: 0.9,
    category: '蔬菜类' 
  },
  '豌豆': { 
    calories: 111, protein: 7.4, carbs: 18.0, fat: 0.3, fiber: 3.0,
    sodium: 2, cholesterol: 0, vitaminA: 37, vitaminC: 14, calcium: 21, iron: 1.7,
    category: '蔬菜类' 
  },
  '蚕豆': { 
    calories: 104, protein: 8.8, carbs: 16.0, fat: 0.4, fiber: 3.1,
    sodium: 4, cholesterol: 0, vitaminA: 8, vitaminC: 16, calcium: 16, iron: 3.5,
    category: '蔬菜类' 
  },
  '莲藕': { 
    calories: 73, protein: 2.0, carbs: 16.0, fat: 0.2, fiber: 1.2,
    sodium: 44, cholesterol: 0, vitaminA: 0, vitaminC: 44, calcium: 39, iron: 1.4,
    category: '蔬菜类' 
  },
  '藕': { 
    calories: 73, protein: 2.0, carbs: 16.0, fat: 0.2, fiber: 1.2,
    sodium: 44, cholesterol: 0, vitaminA: 0, vitaminC: 44, calcium: 39, iron: 1.4,
    category: '蔬菜类' 
  },
  '蘑菇': { 
    calories: 20, protein: 2.9, carbs: 3.0, fat: 0.3, fiber: 0.6,
    sodium: 6, cholesterol: 0, vitaminA: 0, vitaminC: 1, calcium: 6, iron: 1.0,
    category: '蔬菜类' 
  },
  '香菇': { 
    calories: 19, protein: 2.2, carbs: 3.0, fat: 0.3, fiber: 3.3,
    sodium: 2, cholesterol: 0, vitaminA: 0, vitaminC: 1, calcium: 2, iron: 0.3,
    category: '蔬菜类' 
  },
  '金针菇': { 
    calories: 26, protein: 2.4, carbs: 4.0, fat: 0.2, fiber: 2.7,
    sodium: 4, cholesterol: 0, vitaminA: 0, vitaminC: 2, calcium: 0, iron: 1.4,
    category: '蔬菜类' 
  },
  '平菇': { 
    calories: 20, protein: 2.4, carbs: 3.0, fat: 0.3, fiber: 0.8,
    sodium: 3, cholesterol: 0, vitaminA: 0, vitaminC: 4, calcium: 5, iron: 1.0,
    category: '蔬菜类' 
  },
  '杏鲍菇': { 
    calories: 31, protein: 1.3, carbs: 6.0, fat: 0.1, fiber: 1.8,
    sodium: 3, cholesterol: 0, vitaminA: 0, vitaminC: 0, calcium: 1, iron: 0.5,
    category: '蔬菜类' 
  },
  '木耳': { 
    calories: 27, protein: 1.5, carbs: 6.0, fat: 0.2, fiber: 2.6,
    sodium: 5, cholesterol: 0, vitaminA: 3, vitaminC: 0, calcium: 34, iron: 5.5,
    category: '蔬菜类' 
  },
  '黑木耳': { 
    calories: 27, protein: 1.5, carbs: 6.0, fat: 0.2, fiber: 2.6,
    sodium: 5, cholesterol: 0, vitaminA: 3, vitaminC: 0, calcium: 34, iron: 5.5,
    category: '蔬菜类' 
  },
  '银耳': { 
    calories: 200, protein: 10.0, carbs: 44.0, fat: 1.4, fiber: 30.0,
    sodium: 82, cholesterol: 0, vitaminA: 0, vitaminC: 0, calcium: 36, iron: 4.1,
    category: '蔬菜类' 
  },
  '白木耳': { 
    calories: 200, protein: 10.0, carbs: 44.0, fat: 1.4, fiber: 30.0,
    sodium: 82, cholesterol: 0, vitaminA: 0, vitaminC: 0, calcium: 36, iron: 4.1,
    category: '蔬菜类' 
  },
  '竹笋': { 
    calories: 19, protein: 2.6, carbs: 2.0, fat: 0.2, fiber: 1.8,
    sodium: 6, cholesterol: 0, vitaminA: 0, vitaminC: 5, calcium: 9, iron: 0.5,
    category: '蔬菜类' 
  },
  '春笋': { 
    calories: 20, protein: 2.4, carbs: 2.0, fat: 0.2, fiber: 2.0,
    sodium: 5, cholesterol: 0, vitaminA: 0, vitaminC: 5, calcium: 8, iron: 0.4,
    category: '蔬菜类' 
  },
  '冬笋': { 
    calories: 23, protein: 3.0, carbs: 2.0, fat: 0.2, fiber: 1.5,
    sodium: 6, cholesterol: 0, vitaminA: 0, vitaminC: 4, calcium: 10, iron: 0.5,
    category: '蔬菜类' 
  },
  '芦笋': { 
    calories: 19, protein: 2.2, carbs: 3.0, fat: 0.1, fiber: 1.9,
    sodium: 3, cholesterol: 0, vitaminA: 17, vitaminC: 7, calcium: 10, iron: 1.4,
    category: '蔬菜类' 
  },
  '豆芽': { 
    calories: 18, protein: 2.1, carbs: 2.0, fat: 0.1, fiber: 0.8,
    sodium: 5, cholesterol: 0, vitaminA: 3, vitaminC: 6, calcium: 9, iron: 0.6,
    category: '蔬菜类' 
  },
  '绿豆芽': { 
    calories: 18, protein: 2.1, carbs: 2.0, fat: 0.1, fiber: 0.8,
    sodium: 5, cholesterol: 0, vitaminA: 3, vitaminC: 6, calcium: 9, iron: 0.6,
    category: '蔬菜类' 
  },
  '黄豆芽': { 
    calories: 44, protein: 4.5, carbs: 4.0, fat: 1.6, fiber: 1.5,
    sodium: 7, cholesterol: 0, vitaminA: 5, vitaminC: 8, calcium: 21, iron: 0.9,
    category: '蔬菜类' 
  },

  // ==================== 水果类 ====================
  '苹果': { 
    calories: 52, protein: 0.3, carbs: 14.0, fat: 0.2, fiber: 1.3,
    sodium: 1, cholesterol: 0, vitaminA: 3, vitaminC: 4, calcium: 4, iron: 0.1,
    category: '水果类', glycemicIndex: 36 
  },
  '红富士': { 
    calories: 49, protein: 0.3, carbs: 13.0, fat: 0.2, fiber: 1.2,
    sodium: 1, cholesterol: 0, vitaminA: 3, vitaminC: 3, calcium: 4, iron: 0.1,
    category: '水果类', glycemicIndex: 36 
  },
  '香蕉': { 
    calories: 89, protein: 1.1, carbs: 23.0, fat: 0.3, fiber: 1.2,
    sodium: 1, cholesterol: 0, vitaminA: 3, vitaminC: 9, calcium: 5, iron: 0.3,
    category: '水果类', glycemicIndex: 52 
  },
  '橙子': { 
    calories: 47, protein: 0.9, carbs: 12.0, fat: 0.1, fiber: 1.6,
    sodium: 1, cholesterol: 0, vitaminA: 11, vitaminC: 33, calcium: 20, iron: 0.4,
    category: '水果类', glycemicIndex: 43 
  },
  '橘子': { 
    calories: 44, protein: 0.8, carbs: 11.0, fat: 0.2, fiber: 0.5,
    sodium: 1, cholesterol: 0, vitaminA: 27, vitaminC: 19, calcium: 21, iron: 0.2,
    category: '水果类', glycemicIndex: 43 
  },
  '柑橘': { 
    calories: 44, protein: 0.8, carbs: 11.0, fat: 0.2, fiber: 0.5,
    sodium: 1, cholesterol: 0, vitaminA: 27, vitaminC: 19, calcium: 21, iron: 0.2,
    category: '水果类', glycemicIndex: 43 
  },
  '柚子': { 
    calories: 41, protein: 0.8, carbs: 10.0, fat: 0.1, fiber: 1.2,
    sodium: 1, cholesterol: 0, vitaminA: 2, vitaminC: 23, calcium: 4, iron: 0.3,
    category: '水果类', glycemicIndex: 25 
  },
  '葡萄柚': { 
    calories: 33, protein: 0.8, carbs: 8.0, fat: 0.1, fiber: 1.1,
    sodium: 0, cholesterol: 0, vitaminA: 3, vitaminC: 34, calcium: 12, iron: 0.1,
    category: '水果类', glycemicIndex: 25 
  },
  '西瓜': { 
    calories: 25, protein: 0.6, carbs: 6.0, fat: 0.1, fiber: 0.4,
    sodium: 2, cholesterol: 0, vitaminA: 28, vitaminC: 6, calcium: 4, iron: 0.2,
    category: '水果类', glycemicIndex: 72 
  },
  '哈密瓜': { 
    calories: 34, protein: 0.5, carbs: 8.0, fat: 0.1, fiber: 0.6,
    sodium: 17, cholesterol: 0, vitaminA: 153, vitaminC: 12, calcium: 4, iron: 0.1,
    category: '水果类', glycemicIndex: 65 
  },
  '香瓜': { 
    calories: 26, protein: 0.4, carbs: 6.0, fat: 0.1, fiber: 0.4,
    sodium: 8, cholesterol: 0, vitaminA: 5, vitaminC: 15, calcium: 14, iron: 0.1,
    category: '水果类', glycemicIndex: 65 
  },
  '葡萄': { 
    calories: 69, protein: 0.4, carbs: 17.0, fat: 0.4, fiber: 0.9,
    sodium: 1, cholesterol: 0, vitaminA: 3, vitaminC: 4, calcium: 5, iron: 0.4,
    category: '水果类', glycemicIndex: 43 
  },
  '提子': { 
    calories: 69, protein: 0.4, carbs: 17.0, fat: 0.4, fiber: 0.9,
    sodium: 1, cholesterol: 0, vitaminA: 3, vitaminC: 4, calcium: 5, iron: 0.4,
    category: '水果类', glycemicIndex: 43 
  },
  '草莓': { 
    calories: 30, protein: 1.0, carbs: 7.0, fat: 0.3, fiber: 1.4,
    sodium: 1, cholesterol: 0, vitaminA: 1, vitaminC: 47, calcium: 18, iron: 0.4,
    category: '水果类', glycemicIndex: 40 
  },
  '蓝莓': { 
    calories: 57, protein: 0.7, carbs: 14.0, fat: 0.3, fiber: 2.4,
    sodium: 1, cholesterol: 0, vitaminA: 3, vitaminC: 10, calcium: 6, iron: 0.3,
    category: '水果类', glycemicIndex: 53 
  },
  '树莓': { 
    calories: 52, protein: 1.2, carbs: 12.0, fat: 0.7, fiber: 4.8,
    sodium: 1, cholesterol: 0, vitaminA: 2, vitaminC: 26, calcium: 25, iron: 0.7,
    category: '水果类', glycemicIndex: 40 
  },
  '黑莓': { 
    calories: 43, protein: 1.4, carbs: 10.0, fat: 0.5, fiber: 5.3,
    sodium: 1, cholesterol: 0, vitaminA: 11, vitaminC: 21, calcium: 29, iron: 0.6,
    category: '水果类', glycemicIndex: 40 
  },
  '芒果': { 
    calories: 60, protein: 0.8, carbs: 15.0, fat: 0.4, fiber: 1.6,
    sodium: 2, cholesterol: 0, vitaminA: 150, vitaminC: 28, calcium: 10, iron: 0.2,
    category: '水果类', glycemicIndex: 51 
  },
  '菠萝': { 
    calories: 44, protein: 0.5, carbs: 11.0, fat: 0.1, fiber: 1.2,
    sodium: 1, cholesterol: 0, vitaminA: 3, vitaminC: 20, calcium: 12, iron: 0.3,
    category: '水果类', glycemicIndex: 66 
  },
  '凤梨': { 
    calories: 44, protein: 0.5, carbs: 11.0, fat: 0.1, fiber: 1.2,
    sodium: 1, cholesterol: 0, vitaminA: 3, vitaminC: 20, calcium: 12, iron: 0.3,
    category: '水果类', glycemicIndex: 66 
  },
  '梨': { 
    calories: 44, protein: 0.4, carbs: 11.0, fat: 0.2, fiber: 2.2,
    sodium: 2, cholesterol: 0, vitaminA: 0, vitaminC: 4, calcium: 6, iron: 0.2,
    category: '水果类', glycemicIndex: 36 
  },
  '雪梨': { 
    calories: 44, protein: 0.4, carbs: 11.0, fat: 0.2, fiber: 2.2,
    sodium: 2, cholesterol: 0, vitaminA: 0, vitaminC: 4, calcium: 6, iron: 0.2,
    category: '水果类', glycemicIndex: 36 
  },
  '桃子': { 
    calories: 42, protein: 0.9, carbs: 10.0, fat: 0.1, fiber: 0.6,
    sodium: 0, cholesterol: 0, vitaminA: 3, vitaminC: 4, calcium: 4, iron: 0.2,
    category: '水果类', glycemicIndex: 42 
  },
  '水蜜桃': { 
    calories: 41, protein: 0.8, carbs: 10.0, fat: 0.1, fiber: 0.6,
    sodium: 0, cholesterol: 0, vitaminA: 3, vitaminC: 4, calcium: 4, iron: 0.2,
    category: '水果类', glycemicIndex: 42 
  },
  '油桃': { 
    calories: 44, protein: 0.9, carbs: 10.0, fat: 0.1, fiber: 0.7,
    sodium: 0, cholesterol: 0, vitaminA: 5, vitaminC: 5, calcium: 5, iron: 0.2,
    category: '水果类', glycemicIndex: 43 
  },
  '李子': { 
    calories: 38, protein: 0.7, carbs: 9.0, fat: 0.2, fiber: 0.9,
    sodium: 0, cholesterol: 0, vitaminA: 8, vitaminC: 5, calcium: 4, iron: 0.2,
    category: '水果类', glycemicIndex: 24 
  },
  '杏': { 
    calories: 38, protein: 0.9, carbs: 9.0, fat: 0.2, fiber: 1.3,
    sodium: 1, cholesterol: 0, vitaminA: 96, vitaminC: 10, calcium: 14, iron: 0.4,
    category: '水果类', glycemicIndex: 34 
  },
  '樱桃': { 
    calories: 46, protein: 1.0, carbs: 10.0, fat: 0.2, fiber: 1.3,
    sodium: 0, cholesterol: 0, vitaminA: 3, vitaminC: 10, calcium: 11, iron: 0.4,
    category: '水果类', glycemicIndex: 22 
  },
  '车厘子': { 
    calories: 46, protein: 1.0, carbs: 10.0, fat: 0.2, fiber: 1.3,
    sodium: 0, cholesterol: 0, vitaminA: 3, vitaminC: 10, calcium: 11, iron: 0.4,
    category: '水果类', glycemicIndex: 22 
  },
  '猕猴桃': { 
    calories: 56, protein: 1.0, carbs: 13.0, fat: 0.6, fiber: 2.1,
    sodium: 5, cholesterol: 0, vitaminA: 22, vitaminC: 62, calcium: 27, iron: 0.4,
    category: '水果类', glycemicIndex: 52 
  },
  '奇异果': { 
    calories: 56, protein: 1.0, carbs: 13.0, fat: 0.6, fiber: 2.1,
    sodium: 5, cholesterol: 0, vitaminA: 22, vitaminC: 62, calcium: 27, iron: 0.4,
    category: '水果类', glycemicIndex: 52 
  },
  '火龙果': { 
    calories: 51, protein: 1.1, carbs: 12.0, fat: 0.2, fiber: 1.6,
    sodium: 8, cholesterol: 0, vitaminA: 0, vitaminC: 3, calcium: 6, iron: 0.3,
    category: '水果类', glycemicIndex: 42 
  },
  '荔枝': { 
    calories: 66, protein: 0.8, carbs: 16.0, fat: 0.2, fiber: 0.5,
    sodium: 1, cholesterol: 0, vitaminA: 0, vitaminC: 36, calcium: 2, iron: 0.3,
    category: '水果类', glycemicIndex: 57 
  },
  '龙眼': { 
    calories: 71, protein: 1.2, carbs: 17.0, fat: 0.1, fiber: 0.4,
    sodium: 4, cholesterol: 0, vitaminA: 0, vitaminC: 43, calcium: 1, iron: 0.2,
    category: '水果类', glycemicIndex: 53 
  },
  '桂圆': { 
    calories: 71, protein: 1.2, carbs: 17.0, fat: 0.1, fiber: 0.4,
    sodium: 4, cholesterol: 0, vitaminA: 0, vitaminC: 43, calcium: 1, iron: 0.2,
    category: '水果类', glycemicIndex: 53 
  },
  '山竹': { 
    calories: 69, protein: 0.4, carbs: 17.0, fat: 0.6, fiber: 1.5,
    sodium: 7, cholesterol: 0, vitaminA: 0, vitaminC: 3, calcium: 11, iron: 0.3,
    category: '水果类', glycemicIndex: 48 
  },
  '榴莲': { 
    calories: 147, protein: 2.6, carbs: 28.0, fat: 5.3, fiber: 1.7,
    sodium: 2, cholesterol: 0, vitaminA: 3, vitaminC: 20, calcium: 4, iron: 0.4,
    category: '水果类', glycemicIndex: 49 
  },
  '椰子': { 
    calories: 241, protein: 4.0, carbs: 12.0, fat: 23.0, fiber: 4.7,
    sodium: 55, cholesterol: 0, vitaminA: 0, vitaminC: 4, calcium: 14, iron: 1.7,
    category: '水果类', glycemicIndex: 42 
  },
  '椰子水': { 
    calories: 19, protein: 0.7, carbs: 4.0, fat: 0.2, fiber: 0.2,
    sodium: 105, cholesterol: 0, vitaminA: 0, vitaminC: 2, calcium: 24, iron: 0.3,
    category: '水果类', glycemicIndex: 3 
  },
  '椰肉': { 
    calories: 354, protein: 3.3, carbs: 15.0, fat: 33.0, fiber: 9.0,
    sodium: 20, cholesterol: 0, vitaminA: 0, vitaminC: 3, calcium: 14, iron: 2.4,
    category: '水果类', glycemicIndex: 42 
  },
  '牛油果': { 
    calories: 160, protein: 2.0, carbs: 9.0, fat: 15.0, fiber: 7.0,
    sodium: 7, cholesterol: 0, vitaminA: 7, vitaminC: 10, calcium: 12, iron: 0.6,
    category: '水果类', glycemicIndex: 15 
  },
  '鳄梨': { 
    calories: 160, protein: 2.0, carbs: 9.0, fat: 15.0, fiber: 7.0,
    sodium: 7, cholesterol: 0, vitaminA: 7, vitaminC: 10, calcium: 12, iron: 0.6,
    category: '水果类', glycemicIndex: 15 
  },
  '柠檬': { 
    calories: 35, protein: 1.1, carbs: 9.0, fat: 0.3, fiber: 1.3,
    sodium: 1, cholesterol: 0, vitaminA: 1, vitaminC: 53, calcium: 26, iron: 0.6,
    category: '水果类', glycemicIndex: 20 
  },
  '青柠': { 
    calories: 30, protein: 0.7, carbs: 8.0, fat: 0.2, fiber: 0.8,
    sodium: 2, cholesterol: 0, vitaminA: 2, vitaminC: 29, calcium: 33, iron: 0.6,
    category: '水果类', glycemicIndex: 20 
  },
  '百香果': { 
    calories: 97, protein: 2.2, carbs: 23.0, fat: 0.7, fiber: 10.0,
    sodium: 5, cholesterol: 0, vitaminA: 64, vitaminC: 30, calcium: 12, iron: 1.6,
    category: '水果类', glycemicIndex: 30 
  },
  '无花果': { 
    calories: 59, protein: 0.8, carbs: 14.0, fat: 0.2, fiber: 2.0,
    sodium: 1, cholesterol: 0, vitaminA: 1, vitaminC: 2, calcium: 35, iron: 0.4,
    category: '水果类', glycemicIndex: 61 
  },
  '柿子': { 
    calories: 74, protein: 0.6, carbs: 18.0, fat: 0.2, fiber: 1.5,
    sodium: 1, cholesterol: 0, vitaminA: 20, vitaminC: 10, calcium: 6, iron: 0.2,
    category: '水果类', glycemicIndex: 60 
  },
  '枣': { 
    calories: 276, protein: 2.5, carbs: 68.0, fat: 0.4, fiber: 6.2,
    sodium: 7, cholesterol: 0, vitaminA: 2, vitaminC: 14, calcium: 38, iron: 1.2,
    category: '水果类', glycemicIndex: 103 
  },
  '红枣': { 
    calories: 276, protein: 2.5, carbs: 68.0, fat: 0.4, fiber: 6.2,
    sodium: 7, cholesterol: 0, vitaminA: 2, vitaminC: 14, calcium: 38, iron: 1.2,
    category: '水果类', glycemicIndex: 103 
  },
  '干枣': { 
    calories: 276, protein: 2.5, carbs: 68.0, fat: 0.4, fiber: 6.2,
    sodium: 7, cholesterol: 0, vitaminA: 2, vitaminC: 14, calcium: 38, iron: 1.2,
    category: '水果类', glycemicIndex: 103 
  },
  '鲜枣': { 
    calories: 122, protein: 1.2, carbs: 30.0, fat: 0.2, fiber: 1.9,
    sodium: 2, cholesterol: 0, vitaminA: 40, vitaminC: 243, calcium: 22, iron: 0.8,
    category: '水果类', glycemicIndex: 67 
  },
  '木瓜': { 
    calories: 29, protein: 0.4, carbs: 7.0, fat: 0.1, fiber: 0.8,
    sodium: 4, cholesterol: 0, vitaminA: 47, vitaminC: 43, calcium: 17, iron: 0.2,
    category: '水果类', glycemicIndex: 60 
  },
  '杨梅': { 
    calories: 28, protein: 0.8, carbs: 6.0, fat: 0.2, fiber: 1.0,
    sodium: 0, cholesterol: 0, vitaminA: 7, vitaminC: 9, calcium: 14, iron: 1.0,
    category: '水果类', glycemicIndex: 35 
  },
  '枇杷': { 
    calories: 39, protein: 0.8, carbs: 9.0, fat: 0.2, fiber: 0.8,
    sodium: 4, cholesterol: 0, vitaminA: 0, vitaminC: 8, calcium: 17, iron: 0.3,
    category: '水果类', glycemicIndex: 55 
  },
  '桑葚': { 
    calories: 49, protein: 1.7, carbs: 10.0, fat: 0.4, fiber: 1.8,
    sodium: 2, cholesterol: 0, vitaminA: 5, vitaminC: 22, calcium: 37, iron: 0.4,
    category: '水果类', glycemicIndex: 25 
  },

  // ==================== 肉类 ====================
  '猪肉': { 
    calories: 143, protein: 20.0, carbs: 0.0, fat: 6.2, fiber: 0,
    sodium: 65, cholesterol: 69, vitaminA: 18, vitaminC: 0, calcium: 6, iron: 1.5,
    category: '肉类' 
  },
  '瘦肉': { 
    calories: 143, protein: 20.0, carbs: 0.0, fat: 6.2, fiber: 0,
    sodium: 65, cholesterol: 69, vitaminA: 18, vitaminC: 0, calcium: 6, iron: 1.5,
    category: '肉类' 
  },
  '肥肉': { 
    calories: 807, protein: 2.4, carbs: 0.0, fat: 88.0, fiber: 0,
    sodium: 20, cholesterol: 109, vitaminA: 0, vitaminC: 0, calcium: 3, iron: 0.3,
    category: '肉类' 
  },
  '五花肉': { 
    calories: 349, protein: 9.3, carbs: 0.0, fat: 35.0, fiber: 0,
    sodium: 50, cholesterol: 86, vitaminA: 10, vitaminC: 0, calcium: 5, iron: 0.8,
    category: '肉类' 
  },
  '排骨': { 
    calories: 278, protein: 17.0, carbs: 0.0, fat: 23.0, fiber: 0,
    sodium: 75, cholesterol: 105, vitaminA: 12, vitaminC: 0, calcium: 12, iron: 1.2,
    category: '肉类' 
  },
  '猪蹄': { 
    calories: 260, protein: 23.0, carbs: 0.0, fat: 18.0, fiber: 0,
    sodium: 80, cholesterol: 192, vitaminA: 3, vitaminC: 0, calcium: 33, iron: 1.1,
    category: '肉类' 
  },
  '猪肝': { 
    calories: 129, protein: 19.0, carbs: 5.0, fat: 3.5, fiber: 0,
    sodium: 68, cholesterol: 288, vitaminA: 4972, vitaminC: 20, calcium: 6, iron: 22.6,
    category: '肉类' 
  },
  '猪心': { 
    calories: 119, protein: 17.0, carbs: 0.0, fat: 5.0, fiber: 0,
    sodium: 90, cholesterol: 151, vitaminA: 13, vitaminC: 4, calcium: 4, iron: 4.3,
    category: '肉类' 
  },
  '猪血': { 
    calories: 55, protein: 12.0, carbs: 0.9, fat: 0.3, fiber: 0,
    sodium: 56, cholesterol: 51, vitaminA: 0, vitaminC: 0, calcium: 4, iron: 8.7,
    category: '肉类' 
  },
  '猪大肠': { 
    calories: 165, protein: 12.0, carbs: 0.0, fat: 12.0, fiber: 0,
    sodium: 120, cholesterol: 137, vitaminA: 0, vitaminC: 0, calcium: 4, iron: 1.0,
    category: '肉类' 
  },
  '牛肉': { 
    calories: 125, protein: 20.0, carbs: 0.0, fat: 4.2, fiber: 0,
    sodium: 60, cholesterol: 58, vitaminA: 7, vitaminC: 0, calcium: 5, iron: 3.4,
    category: '肉类' 
  },
  '牛排': { 
    calories: 271, protein: 26.0, carbs: 0.0, fat: 18.0, fiber: 0,
    sodium: 75, cholesterol: 85, vitaminA: 5, vitaminC: 0, calcium: 8, iron: 2.8,
    category: '肉类' 
  },
  '牛腩': { 
    calories: 332, protein: 17.0, carbs: 0.0, fat: 29.0, fiber: 0,
    sodium: 70, cholesterol: 95, vitaminA: 8, vitaminC: 0, calcium: 5, iron: 2.0,
    category: '肉类' 
  },
  '牛腱': { 
    calories: 106, protein: 20.0, carbs: 0.0, fat: 2.3, fiber: 0,
    sodium: 55, cholesterol: 50, vitaminA: 3, vitaminC: 0, calcium: 4, iron: 3.2,
    category: '肉类' 
  },
  '牛肚': { 
    calories: 72, protein: 14.0, carbs: 0.0, fat: 1.6, fiber: 0,
    sodium: 60, cholesterol: 104, vitaminA: 2, vitaminC: 0, calcium: 38, iron: 1.8,
    category: '肉类' 
  },
  '羊肉': { 
    calories: 203, protein: 19.0, carbs: 0.0, fat: 14.0, fiber: 0,
    sodium: 65, cholesterol: 65, vitaminA: 11, vitaminC: 0, calcium: 6, iron: 2.3,
    category: '肉类' 
  },
  '羊排': { 
    calories: 294, protein: 18.0, carbs: 0.0, fat: 24.0, fiber: 0,
    sodium: 80, cholesterol: 85, vitaminA: 15, vitaminC: 0, calcium: 8, iron: 2.0,
    category: '肉类' 
  },
  '羊腿': { 
    calories: 180, protein: 20.0, carbs: 0.0, fat: 10.0, fiber: 0,
    sodium: 70, cholesterol: 60, vitaminA: 8, vitaminC: 0, calcium: 5, iron: 2.5,
    category: '肉类' 
  },
  '鸡肉': { 
    calories: 167, protein: 19.0, carbs: 0.0, fat: 9.0, fiber: 0,
    sodium: 72, cholesterol: 106, vitaminA: 42, vitaminC: 0, calcium: 9, iron: 1.4,
    category: '肉类' 
  },
  '鸡胸肉': { 
    calories: 133, protein: 23.0, carbs: 0.0, fat: 3.0, fiber: 0,
    sodium: 65, cholesterol: 82, vitaminA: 5, vitaminC: 0, calcium: 9, iron: 0.7,
    category: '肉类' 
  },
  '鸡腿': { 
    calories: 181, protein: 18.0, carbs: 0.0, fat: 11.0, fiber: 0,
    sodium: 80, cholesterol: 120, vitaminA: 50, vitaminC: 0, calcium: 10, iron: 1.5,
    category: '肉类' 
  },
  '鸡翅': { 
    calories: 194, protein: 17.0, carbs: 0.0, fat: 13.0, fiber: 0,
    sodium: 75, cholesterol: 113, vitaminA: 68, vitaminC: 0, calcium: 8, iron: 1.3,
    category: '肉类' 
  },
  '鸡爪': { 
    calories: 254, protein: 23.0, carbs: 0.0, fat: 17.0, fiber: 0,
    sodium: 170, cholesterol: 103, vitaminA: 0, vitaminC: 0, calcium: 36, iron: 1.4,
    category: '肉类' 
  },
  '鸡心': { 
    calories: 172, protein: 16.0, carbs: 0.0, fat: 11.0, fiber: 0,
    sodium: 95, cholesterol: 194, vitaminA: 910, vitaminC: 0, calcium: 4, iron: 4.7,
    category: '肉类' 
  },
  '鸡肝': { 
    calories: 121, protein: 17.0, carbs: 5.0, fat: 4.0, fiber: 0,
    sodium: 90, cholesterol: 356, vitaminA: 10414, vitaminC: 0, calcium: 7, iron: 12.0,
    category: '肉类' 
  },
  '炸鸡': { 
    calories: 298, protein: 18.0, carbs: 10.0, fat: 21.0, fiber: 0.5,
    sodium: 580, cholesterol: 125, vitaminA: 25, vitaminC: 0, calcium: 12, iron: 1.5,
    category: '肉类' 
  },
  '烤鸡': { 
    calories: 217, protein: 22.0, carbs: 0.0, fat: 13.0, fiber: 0,
    sodium: 450, cholesterol: 110, vitaminA: 45, vitaminC: 0, calcium: 10, iron: 1.4,
    category: '肉类' 
  },
  '鸭肉': { 
    calories: 240, protein: 15.0, carbs: 0.0, fat: 19.0, fiber: 0,
    sodium: 75, cholesterol: 94, vitaminA: 52, vitaminC: 0, calcium: 6, iron: 2.2,
    category: '肉类' 
  },
  '烤鸭': { 
    calories: 436, protein: 16.0, carbs: 0.0, fat: 42.0, fiber: 0,
    sodium: 180, cholesterol: 120, vitaminA: 65, vitaminC: 0, calcium: 8, iron: 2.5,
    category: '肉类' 
  },
  '鸭脖': { 
    calories: 178, protein: 16.0, carbs: 2.0, fat: 11.0, fiber: 0,
    sodium: 450, cholesterol: 95, vitaminA: 20, vitaminC: 0, calcium: 5, iron: 1.8,
    category: '肉类' 
  },
  '鸭翅': { 
    calories: 190, protein: 15.0, carbs: 0.0, fat: 14.0, fiber: 0,
    sodium: 85, cholesterol: 98, vitaminA: 45, vitaminC: 0, calcium: 6, iron: 2.0,
    category: '肉类' 
  },
  '鸭血': { 
    calories: 55, protein: 13.0, carbs: 0.0, fat: 0.3, fiber: 0,
    sodium: 170, cholesterol: 95, vitaminA: 0, vitaminC: 0, calcium: 5, iron: 30.5,
    category: '肉类' 
  },
  '鹅肉': { 
    calories: 251, protein: 18.0, carbs: 0.0, fat: 19.0, fiber: 0,
    sodium: 75, cholesterol: 96, vitaminA: 42, vitaminC: 0, calcium: 4, iron: 3.8,
    category: '肉类' 
  },
  '兔肉': { 
    calories: 102, protein: 20.0, carbs: 0.0, fat: 2.0, fiber: 0,
    sodium: 45, cholesterol: 59, vitaminA: 0, vitaminC: 0, calcium: 12, iron: 2.0,
    category: '肉类' 
  },
  '腊肉': { 
    calories: 692, protein: 12.0, carbs: 0.0, fat: 69.0, fiber: 0,
    sodium: 2300, cholesterol: 135, vitaminA: 0, vitaminC: 0, calcium: 10, iron: 2.5,
    category: '肉类' 
  },
  '香肠': { 
    calories: 508, protein: 12.0, carbs: 5.0, fat: 51.0, fiber: 0,
    sodium: 1420, cholesterol: 82, vitaminA: 0, vitaminC: 0, calcium: 5, iron: 1.5,
    category: '肉类' 
  },
  '火腿': { 
    calories: 330, protein: 14.0, carbs: 1.0, fat: 31.0, fiber: 0,
    sodium: 1950, cholesterol: 72, vitaminA: 0, vitaminC: 0, calcium: 8, iron: 1.2,
    category: '肉类' 
  },
  '培根': { 
    calories: 541, protein: 8.0, carbs: 1.0, fat: 56.0, fiber: 0,
    sodium: 1800, cholesterol: 68, vitaminA: 0, vitaminC: 0, calcium: 5, iron: 0.9,
    category: '肉类' 
  },
  '午餐肉': { 
    calories: 229, protein: 12.0, carbs: 5.0, fat: 18.0, fiber: 0,
    sodium: 980, cholesterol: 55, vitaminA: 0, vitaminC: 0, calcium: 10, iron: 0.8,
    category: '肉类' 
  },
  '肉丸': { 
    calories: 182, protein: 12.0, carbs: 8.0, fat: 11.0, fiber: 0.3,
    sodium: 650, cholesterol: 65, vitaminA: 5, vitaminC: 0, calcium: 15, iron: 1.2,
    category: '肉类' 
  },
  '牛肉丸': { 
    calories: 150, protein: 15.0, carbs: 5.0, fat: 7.0, fiber: 0.2,
    sodium: 580, cholesterol: 55, vitaminA: 3, vitaminC: 0, calcium: 12, iron: 1.8,
    category: '肉类' 
  },
  '鱼丸': { 
    calories: 107, protein: 12.0, carbs: 8.0, fat: 3.0, fiber: 0.2,
    sodium: 520, cholesterol: 45, vitaminA: 0, vitaminC: 0, calcium: 25, iron: 0.6,
    category: '肉类' 
  },
  '贡丸': { 
    calories: 165, protein: 13.0, carbs: 6.0, fat: 9.0, fiber: 0.2,
    sodium: 620, cholesterol: 58, vitaminA: 5, vitaminC: 0, calcium: 10, iron: 1.0,
    category: '肉类' 
  },

  // ==================== 海鲜类 ====================
  '鱼': { 
    calories: 104, protein: 18.0, carbs: 0.0, fat: 3.0, fiber: 0,
    sodium: 55, cholesterol: 55, vitaminA: 10, vitaminC: 0, calcium: 20, iron: 0.6,
    category: '海鲜类' 
  },
  '鱼肉': { 
    calories: 104, protein: 18.0, carbs: 0.0, fat: 3.0, fiber: 0,
    sodium: 55, cholesterol: 55, vitaminA: 10, vitaminC: 0, calcium: 20, iron: 0.6,
    category: '海鲜类' 
  },
  '草鱼': { 
    calories: 113, protein: 17.0, carbs: 0.0, fat: 5.0, fiber: 0,
    sodium: 46, cholesterol: 86, vitaminA: 11, vitaminC: 0, calcium: 38, iron: 0.8,
    category: '海鲜类' 
  },
  '鲤鱼': { 
    calories: 109, protein: 18.0, carbs: 0.0, fat: 4.0, fiber: 0,
    sodium: 54, cholesterol: 84, vitaminA: 25, vitaminC: 0, calcium: 50, iron: 1.0,
    category: '海鲜类' 
  },
  '鲫鱼': { 
    calories: 108, protein: 17.0, carbs: 0.0, fat: 4.0, fiber: 0,
    sodium: 41, cholesterol: 130, vitaminA: 17, vitaminC: 0, calcium: 79, iron: 1.3,
    category: '海鲜类' 
  },
  '鲈鱼': { 
    calories: 105, protein: 18.0, carbs: 0.0, fat: 3.0, fiber: 0,
    sodium: 60, cholesterol: 86, vitaminA: 19, vitaminC: 0, calcium: 138, iron: 2.0,
    category: '海鲜类' 
  },
  '带鱼': { 
    calories: 127, protein: 18.0, carbs: 0.0, fat: 5.0, fiber: 0,
    sodium: 150, cholesterol: 76, vitaminA: 29, vitaminC: 0, calcium: 43, iron: 1.2,
    category: '海鲜类' 
  },
  '黄鱼': { 
    calories: 99, protein: 18.0, carbs: 0.0, fat: 3.0, fiber: 0,
    sodium: 103, cholesterol: 86, vitaminA: 10, vitaminC: 0, calcium: 53, iron: 0.7,
    category: '海鲜类' 
  },
  '三文鱼': { 
    calories: 139, protein: 20.0, carbs: 0.0, fat: 6.0, fiber: 0,
    sodium: 63, cholesterol: 55, vitaminA: 20, vitaminC: 0, calcium: 15, iron: 0.8,
    category: '海鲜类' 
  },
  '金枪鱼': { 
    calories: 99, protein: 23.0, carbs: 0.0, fat: 1.0, fiber: 0,
    sodium: 50, cholesterol: 38, vitaminA: 10, vitaminC: 0, calcium: 12, iron: 1.0,
    category: '海鲜类' 
  },
  '鳕鱼': { 
    calories: 88, protein: 20.0, carbs: 0.0, fat: 0.8, fiber: 0,
    sodium: 130, cholesterol: 71, vitaminA: 14, vitaminC: 0, calcium: 42, iron: 0.5,
    category: '海鲜类' 
  },
  '秋刀鱼': { 
    calories: 310, protein: 18.0, carbs: 0.0, fat: 26.0, fiber: 0,
    sodium: 50, cholesterol: 75, vitaminA: 15, vitaminC: 0, calcium: 8, iron: 0.8,
    category: '海鲜类' 
  },
  '鲳鱼': { 
    calories: 140, protein: 18.0, carbs: 0.0, fat: 7.0, fiber: 0,
    sodium: 62, cholesterol: 77, vitaminA: 24, vitaminC: 0, calcium: 46, iron: 1.1,
    category: '海鲜类' 
  },
  '石斑鱼': { 
    calories: 92, protein: 19.0, carbs: 0.0, fat: 1.0, fiber: 0,
    sodium: 55, cholesterol: 50, vitaminA: 8, vitaminC: 0, calcium: 30, iron: 0.5,
    category: '海鲜类' 
  },
  '多宝鱼': { 
    calories: 102, protein: 19.0, carbs: 0.0, fat: 2.0, fiber: 0,
    sodium: 50, cholesterol: 55, vitaminA: 5, vitaminC: 0, calcium: 25, iron: 0.4,
    category: '海鲜类' 
  },
  '虾': { 
    calories: 87, protein: 18.0, carbs: 2.0, fat: 0.8, fiber: 0,
    sodium: 165, cholesterol: 193, vitaminA: 48, vitaminC: 0, calcium: 146, iron: 2.0,
    category: '海鲜类' 
  },
  '大虾': { 
    calories: 87, protein: 18.0, carbs: 2.0, fat: 0.8, fiber: 0,
    sodium: 165, cholesterol: 193, vitaminA: 48, vitaminC: 0, calcium: 146, iron: 2.0,
    category: '海鲜类' 
  },
  '基围虾': { 
    calories: 81, protein: 17.0, carbs: 2.0, fat: 0.6, fiber: 0,
    sodium: 120, cholesterol: 181, vitaminA: 40, vitaminC: 0, calcium: 83, iron: 1.5,
    category: '海鲜类' 
  },
  '小龙虾': { 
    calories: 93, protein: 14.0, carbs: 4.0, fat: 3.0, fiber: 0,
    sodium: 180, cholesterol: 120, vitaminA: 15, vitaminC: 0, calcium: 85, iron: 1.2,
    category: '海鲜类' 
  },
  '龙虾': { 
    calories: 90, protein: 19.0, carbs: 0.5, fat: 1.0, fiber: 0,
    sodium: 150, cholesterol: 95, vitaminA: 5, vitaminC: 0, calcium: 50, iron: 0.5,
    category: '海鲜类' 
  },
  '皮皮虾': { 
    calories: 101, protein: 17.0, carbs: 0.0, fat: 3.0, fiber: 0,
    sodium: 180, cholesterol: 177, vitaminA: 22, vitaminC: 0, calcium: 55, iron: 1.5,
    category: '海鲜类' 
  },
  '螃蟹': { 
    calories: 95, protein: 17.0, carbs: 2.0, fat: 2.0, fiber: 0,
    sodium: 270, cholesterol: 267, vitaminA: 389, vitaminC: 0, calcium: 126, iron: 2.9,
    category: '海鲜类' 
  },
  '大闸蟹': { 
    calories: 103, protein: 17.0, carbs: 2.0, fat: 2.6, fiber: 0,
    sodium: 193, cholesterol: 267, vitaminA: 389, vitaminC: 0, calcium: 126, iron: 2.9,
    category: '海鲜类' 
  },
  '梭子蟹': { 
    calories: 95, protein: 17.0, carbs: 2.0, fat: 2.0, fiber: 0,
    sodium: 260, cholesterol: 250, vitaminA: 350, vitaminC: 0, calcium: 120, iron: 2.5,
    category: '海鲜类' 
  },
  '扇贝': { 
    calories: 60, protein: 11.0, carbs: 3.0, fat: 0.6, fiber: 0,
    sodium: 340, cholesterol: 116, vitaminA: 0, vitaminC: 0, calcium: 142, iron: 7.2,
    category: '海鲜类' 
  },
  '生蚝': { 
    calories: 57, protein: 9.0, carbs: 4.0, fat: 1.0, fiber: 0,
    sodium: 270, cholesterol: 100, vitaminA: 27, vitaminC: 0, calcium: 35, iron: 5.0,
    category: '海鲜类' 
  },
  '牡蛎': { 
    calories: 73, protein: 9.0, carbs: 4.0, fat: 2.0, fiber: 0,
    sodium: 270, cholesterol: 100, vitaminA: 27, vitaminC: 0, calcium: 35, iron: 5.0,
    category: '海鲜类' 
  },
  '蛤蜊': { 
    calories: 62, protein: 10.0, carbs: 3.0, fat: 1.0, fiber: 0,
    sodium: 425, cholesterol: 156, vitaminA: 21, vitaminC: 0, calcium: 133, iron: 10.9,
    category: '海鲜类' 
  },
  '花甲': { 
    calories: 62, protein: 10.0, carbs: 3.0, fat: 1.0, fiber: 0,
    sodium: 425, cholesterol: 156, vitaminA: 21, vitaminC: 0, calcium: 133, iron: 10.9,
    category: '海鲜类' 
  },
  '蛏子': { 
    calories: 40, protein: 7.0, carbs: 2.0, fat: 0.5, fiber: 0,
    sodium: 175, cholesterol: 131, vitaminA: 2, vitaminC: 0, calcium: 134, iron: 33.6,
    category: '海鲜类' 
  },
  '鱿鱼': { 
    calories: 75, protein: 15.0, carbs: 3.0, fat: 1.0, fiber: 0,
    sodium: 110, cholesterol: 240, vitaminA: 16, vitaminC: 0, calcium: 43, iron: 0.5,
    category: '海鲜类' 
  },
  '章鱼': { 
    calories: 52, protein: 10.0, carbs: 2.0, fat: 0.8, fiber: 0,
    sodium: 210, cholesterol: 114, vitaminA: 7, vitaminC: 0, calcium: 38, iron: 0.8,
    category: '海鲜类' 
  },
  '八爪鱼': { 
    calories: 52, protein: 10.0, carbs: 2.0, fat: 0.8, fiber: 0,
    sodium: 210, cholesterol: 114, vitaminA: 7, vitaminC: 0, calcium: 38, iron: 0.8,
    category: '海鲜类' 
  },
  '墨鱼': { 
    calories: 83, protein: 15.0, carbs: 3.0, fat: 1.0, fiber: 0,
    sodium: 126, cholesterol: 226, vitaminA: 0, vitaminC: 0, calcium: 15, iron: 0.4,
    category: '海鲜类' 
  },
  '海参': { 
    calories: 78, protein: 16.0, carbs: 1.0, fat: 0.6, fiber: 0,
    sodium: 502, cholesterol: 51, vitaminA: 0, vitaminC: 0, calcium: 285, iron: 13.2,
    category: '海鲜类' 
  },
  '鲍鱼': { 
    calories: 84, protein: 12.0, carbs: 7.0, fat: 0.8, fiber: 0,
    sodium: 201, cholesterol: 242, vitaminA: 24, vitaminC: 0, calcium: 266, iron: 22.6,
    category: '海鲜类' 
  },
  '海蜇': { 
    calories: 33, protein: 5.0, carbs: 2.0, fat: 0.3, fiber: 0,
    sodium: 325, cholesterol: 8, vitaminA: 0, vitaminC: 0, calcium: 15, iron: 1.2,
    category: '海鲜类' 
  },
  '海带': { 
    calories: 12, protein: 1.2, carbs: 2.0, fat: 0.1, fiber: 0.5,
    sodium: 354, cholesterol: 0, vitaminA: 40, vitaminC: 0, calcium: 46, iron: 0.9,
    category: '海鲜类' 
  },
  '紫菜': { 
    calories: 207, protein: 26.0, carbs: 22.0, fat: 1.0, fiber: 21.0,
    sodium: 711, cholesterol: 0, vitaminA: 228, vitaminC: 2, calcium: 264, iron: 54.9,
    category: '海鲜类' 
  },

  // ==================== 蛋类 ====================
  '鸡蛋': { 
    calories: 144, protein: 13.0, carbs: 1.3, fat: 9.0, fiber: 0,
    sodium: 131, cholesterol: 585, vitaminA: 234, vitaminC: 0, calcium: 56, iron: 2.0,
    category: '蛋类' 
  },
  '鸡蛋清': { 
    calories: 60, protein: 11.0, carbs: 1.0, fat: 0.2, fiber: 0,
    sodium: 79, cholesterol: 0, vitaminA: 0, vitaminC: 0, calcium: 9, iron: 0.1,
    category: '蛋类' 
  },
  '鸡蛋黄': { 
    calories: 328, protein: 16.0, carbs: 1.0, fat: 29.0, fiber: 0,
    sodium: 54, cholesterol: 1510, vitaminA: 438, vitaminC: 0, calcium: 112, iron: 6.5,
    category: '蛋类' 
  },
  '鸭蛋': { 
    calories: 180, protein: 13.0, carbs: 1.0, fat: 14.0, fiber: 0,
    sodium: 106, cholesterol: 565, vitaminA: 261, vitaminC: 0, calcium: 62, iron: 2.9,
    category: '蛋类' 
  },
  '咸鸭蛋': { 
    calories: 190, protein: 12.0, carbs: 4.0, fat: 13.0, fiber: 0,
    sodium: 2706, cholesterol: 647, vitaminA: 134, vitaminC: 0, calcium: 118, iron: 3.6,
    category: '蛋类' 
  },
  '皮蛋': { 
    calories: 171, protein: 14.0, carbs: 2.0, fat: 11.0, fiber: 0,
    sodium: 543, cholesterol: 608, vitaminA: 0, vitaminC: 0, calcium: 26, iron: 2.3,
    category: '蛋类' 
  },
  '松花蛋': { 
    calories: 171, protein: 14.0, carbs: 2.0, fat: 11.0, fiber: 0,
    sodium: 543, cholesterol: 608, vitaminA: 0, vitaminC: 0, calcium: 26, iron: 2.3,
    category: '蛋类' 
  },
  '鹌鹑蛋': { 
    calories: 160, protein: 13.0, carbs: 1.0, fat: 11.0, fiber: 0,
    sodium: 138, cholesterol: 515, vitaminA: 337, vitaminC: 0, calcium: 47, iron: 3.2,
    category: '蛋类' 
  },
  '鹅蛋': { 
    calories: 196, protein: 11.0, carbs: 1.0, fat: 16.0, fiber: 0,
    sodium: 90, cholesterol: 704, vitaminA: 192, vitaminC: 0, calcium: 34, iron: 4.1,
    category: '蛋类' 
  },
  '煎蛋': { 
    calories: 196, protein: 13.0, carbs: 1.0, fat: 15.0, fiber: 0,
    sodium: 180, cholesterol: 595, vitaminA: 235, vitaminC: 0, calcium: 55, iron: 2.1,
    category: '蛋类' 
  },
  '荷包蛋': { 
    calories: 196, protein: 13.0, carbs: 1.0, fat: 15.0, fiber: 0,
    sodium: 180, cholesterol: 595, vitaminA: 235, vitaminC: 0, calcium: 55, iron: 2.1,
    category: '蛋类' 
  },
  '茶叶蛋': { 
    calories: 151, protein: 13.0, carbs: 2.0, fat: 10.0, fiber: 0,
    sodium: 420, cholesterol: 580, vitaminA: 220, vitaminC: 0, calcium: 50, iron: 1.8,
    category: '蛋类' 
  },
  '卤蛋': { 
    calories: 156, protein: 14.0, carbs: 2.0, fat: 10.0, fiber: 0,
    sodium: 480, cholesterol: 585, vitaminA: 230, vitaminC: 0, calcium: 52, iron: 1.9,
    category: '蛋类' 
  },
  '蒸蛋': { 
    calories: 65, protein: 6.0, carbs: 1.0, fat: 4.0, fiber: 0,
    sodium: 80, cholesterol: 200, vitaminA: 80, vitaminC: 0, calcium: 20, iron: 0.7,
    category: '蛋类' 
  },
  '蛋羹': { 
    calories: 65, protein: 6.0, carbs: 1.0, fat: 4.0, fiber: 0,
    sodium: 80, cholesterol: 200, vitaminA: 80, vitaminC: 0, calcium: 20, iron: 0.7,
    category: '蛋类' 
  },
  '炒蛋': { 
    calories: 175, protein: 12.0, carbs: 2.0, fat: 13.0, fiber: 0,
    sodium: 200, cholesterol: 590, vitaminA: 240, vitaminC: 0, calcium: 50, iron: 2.0,
    category: '蛋类' 
  },

  // ==================== 豆制品 ====================
  '豆腐': { 
    calories: 81, protein: 8.0, carbs: 2.0, fat: 4.0, fiber: 0.4,
    sodium: 7, cholesterol: 0, vitaminA: 0, vitaminC: 0, calcium: 164, iron: 1.9,
    category: '豆制品' 
  },
  '嫩豆腐': { 
    calories: 57, protein: 6.0, carbs: 2.0, fat: 3.0, fiber: 0.3,
    sodium: 5, cholesterol: 0, vitaminA: 0, vitaminC: 0, calcium: 120, iron: 1.5,
    category: '豆制品' 
  },
  '老豆腐': { 
    calories: 98, protein: 10.0, carbs: 2.0, fat: 5.0, fiber: 0.5,
    sodium: 8, cholesterol: 0, vitaminA: 0, vitaminC: 0, calcium: 180, iron: 2.2,
    category: '豆制品' 
  },
  '豆腐干': { 
    calories: 140, protein: 16.0, carbs: 4.0, fat: 6.0, fiber: 0.8,
    sodium: 690, cholesterol: 0, vitaminA: 0, vitaminC: 0, calcium: 308, iron: 4.9,
    category: '豆制品' 
  },
  '豆干': { 
    calories: 140, protein: 16.0, carbs: 4.0, fat: 6.0, fiber: 0.8,
    sodium: 690, cholesterol: 0, vitaminA: 0, vitaminC: 0, calcium: 308, iron: 4.9,
    category: '豆制品' 
  },
  '豆腐皮': { 
    calories: 409, protein: 44.0, carbs: 18.0, fat: 18.0, fiber: 0.2,
    sodium: 9, cholesterol: 0, vitaminA: 0, vitaminC: 0, calcium: 116, iron: 13.9,
    category: '豆制品' 
  },
  '腐竹': { 
    calories: 459, protein: 44.0, carbs: 22.0, fat: 22.0, fiber: 1.0,
    sodium: 26, cholesterol: 0, vitaminA: 0, vitaminC: 0, calcium: 77, iron: 16.5,
    category: '豆制品' 
  },
  '油豆腐': { 
    calories: 244, protein: 17.0, carbs: 5.0, fat: 17.0, fiber: 0.5,
    sodium: 15, cholesterol: 0, vitaminA: 5, vitaminC: 0, calcium: 147, iron: 3.2,
    category: '豆制品' 
  },
  '豆腐泡': { 
    calories: 244, protein: 17.0, carbs: 5.0, fat: 17.0, fiber: 0.5,
    sodium: 15, cholesterol: 0, vitaminA: 5, vitaminC: 0, calcium: 147, iron: 3.2,
    category: '豆制品' 
  },
  '豆浆': { 
    calories: 31, protein: 2.9, carbs: 2.0, fat: 1.5, fiber: 0.3,
    sodium: 3, cholesterol: 0, vitaminA: 0, vitaminC: 0, calcium: 10, iron: 0.4,
    category: '豆制品' 
  },
  '豆奶': { 
    calories: 54, protein: 3.0, carbs: 6.0, fat: 2.0, fiber: 0.3,
    sodium: 5, cholesterol: 0, vitaminA: 0, vitaminC: 0, calcium: 15, iron: 0.5,
    category: '豆制品' 
  },
  '豆花': { 
    calories: 15, protein: 1.5, carbs: 1.0, fat: 0.5, fiber: 0.1,
    sodium: 3, cholesterol: 0, vitaminA: 0, vitaminC: 0, calcium: 18, iron: 0.3,
    category: '豆制品' 
  },
  '豆腐脑': { 
    calories: 15, protein: 1.5, carbs: 1.0, fat: 0.5, fiber: 0.1,
    sodium: 3, cholesterol: 0, vitaminA: 0, vitaminC: 0, calcium: 18, iron: 0.3,
    category: '豆制品' 
  },
  '臭豆腐': { 
    calories: 178, protein: 12.0, carbs: 5.0, fat: 12.0, fiber: 0.5,
    sodium: 450, cholesterol: 0, vitaminA: 0, vitaminC: 0, calcium: 100, iron: 2.5,
    category: '豆制品' 
  },
  '毛豆': { 
    calories: 123, protein: 13.0, carbs: 10.0, fat: 5.0, fiber: 4.0,
    sodium: 3, cholesterol: 0, vitaminA: 22, vitaminC: 27, calcium: 135, iron: 3.5,
    category: '豆制品' 
  },
  '黄豆': { 
    calories: 359, protein: 35.0, carbs: 20.0, fat: 16.0, fiber: 15.0,
    sodium: 2, cholesterol: 0, vitaminA: 0, vitaminC: 0, calcium: 191, iron: 8.2,
    category: '豆制品' 
  },
  '黑豆': { 
    calories: 381, protein: 36.0, carbs: 23.0, fat: 16.0, fiber: 10.0,
    sodium: 3, cholesterol: 0, vitaminA: 0, vitaminC: 0, calcium: 224, iron: 7.0,
    category: '豆制品' 
  },
  '红豆': { 
    calories: 324, protein: 20.0, carbs: 60.0, fat: 0.6, fiber: 8.0,
    sodium: 2, cholesterol: 0, vitaminA: 0, vitaminC: 0, calcium: 74, iron: 7.4,
    category: '豆制品' 
  },
  '绿豆': { 
    calories: 316, protein: 21.0, carbs: 56.0, fat: 0.8, fiber: 6.0,
    sodium: 3, cholesterol: 0, vitaminA: 0, vitaminC: 0, calcium: 81, iron: 6.5,
    category: '豆制品' 
  },
  '纳豆': { 
    calories: 200, protein: 17.0, carbs: 12.0, fat: 10.0, fiber: 5.0,
    sodium: 4, cholesterol: 0, vitaminA: 0, vitaminC: 0, calcium: 217, iron: 8.6,
    category: '豆制品' 
  },

  // ==================== 乳制品 ====================
  '牛奶': { 
    calories: 54, protein: 3.0, carbs: 5.0, fat: 3.2, fiber: 0,
    sodium: 37, cholesterol: 15, vitaminA: 24, vitaminC: 1, calcium: 104, iron: 0.3,
    category: '乳制品' 
  },
  '全脂牛奶': { 
    calories: 64, protein: 3.3, carbs: 5.0, fat: 3.7, fiber: 0,
    sodium: 40, cholesterol: 18, vitaminA: 28, vitaminC: 1, calcium: 110, iron: 0.3,
    category: '乳制品' 
  },
  '脱脂牛奶': { 
    calories: 35, protein: 3.4, carbs: 5.0, fat: 0.1, fiber: 0,
    sodium: 42, cholesterol: 2, vitaminA: 0, vitaminC: 1, calcium: 120, iron: 0.3,
    category: '乳制品' 
  },
  '低脂牛奶': { 
    calories: 46, protein: 3.3, carbs: 5.0, fat: 1.5, fiber: 0,
    sodium: 41, cholesterol: 8, vitaminA: 10, vitaminC: 1, calcium: 115, iron: 0.3,
    category: '乳制品' 
  },
  '酸奶': { 
    calories: 72, protein: 2.5, carbs: 10.0, fat: 2.7, fiber: 0,
    sodium: 40, cholesterol: 10, vitaminA: 20, vitaminC: 1, calcium: 118, iron: 0.2,
    category: '乳制品' 
  },
  '原味酸奶': { 
    calories: 72, protein: 2.5, carbs: 10.0, fat: 2.7, fiber: 0,
    sodium: 40, cholesterol: 10, vitaminA: 20, vitaminC: 1, calcium: 118, iron: 0.2,
    category: '乳制品' 
  },
  '希腊酸奶': { 
    calories: 97, protein: 9.0, carbs: 4.0, fat: 5.0, fiber: 0,
    sodium: 35, cholesterol: 12, vitaminA: 25, vitaminC: 0, calcium: 100, iron: 0.1,
    category: '乳制品' 
  },
  '奶酪': { 
    calories: 328, protein: 26.0, carbs: 1.0, fat: 25.0, fiber: 0,
    sodium: 585, cholesterol: 72, vitaminA: 152, vitaminC: 0, calcium: 527, iron: 0.6,
    category: '乳制品' 
  },
  '芝士': { 
    calories: 328, protein: 26.0, carbs: 1.0, fat: 25.0, fiber: 0,
    sodium: 585, cholesterol: 72, vitaminA: 152, vitaminC: 0, calcium: 527, iron: 0.6,
    category: '乳制品' 
  },
  '奶油': { 
    calories: 309, protein: 2.1, carbs: 4.0, fat: 33.0, fiber: 0,
    sodium: 40, cholesterol: 110, vitaminA: 104, vitaminC: 0, calcium: 20, iron: 0.2,
    category: '乳制品' 
  },
  '黄油': { 
    calories: 717, protein: 0.9, carbs: 0.1, fat: 81.0, fiber: 0,
    sodium: 643, cholesterol: 215, vitaminA: 684, vitaminC: 0, calcium: 24, iron: 0.1,
    category: '乳制品' 
  },
  '炼乳': { 
    calories: 332, protein: 8.0, carbs: 56.0, fat: 9.0, fiber: 0,
    sodium: 80, cholesterol: 30, vitaminA: 70, vitaminC: 2, calcium: 240, iron: 0.3,
    category: '乳制品' 
  },

  // ==================== 坚果类 ====================
  '花生': { 
    calories: 574, protein: 24.0, carbs: 16.0, fat: 49.0, fiber: 8.0,
    sodium: 3, cholesterol: 0, vitaminA: 0, vitaminC: 0, calcium: 39, iron: 2.1,
    category: '坚果类' 
  },
  '核桃': { 
    calories: 654, protein: 15.0, carbs: 14.0, fat: 65.0, fiber: 6.7,
    sodium: 2, cholesterol: 0, vitaminA: 0, vitaminC: 1, calcium: 98, iron: 2.9,
    category: '坚果类' 
  },
  '杏仁': { 
    calories: 579, protein: 21.0, carbs: 22.0, fat: 50.0, fiber: 12.0,
    sodium: 1, cholesterol: 0, vitaminA: 0, vitaminC: 0, calcium: 248, iron: 4.2,
    category: '坚果类' 
  },
  '腰果': { 
    calories: 553, protein: 18.0, carbs: 30.0, fat: 44.0, fiber: 3.3,
    sodium: 12, cholesterol: 0, vitaminA: 0, vitaminC: 0, calcium: 37, iron: 6.7,
    category: '坚果类' 
  },
  '开心果': { 
    calories: 562, protein: 20.0, carbs: 28.0, fat: 45.0, fiber: 10.0,
    sodium: 1, cholesterol: 0, vitaminA: 13, vitaminC: 3, calcium: 107, iron: 4.2,
    category: '坚果类' 
  },
  '榛子': { 
    calories: 628, protein: 15.0, carbs: 17.0, fat: 61.0, fiber: 9.7,
    sodium: 0, cholesterol: 0, vitaminA: 3, vitaminC: 2, calcium: 114, iron: 4.7,
    category: '坚果类' 
  },
  '夏威夷果': { 
    calories: 718, protein: 8.0, carbs: 14.0, fat: 76.0, fiber: 8.6,
    sodium: 5, cholesterol: 0, vitaminA: 0, vitaminC: 1, calcium: 85, iron: 3.7,
    category: '坚果类' 
  },
  '碧根果': { 
    calories: 691, protein: 9.0, carbs: 14.0, fat: 72.0, fiber: 9.6,
    sodium: 0, cholesterol: 0, vitaminA: 3, vitaminC: 1, calcium: 70, iron: 2.5,
    category: '坚果类' 
  },
  '巴旦木': { 
    calories: 579, protein: 21.0, carbs: 22.0, fat: 50.0, fiber: 12.0,
    sodium: 1, cholesterol: 0, vitaminA: 0, vitaminC: 0, calcium: 248, iron: 4.2,
    category: '坚果类' 
  },
  '松子': { 
    calories: 673, protein: 14.0, carbs: 13.0, fat: 68.0, fiber: 3.7,
    sodium: 2, cholesterol: 0, vitaminA: 1, vitaminC: 1, calcium: 8, iron: 5.5,
    category: '坚果类' 
  },
  '板栗': { 
    calories: 185, protein: 4.2, carbs: 42.0, fat: 0.7, fiber: 5.6,
    sodium: 2, cholesterol: 0, vitaminA: 5, vitaminC: 24, calcium: 17, iron: 1.1,
    category: '坚果类' 
  },
  '瓜子': { 
    calories: 606, protein: 23.0, carbs: 13.0, fat: 53.0, fiber: 4.5,
    sodium: 3, cholesterol: 0, vitaminA: 0, vitaminC: 0, calcium: 1, iron: 2.9,
    category: '坚果类' 
  },
  '南瓜子': { 
    calories: 559, protein: 30.0, carbs: 10.0, fat: 49.0, fiber: 6.0,
    sodium: 7, cholesterol: 0, vitaminA: 0, vitaminC: 0, calcium: 46, iron: 8.8,
    category: '坚果类' 
  },
  '西瓜子': { 
    calories: 573, protein: 28.0, carbs: 11.0, fat: 51.0, fiber: 5.8,
    sodium: 3, cholesterol: 0, vitaminA: 0, vitaminC: 0, calcium: 8, iron: 8.2,
    category: '坚果类' 
  },

  // ==================== 饮料类 ====================
  '可乐': { 
    calories: 43, protein: 0.0, carbs: 11.0, fat: 0.0, fiber: 0,
    sodium: 4, cholesterol: 0, vitaminA: 0, vitaminC: 0, calcium: 2, iron: 0.1,
    category: '饮料' 
  },
  '雪碧': { 
    calories: 42, protein: 0.0, carbs: 11.0, fat: 0.0, fiber: 0,
    sodium: 4, cholesterol: 0, vitaminA: 0, vitaminC: 0, calcium: 2, iron: 0.1,
    category: '饮料' 
  },
  '芬达': { 
    calories: 44, protein: 0.0, carbs: 11.0, fat: 0.0, fiber: 0,
    sodium: 5, cholesterol: 0, vitaminA: 0, vitaminC: 0, calcium: 2, iron: 0.1,
    category: '饮料' 
  },
  '奶茶': { 
    calories: 65, protein: 1.0, carbs: 13.0, fat: 2.0, fiber: 0,
    sodium: 25, cholesterol: 5, vitaminA: 5, vitaminC: 0, calcium: 20, iron: 0.2,
    category: '饮料' 
  },
  '珍珠奶茶': { 
    calories: 98, protein: 1.5, carbs: 20.0, fat: 2.0, fiber: 0.3,
    sodium: 30, cholesterol: 8, vitaminA: 8, vitaminC: 0, calcium: 25, iron: 0.3,
    category: '饮料' 
  },
  '咖啡': { 
    calories: 2, protein: 0.3, carbs: 0.0, fat: 0.0, fiber: 0,
    sodium: 2, cholesterol: 0, vitaminA: 0, vitaminC: 0, calcium: 2, iron: 0.0,
    category: '饮料' 
  },
  '黑咖啡': { 
    calories: 2, protein: 0.3, carbs: 0.0, fat: 0.0, fiber: 0,
    sodium: 2, cholesterol: 0, vitaminA: 0, vitaminC: 0, calcium: 2, iron: 0.0,
    category: '饮料' 
  },
  '拿铁': { 
    calories: 61, protein: 3.2, carbs: 5.0, fat: 3.0, fiber: 0,
    sodium: 38, cholesterol: 10, vitaminA: 14, vitaminC: 0, calcium: 80, iron: 0.1,
    category: '饮料' 
  },
  '卡布奇诺': { 
    calories: 74, protein: 3.5, carbs: 6.0, fat: 4.0, fiber: 0,
    sodium: 40, cholesterol: 12, vitaminA: 18, vitaminC: 0, calcium: 90, iron: 0.1,
    category: '饮料' 
  },
  '美式咖啡': { 
    calories: 2, protein: 0.3, carbs: 0.0, fat: 0.0, fiber: 0,
    sodium: 2, cholesterol: 0, vitaminA: 0, vitaminC: 0, calcium: 2, iron: 0.0,
    category: '饮料' 
  },
  '摩卡': { 
    calories: 128, protein: 4.0, carbs: 14.0, fat: 6.0, fiber: 0.5,
    sodium: 50, cholesterol: 15, vitaminA: 20, vitaminC: 0, calcium: 100, iron: 0.3,
    category: '饮料' 
  },
  '茶': { 
    calories: 0, protein: 0.0, carbs: 0.0, fat: 0.0, fiber: 0,
    sodium: 0, cholesterol: 0, vitaminA: 0, vitaminC: 0, calcium: 0, iron: 0.0,
    category: '饮料' 
  },
  '绿茶': { 
    calories: 0, protein: 0.0, carbs: 0.0, fat: 0.0, fiber: 0,
    sodium: 0, cholesterol: 0, vitaminA: 0, vitaminC: 0, calcium: 0, iron: 0.0,
    category: '饮料' 
  },
  '红茶': { 
    calories: 0, protein: 0.0, carbs: 0.0, fat: 0.0, fiber: 0,
    sodium: 0, cholesterol: 0, vitaminA: 0, vitaminC: 0, calcium: 0, iron: 0.0,
    category: '饮料' 
  },
  '乌龙茶': { 
    calories: 0, protein: 0.0, carbs: 0.0, fat: 0.0, fiber: 0,
    sodium: 0, cholesterol: 0, vitaminA: 0, vitaminC: 0, calcium: 0, iron: 0.0,
    category: '饮料' 
  },
  '果汁': { 
    calories: 45, protein: 0.5, carbs: 11.0, fat: 0.1, fiber: 0.2,
    sodium: 5, cholesterol: 0, vitaminA: 5, vitaminC: 20, calcium: 5, iron: 0.2,
    category: '饮料' 
  },
  '橙汁': { 
    calories: 45, protein: 0.7, carbs: 10.0, fat: 0.2, fiber: 0.2,
    sodium: 1, cholesterol: 0, vitaminA: 10, vitaminC: 50, calcium: 11, iron: 0.2,
    category: '饮料' 
  },
  '苹果汁': { 
    calories: 46, protein: 0.1, carbs: 11.0, fat: 0.1, fiber: 0.1,
    sodium: 4, cholesterol: 0, vitaminA: 0, vitaminC: 1, calcium: 3, iron: 0.1,
    category: '饮料' 
  },
  '葡萄汁': { 
    calories: 60, protein: 0.4, carbs: 15.0, fat: 0.1, fiber: 0.2,
    sodium: 5, cholesterol: 0, vitaminA: 0, vitaminC: 1, calcium: 8, iron: 0.3,
    category: '饮料' 
  },
  '西瓜汁': { 
    calories: 30, protein: 0.6, carbs: 7.0, fat: 0.1, fiber: 0.1,
    sodium: 2, cholesterol: 0, vitaminA: 28, vitaminC: 6, calcium: 4, iron: 0.2,
    category: '饮料' 
  },
  '柠檬水': { 
    calories: 6, protein: 0.1, carbs: 2.0, fat: 0.0, fiber: 0,
    sodium: 1, cholesterol: 0, vitaminA: 0, vitaminC: 18, calcium: 6, iron: 0.0,
    category: '饮料' 
  },
  '蜂蜜水': { 
    calories: 31, protein: 0.1, carbs: 8.0, fat: 0.0, fiber: 0,
    sodium: 2, cholesterol: 0, vitaminA: 0, vitaminC: 0, calcium: 2, iron: 0.1,
    category: '饮料' 
  },
  '运动饮料': { 
    calories: 26, protein: 0.0, carbs: 6.0, fat: 0.0, fiber: 0,
    sodium: 48, cholesterol: 0, vitaminA: 0, vitaminC: 0, calcium: 2, iron: 0.0,
    category: '饮料' 
  },
  '红牛': { 
    calories: 47, protein: 0.3, carbs: 11.0, fat: 0.0, fiber: 0,
    sodium: 80, cholesterol: 0, vitaminA: 0, vitaminC: 0, calcium: 4, iron: 0.0,
    category: '饮料' 
  },
  '啤酒': { 
    calories: 32, protein: 0.4, carbs: 0.0, fat: 0.0, fiber: 0,
    sodium: 4, cholesterol: 0, vitaminA: 0, vitaminC: 0, calcium: 4, iron: 0.0,
    category: '饮料' 
  },
  '白酒': { 
    calories: 298, protein: 0.0, carbs: 0.0, fat: 0.0, fiber: 0,
    sodium: 0, cholesterol: 0, vitaminA: 0, vitaminC: 0, calcium: 0, iron: 0.0,
    category: '饮料' 
  },
  '红酒': { 
    calories: 74, protein: 0.1, carbs: 2.0, fat: 0.0, fiber: 0,
    sodium: 4, cholesterol: 0, vitaminA: 0, vitaminC: 0, calcium: 8, iron: 0.4,
    category: '饮料' 
  },

  // ==================== 零食甜点 ====================
  '蛋糕': { 
    calories: 348, protein: 5.0, carbs: 52.0, fat: 14.0, fiber: 0.5,
    sodium: 300, cholesterol: 55, vitaminA: 50, vitaminC: 0, calcium: 25, iron: 1.0,
    category: '零食' 
  },
  '奶油蛋糕': { 
    calories: 378, protein: 5.0, carbs: 50.0, fat: 18.0, fiber: 0.3,
    sodium: 320, cholesterol: 80, vitaminA: 80, vitaminC: 0, calcium: 30, iron: 0.8,
    category: '零食' 
  },
  '芝士蛋糕': { 
    calories: 321, protein: 6.0, carbs: 26.0, fat: 22.0, fiber: 0.2,
    sodium: 380, cholesterol: 65, vitaminA: 120, vitaminC: 0, calcium: 80, iron: 0.6,
    category: '零食' 
  },
  '巧克力蛋糕': { 
    calories: 352, protein: 5.0, carbs: 48.0, fat: 16.0, fiber: 0.8,
    sodium: 290, cholesterol: 50, vitaminA: 30, vitaminC: 0, calcium: 22, iron: 1.5,
    category: '零食' 
  },
  '饼干': { 
    calories: 433, protein: 6.0, carbs: 68.0, fat: 17.0, fiber: 1.5,
    sodium: 450, cholesterol: 25, vitaminA: 0, vitaminC: 0, calcium: 35, iron: 1.5,
    category: '零食' 
  },
  '曲奇': { 
    calories: 464, protein: 5.0, carbs: 64.0, fat: 21.0, fiber: 1.2,
    sodium: 380, cholesterol: 30, vitaminA: 0, vitaminC: 0, calcium: 25, iron: 1.2,
    category: '零食' 
  },
  '苏打饼干': { 
    calories: 408, protein: 8.0, carbs: 72.0, fat: 11.0, fiber: 1.5,
    sodium: 600, cholesterol: 0, vitaminA: 0, vitaminC: 0, calcium: 40, iron: 1.8,
    category: '零食' 
  },
  '巧克力': { 
    calories: 589, protein: 5.0, carbs: 51.0, fat: 42.0, fiber: 3.5,
    sodium: 35, cholesterol: 10, vitaminA: 10, vitaminC: 0, calcium: 50, iron: 2.5,
    category: '零食' 
  },
  '黑巧克力': { 
    calories: 598, protein: 8.0, carbs: 45.0, fat: 43.0, fiber: 7.0,
    sodium: 20, cholesterol: 5, vitaminA: 0, vitaminC: 0, calcium: 73, iron: 12.0,
    category: '零食' 
  },
  '牛奶巧克力': { 
    calories: 535, protein: 8.0, carbs: 59.0, fat: 30.0, fiber: 2.5,
    sodium: 80, cholesterol: 20, vitaminA: 50, vitaminC: 0, calcium: 190, iron: 1.5,
    category: '零食' 
  },
  '冰淇淋': { 
    calories: 207, protein: 3.5, carbs: 24.0, fat: 11.0, fiber: 0.5,
    sodium: 80, cholesterol: 45, vitaminA: 60, vitaminC: 1, calcium: 130, iron: 0.2,
    category: '零食' 
  },
  '雪糕': { 
    calories: 180, protein: 3.0, carbs: 22.0, fat: 9.0, fiber: 0.3,
    sodium: 60, cholesterol: 35, vitaminA: 45, vitaminC: 0, calcium: 100, iron: 0.2,
    category: '零食' 
  },
  '冰棍': { 
    calories: 80, protein: 0.5, carbs: 20.0, fat: 0.1, fiber: 0,
    sodium: 10, cholesterol: 0, vitaminA: 0, vitaminC: 0, calcium: 5, iron: 0.1,
    category: '零食' 
  },
  '薯片': { 
    calories: 536, protein: 7.0, carbs: 50.0, fat: 35.0, fiber: 3.8,
    sodium: 525, cholesterol: 0, vitaminA: 0, vitaminC: 20, calcium: 20, iron: 1.8,
    category: '零食' 
  },
  '薯条': { 
    calories: 312, protein: 4.0, carbs: 38.0, fat: 16.0, fiber: 2.8,
    sodium: 210, cholesterol: 0, vitaminA: 0, vitaminC: 6, calcium: 12, iron: 0.8,
    category: '零食' 
  },
  '爆米花': { 
    calories: 387, protein: 12.0, carbs: 78.0, fat: 4.0, fiber: 10.0,
    sodium: 8, cholesterol: 0, vitaminA: 0, vitaminC: 0, calcium: 7, iron: 2.7,
    category: '零食' 
  },
  '甜甜圈': { 
    calories: 452, protein: 5.0, carbs: 51.0, fat: 25.0, fiber: 1.2,
    sodium: 350, cholesterol: 25, vitaminA: 10, vitaminC: 0, calcium: 20, iron: 1.0,
    category: '零食' 
  },
  '马卡龙': { 
    calories: 424, protein: 6.0, carbs: 57.0, fat: 19.0, fiber: 1.0,
    sodium: 80, cholesterol: 15, vitaminA: 5, vitaminC: 0, calcium: 15, iron: 0.5,
    category: '零食' 
  },
  '泡芙': { 
    calories: 283, protein: 5.0, carbs: 32.0, fat: 15.0, fiber: 0.5,
    sodium: 180, cholesterol: 55, vitaminA: 40, vitaminC: 0, calcium: 25, iron: 0.6,
    category: '零食' 
  },
  '蛋挞': { 
    calories: 300, protein: 4.0, carbs: 32.0, fat: 17.0, fiber: 0.3,
    sodium: 120, cholesterol: 80, vitaminA: 60, vitaminC: 0, calcium: 30, iron: 0.5,
    category: '零食' 
  },
  '布丁': { 
    calories: 150, protein: 3.0, carbs: 22.0, fat: 5.0, fiber: 0,
    sodium: 60, cholesterol: 50, vitaminA: 30, vitaminC: 0, calcium: 80, iron: 0.2,
    category: '零食' 
  },
  '果冻': { 
    calories: 60, protein: 1.0, carbs: 14.0, fat: 0.0, fiber: 0.2,
    sodium: 20, cholesterol: 0, vitaminA: 0, vitaminC: 0, calcium: 5, iron: 0.1,
    category: '零食' 
  },
  '棉花糖': { 
    calories: 321, protein: 2.0, carbs: 79.0, fat: 0.2, fiber: 0,
    sodium: 40, cholesterol: 0, vitaminA: 0, vitaminC: 0, calcium: 5, iron: 0.1,
    category: '零食' 
  },
  '软糖': { 
    calories: 343, protein: 4.0, carbs: 78.0, fat: 0.5, fiber: 0,
    sodium: 30, cholesterol: 0, vitaminA: 0, vitaminC: 0, calcium: 10, iron: 0.2,
    category: '零食' 
  },
  '口香糖': { 
    calories: 360, protein: 0.0, carbs: 90.0, fat: 0.0, fiber: 0,
    sodium: 0, cholesterol: 0, vitaminA: 0, vitaminC: 0, calcium: 0, iron: 0.0,
    category: '零食' 
  },
  '蜜饯': { 
    calories: 321, protein: 1.0, carbs: 80.0, fat: 0.2, fiber: 2.0,
    sodium: 250, cholesterol: 0, vitaminA: 0, vitaminC: 0, calcium: 20, iron: 0.5,
    category: '零食' 
  },
  '果脯': { 
    calories: 321, protein: 1.0, carbs: 80.0, fat: 0.2, fiber: 2.0,
    sodium: 250, cholesterol: 0, vitaminA: 0, vitaminC: 0, calcium: 20, iron: 0.5,
    category: '零食' 
  },
  '话梅': { 
    calories: 159, protein: 1.0, carbs: 40.0, fat: 0.2, fiber: 3.0,
    sodium: 950, cholesterol: 0, vitaminA: 0, vitaminC: 0, calcium: 15, iron: 0.4,
    category: '零食' 
  },

  // ==================== 快餐/外卖 ====================
  '麻辣烫': { 
    calories: 85, protein: 5.0, carbs: 10.0, fat: 3.0, fiber: 1.5,
    sodium: 850, cholesterol: 25, vitaminA: 50, vitaminC: 15, calcium: 40, iron: 1.2,
    category: '快餐' 
  },
  '火锅': { 
    calories: 150, protein: 10.0, carbs: 8.0, fat: 10.0, fiber: 1.0,
    sodium: 1200, cholesterol: 60, vitaminA: 30, vitaminC: 10, calcium: 35, iron: 1.5,
    category: '快餐' 
  },
  '烧烤': { 
    calories: 210, protein: 15.0, carbs: 5.0, fat: 15.0, fiber: 0.5,
    sodium: 680, cholesterol: 75, vitaminA: 15, vitaminC: 3, calcium: 20, iron: 2.0,
    category: '快餐' 
  },
  '烤串': { 
    calories: 250, protein: 18.0, carbs: 3.0, fat: 19.0, fiber: 0.3,
    sodium: 720, cholesterol: 80, vitaminA: 12, vitaminC: 2, calcium: 18, iron: 2.2,
    category: '快餐' 
  },
  '炸鸡排': { 
    calories: 312, protein: 18.0, carbs: 15.0, fat: 21.0, fiber: 0.5,
    sodium: 650, cholesterol: 95, vitaminA: 20, vitaminC: 0, calcium: 15, iron: 1.5,
    category: '快餐' 
  },
  '鸡米花': { 
    calories: 298, protein: 15.0, carbs: 18.0, fat: 19.0, fiber: 0.5,
    sodium: 580, cholesterol: 85, vitaminA: 15, vitaminC: 0, calcium: 12, iron: 1.3,
    category: '快餐' 
  },
  '鸡块': { 
    calories: 265, protein: 14.0, carbs: 12.0, fat: 18.0, fiber: 0.3,
    sodium: 520, cholesterol: 75, vitaminA: 12, vitaminC: 0, calcium: 10, iron: 1.2,
    category: '快餐' 
  },
  '沙拉': { 
    calories: 20, protein: 1.5, carbs: 3.0, fat: 0.3, fiber: 1.2,
    sodium: 15, cholesterol: 0, vitaminA: 100, vitaminC: 20, calcium: 30, iron: 0.8,
    category: '快餐' 
  },
  '凯撒沙拉': { 
    calories: 110, protein: 5.0, carbs: 8.0, fat: 7.0, fiber: 1.5,
    sodium: 280, cholesterol: 15, vitaminA: 120, vitaminC: 15, calcium: 60, iron: 1.0,
    category: '快餐' 
  },
  '关东煮': { 
    calories: 80, protein: 5.0, carbs: 10.0, fat: 2.0, fiber: 0.5,
    sodium: 650, cholesterol: 20, vitaminA: 5, vitaminC: 2, calcium: 25, iron: 0.8,
    category: '快餐' 
  },
  '肉夹馍': { 
    calories: 350, protein: 12.0, carbs: 40.0, fat: 15.0, fiber: 1.0,
    sodium: 580, cholesterol: 45, vitaminA: 10, vitaminC: 2, calcium: 30, iron: 2.0,
    category: '快餐' 
  },
  '热干面': { 
    calories: 179, protein: 6.0, carbs: 30.0, fat: 5.0, fiber: 1.0,
    sodium: 850, cholesterol: 0, vitaminA: 5, vitaminC: 0, calcium: 20, iron: 1.5,
    category: '快餐' 
  },
  '酸辣粉': { 
    calories: 98, protein: 2.0, carbs: 20.0, fat: 1.5, fiber: 0.8,
    sodium: 920, cholesterol: 0, vitaminA: 5, vitaminC: 5, calcium: 15, iron: 0.8,
    category: '快餐' 
  },
  '螺蛳粉': { 
    calories: 123, protein: 4.0, carbs: 22.0, fat: 2.5, fiber: 1.2,
    sodium: 1100, cholesterol: 5, vitaminA: 10, vitaminC: 8, calcium: 25, iron: 1.0,
    category: '快餐' 
  },
  '担担面': { 
    calories: 185, protein: 7.0, carbs: 26.0, fat: 6.0, fiber: 0.8,
    sodium: 780, cholesterol: 25, vitaminA: 10, vitaminC: 3, calcium: 25, iron: 1.5,
    category: '快餐' 
  },
  '牛肉面': { 
    calories: 175, protein: 10.0, carbs: 25.0, fat: 4.0, fiber: 0.8,
    sodium: 850, cholesterol: 35, vitaminA: 15, vitaminC: 5, calcium: 30, iron: 2.0,
    category: '快餐' 
  },
  '兰州拉面': { 
    calories: 175, protein: 10.0, carbs: 25.0, fat: 4.0, fiber: 0.8,
    sodium: 850, cholesterol: 35, vitaminA: 15, vitaminC: 5, calcium: 30, iron: 2.0,
    category: '快餐' 
  },
  '炸酱面': { 
    calories: 163, protein: 6.0, carbs: 28.0, fat: 3.5, fiber: 0.8,
    sodium: 720, cholesterol: 20, vitaminA: 8, vitaminC: 4, calcium: 22, iron: 1.3,
    category: '快餐' 
  },
  '手抓饼': { 
    calories: 305, protein: 7.0, carbs: 42.0, fat: 12.0, fiber: 1.0,
    sodium: 480, cholesterol: 25, vitaminA: 10, vitaminC: 0, calcium: 25, iron: 1.5,
    category: '快餐' 
  },
  '鸡蛋灌饼': { 
    calories: 285, protein: 8.0, carbs: 38.0, fat: 11.0, fiber: 0.8,
    sodium: 420, cholesterol: 80, vitaminA: 35, vitaminC: 2, calcium: 35, iron: 1.8,
    category: '快餐' 
  },
};

/**
 * 查找食物营养信息
 * @param {string} foodName - 食物名称
 * @returns {Object} 营养信息
 */
function findNutrition(foodName) {
  // 精确匹配
  if (NUTRITION_DB[foodName]) {
    return { ...NUTRITION_DB[foodName], name: foodName, confidence: 1, unit: '100g' };
  }

  // 模糊匹配
  for (const [name, data] of Object.entries(NUTRITION_DB)) {
    if (foodName.includes(name) || name.includes(foodName)) {
      return { ...data, name, confidence: 0.85, unit: '100g' };
    }
  }

  // 按类别估算
  const categoryEstimates = {
    '谷薯类': { calories: 200, protein: 6, carbs: 40, fat: 2, fiber: 1 },
    '蔬菜类': { calories: 25, protein: 1.5, carbs: 4, fat: 0.2, fiber: 1 },
    '水果类': { calories: 50, protein: 0.8, carbs: 12, fat: 0.2, fiber: 1.5 },
    '肉类': { calories: 180, protein: 20, carbs: 0, fat: 10, fiber: 0 },
    '海鲜类': { calories: 100, protein: 18, carbs: 1, fat: 3, fiber: 0 },
    '蛋类': { calories: 150, protein: 13, carbs: 1, fat: 10, fiber: 0 },
    '豆制品': { calories: 100, protein: 10, carbs: 5, fat: 4, fiber: 1 },
    '乳制品': { calories: 70, protein: 3, carbs: 5, fat: 4, fiber: 0 },
    '坚果类': { calories: 600, protein: 18, carbs: 20, fat: 55, fiber: 8 },
    '饮料': { calories: 40, protein: 0.2, carbs: 10, fat: 0, fiber: 0 },
    '零食': { calories: 400, protein: 5, carbs: 50, fat: 20, fiber: 1 },
    '快餐': { calories: 200, protein: 8, carbs: 25, fat: 8, fiber: 1 },
  };

  // 尝试从名称推断类别
  for (const [category, estimate] of Object.entries(categoryEstimates)) {
    if (foodName.includes(category.replace('类', ''))) {
      return {
        name: foodName,
        ...estimate,
        sodium: 100,
        cholesterol: 0,
        vitaminA: 0,
        vitaminC: 0,
        calcium: 20,
        iron: 1,
        confidence: 0.5,
        unit: '100g',
        isEstimated: true,
        category,
      };
    }
  }

  // 默认估算值
  return {
    name: foodName,
    calories: 100,
    protein: 5,
    carbs: 15,
    fat: 3,
    fiber: 1,
    sodium: 50,
    cholesterol: 0,
    vitaminA: 0,
    vitaminC: 0,
    calcium: 20,
    iron: 1,
    unit: '100g',
    confidence: 0.3,
    isEstimated: true,
  };
}

/**
 * 获取所有食物列表
 */
function getAllFoods() {
  return Object.entries(NUTRITION_DB).map(([name, data]) => ({
    name,
    ...data,
    unit: '100g',
  }));
}

/**
 * 按类别获取食物
 */
function getFoodsByCategory(category) {
  return Object.entries(NUTRITION_DB)
    .filter(([_, data]) => data.category === category)
    .map(([name, data]) => ({
      name,
      ...data,
      unit: '100g',
    }));
}

/**
 * 获取所有类别
 */
function getCategories() {
  const categories = new Set();
  for (const data of Object.values(NUTRITION_DB)) {
    if (data.category) {
      categories.add(data.category);
    }
  }
  return Array.from(categories);
}

module.exports = {
  NUTRITION_DB,
  findNutrition,
  getAllFoods,
  getFoodsByCategory,
  getCategories,
};

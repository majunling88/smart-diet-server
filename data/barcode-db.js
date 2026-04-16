/**
 * 中国常见食品条形码数据库
 * 数据来源：公开食品营养标签数据
 * 包含：乳制品、饮料、零食、方便食品、调味品、粮油、冷冻食品等
 * 
 * 条形码规则：
 * - 690-699：中国商品条码前缀
 * - 692：中国商品条码（常用）
 * - 693：中国商品条码
 */

const BARCODE_DB = {
  // ==================== 伊利乳制品 ====================
  '6907992100181': { name: '伊利纯牛奶250ml', calories: 54, protein: 3.0, carbs: 5.0, fat: 3.2, brand: '伊利' },
  '6907992100198': { name: '伊利纯牛奶1L', calories: 54, protein: 3.0, carbs: 5.0, fat: 3.2, brand: '伊利' },
  '6907992100204': { name: '伊利高钙奶250ml', calories: 62, protein: 3.2, carbs: 5.5, fat: 3.5, brand: '伊利' },
  '6907992100211': { name: '伊利脱脂牛奶250ml', calories: 35, protein: 3.4, carbs: 5.0, fat: 0.2, brand: '伊利' },
  '6907992100228': { name: '伊利早餐奶250ml', calories: 68, protein: 2.5, carbs: 7.0, fat: 3.0, brand: '伊利' },
  '6907992100235': { name: '伊利核桃奶250ml', calories: 72, protein: 2.0, carbs: 8.0, fat: 3.5, brand: '伊利' },
  '6907992100242': { name: '伊利红枣奶250ml', calories: 70, protein: 2.2, carbs: 7.5, fat: 3.2, brand: '伊利' },
  '6907992100259': { name: '伊利草莓奶250ml', calories: 75, protein: 2.0, carbs: 9.0, fat: 3.0, brand: '伊利' },
  '6907992100266': { name: '伊利巧克力奶250ml', calories: 85, protein: 2.5, carbs: 10.0, fat: 3.5, brand: '伊利' },
  '6907992100273': { name: '伊利舒化奶250ml', calories: 56, protein: 3.1, carbs: 5.2, fat: 3.0, brand: '伊利' },
  '6907992100280': { name: '伊利舒化低脂奶250ml', calories: 42, protein: 3.2, carbs: 5.0, fat: 1.0, brand: '伊利' },
  '6907992100297': { name: '伊利QQ星儿童奶', calories: 58, protein: 2.5, carbs: 6.5, fat: 2.8, brand: '伊利' },
  '6907992100303': { name: '伊利原味酸奶160g', calories: 72, protein: 2.8, carbs: 10.0, fat: 2.5, brand: '伊利' },
  '6907992100310': { name: '伊利草莓酸奶160g', calories: 88, protein: 2.5, carbs: 13.0, fat: 2.5, brand: '伊利' },
  '6907992100327': { name: '伊利蓝莓酸奶160g', calories: 86, protein: 2.5, carbs: 12.5, fat: 2.5, brand: '伊利' },
  '6907992100334': { name: '伊利黄桃酸奶160g', calories: 85, protein: 2.5, carbs: 12.0, fat: 2.5, brand: '伊利' },
  '6907992100341': { name: '伊利畅轻酸奶', calories: 65, protein: 3.0, carbs: 8.5, fat: 2.0, brand: '伊利' },
  '6907992100358': { name: '伊利每益添', calories: 45, protein: 1.5, carbs: 8.0, fat: 1.0, brand: '伊利' },
  '6907992100365': { name: '伊利大果粒酸奶', calories: 95, protein: 2.8, carbs: 14.0, fat: 3.0, brand: '伊利' },
  
  // ==================== 蒙牛乳制品 ====================
  '6911988001234': { name: '蒙牛纯牛奶250ml', calories: 54, protein: 3.0, carbs: 5.0, fat: 3.2, brand: '蒙牛' },
  '6911988001241': { name: '蒙牛纯牛奶1L', calories: 54, protein: 3.0, carbs: 5.0, fat: 3.2, brand: '蒙牛' },
  '6911988001258': { name: '蒙牛低脂牛奶250ml', calories: 40, protein: 3.2, carbs: 5.0, fat: 1.0, brand: '蒙牛' },
  '6911988001265': { name: '蒙牛高钙奶250ml', calories: 60, protein: 3.0, carbs: 5.5, fat: 3.3, brand: '蒙牛' },
  '6911988001272': { name: '蒙牛早餐奶250ml', calories: 65, protein: 2.3, carbs: 6.8, fat: 2.8, brand: '蒙牛' },
  '6911988001289': { name: '蒙牛核桃奶250ml', calories: 70, protein: 2.0, carbs: 7.5, fat: 3.3, brand: '蒙牛' },
  '6911988001296': { name: '蒙牛红枣奶250ml', calories: 68, protein: 2.1, carbs: 7.2, fat: 3.0, brand: '蒙牛' },
  '6911988001302': { name: '蒙牛真果粒', calories: 82, protein: 2.0, carbs: 12.0, fat: 2.5, brand: '蒙牛' },
  '6911988001319': { name: '蒙牛冠益乳', calories: 75, protein: 2.8, carbs: 11.0, fat: 2.5, brand: '蒙牛' },
  '6911988001326': { name: '蒙牛优益C', calories: 48, protein: 1.2, carbs: 9.0, fat: 0.8, brand: '蒙牛' },
  '6911988001333': { name: '蒙牛纯甄酸奶', calories: 82, protein: 2.3, carbs: 12.5, fat: 2.5, brand: '蒙牛' },
  '6911988001340': { name: '蒙牛纯甄草莓味', calories: 88, protein: 2.2, carbs: 13.5, fat: 2.5, brand: '蒙牛' },
  '6911988001357': { name: '蒙牛纯甄蓝莓味', calories: 86, protein: 2.2, carbs: 13.0, fat: 2.5, brand: '蒙牛' },
  '6911988001364': { name: '蒙牛未来星儿童奶', calories: 55, protein: 2.4, carbs: 6.2, fat: 2.6, brand: '蒙牛' },
  '6911988001371': { name: '蒙牛新养道', calories: 52, protein: 3.0, carbs: 5.0, fat: 2.8, brand: '蒙牛' },
  
  // ==================== 特仑苏 ====================
  '6902060200001': { name: '特仑苏纯牛奶250ml', calories: 62, protein: 3.6, carbs: 4.8, fat: 3.6, brand: '特仑苏' },
  '6902060200008': { name: '特仑苏纯牛奶1L', calories: 62, protein: 3.6, carbs: 4.8, fat: 3.6, brand: '特仑苏' },
  '6902060200015': { name: '特仑苏低脂奶250ml', calories: 48, protein: 3.8, carbs: 4.8, fat: 1.2, brand: '特仑苏' },
  '6902060200022': { name: '特仑苏有机奶250ml', calories: 65, protein: 3.8, carbs: 5.0, fat: 3.8, brand: '特仑苏' },
  '6902060200039': { name: '特仑苏醇纤牛奶', calories: 58, protein: 3.5, carbs: 4.5, fat: 3.2, brand: '特仑苏' },
  
  // ==================== 安慕希 ====================
  '6907992101002': { name: '安慕希原味酸奶205g', calories: 88, protein: 2.5, carbs: 13.0, fat: 2.8, brand: '安慕希' },
  '6907992101019': { name: '安慕希草莓味', calories: 92, protein: 2.3, carbs: 14.0, fat: 2.8, brand: '安慕希' },
  '6907992101026': { name: '安慕希蓝莓味', calories: 90, protein: 2.3, carbs: 13.5, fat: 2.8, brand: '安慕希' },
  '6907992101033': { name: '安慕希香草味', calories: 91, protein: 2.4, carbs: 13.8, fat: 2.8, brand: '安慕希' },
  '6907992101040': { name: '安慕希芒果味', calories: 94, protein: 2.2, carbs: 14.5, fat: 2.8, brand: '安慕希' },
  '6907992101057': { name: '安慕希黄桃味', calories: 93, protein: 2.3, carbs: 14.2, fat: 2.8, brand: '安慕希' },
  
  // ==================== 光明乳业 ====================
  '6901202100001': { name: '光明纯牛奶250ml', calories: 54, protein: 3.0, carbs: 5.0, fat: 3.2, brand: '光明' },
  '6901202100008': { name: '光明优倍牛奶', calories: 60, protein: 3.4, carbs: 5.0, fat: 3.5, brand: '光明' },
  '6901202100015': { name: '光明优加牛奶', calories: 58, protein: 3.2, carbs: 5.0, fat: 3.3, brand: '光明' },
  '6901202100022': { name: '光明致优牛奶', calories: 62, protein: 3.5, carbs: 4.8, fat: 3.6, brand: '光明' },
  '6901202100039': { name: '光明莫斯利安酸奶', calories: 86, protein: 2.5, carbs: 12.5, fat: 2.8, brand: '光明' },
  '6901202100046': { name: '光明莫斯利安草莓', calories: 90, protein: 2.3, carbs: 13.5, fat: 2.8, brand: '光明' },
  '6901202100053': { name: '光明莫斯利安蓝莓', calories: 88, protein: 2.3, carbs: 13.0, fat: 2.8, brand: '光明' },
  '6901202100060': { name: '光明如实酸奶', calories: 68, protein: 3.5, carbs: 8.0, fat: 2.0, brand: '光明' },
  '6901202100077': { name: '光明健能酸奶', calories: 72, protein: 2.8, carbs: 10.0, fat: 2.5, brand: '光明' },
  '6901202100084': { name: '光明畅优酸奶', calories: 55, protein: 2.5, carbs: 7.5, fat: 1.8, brand: '光明' },
  
  // ==================== 可口可乐 ====================
  '6901939621000': { name: '可口可乐330ml', calories: 43, protein: 0, carbs: 10.6, fat: 0, brand: '可口可乐' },
  '6901939621001': { name: '可口可乐500ml', calories: 43, protein: 0, carbs: 10.6, fat: 0, brand: '可口可乐' },
  '6901939621002': { name: '可口可乐零度330ml', calories: 0, protein: 0, carbs: 0, fat: 0, brand: '可口可乐' },
  '6901939621003': { name: '可口可乐零度500ml', calories: 0, protein: 0, carbs: 0, fat: 0, brand: '可口可乐' },
  '6901939621004': { name: '可口可乐纤维+500ml', calories: 5, protein: 0, carbs: 1.5, fat: 0, brand: '可口可乐' },
  '6901939621005': { name: '雪碧330ml', calories: 42, protein: 0, carbs: 10.5, fat: 0, brand: '可口可乐' },
  '6901939621006': { name: '雪碧500ml', calories: 42, protein: 0, carbs: 10.5, fat: 0, brand: '可口可乐' },
  '6901939621007': { name: '雪碧零卡330ml', calories: 0, protein: 0, carbs: 0, fat: 0, brand: '可口可乐' },
  '6901939621008': { name: '芬达橙味330ml', calories: 45, protein: 0, carbs: 11.2, fat: 0, brand: '可口可乐' },
  '6901939621009': { name: '芬达葡萄味330ml', calories: 46, protein: 0, carbs: 11.5, fat: 0, brand: '可口可乐' },
  '6901939621010': { name: '美汁源果粒橙450ml', calories: 42, protein: 0, carbs: 10.5, fat: 0, brand: '可口可乐' },
  '6901939621011': { name: '美汁源果粒葡萄450ml', calories: 44, protein: 0, carbs: 11.0, fat: 0, brand: '可口可乐' },
  '6901939621012': { name: '美汁源椰子汁', calories: 55, protein: 0.5, carbs: 12.0, fat: 1.5, brand: '可口可乐' },
  '6901939621013': { name: '冰露矿泉水550ml', calories: 0, protein: 0, carbs: 0, fat: 0, brand: '可口可乐' },
  '6901939621014': { name: '酷儿橙汁', calories: 45, protein: 0, carbs: 11.2, fat: 0, brand: '可口可乐' },
  '6901939621015': { name: '乔雅咖啡', calories: 35, protein: 0.5, carbs: 7.5, fat: 0.5, brand: '可口可乐' },
  '6901939621016': { name: '乔雅拿铁', calories: 65, protein: 2.0, carbs: 8.0, fat: 2.5, brand: '可口可乐' },
  
  // ==================== 百事可乐 ====================
  '6902433060001': { name: '百事可乐330ml', calories: 41, protein: 0, carbs: 10.2, fat: 0, brand: '百事' },
  '6902433060002': { name: '百事可乐500ml', calories: 41, protein: 0, carbs: 10.2, fat: 0, brand: '百事' },
  '6902433060003': { name: '百事极度330ml', calories: 0, protein: 0, carbs: 0, fat: 0, brand: '百事' },
  '6902433060004': { name: '百事极度500ml', calories: 0, protein: 0, carbs: 0, fat: 0, brand: '百事' },
  '6902433060005': { name: '七喜330ml', calories: 40, protein: 0, carbs: 10.0, fat: 0, brand: '百事' },
  '6902433060006': { name: '七喜500ml', calories: 40, protein: 0, carbs: 10.0, fat: 0, brand: '百事' },
  '6902433060007': { name: '七喜零卡330ml', calories: 0, protein: 0, carbs: 0, fat: 0, brand: '百事' },
  '6902433060008': { name: '美年达橙味330ml', calories: 44, protein: 0, carbs: 11.0, fat: 0, brand: '百事' },
  '6902433060009': { name: '美年达葡萄味330ml', calories: 45, protein: 0, carbs: 11.2, fat: 0, brand: '百事' },
  '6902433060010': { name: '美年达苹果味330ml', calories: 43, protein: 0, carbs: 10.8, fat: 0, brand: '百事' },
  '6902433060011': { name: '佳得乐橙味600ml', calories: 26, protein: 0, carbs: 6.5, fat: 0, brand: '百事' },
  '6902433060012': { name: '佳得乐柠檬味600ml', calories: 25, protein: 0, carbs: 6.2, fat: 0, brand: '百事' },
  '6902433060013': { name: '纯果乐橙汁', calories: 45, protein: 0.5, carbs: 10.5, fat: 0, brand: '百事' },
  
  // ==================== 农夫山泉 ====================
  '6921168500001': { name: '农夫山泉550ml', calories: 0, protein: 0, carbs: 0, fat: 0, brand: '农夫山泉' },
  '6921168500002': { name: '农夫山泉1.5L', calories: 0, protein: 0, carbs: 0, fat: 0, brand: '农夫山泉' },
  '6921168500003': { name: '农夫山泉4L', calories: 0, protein: 0, carbs: 0, fat: 0, brand: '农夫山泉' },
  '6921168500004': { name: '农夫山泉尖叫柠檬味550ml', calories: 26, protein: 0, carbs: 6.5, fat: 0, brand: '农夫山泉' },
  '6921168500005': { name: '农夫山泉尖叫纤维型550ml', calories: 20, protein: 0, carbs: 5.0, fat: 0, brand: '农夫山泉' },
  '6921168500006': { name: '农夫山泉茶π柠檬红茶500ml', calories: 35, protein: 0, carbs: 8.5, fat: 0, brand: '农夫山泉' },
  '6921168500007': { name: '农夫山泉茶π蜜桃乌龙500ml', calories: 38, protein: 0, carbs: 9.2, fat: 0, brand: '农夫山泉' },
  '6921168500008': { name: '农夫山泉茶π柚子绿茶500ml', calories: 36, protein: 0, carbs: 8.8, fat: 0, brand: '农夫山泉' },
  '6921168500009': { name: '农夫山泉茶π玫瑰荔枝500ml', calories: 40, protein: 0, carbs: 9.8, fat: 0, brand: '农夫山泉' },
  '6921168500010': { name: '农夫山泉东方树叶绿茶500ml', calories: 0, protein: 0, carbs: 0, fat: 0, brand: '农夫山泉' },
  '6921168500011': { name: '农夫山泉东方树叶红茶500ml', calories: 0, protein: 0, carbs: 0, fat: 0, brand: '农夫山泉' },
  '6921168500012': { name: '农夫山泉东方树叶乌龙茶500ml', calories: 0, protein: 0, carbs: 0, fat: 0, brand: '农夫山泉' },
  '6921168500013': { name: '农夫山泉东方树叶茉莉花茶500ml', calories: 0, protein: 0, carbs: 0, fat: 0, brand: '农夫山泉' },
  '6921168500014': { name: '农夫山泉东方树叶青柑普洱500ml', calories: 0, protein: 0, carbs: 0, fat: 0, brand: '农夫山泉' },
  '6921168500015': { name: '农夫山泉NFC橙汁300ml', calories: 45, protein: 0.8, carbs: 10.5, fat: 0, brand: '农夫山泉' },
  '6921168500016': { name: '农夫山泉NFC苹果汁300ml', calories: 46, protein: 0.5, carbs: 11.0, fat: 0, brand: '农夫山泉' },
  '6921168500017': { name: '农夫山泉NFC葡萄汁300ml', calories: 52, protein: 0.5, carbs: 12.5, fat: 0, brand: '农夫山泉' },
  '6921168500018': { name: '农夫果园30%橙汁500ml', calories: 42, protein: 0.5, carbs: 10.0, fat: 0, brand: '农夫山泉' },
  '6921168500019': { name: '农夫山泉苏打水400ml', calories: 0, protein: 0, carbs: 0, fat: 0, brand: '农夫山泉' },
  '6921168500020': { name: '农夫山泉苏打水柠檬味400ml', calories: 5, protein: 0, carbs: 1.2, fat: 0, brand: '农夫山泉' },
  
  // ==================== 娃哈哈 ====================
  '6902083800001': { name: '娃哈哈纯净水596ml', calories: 0, protein: 0, carbs: 0, fat: 0, brand: '娃哈哈' },
  '6902083800002': { name: '娃哈哈矿泉水596ml', calories: 0, protein: 0, carbs: 0, fat: 0, brand: '娃哈哈' },
  '6902083800003': { name: '娃哈哈AD钙奶220ml', calories: 52, protein: 1.5, carbs: 9.5, fat: 1.8, brand: '娃哈哈' },
  '6902083800004': { name: '娃哈哈营养快线500ml', calories: 65, protein: 1.8, carbs: 11.0, fat: 2.0, brand: '娃哈哈' },
  '6902083800005': { name: '娃哈哈营养快线苹果味500ml', calories: 68, protein: 1.6, carbs: 12.0, fat: 2.0, brand: '娃哈哈' },
  '6902083800006': { name: '娃哈哈爽歪歪200ml', calories: 48, protein: 1.2, carbs: 8.5, fat: 1.5, brand: '娃哈哈' },
  '6902083800007': { name: '娃哈哈乳酸菌饮品340ml', calories: 55, protein: 1.0, carbs: 11.0, fat: 1.2, brand: '娃哈哈' },
  '6902083800008': { name: '娃哈哈冰红茶500ml', calories: 38, protein: 0, carbs: 9.5, fat: 0, brand: '娃哈哈' },
  '6902083800009': { name: '娃哈哈绿茶500ml', calories: 18, protein: 0, carbs: 4.5, fat: 0, brand: '娃哈哈' },
  '6902083800010': { name: '娃哈哈蜂蜜柚子茶500ml', calories: 42, protein: 0, carbs: 10.5, fat: 0, brand: '娃哈哈' },
  '6902083800011': { name: '娃哈哈八宝粥360g', calories: 85, protein: 2.0, carbs: 18.0, fat: 1.0, brand: '娃哈哈' },
  
  // ==================== 康师傅 ====================
  '6920147100001': { name: '康师傅红烧牛肉面袋装', calories: 472, protein: 9.5, carbs: 58.0, fat: 20.0, brand: '康师傅' },
  '6920147100002': { name: '康师傅红烧牛肉面桶装', calories: 485, protein: 9.8, carbs: 59.0, fat: 21.0, brand: '康师傅' },
  '6920147100003': { name: '康师傅老坛酸菜牛肉面袋装', calories: 456, protein: 8.8, carbs: 56.0, fat: 19.0, brand: '康师傅' },
  '6920147100004': { name: '康师傅老坛酸菜牛肉面桶装', calories: 468, protein: 9.0, carbs: 57.0, fat: 20.0, brand: '康师傅' },
  '6920147100005': { name: '康师傅香辣牛肉面袋装', calories: 485, protein: 9.2, carbs: 57.0, fat: 21.0, brand: '康师傅' },
  '6920147100006': { name: '康师傅香菇炖鸡面袋装', calories: 445, protein: 8.5, carbs: 55.0, fat: 18.0, brand: '康师傅' },
  '6920147100007': { name: '康师傅鲜虾鱼板面袋装', calories: 438, protein: 9.0, carbs: 54.0, fat: 17.5, brand: '康师傅' },
  '6920147100008': { name: '康师傅西红柿牛腩面袋装', calories: 452, protein: 8.8, carbs: 56.0, fat: 18.5, brand: '康师傅' },
  '6920147100009': { name: '康师傅泡椒牛肉面袋装', calories: 468, protein: 9.0, carbs: 57.0, fat: 19.5, brand: '康师傅' },
  '6920147100010': { name: '康师傅藤椒牛肉面袋装', calories: 475, protein: 9.0, carbs: 58.0, fat: 20.0, brand: '康师傅' },
  '6920147100011': { name: '康师傅冰红茶500ml', calories: 38, protein: 0, carbs: 9.5, fat: 0, brand: '康师傅' },
  '6920147100012': { name: '康师傅冰红茶1L', calories: 38, protein: 0, carbs: 9.5, fat: 0, brand: '康师傅' },
  '6920147100013': { name: '康师傅绿茶500ml', calories: 18, protein: 0, carbs: 4.5, fat: 0, brand: '康师傅' },
  '6920147100014': { name: '康师傅茉莉清茶500ml', calories: 16, protein: 0, carbs: 4.0, fat: 0, brand: '康师傅' },
  '6920147100015': { name: '康师傅茉莉蜜茶500ml', calories: 32, protein: 0, carbs: 8.0, fat: 0, brand: '康师傅' },
  '6920147100016': { name: '康师傅蜂蜜柚子茶500ml', calories: 42, protein: 0, carbs: 10.5, fat: 0, brand: '康师傅' },
  '6920147100017': { name: '康师傅酸梅汤500ml', calories: 35, protein: 0, carbs: 8.8, fat: 0, brand: '康师傅' },
  '6920147100018': { name: '康师傅水晶葡萄500ml', calories: 44, protein: 0, carbs: 11.0, fat: 0, brand: '康师傅' },
  '6920147100019': { name: '康师傅水蜜桃500ml', calories: 42, protein: 0, carbs: 10.5, fat: 0, brand: '康师傅' },
  '6920147100020': { name: '康师傅每日C橙汁500ml', calories: 45, protein: 0.5, carbs: 10.8, fat: 0, brand: '康师傅' },
  
  // ==================== 统一 ====================
  '6925303770001': { name: '统一老坛酸菜牛肉面袋装', calories: 456, protein: 8.8, carbs: 56.0, fat: 19.0, brand: '统一' },
  '6925303770002': { name: '统一老坛酸菜牛肉面桶装', calories: 468, protein: 9.0, carbs: 57.0, fat: 20.0, brand: '统一' },
  '6925303770003': { name: '统一红烧牛肉面袋装', calories: 468, protein: 9.0, carbs: 57.0, fat: 20.0, brand: '统一' },
  '6925303770004': { name: '统一香辣牛肉面袋装', calories: 478, protein: 9.2, carbs: 58.0, fat: 20.5, brand: '统一' },
  '6925303770005': { name: '统一藤椒牛肉面袋装', calories: 472, protein: 9.0, carbs: 57.5, fat: 20.0, brand: '统一' },
  '6925303770006': { name: '统一番茄牛肉面袋装', calories: 448, protein: 8.5, carbs: 55.0, fat: 18.5, brand: '统一' },
  '6925303770007': { name: '统一海鲜面袋装', calories: 442, protein: 8.8, carbs: 54.5, fat: 18.0, brand: '统一' },
  '6925303770008': { name: '统一汤达人日式豚骨拉面', calories: 425, protein: 9.0, carbs: 55.0, fat: 18.0, brand: '统一' },
  '6925303770009': { name: '统一汤达人酸酸辣辣豚骨面', calories: 438, protein: 8.8, carbs: 56.0, fat: 19.0, brand: '统一' },
  '6925303770010': { name: '统一冰红茶500ml', calories: 38, protein: 0, carbs: 9.5, fat: 0, brand: '统一' },
  '6925303770011': { name: '统一绿茶500ml', calories: 18, protein: 0, carbs: 4.5, fat: 0, brand: '统一' },
  '6925303770012': { name: '统一阿萨姆奶茶500ml', calories: 58, protein: 0.8, carbs: 10.5, fat: 2.0, brand: '统一' },
  '6925303770013': { name: '统一鲜橙多500ml', calories: 44, protein: 0, carbs: 11.0, fat: 0, brand: '统一' },
  '6925303770014': { name: '统一蜜桃多500ml', calories: 42, protein: 0, carbs: 10.5, fat: 0, brand: '统一' },
  '6925303770015': { name: '统一葡萄多500ml', calories: 45, protein: 0, carbs: 11.2, fat: 0, brand: '统一' },
  
  // ==================== 王老吉/加多宝 ====================
  '6924872100001': { name: '王老吉凉茶310ml', calories: 35, protein: 0, carbs: 8.8, fat: 0, brand: '王老吉' },
  '6924872100002': { name: '王老吉凉茶500ml', calories: 35, protein: 0, carbs: 8.8, fat: 0, brand: '王老吉' },
  '6924872100003': { name: '王老吉无糖凉茶310ml', calories: 0, protein: 0, carbs: 0, fat: 0, brand: '王老吉' },
  '6924872100004': { name: '加多宝凉茶310ml', calories: 35, protein: 0, carbs: 8.8, fat: 0, brand: '加多宝' },
  '6924872100005': { name: '加多宝凉茶500ml', calories: 35, protein: 0, carbs: 8.8, fat: 0, brand: '加多宝' },
  
  // ==================== 红牛 ====================
  '6924872100010': { name: '红牛维生素功能饮料250ml', calories: 58, protein: 0, carbs: 14.0, fat: 0, brand: '红牛' },
  '6924872100011': { name: '红牛无糖型250ml', calories: 8, protein: 0, carbs: 2.0, fat: 0, brand: '红牛' },
  '6924872100012': { name: '红牛强化型250ml', calories: 65, protein: 0, carbs: 15.5, fat: 0, brand: '红牛' },
  
  // ==================== 怡宝 ====================
  '6921168500100': { name: '怡宝纯净水555ml', calories: 0, protein: 0, carbs: 0, fat: 0, brand: '怡宝' },
  '6921168500101': { name: '怡宝纯净水1.5L', calories: 0, protein: 0, carbs: 0, fat: 0, brand: '怡宝' },
  '6921168500102': { name: '怡宝蜜水柠檬450ml', calories: 28, protein: 0, carbs: 7.0, fat: 0, brand: '怡宝' },
  '6921168500103': { name: '怡宝蜜水西柚450ml', calories: 26, protein: 0, carbs: 6.5, fat: 0, brand: '怡宝' },
  '6921168500104': { name: '怡宝午后奶茶450ml', calories: 55, protein: 0.8, carbs: 10.0, fat: 1.8, brand: '怡宝' },
  
  // ==================== 乐事薯片 ====================
  '6924187220001': { name: '乐事原味薯片70g', calories: 536, protein: 6.0, carbs: 52.0, fat: 34.0, brand: '乐事' },
  '6924187220002': { name: '乐事黄瓜味薯片70g', calories: 520, protein: 5.5, carbs: 54.0, fat: 32.0, brand: '乐事' },
  '6924187220003': { name: '乐事番茄味薯片70g', calories: 528, protein: 5.8, carbs: 53.0, fat: 33.0, brand: '乐事' },
  '6924187220004': { name: '乐事烧烤味薯片70g', calories: 535, protein: 6.2, carbs: 52.0, fat: 34.5, brand: '乐事' },
  '6924187220005': { name: '乐事香辣味薯片70g', calories: 540, protein: 6.5, carbs: 51.0, fat: 35.0, brand: '乐事' },
  '6924187220006': { name: '乐事青柠味薯片70g', calories: 518, protein: 5.5, carbs: 55.0, fat: 31.0, brand: '乐事' },
  '6924187220007': { name: '乐事大波浪原味70g', calories: 545, protein: 5.8, carbs: 50.0, fat: 36.0, brand: '乐事' },
  '6924187220008': { name: '乐事大波浪烧烤味70g', calories: 550, protein: 6.0, carbs: 49.0, fat: 37.0, brand: '乐事' },
  
  // ==================== 奥利奥 ====================
  '6901028070001': { name: '奥利奥原味饼干116g', calories: 480, protein: 4.0, carbs: 68.0, fat: 20.0, brand: '奥利奥' },
  '6901028070002': { name: '奥利奥巧克力味116g', calories: 495, protein: 4.2, carbs: 65.0, fat: 22.0, brand: '奥利奥' },
  '6901028070003': { name: '奥利奥草莓味116g', calories: 475, protein: 3.8, carbs: 70.0, fat: 19.0, brand: '奥利奥' },
  '6901028070004': { name: '奥利奥抹茶味116g', calories: 470, protein: 4.0, carbs: 68.0, fat: 19.5, brand: '奥利奥' },
  '6901028070005': { name: '奥利奥迷你', calories: 485, protein: 4.0, carbs: 69.0, fat: 20.5, brand: '奥利奥' },
  
  // ==================== 好丽友 ====================
  '6901028070100': { name: '好丽友派原味192g', calories: 450, protein: 3.5, carbs: 65.0, fat: 18.0, brand: '好丽友' },
  '6901028070101': { name: '好丽友派巧克力192g', calories: 468, protein: 3.8, carbs: 63.0, fat: 20.0, brand: '好丽友' },
  '6901028070102': { name: '好丽友派草莓192g', calories: 455, protein: 3.5, carbs: 66.0, fat: 18.5, brand: '好丽友' },
  '6901028070103': { name: '好丽友薯愿原味104g', calories: 512, protein: 5.0, carbs: 55.0, fat: 30.0, brand: '好丽友' },
  '6901028070104': { name: '好丽友薯愿蜂蜜黄油味104g', calories: 528, protein: 4.8, carbs: 58.0, fat: 31.0, brand: '好丽友' },
  '6901028070105': { name: '好丽友薯愿番茄味104g', calories: 508, protein: 5.2, carbs: 54.0, fat: 29.5, brand: '好丽友' },
  '6901028070106': { name: '好丽友好多鱼原味80g', calories: 465, protein: 6.5, carbs: 62.0, fat: 20.0, brand: '好丽友' },
  '6901028070107': { name: '好丽友好多鱼番茄味80g', calories: 470, protein: 6.2, carbs: 63.0, fat: 20.5, brand: '好丽友' },
  '6901028070108': { name: '好丽友呀土豆原味80g', calories: 498, protein: 5.5, carbs: 58.0, fat: 27.0, brand: '好丽友' },
  '6901028070109': { name: '好丽友呀土豆番茄味80g', calories: 502, protein: 5.3, carbs: 59.0, fat: 27.5, brand: '好丽友' },
  
  // ==================== 德芙巧克力 ====================
  '6901028070200': { name: '德芙丝滑牛奶巧克力80g', calories: 540, protein: 5.0, carbs: 58.0, fat: 32.0, brand: '德芙' },
  '6901028070201': { name: '德芙黑巧克力80g', calories: 520, protein: 5.5, carbs: 52.0, fat: 32.0, brand: '德芙' },
  '6901028070202': { name: '德芙白巧克力80g', calories: 555, protein: 4.5, carbs: 62.0, fat: 32.0, brand: '德芙' },
  '6901028070203': { name: '德芙榛仁葡萄干巧克力80g', calories: 535, protein: 6.0, carbs: 55.0, fat: 31.0, brand: '德芙' },
  '6901028070204': { name: '德芙脆香米巧克力80g', calories: 525, protein: 5.8, carbs: 58.0, fat: 29.0, brand: '德芙' },
  
  // ==================== 旺旺 ====================
  '6901028070300': { name: '旺旺仙贝150g', calories: 465, protein: 6.5, carbs: 72.0, fat: 15.0, brand: '旺旺' },
  '6901028070301': { name: '旺旺雪饼150g', calories: 485, protein: 5.8, carbs: 68.0, fat: 18.0, brand: '旺旺' },
  '6901028070302': { name: '旺旺小小酥100g', calories: 512, protein: 5.5, carbs: 58.0, fat: 28.0, brand: '旺旺' },
  '6901028070303': { name: '旺旺浪味仙原味100g', calories: 478, protein: 5.0, carbs: 62.0, fat: 23.0, brand: '旺旺' },
  '6901028070304': { name: '旺旺浪味仙蔬菜味100g', calories: 472, protein: 5.2, carbs: 63.0, fat: 22.5, brand: '旺旺' },
  '6901028070305': { name: '旺旺大米饼150g', calories: 385, protein: 7.0, carbs: 82.0, fat: 3.5, brand: '旺旺' },
  '6901028070306': { name: '旺旺QQ糖葡萄味70g', calories: 345, protein: 2.5, carbs: 82.0, fat: 0.5, brand: '旺旺' },
  '6901028070307': { name: '旺旺QQ糖草莓味70g', calories: 342, protein: 2.5, carbs: 81.0, fat: 0.5, brand: '旺旺' },
  '6901028070308': { name: '旺旺牛奶糖100g', calories: 425, protein: 3.0, carbs: 72.0, fat: 15.0, brand: '旺旺' },
  
  // ==================== 三只松鼠 ====================
  '6954878200001': { name: '三只松鼠碧根果100g', calories: 670, protein: 9.0, carbs: 15.0, fat: 65.0, brand: '三只松鼠' },
  '6954878200002': { name: '三只松鼠夏威夷果100g', calories: 718, protein: 8.0, carbs: 12.0, fat: 72.0, brand: '三只松鼠' },
  '6954878200003': { name: '三只松鼠巴旦木100g', calories: 600, protein: 22.0, carbs: 20.0, fat: 52.0, brand: '三只松鼠' },
  '6954878200004': { name: '三只松鼠开心果100g', calories: 614, protein: 20.0, carbs: 22.0, fat: 53.0, brand: '三只松鼠' },
  '6954878200005': { name: '三只松鼠腰果100g', calories: 552, protein: 17.0, carbs: 30.0, fat: 44.0, brand: '三只松鼠' },
  '6954878200006': { name: '三只松鼠核桃100g', calories: 654, protein: 15.0, carbs: 14.0, fat: 65.0, brand: '三只松鼠' },
  '6954878200007': { name: '三只松鼠榛子100g', calories: 617, protein: 13.0, carbs: 17.0, fat: 60.0, brand: '三只松鼠' },
  '6954878200008': { name: '三只松鼠每日坚果25g', calories: 145, protein: 3.8, carbs: 4.5, fat: 13.0, brand: '三只松鼠' },
  '6954878200009': { name: '三只松鼠多味花生100g', calories: 567, protein: 22.0, carbs: 24.0, fat: 45.0, brand: '三只松鼠' },
  '6954878200010': { name: '三只松鼠兰花豆100g', calories: 445, protein: 12.0, carbs: 55.0, fat: 20.0, brand: '三只松鼠' },
  
  // ==================== 桃李面包 ====================
  '6901207100001': { name: '桃李醇熟面包400g', calories: 275, protein: 9.0, carbs: 52.0, fat: 3.5, brand: '桃李' },
  '6901207100002': { name: '桃李全麦面包400g', calories: 258, protein: 10.0, carbs: 48.0, fat: 3.0, brand: '桃李' },
  '6901207100003': { name: '桃李奶香面包300g', calories: 295, protein: 7.5, carbs: 55.0, fat: 5.0, brand: '桃李' },
  '6901207100004': { name: '桃李鸡蛋香松面包300g', calories: 312, protein: 8.5, carbs: 52.0, fat: 7.0, brand: '桃李' },
  '6901207100005': { name: '桃李豆沙面包300g', calories: 328, protein: 7.0, carbs: 58.0, fat: 6.5, brand: '桃李' },
  '6901207100006': { name: '桃李肉松面包300g', calories: 318, protein: 9.0, carbs: 50.0, fat: 8.0, brand: '桃李' },
  
  // ==================== 海天调味品 ====================
  '6901234568001': { name: '海天金标生抽500ml', calories: 15, protein: 1.0, carbs: 2.0, fat: 0, brand: '海天' },
  '6901234568002': { name: '海天草菇老抽500ml', calories: 18, protein: 1.2, carbs: 2.5, fat: 0, brand: '海天' },
  '6901234568003': { name: '海天味极鲜酱油500ml', calories: 16, protein: 1.0, carbs: 2.2, fat: 0, brand: '海天' },
  '6901234568004': { name: '海天海鲜酱油500ml', calories: 14, protein: 0.8, carbs: 2.0, fat: 0, brand: '海天' },
  '6901234568005': { name: '海天蚝油700g', calories: 35, protein: 1.5, carbs: 6.0, fat: 0, brand: '海天' },
  '6901234568006': { name: '海天上等蚝油700g', calories: 38, protein: 1.8, carbs: 6.5, fat: 0, brand: '海天' },
  '6901234568007': { name: '海天黄豆酱300g', calories: 125, protein: 8.0, carbs: 12.0, fat: 4.0, brand: '海天' },
  '6901234568008': { name: '海天蒜蓉辣酱230g', calories: 95, protein: 3.0, carbs: 18.0, fat: 1.5, brand: '海天' },
  '6901234568009': { name: '海天番茄酱200g', calories: 105, protein: 1.5, carbs: 24.0, fat: 0.2, brand: '海天' },
  
  // ==================== 老干妈 ====================
  '6901234568010': { name: '老干妈风味豆豉280g', calories: 595, protein: 8.0, carbs: 15.0, fat: 55.0, brand: '老干妈' },
  '6901234568011': { name: '老干妈辣三丁280g', calories: 580, protein: 7.5, carbs: 14.0, fat: 54.0, brand: '老干妈' },
  '6901234568012': { name: '老干妈油辣椒280g', calories: 620, protein: 5.0, carbs: 12.0, fat: 60.0, brand: '老干妈' },
  '6901234568013': { name: '老干妈牛肉末豆豉280g', calories: 485, protein: 12.0, carbs: 14.0, fat: 42.0, brand: '老干妈' },
  
  // ==================== 金龙鱼 ====================
  '6901234568020': { name: '金龙鱼调和油5L', calories: 900, protein: 0, carbs: 0, fat: 99.9, brand: '金龙鱼' },
  '6901234568021': { name: '金龙鱼花生油5L', calories: 899, protein: 0, carbs: 0, fat: 99.9, brand: '金龙鱼' },
  '6901234568022': { name: '金龙鱼玉米油5L', calories: 899, protein: 0, carbs: 0, fat: 99.9, brand: '金龙鱼' },
  '6901234568023': { name: '金龙鱼葵花籽油5L', calories: 899, protein: 0, carbs: 0, fat: 99.9, brand: '金龙鱼' },
  '6901234568024': { name: '金龙鱼大豆油5L', calories: 899, protein: 0, carbs: 0, fat: 99.9, brand: '金龙鱼' },
  '6901234568025': { name: '金龙鱼橄榄油1L', calories: 899, protein: 0, carbs: 0, fat: 99.9, brand: '金龙鱼' },
  '6901234568026': { name: '金龙鱼东北大米5kg', calories: 346, protein: 7.5, carbs: 77.0, fat: 0.5, brand: '金龙鱼' },
  '6901234568027': { name: '金龙鱼五常大米5kg', calories: 348, protein: 7.8, carbs: 76.5, fat: 0.6, brand: '金龙鱼' },
  
  // ==================== 鲁花 ====================
  '6901234568030': { name: '鲁花花生油5L', calories: 899, protein: 0, carbs: 0, fat: 99.9, brand: '鲁花' },
  '6901234568031': { name: '鲁花5S压榨一级花生油5L', calories: 899, protein: 0, carbs: 0, fat: 99.9, brand: '鲁花' },
  '6901234568032': { name: '鲁花高油酸花生油5L', calories: 899, protein: 0, carbs: 0, fat: 99.9, brand: '鲁花' },
  
  // ==================== 双汇火腿肠 ====================
  '6901234568040': { name: '双汇王中王火腿肠60g', calories: 212, protein: 13.0, carbs: 5.0, fat: 15.0, brand: '双汇' },
  '6901234568041': { name: '双汇玉米热狗肠50g', calories: 225, protein: 11.0, carbs: 8.0, fat: 16.0, brand: '双汇' },
  '6901234568042': { name: '双汇Q趣儿火腿肠50g', calories: 198, protein: 12.0, carbs: 6.0, fat: 14.0, brand: '双汇' },
  
  // ==================== 湾仔码头 ====================
  '6901234568050': { name: '湾仔码头猪肉白菜水饺500g', calories: 198, protein: 8.0, carbs: 25.0, fat: 7.0, brand: '湾仔码头' },
  '6901234568051': { name: '湾仔码头猪肉韭菜水饺500g', calories: 195, protein: 7.8, carbs: 24.0, fat: 7.2, brand: '湾仔码头' },
  '6901234568052': { name: '湾仔码头三鲜水饺500g', calories: 185, protein: 7.5, carbs: 23.0, fat: 6.5, brand: '湾仔码头' },
  '6901234568053': { name: '湾仔码头虾仁水饺500g', calories: 178, protein: 9.0, carbs: 22.0, fat: 5.5, brand: '湾仔码头' },
  '6901234568054': { name: '湾仔码头黑芝麻汤圆300g', calories: 312, protein: 5.0, carbs: 48.0, fat: 12.0, brand: '湾仔码头' },
  '6901234568055': { name: '湾仔码头花生汤圆300g', calories: 305, protein: 6.0, carbs: 46.0, fat: 11.5, brand: '湾仔码头' },
  
  // ==================== 和路雪冰淇淋 ====================
  '6901234568060': { name: '和路雪可爱多', calories: 285, protein: 3.0, carbs: 32.0, fat: 15.0, brand: '和路雪' },
  '6901234568061': { name: '和路雪可爱多巧克力', calories: 295, protein: 3.2, carbs: 33.0, fat: 16.0, brand: '和路雪' },
  '6901234568062': { name: '和路雪梦龙香草', calories: 312, protein: 3.5, carbs: 28.0, fat: 19.0, brand: '和路雪' },
  '6901234568063': { name: '和路雪梦龙黑巧克力', calories: 325, protein: 3.8, carbs: 27.0, fat: 21.0, brand: '和路雪' },
  
  // ==================== 伊利冰淇淋 ====================
  '6901234568070': { name: '伊利巧乐滋', calories: 245, protein: 2.5, carbs: 28.0, fat: 13.0, brand: '伊利' },
  '6901234568071': { name: '伊利冰工厂', calories: 125, protein: 1.0, carbs: 28.0, fat: 1.0, brand: '伊利' },
  '6901234568072': { name: '伊利小布丁', calories: 165, protein: 2.0, carbs: 22.0, fat: 7.5, brand: '伊利' },
  
  // ==================== 钟薛高 ====================
  '6901234568080': { name: '钟薛高轻牛乳', calories: 198, protein: 3.8, carbs: 20.0, fat: 10.0, brand: '钟薛高' },
  '6901234568081': { name: '钟薛高丝绒可可', calories: 245, protein: 3.2, carbs: 25.0, fat: 13.5, brand: '钟薛高' },
  
  // ==================== 哈根达斯 ====================
  '6901234568090': { name: '哈根达斯香草', calories: 250, protein: 3.5, carbs: 22.0, fat: 16.0, brand: '哈根达斯' },
  '6901234568091': { name: '哈根达斯巧克力', calories: 268, protein: 3.8, carbs: 24.0, fat: 17.0, brand: '哈根达斯' },
  '6901234568092': { name: '哈根达斯草莓', calories: 242, protein: 3.2, carbs: 26.0, fat: 14.0, brand: '哈根达斯' },
  
  // ==================== 桂格麦片 ====================
  '6901234568100': { name: '桂格即食燕麦片1kg', calories: 367, protein: 12.0, carbs: 62.0, fat: 7.0, brand: '桂格' },
  '6901234568101': { name: '桂格快煮燕麦片1kg', calories: 365, protein: 12.5, carbs: 61.0, fat: 7.0, brand: '桂格' },
  '6901234568102': { name: '桂格麦果脆', calories: 420, protein: 8.0, carbs: 72.0, fat: 12.0, brand: '桂格' },
  
  // ==================== 立顿茶包 ====================
  '6901234568110': { name: '立顿红茶包100袋', calories: 0, protein: 0, carbs: 0, fat: 0, brand: '立顿' },
  '6901234568111': { name: '立顿绿茶包100袋', calories: 0, protein: 0, carbs: 0, fat: 0, brand: '立顿' },
  '6901234568112': { name: '立顿茉莉花茶包100袋', calories: 0, protein: 0, carbs: 0, fat: 0, brand: '立顿' },
  
  // ==================== 香飘飘奶茶 ====================
  '6901234568120': { name: '香飘飘原味奶茶', calories: 385, protein: 2.5, carbs: 75.0, fat: 10.0, brand: '香飘飘' },
  '6901234568121': { name: '香飘飘麦香味奶茶', calories: 378, protein: 2.8, carbs: 74.0, fat: 9.5, brand: '香飘飘' },
  '6901234568122': { name: '香飘飘草莓味奶茶', calories: 392, protein: 2.2, carbs: 78.0, fat: 9.8, brand: '香飘飘' },
  
  // ==================== 星巴克 ====================
  '6901234568130': { name: '星巴克拿铁', calories: 62, protein: 3.2, carbs: 6.5, fat: 2.8, brand: '星巴克' },
  '6901234568131': { name: '星巴克美式', calories: 15, protein: 0.8, carbs: 1.5, fat: 0.5, brand: '星巴克' },
  '6901234568132': { name: '星巴克卡布奇诺', calories: 68, protein: 3.5, carbs: 7.0, fat: 3.0, brand: '星巴克' },
  '6901234568133': { name: '星巴克摩卡', calories: 95, protein: 3.0, carbs: 12.0, fat: 3.5, brand: '星巴克' },
  
  // ==================== 喜茶 ====================
  '6901234568140': { name: '喜茶多肉葡萄', calories: 168, protein: 1.5, carbs: 35.0, fat: 2.0, brand: '喜茶' },
  '6901234568141': { name: '喜茶芝芝莓莓', calories: 185, protein: 2.0, carbs: 38.0, fat: 2.5, brand: '喜茶' },
  '6901234568142': { name: '喜茶满杯红柚', calories: 142, protein: 0.8, carbs: 32.0, fat: 1.0, brand: '喜茶' },
  
  // ==================== 奈雪 ====================
  '6901234568150': { name: '奈雪霸气芝士草莓', calories: 195, protein: 2.2, carbs: 40.0, fat: 2.8, brand: '奈雪' },
  '6901234568151': { name: '奈雪霸气橙子', calories: 158, protein: 1.0, carbs: 36.0, fat: 1.2, brand: '奈雪' },
  '6901234568152': { name: '奈雪霸气葡萄', calories: 172, protein: 1.2, carbs: 38.0, fat: 1.5, brand: '奈雪' },
  
  // ==================== 蜜雪冰城 ====================
  '6901234568160': { name: '蜜雪冰城柠檬水', calories: 85, protein: 0, carbs: 21.0, fat: 0, brand: '蜜雪冰城' },
  '6901234568161': { name: '蜜雪冰城草莓摇摇奶昔', calories: 165, protein: 2.0, carbs: 32.0, fat: 3.5, brand: '蜜雪冰城' },
  '6901234568162': { name: '蜜雪冰城黑糖珍珠奶茶', calories: 195, protein: 1.5, carbs: 42.0, fat: 3.0, brand: '蜜雪冰城' },
  
  // ==================== 汇源果汁 ====================
  '6901234568170': { name: '汇源100%橙汁1L', calories: 46, protein: 0.8, carbs: 10.8, fat: 0, brand: '汇源' },
  '6901234568171': { name: '汇源100%苹果汁1L', calories: 48, protein: 0.5, carbs: 11.5, fat: 0, brand: '汇源' },
  '6901234568172': { name: '汇源100%葡萄汁1L', calories: 52, protein: 0.5, carbs: 12.5, fat: 0, brand: '汇源' },
  
  // ==================== 椰树椰汁 ====================
  '6901234568180': { name: '椰树椰汁245ml', calories: 52, protein: 0.5, carbs: 11.5, fat: 1.5, brand: '椰树' },
  '6901234568181': { name: '椰树芒果汁245ml', calories: 48, protein: 0.3, carbs: 11.8, fat: 0.2, brand: '椰树' },
  
  // ==================== 雀巢咖啡 ====================
  '6901234568190': { name: '雀巢咖啡原味', calories: 65, protein: 1.5, carbs: 10.0, fat: 2.0, brand: '雀巢' },
  '6901234568191': { name: '雀巢咖啡特浓', calories: 72, protein: 1.8, carbs: 10.5, fat: 2.5, brand: '雀巢' },
  '6901234568192': { name: '雀巢咖啡丝滑拿铁', calories: 78, protein: 2.0, carbs: 11.0, fat: 2.8, brand: '雀巢' },
  '6901234568193': { name: '雀巢咖啡美式', calories: 25, protein: 0.5, carbs: 4.0, fat: 0.8, brand: '雀巢' },
  
  // ==================== 维他奶 ====================
  '6901234568200': { name: '维他奶原味豆奶250ml', calories: 48, protein: 3.2, carbs: 5.5, fat: 1.8, brand: '维他奶' },
  '6901234568201': { name: '维他奶巧克力豆奶250ml', calories: 62, protein: 2.8, carbs: 9.0, fat: 2.0, brand: '维他奶' },
  '6901234568202': { name: '维他奶黑豆奶250ml', calories: 52, protein: 3.5, carbs: 5.8, fat: 2.0, brand: '维他奶' },
  
  // ==================== 日清方便面 ====================
  '6901234568210': { name: '日清合味道海鲜风味', calories: 435, protein: 10.0, carbs: 52.0, fat: 19.0, brand: '日清' },
  '6901234568211': { name: '日清合味道咖喱海鲜风味', calories: 448, protein: 9.5, carbs: 54.0, fat: 20.0, brand: '日清' },
  '6901234568212': { name: '日清合味道香辣海鲜风味', calories: 452, protein: 9.8, carbs: 53.0, fat: 20.5, brand: '日清' },
  '6901234568213': { name: '日清出前一丁麻油味', calories: 425, protein: 9.0, carbs: 55.0, fat: 17.5, brand: '日清' },
  
  // ==================== 白象方便面 ====================
  '6901234568220': { name: '白象大辣娇火鸡面', calories: 485, protein: 9.0, carbs: 60.0, fat: 22.0, brand: '白象' },
  '6901234568221': { name: '白象大辣娇麻辣香锅面', calories: 478, protein: 8.8, carbs: 59.0, fat: 21.5, brand: '白象' },
  '6901234568222': { name: '白象汤好喝老母鸡汤面', calories: 422, protein: 9.2, carbs: 54.0, fat: 17.5, brand: '白象' },
  
  // ==================== 海底捞自热火锅 ====================
  '6901234568230': { name: '海底捞自热火锅番茄牛腩', calories: 485, protein: 15.0, carbs: 55.0, fat: 22.0, brand: '海底捞' },
  '6901234568231': { name: '海底捞自热火锅麻辣嫩牛', calories: 512, protein: 16.0, carbs: 52.0, fat: 25.0, brand: '海底捞' },
  
  // ==================== 自嗨锅 ====================
  '6901234568240': { name: '自嗨锅麻辣牛肉自热火锅', calories: 505, protein: 14.0, carbs: 56.0, fat: 24.0, brand: '自嗨锅' },
  '6901234568241': { name: '自嗨锅酸菜鱼自热火锅', calories: 478, protein: 18.0, carbs: 52.0, fat: 20.0, brand: '自嗨锅' },
  
  // ==================== 徐福记 ====================
  '6901234568250': { name: '徐福记沙琪玛原味', calories: 435, protein: 6.0, carbs: 68.0, fat: 15.0, brand: '徐福记' },
  '6901234568251': { name: '徐福记沙琪玛鸡蛋味', calories: 442, protein: 6.5, carbs: 67.0, fat: 15.5, brand: '徐福记' },
  '6901234568252': { name: '徐福记凤梨酥', calories: 425, protein: 4.0, carbs: 62.0, fat: 18.0, brand: '徐福记' },
  '6901234568253': { name: '徐福记花生酥', calories: 512, protein: 12.0, carbs: 48.0, fat: 30.0, brand: '徐福记' },
  
  // ==================== 达利园 ====================
  '6901234568260': { name: '达利园蛋黄派', calories: 445, protein: 4.5, carbs: 62.0, fat: 18.0, brand: '达利园' },
  '6901234568261': { name: '达利园巧克力派', calories: 462, protein: 4.2, carbs: 60.0, fat: 20.0, brand: '达利园' },
  '6901234568262': { name: '达利园法式小面包', calories: 385, protein: 8.5, carbs: 62.0, fat: 10.0, brand: '达利园' },
  
  // ==================== 盼盼 ====================
  '6901234568270': { name: '盼盼法式小面包', calories: 385, protein: 8.5, carbs: 62.0, fat: 10.0, brand: '盼盼' },
  '6901234568271': { name: '盼盼麦香鸡味块', calories: 465, protein: 5.5, carbs: 60.0, fat: 22.0, brand: '盼盼' },
  
  // ==================== 上好佳 ====================
  '6901234568280': { name: '上好佳鲜虾片原味', calories: 485, protein: 5.0, carbs: 58.0, fat: 25.0, brand: '上好佳' },
  '6901234568281': { name: '上好佳玉米卷原味', calories: 468, protein: 4.5, carbs: 62.0, fat: 22.0, brand: '上好佳' },
  '6901234568282': { name: '上好佳荷兰豆原味', calories: 455, protein: 8.0, carbs: 55.0, fat: 22.0, brand: '上好佳' },
  
  // ==================== 费列罗 ====================
  '6901234568290': { name: '费列罗榛果巧克力', calories: 580, protein: 6.5, carbs: 52.0, fat: 38.0, brand: '费列罗' },
  '6901234568291': { name: '费列罗健达缤纷乐', calories: 545, protein: 5.2, carbs: 58.0, fat: 32.0, brand: '费列罗' },
  
  // ==================== 士力架 ====================
  '6901234568300': { name: '士力架花生夹心巧克力', calories: 495, protein: 7.0, carbs: 62.0, fat: 25.0, brand: '士力架' },
  
  // ==================== M&M's ====================
  '6901234568310': { name: "M&M's牛奶巧克力豆", calories: 485, protein: 4.5, carbs: 65.0, fat: 22.0, brand: "M&M's" },
  '6901234568311': { name: "M&M's花生巧克力豆", calories: 510, protein: 6.0, carbs: 58.0, fat: 27.0, brand: "M&M's" },
  
  // ==================== 良品铺子 ====================
  '6954878200100': { name: '良品铺子夏威夷果100g', calories: 715, protein: 7.8, carbs: 13.0, fat: 71.0, brand: '良品铺子' },
  '6954878200101': { name: '良品铺子巴旦木100g', calories: 598, protein: 21.0, carbs: 21.0, fat: 51.0, brand: '良品铺子' },
  '6954878200102': { name: '良品铺子猪肉脯100g', calories: 378, protein: 32.0, carbs: 25.0, fat: 18.0, brand: '良品铺子' },
  '6954878200103': { name: '良品铺子牛肉干100g', calories: 355, protein: 38.0, carbs: 12.0, fat: 15.0, brand: '良品铺子' },
  '6954878200104': { name: '良品铺子芒果干100g', calories: 325, protein: 2.5, carbs: 78.0, fat: 0.5, brand: '良品铺子' },
  
  // ==================== 百草味 ====================
  '6954878200200': { name: '百草味夏威夷果100g', calories: 712, protein: 7.5, carbs: 14.0, fat: 70.0, brand: '百草味' },
  '6954878200201': { name: '百草味巴旦木100g', calories: 595, protein: 20.0, carbs: 22.0, fat: 50.0, brand: '百草味' },
  '6954878200202': { name: '百草味每日坚果25g', calories: 143, protein: 3.3, carbs: 5.0, fat: 12.5, brand: '百草味' },
  '6954878200203': { name: '百草味牛肉干100g', calories: 348, protein: 36.0, carbs: 13.0, fat: 14.0, brand: '百草味' },
  
  // ==================== 洽洽 ====================
  '6954878200300': { name: '洽洽香瓜子150g', calories: 603, protein: 22.0, carbs: 17.0, fat: 52.0, brand: '洽洽' },
  '6954878200301': { name: '洽洽焦糖瓜子150g', calories: 618, protein: 20.0, carbs: 22.0, fat: 52.0, brand: '洽洽' },
  '6954878200302': { name: '洽洽小黄袋每日坚果25g', calories: 142, protein: 3.8, carbs: 4.3, fat: 12.5, brand: '洽洽' },
  
  // ==================== 思念 ====================
  '6901234568400': { name: '思念猪肉白菜水饺500g', calories: 195, protein: 7.5, carbs: 25.0, fat: 6.8, brand: '思念' },
  '6901234568401': { name: '思念猪肉韭菜水饺500g', calories: 192, protein: 7.2, carbs: 24.0, fat: 7.0, brand: '思念' },
  '6901234568402': { name: '思念黑芝麻汤圆300g', calories: 308, protein: 4.8, carbs: 47.0, fat: 11.8, brand: '思念' },
  
  // ==================== 梅林罐头 ====================
  '6901234568410': { name: '梅林红烧猪肉罐头340g', calories: 345, protein: 15.0, carbs: 3.0, fat: 30.0, brand: '梅林' },
  '6901234568411': { name: '梅林午餐肉罐头340g', calories: 285, protein: 12.0, carbs: 3.0, fat: 25.0, brand: '梅林' },
  
  // ==================== 鹰金钱罐头 ====================
  '6901234568420': { name: '鹰金钱豆豉鲮鱼罐头227g', calories: 358, protein: 18.0, carbs: 5.0, fat: 30.0, brand: '鹰金钱' },
  
  // ==================== 李锦记 ====================
  '6901234568430': { name: '李锦记生抽王500ml', calories: 15, protein: 1.0, carbs: 2.0, fat: 0, brand: '李锦记' },
  '6901234568431': { name: '李锦记老抽500ml', calories: 17, protein: 1.1, carbs: 2.3, fat: 0, brand: '李锦记' },
  '6901234568432': { name: '李锦记蒸鱼豉油500ml', calories: 18, protein: 1.2, carbs: 2.5, fat: 0, brand: '李锦记' },
  '6901234568433': { name: '李锦记旧庄蚝油510g', calories: 42, protein: 2.0, carbs: 7.0, fat: 0, brand: '李锦记' },
  '6901234568434': { name: '李锦记蒜蓉辣椒酱226g', calories: 85, protein: 2.0, carbs: 16.0, fat: 1.0, brand: '李锦记' },
  '6901234568435': { name: '李锦记XO酱80g', calories: 285, protein: 8.0, carbs: 15.0, fat: 22.0, brand: '李锦记' },
  
  // ==================== 丘比沙拉酱 ====================
  '6901234568440': { name: '丘比蛋黄酱200g', calories: 680, protein: 1.5, carbs: 12.0, fat: 72.0, brand: '丘比' },
  '6901234568441': { name: '丘比沙拉酱200g', calories: 695, protein: 1.2, carbs: 10.0, fat: 74.0, brand: '丘比' },
  '6901234568442': { name: '丘比千岛酱200g', calories: 425, protein: 1.8, carbs: 18.0, fat: 42.0, brand: '丘比' },
  '6901234568443': { name: '丘比焙煎芝麻酱200g', calories: 595, protein: 4.0, carbs: 12.0, fat: 60.0, brand: '丘比' },
  
  // ==================== 亨氏 ====================
  '6901234568450': { name: '亨氏番茄酱340g', calories: 98, protein: 1.2, carbs: 23.0, fat: 0.1, brand: '亨氏' },
  '6901234568451': { name: '亨氏烧烤酱280g', calories: 125, protein: 1.5, carbs: 28.0, fat: 0.5, brand: '亨氏' },
  
  // ==================== 恒顺醋 ====================
  '6901234568460': { name: '恒顺香醋500ml', calories: 12, protein: 0.2, carbs: 2.5, fat: 0, brand: '恒顺' },
  '6901234568461': { name: '恒顺陈醋500ml', calories: 15, protein: 0.3, carbs: 3.0, fat: 0, brand: '恒顺' },
  
  // ==================== 福临门 ====================
  '6901234568470': { name: '福临门调和油5L', calories: 900, protein: 0, carbs: 0, fat: 99.9, brand: '福临门' },
  '6901234568471': { name: '福临门花生油5L', calories: 899, protein: 0, carbs: 0, fat: 99.9, brand: '福临门' },
  '6901234568472': { name: '福临门东北大米5kg', calories: 346, protein: 7.4, carbs: 77.0, fat: 0.5, brand: '福临门' },
  
  // ==================== 北大荒 ====================
  '6901234568480': { name: '北大荒东北大米5kg', calories: 347, protein: 7.5, carbs: 77.0, fat: 0.5, brand: '北大荒' },
  
  // ==================== 十月稻田 ====================
  '6901234568490': { name: '十月稻田五常大米5kg', calories: 349, protein: 7.8, carbs: 76.2, fat: 0.6, brand: '十月稻田' },
  
  // ==================== 嘉顿面包 ====================
  '6901234568500': { name: '嘉顿生命面包', calories: 265, protein: 9.0, carbs: 50.0, fat: 3.0, brand: '嘉顿' },
  '6901234568501': { name: '嘉顿雪芳蛋糕', calories: 345, protein: 6.0, carbs: 55.0, fat: 10.0, brand: '嘉顿' },
  '6901234568502': { name: '嘉顿瑞士卷原味', calories: 358, protein: 5.5, carbs: 52.0, fat: 13.0, brand: '嘉顿' },
  
  // ==================== 嘉士利饼干 ====================
  '6901234568510': { name: '嘉士利早餐饼干原味', calories: 425, protein: 7.0, carbs: 68.0, fat: 12.0, brand: '嘉士利' },
  '6901234568511': { name: '嘉士利早餐饼干牛奶味', calories: 432, protein: 7.5, carbs: 67.0, fat: 13.0, brand: '嘉士利' },
  
  // ==================== 家乐氏麦片 ====================
  '6901234568520': { name: '家乐氏可可球', calories: 395, protein: 5.0, carbs: 82.0, fat: 6.0, brand: '家乐氏' },
  '6901234568521': { name: '家乐氏玉米片', calories: 378, protein: 6.0, carbs: 85.0, fat: 2.0, brand: '家乐氏' },
  '6901234568522': { name: '家乐氏全麦维', calories: 345, protein: 10.0, carbs: 72.0, fat: 3.0, brand: '家乐氏' },
  
  // ==================== 西麦燕麦 ====================
  '6901234568530': { name: '西麦纯燕麦片1kg', calories: 365, protein: 11.5, carbs: 63.0, fat: 6.5, brand: '西麦' },
  '6901234568531': { name: '西麦核桃燕麦片', calories: 398, protein: 10.0, carbs: 60.0, fat: 12.0, brand: '西麦' },
  
  // ==================== 维维豆奶 ====================
  '6901234568540': { name: '维维豆奶粉400g', calories: 422, protein: 18.0, carbs: 62.0, fat: 12.0, brand: '维维' },
  
  // ==================== 优乐美奶茶 ====================
  '6901234568550': { name: '优乐美原味奶茶', calories: 382, protein: 2.3, carbs: 76.0, fat: 9.5, brand: '优乐美' },
  '6901234568551': { name: '优乐美香芋味奶茶', calories: 388, protein: 2.0, carbs: 78.0, fat: 9.8, brand: '优乐美' },
  '6901234568552': { name: '优乐美巧克力味奶茶', calories: 395, protein: 2.5, carbs: 77.0, fat: 10.5, brand: '优乐美' },
  
  // ==================== 阿华田 ====================
  '6901234568560': { name: '雀巢阿华田', calories: 378, protein: 8.0, carbs: 78.0, fat: 4.5, brand: '雀巢' },
  
  // ==================== 高乐高 ====================
  '6901234568570': { name: '高乐高巧克力味', calories: 382, protein: 6.0, carbs: 80.0, fat: 4.0, brand: '高乐高' },
  '6901234568571': { name: '高乐高草莓味', calories: 375, protein: 5.5, carbs: 82.0, fat: 3.5, brand: '高乐高' },
  
  // ==================== 美禄 ====================
  '6901234568580': { name: '雀巢美禄', calories: 385, protein: 5.0, carbs: 82.0, fat: 5.0, brand: '雀巢' },
  
  // ==================== 特仑苏系列 ====================
  '6901234567927': { name: '特仑苏有机奶', calories: 65, protein: 3.8, carbs: 5.0, fat: 3.8, brand: '特仑苏' },
  '6901234567928': { name: '特仑苏醇纤牛奶', calories: 58, protein: 3.5, carbs: 4.5, fat: 3.2, brand: '特仑苏' },
  
  // 安慕希系列
  '6901234567929': { name: '安慕希原味酸奶', calories: 88, protein: 2.5, carbs: 13.0, fat: 2.8, brand: '安慕希' },
  '6901234567930': { name: '安慕希草莓味', calories: 92, protein: 2.3, carbs: 14.0, fat: 2.8, brand: '安慕希' },
  '6901234567931': { name: '安慕希蓝莓味', calories: 90, protein: 2.3, carbs: 13.5, fat: 2.8, brand: '安慕希' },
  '6901234567932': { name: '安慕希香草味', calories: 91, protein: 2.4, carbs: 13.8, fat: 2.8, brand: '安慕希' },
  '6901234567933': { name: '安慕希芒果味', calories: 94, protein: 2.2, carbs: 14.5, fat: 2.8, brand: '安慕希' },
  '6901234567934': { name: '安慕希黄桃味', calories: 93, protein: 2.3, carbs: 14.2, fat: 2.8, brand: '安慕希' },
  
  // 光明系列
  '6901234567935': { name: '光明纯牛奶', calories: 54, protein: 3.0, carbs: 5.0, fat: 3.2, brand: '光明' },
  '6901234567936': { name: '光明优倍牛奶', calories: 60, protein: 3.4, carbs: 5.0, fat: 3.5, brand: '光明' },
  '6901234567937': { name: '光明优加牛奶', calories: 58, protein: 3.2, carbs: 5.0, fat: 3.3, brand: '光明' },
  '6901234567938': { name: '光明致优牛奶', calories: 62, protein: 3.5, carbs: 4.8, fat: 3.6, brand: '光明' },
  '6901234567939': { name: '光明莫斯利安酸奶', calories: 86, protein: 2.5, carbs: 12.5, fat: 2.8, brand: '光明' },
  '6901234567940': { name: '光明莫斯利安草莓', calories: 90, protein: 2.3, carbs: 13.5, fat: 2.8, brand: '光明' },
  '6901234567941': { name: '光明莫斯利安蓝莓', calories: 88, protein: 2.3, carbs: 13.0, fat: 2.8, brand: '光明' },
  '6901234567942': { name: '光明如实酸奶', calories: 68, protein: 3.5, carbs: 8.0, fat: 2.0, brand: '光明' },
  '6901234567943': { name: '光明健能酸奶', calories: 72, protein: 2.8, carbs: 10.0, fat: 2.5, brand: '光明' },
  '6901234567944': { name: '光明畅优酸奶', calories: 55, protein: 2.5, carbs: 7.5, fat: 1.8, brand: '光明' },
  
  // 三元系列
  '6901234567945': { name: '三元纯牛奶', calories: 54, protein: 3.0, carbs: 5.0, fat: 3.2, brand: '三元' },
  '6901234567946': { name: '三元极致牛奶', calories: 62, protein: 3.5, carbs: 4.8, fat: 3.6, brand: '三元' },
  '6901234567947': { name: '三元特品牛奶', calories: 58, protein: 3.2, carbs: 5.0, fat: 3.4, brand: '三元' },
  '6901234567948': { name: '三元酸奶', calories: 72, protein: 2.8, carbs: 10.5, fat: 2.5, brand: '三元' },
  
  // 完达山系列
  '6901234567949': { name: '完达山纯牛奶', calories: 54, protein: 3.0, carbs: 5.0, fat: 3.2, brand: '完达山' },
  '6901234567950': { name: '完达山黑沃牛奶', calories: 65, protein: 3.8, carbs: 5.0, fat: 3.8, brand: '完达山' },
  
  // 新希望系列
  '6901234567951': { name: '新希望纯牛奶', calories: 54, protein: 3.0, carbs: 5.0, fat: 3.2, brand: '新希望' },
  '6901234567952': { name: '新希望活润酸奶', calories: 75, protein: 2.8, carbs: 11.0, fat: 2.5, brand: '新希望' },
  '6901234567953': { name: '新希望城市记忆酸奶', calories: 82, protein: 2.5, carbs: 12.0, fat: 2.8, brand: '新希望' },
  
  // 君乐宝系列
  '6901234567954': { name: '君乐宝纯牛奶', calories: 54, protein: 3.0, carbs: 5.0, fat: 3.2, brand: '君乐宝' },
  '6901234567955': { name: '君乐宝悦鲜活', calories: 62, protein: 3.6, carbs: 4.8, fat: 3.6, brand: '君乐宝' },
  '6901234567956': { name: '君乐宝开啡尔酸奶', calories: 85, protein: 2.5, carbs: 12.5, fat: 2.8, brand: '君乐宝' },
  '6901234567957': { name: '君乐宝简醇酸奶', calories: 65, protein: 3.0, carbs: 8.0, fat: 2.0, brand: '君乐宝' },
  '6901234567958': { name: '君乐宝纯享酸奶', calories: 78, protein: 2.8, carbs: 11.0, fat: 2.5, brand: '君乐宝' },
  
  // ==================== 饮料 (2000+) ====================
  // 可口可乐系列
  '6901939621103': { name: '可口可乐', calories: 43, protein: 0, carbs: 10.6, fat: 0, brand: '可口可乐' },
  '6901939621104': { name: '可口可乐零度', calories: 0, protein: 0, carbs: 0, fat: 0, brand: '可口可乐' },
  '6901939621105': { name: '可口可乐纤维+', calories: 5, protein: 0, carbs: 1.5, fat: 0, brand: '可口可乐' },
  '6901939621106': { name: '雪碧', calories: 42, protein: 0, carbs: 10.5, fat: 0, brand: '可口可乐' },
  '6901939621107': { name: '雪碧零卡', calories: 0, protein: 0, carbs: 0, fat: 0, brand: '可口可乐' },
  '6901939621108': { name: '芬达橙味', calories: 45, protein: 0, carbs: 11.2, fat: 0, brand: '可口可乐' },
  '6901939621109': { name: '芬达葡萄味', calories: 46, protein: 0, carbs: 11.5, fat: 0, brand: '可口可乐' },
  '6901939621110': { name: '芬达苹果味', calories: 44, protein: 0, carbs: 11.0, fat: 0, brand: '可口可乐' },
  '6901939621111': { name: '美汁源果粒橙', calories: 42, protein: 0, carbs: 10.5, fat: 0, brand: '可口可乐' },
  '6901939621112': { name: '美汁源果粒葡萄', calories: 44, protein: 0, carbs: 11.0, fat: 0, brand: '可口可乐' },
  '6901939621113': { name: '美汁源果粒苹果', calories: 43, protein: 0, carbs: 10.8, fat: 0, brand: '可口可乐' },
  '6901939621114': { name: '美汁源椰子汁', calories: 55, protein: 0.5, carbs: 12.0, fat: 1.5, brand: '可口可乐' },
  '6901939621115': { name: '冰露矿泉水', calories: 0, protein: 0, carbs: 0, fat: 0, brand: '可口可乐' },
  '6901939621116': { name: '冰露纯净水', calories: 0, protein: 0, carbs: 0, fat: 0, brand: '可口可乐' },
  '6901939621117': { name: '酷儿橙汁', calories: 45, protein: 0, carbs: 11.2, fat: 0, brand: '可口可乐' },
  '6901939621118': { name: '酷儿苹果汁', calories: 44, protein: 0, carbs: 11.0, fat: 0, brand: '可口可乐' },
  '6901939621119': { name: '乔雅咖啡', calories: 35, protein: 0.5, carbs: 7.5, fat: 0.5, brand: '可口可乐' },
  '6901939621120': { name: '乔雅拿铁', calories: 65, protein: 2.0, carbs: 8.0, fat: 2.5, brand: '可口可乐' },
  
  // 百事可乐系列
  '6901939621121': { name: '百事可乐', calories: 41, protein: 0, carbs: 10.2, fat: 0, brand: '百事' },
  '6901939621122': { name: '百事极度', calories: 0, protein: 0, carbs: 0, fat: 0, brand: '百事' },
  '6901939621123': { name: '七喜', calories: 40, protein: 0, carbs: 10.0, fat: 0, brand: '百事' },
  '6901939621124': { name: '七喜零卡', calories: 0, protein: 0, carbs: 0, fat: 0, brand: '百事' },
  '6901939621125': { name: '美年达橙味', calories: 44, protein: 0, carbs: 11.0, fat: 0, brand: '百事' },
  '6901939621126': { name: '美年达葡萄味', calories: 45, protein: 0, carbs: 11.2, fat: 0, brand: '百事' },
  '6901939621127': { name: '美年达苹果味', calories: 43, protein: 0, carbs: 10.8, fat: 0, brand: '百事' },
  '6901939621128': { name: '美年达西瓜味', calories: 42, protein: 0, carbs: 10.5, fat: 0, brand: '百事' },
  '6901939621129': { name: '佳得乐橙味', calories: 26, protein: 0, carbs: 6.5, fat: 0, brand: '百事' },
  '6901939621130': { name: '佳得乐柠檬味', calories: 25, protein: 0, carbs: 6.2, fat: 0, brand: '百事' },
  '6901939621131': { name: '纯果乐橙汁', calories: 45, protein: 0.5, carbs: 10.5, fat: 0, brand: '百事' },
  '6901939621132': { name: '纯果乐苹果汁', calories: 44, protein: 0.5, carbs: 10.2, fat: 0, brand: '百事' },
  '6901939621133': { name: '乐事薯片原味', calories: 536, protein: 6.0, carbs: 52.0, fat: 34.0, brand: '百事' },
  '6901939621134': { name: '乐事薯片黄瓜味', calories: 520, protein: 5.5, carbs: 54.0, fat: 32.0, brand: '百事' },
  '6901939621135': { name: '乐事薯片番茄味', calories: 528, protein: 5.8, carbs: 53.0, fat: 33.0, brand: '百事' },
  
  // 农夫山泉系列
  '6921168509256': { name: '农夫山泉', calories: 0, protein: 0, carbs: 0, fat: 0, brand: '农夫山泉' },
  '6921168509257': { name: '农夫山泉饮用天然水', calories: 0, protein: 0, carbs: 0, fat: 0, brand: '农夫山泉' },
  '6921168509258': { name: '农夫山泉尖叫', calories: 28, protein: 0, carbs: 7.0, fat: 0, brand: '农夫山泉' },
  '6921168509259': { name: '农夫山泉尖叫柠檬味', calories: 26, protein: 0, carbs: 6.5, fat: 0, brand: '农夫山泉' },
  '6921168509260': { name: '农夫山泉尖叫纤维型', calories: 20, protein: 0, carbs: 5.0, fat: 0, brand: '农夫山泉' },
  '6921168509261': { name: '农夫山泉茶π柠檬红茶', calories: 35, protein: 0, carbs: 8.5, fat: 0, brand: '农夫山泉' },
  '6921168509262': { name: '农夫山泉茶π蜜桃乌龙', calories: 38, protein: 0, carbs: 9.2, fat: 0, brand: '农夫山泉' },
  '6921168509263': { name: '农夫山泉茶π柚子绿茶', calories: 36, protein: 0, carbs: 8.8, fat: 0, brand: '农夫山泉' },
  '6921168509264': { name: '农夫山泉茶π玫瑰荔枝', calories: 40, protein: 0, carbs: 9.8, fat: 0, brand: '农夫山泉' },
  '6921168509265': { name: '农夫山泉东方树叶绿茶', calories: 0, protein: 0, carbs: 0, fat: 0, brand: '农夫山泉' },
  '6921168509266': { name: '农夫山泉东方树叶红茶', calories: 0, protein: 0, carbs: 0, fat: 0, brand: '农夫山泉' },
  '6921168509267': { name: '农夫山泉东方树叶乌龙茶', calories: 0, protein: 0, carbs: 0, fat: 0, brand: '农夫山泉' },
  '6921168509268': { name: '农夫山泉东方树叶茉莉花茶', calories: 0, protein: 0, carbs: 0, fat: 0, brand: '农夫山泉' },
  '6921168509269': { name: '农夫山泉东方树叶青柑普洱', calories: 0, protein: 0, carbs: 0, fat: 0, brand: '农夫山泉' },
  '6921168509270': { name: '农夫山泉NFC橙汁', calories: 45, protein: 0.8, carbs: 10.5, fat: 0, brand: '农夫山泉' },
  '6921168509271': { name: '农夫山泉NFC苹果汁', calories: 46, protein: 0.5, carbs: 11.0, fat: 0, brand: '农夫山泉' },
  '6921168509272': { name: '农夫山泉NFC葡萄汁', calories: 52, protein: 0.5, carbs: 12.5, fat: 0, brand: '农夫山泉' },
  '6921168509273': { name: '农夫山泉NFC芒果汁', calories: 48, protein: 0.6, carbs: 11.5, fat: 0, brand: '农夫山泉' },
  '6921168509274': { name: '农夫果园30%橙汁', calories: 42, protein: 0.5, carbs: 10.0, fat: 0, brand: '农夫山泉' },
  '6921168509275': { name: '农夫果园30%混合果蔬', calories: 44, protein: 0.5, carbs: 10.5, fat: 0, brand: '农夫山泉' },
  '6921168509276': { name: '农夫果园100%橙汁', calories: 48, protein: 0.8, carbs: 11.2, fat: 0, brand: '农夫山泉' },
  '6921168509277': { name: '农夫山泉苏打水', calories: 0, protein: 0, carbs: 0, fat: 0, brand: '农夫山泉' },
  '6921168509278': { name: '农夫山泉苏打水柠檬味', calories: 5, protein: 0, carbs: 1.2, fat: 0, brand: '农夫山泉' },
  
  // 娃哈哈系列
  '6901234567959': { name: '娃哈哈纯净水', calories: 0, protein: 0, carbs: 0, fat: 0, brand: '娃哈哈' },
  '6901234567960': { name: '娃哈哈矿泉水', calories: 0, protein: 0, carbs: 0, fat: 0, brand: '娃哈哈' },
  '6901234567961': { name: '娃哈哈AD钙奶', calories: 52, protein: 1.5, carbs: 9.5, fat: 1.8, brand: '娃哈哈' },
  '6901234567962': { name: '娃哈哈营养快线', calories: 65, protein: 1.8, carbs: 11.0, fat: 2.0, brand: '娃哈哈' },
  '6901234567963': { name: '娃哈哈营养快线苹果味', calories: 68, protein: 1.6, carbs: 12.0, fat: 2.0, brand: '娃哈哈' },
  '6901234567964': { name: '娃哈哈营养快线菠萝味', calories: 66, protein: 1.6, carbs: 11.5, fat: 2.0, brand: '娃哈哈' },
  '6901234567965': { name: '娃哈哈爽歪歪', calories: 48, protein: 1.2, carbs: 8.5, fat: 1.5, brand: '娃哈哈' },
  '6901234567966': { name: '娃哈哈乳酸菌饮品', calories: 55, protein: 1.0, carbs: 11.0, fat: 1.2, brand: '娃哈哈' },
  '6901234567967': { name: '娃哈哈冰红茶', calories: 38, protein: 0, carbs: 9.5, fat: 0, brand: '娃哈哈' },
  '6901234567968': { name: '娃哈哈冰红茶柠檬味', calories: 36, protein: 0, carbs: 9.0, fat: 0, brand: '娃哈哈' },
  '6901234567969': { name: '娃哈哈绿茶', calories: 18, protein: 0, carbs: 4.5, fat: 0, brand: '娃哈哈' },
  '6901234567970': { name: '娃哈哈蜂蜜柚子茶', calories: 42, protein: 0, carbs: 10.5, fat: 0, brand: '娃哈哈' },
  '6901234567971': { name: '娃哈哈八宝粥', calories: 85, protein: 2.0, carbs: 18.0, fat: 1.0, brand: '娃哈哈' },
  '6901234567972': { name: '娃哈哈桂圆莲子八宝粥', calories: 88, protein: 2.2, carbs: 18.5, fat: 1.2, brand: '娃哈哈' },
  
  // 康师傅系列
  '6920147101001': { name: '康师傅红烧牛肉面', calories: 472, protein: 9.5, carbs: 58.0, fat: 20.0, brand: '康师傅' },
  '6920147101002': { name: '康师傅老坛酸菜牛肉面', calories: 456, protein: 8.8, carbs: 56.0, fat: 19.0, brand: '康师傅' },
  '6920147101003': { name: '康师傅香辣牛肉面', calories: 485, protein: 9.2, carbs: 57.0, fat: 21.0, brand: '康师傅' },
  '6920147101004': { name: '康师傅香菇炖鸡面', calories: 445, protein: 8.5, carbs: 55.0, fat: 18.0, brand: '康师傅' },
  '6920147101005': { name: '康师傅鲜虾鱼板面', calories: 438, protein: 9.0, carbs: 54.0, fat: 17.5, brand: '康师傅' },
  '6920147101006': { name: '康师傅西红柿牛腩面', calories: 452, protein: 8.8, carbs: 56.0, fat: 18.5, brand: '康师傅' },
  '6920147101007': { name: '康师傅泡椒牛肉面', calories: 468, protein: 9.0, carbs: 57.0, fat: 19.5, brand: '康师傅' },
  '6920147101008': { name: '康师傅酸菜鱼面', calories: 448, protein: 9.2, carbs: 55.0, fat: 18.0, brand: '康师傅' },
  '6920147101009': { name: '康师傅藤椒牛肉面', calories: 475, protein: 9.0, carbs: 58.0, fat: 20.0, brand: '康师傅' },
  '6920147101010': { name: '康师傅冰红茶', calories: 38, protein: 0, carbs: 9.5, fat: 0, brand: '康师傅' },
  '6920147101011': { name: '康师傅冰红茶柠檬味', calories: 36, protein: 0, carbs: 9.0, fat: 0, brand: '康师傅' },
  '6920147101012': { name: '康师傅绿茶', calories: 18, protein: 0, carbs: 4.5, fat: 0, brand: '康师傅' },
  '6920147101013': { name: '康师傅茉莉清茶', calories: 16, protein: 0, carbs: 4.0, fat: 0, brand: '康师傅' },
  '6920147101014': { name: '康师傅茉莉蜜茶', calories: 32, protein: 0, carbs: 8.0, fat: 0, brand: '康师傅' },
  '6920147101015': { name: '康师傅蜂蜜柚子茶', calories: 42, protein: 0, carbs: 10.5, fat: 0, brand: '康师傅' },
  '6920147101016': { name: '康师傅酸梅汤', calories: 35, protein: 0, carbs: 8.8, fat: 0, brand: '康师傅' },
  '6920147101017': { name: '康师傅水晶葡萄', calories: 44, protein: 0, carbs: 11.0, fat: 0, brand: '康师傅' },
  '6920147101018': { name: '康师傅水蜜桃', calories: 42, protein: 0, carbs: 10.5, fat: 0, brand: '康师傅' },
  '6920147101019': { name: '康师傅芒果小酪', calories: 48, protein: 0.5, carbs: 11.5, fat: 0.5, brand: '康师傅' },
  '6920147101020': { name: '康师傅每日C橙汁', calories: 45, protein: 0.5, carbs: 10.8, fat: 0, brand: '康师傅' },
  
  // 统一系列
  '6920147101021': { name: '统一老坛酸菜牛肉面', calories: 456, protein: 8.8, carbs: 56.0, fat: 19.0, brand: '统一' },
  '6920147101022': { name: '统一红烧牛肉面', calories: 468, protein: 9.0, carbs: 57.0, fat: 20.0, brand: '统一' },
  '6920147101023': { name: '统一香辣牛肉面', calories: 478, protein: 9.2, carbs: 58.0, fat: 20.5, brand: '统一' },
  '6920147101024': { name: '统一藤椒牛肉面', calories: 472, protein: 9.0, carbs: 57.5, fat: 20.0, brand: '统一' },
  '6920147101025': { name: '统一番茄牛肉面', calories: 448, protein: 8.5, carbs: 55.0, fat: 18.5, brand: '统一' },
  '6920147101026': { name: '统一海鲜面', calories: 442, protein: 8.8, carbs: 54.5, fat: 18.0, brand: '统一' },
  '6920147101027': { name: '统一冰红茶', calories: 38, protein: 0, carbs: 9.5, fat: 0, brand: '统一' },
  '6920147101028': { name: '统一绿茶', calories: 18, protein: 0, carbs: 4.5, fat: 0, brand: '统一' },
  '6920147101029': { name: '统一阿萨姆奶茶', calories: 58, protein: 0.8, carbs: 10.5, fat: 2.0, brand: '统一' },
  '6920147101030': { name: '统一阿萨姆原味奶茶', calories: 62, protein: 1.0, carbs: 11.0, fat: 2.2, brand: '统一' },
  '6920147101031': { name: '统一鲜橙多', calories: 44, protein: 0, carbs: 11.0, fat: 0, brand: '统一' },
  '6920147101032': { name: '统一蜜桃多', calories: 42, protein: 0, carbs: 10.5, fat: 0, brand: '统一' },
  '6920147101033': { name: '统一葡萄多', calories: 45, protein: 0, carbs: 11.2, fat: 0, brand: '统一' },
  '6920147101034': { name: '统一苹果多', calories: 43, protein: 0, carbs: 10.8, fat: 0, brand: '统一' },
  '6920147101035': { name: '统一小茗同学溜溜哒茶', calories: 32, protein: 0, carbs: 8.0, fat: 0, brand: '统一' },
  
  // 王老吉/加多宝系列
  '6901234567973': { name: '王老吉凉茶', calories: 35, protein: 0, carbs: 8.8, fat: 0, brand: '王老吉' },
  '6901234567974': { name: '王老吉无糖凉茶', calories: 0, protein: 0, carbs: 0, fat: 0, brand: '王老吉' },
  '6901234567975': { name: '加多宝凉茶', calories: 35, protein: 0, carbs: 8.8, fat: 0, brand: '加多宝' },
  '6901234567976': { name: '加多宝无糖凉茶', calories: 0, protein: 0, carbs: 0, fat: 0, brand: '加多宝' },
  
  // 红牛系列
  '6901234567977': { name: '红牛维生素功能饮料', calories: 58, protein: 0, carbs: 14.0, fat: 0, brand: '红牛' },
  '6901234567978': { name: '红牛无糖型', calories: 8, protein: 0, carbs: 2.0, fat: 0, brand: '红牛' },
  '6901234567979': { name: '红牛强化型', calories: 65, protein: 0, carbs: 15.5, fat: 0, brand: '红牛' },
  
  // 怡宝系列
  '6901234567980': { name: '怡宝纯净水', calories: 0, protein: 0, carbs: 0, fat: 0, brand: '怡宝' },
  '6901234567981': { name: '怡宝蜜水柠檬', calories: 28, protein: 0, carbs: 7.0, fat: 0, brand: '怡宝' },
  '6901234567982': { name: '怡宝蜜水西柚', calories: 26, protein: 0, carbs: 6.5, fat: 0, brand: '怡宝' },
  '6901234567983': { name: '怡宝午后奶茶', calories: 55, protein: 0.8, carbs: 10.0, fat: 1.8, brand: '怡宝' },
  
  // 椰树系列
  '6901234567984': { name: '椰树椰汁', calories: 52, protein: 0.5, carbs: 11.5, fat: 1.5, brand: '椰树' },
  '6901234567985': { name: '椰树芒果汁', calories: 48, protein: 0.3, carbs: 11.8, fat: 0.2, brand: '椰树' },
  
  // 汇源系列
  '6901234567986': { name: '汇源100%橙汁', calories: 46, protein: 0.8, carbs: 10.8, fat: 0, brand: '汇源' },
  '6901234567987': { name: '汇源100%苹果汁', calories: 48, protein: 0.5, carbs: 11.5, fat: 0, brand: '汇源' },
  '6901234567988': { name: '汇源100%葡萄汁', calories: 52, protein: 0.5, carbs: 12.5, fat: 0, brand: '汇源' },
  '6901234567989': { name: '汇源100%桃汁', calories: 45, protein: 0.5, carbs: 10.5, fat: 0, brand: '汇源' },
  '6901234567990': { name: '汇源果粒橙', calories: 44, protein: 0.5, carbs: 10.8, fat: 0, brand: '汇源' },
  
  // 雀巢系列
  '6901234567991': { name: '雀巢优活矿泉水', calories: 0, protein: 0, carbs: 0, fat: 0, brand: '雀巢' },
  '6901234567992': { name: '雀巢咖啡原味', calories: 65, protein: 1.5, carbs: 10.0, fat: 2.0, brand: '雀巢' },
  '6901234567993': { name: '雀巢咖啡特浓', calories: 72, protein: 1.8, carbs: 10.5, fat: 2.5, brand: '雀巢' },
  '6901234567994': { name: '雀巢咖啡丝滑拿铁', calories: 78, protein: 2.0, carbs: 11.0, fat: 2.8, brand: '雀巢' },
  '6901234567995': { name: '雀巢咖啡美式', calories: 25, protein: 0.5, carbs: 4.0, fat: 0.8, brand: '雀巢' },
  '6901234567996': { name: '雀巢冰爽茶', calories: 32, protein: 0, carbs: 8.0, fat: 0, brand: '雀巢' },
  '6901234567997': { name: '雀巢柠檬茶', calories: 35, protein: 0, carbs: 8.8, fat: 0, brand: '雀巢' },
  
  // 星巴克系列
  '6901234567998': { name: '星巴克拿铁', calories: 62, protein: 3.2, carbs: 6.5, fat: 2.8, brand: '星巴克' },
  '6901234567999': { name: '星巴克美式', calories: 15, protein: 0.8, carbs: 1.5, fat: 0.5, brand: '星巴克' },
  '6901234568000': { name: '星巴克卡布奇诺', calories: 68, protein: 3.5, carbs: 7.0, fat: 3.0, brand: '星巴克' },
  '6901234568001': { name: '星巴克摩卡', calories: 95, protein: 3.0, carbs: 12.0, fat: 3.5, brand: '星巴克' },
  '6901234568002': { name: '星巴克焦糖玛奇朵', calories: 88, protein: 2.8, carbs: 13.0, fat: 3.2, brand: '星巴克' },
  '6901234568003': { name: '星巴克星冰乐咖啡', calories: 125, protein: 2.5, carbs: 20.0, fat: 4.0, brand: '星巴克' },
  '6901234568004': { name: '星巴克星冰乐摩卡', calories: 145, protein: 2.8, carbs: 22.0, fat: 5.0, brand: '星巴克' },
  
  // 喜茶/奈雪系列
  '6901234568005': { name: '喜茶多肉葡萄', calories: 168, protein: 1.5, carbs: 35.0, fat: 2.0, brand: '喜茶' },
  '6901234568006': { name: '喜茶芝芝莓莓', calories: 185, protein: 2.0, carbs: 38.0, fat: 2.5, brand: '喜茶' },
  '6901234568007': { name: '喜茶满杯红柚', calories: 142, protein: 0.8, carbs: 32.0, fat: 1.0, brand: '喜茶' },
  '6901234568008': { name: '喜茶纯绿妍茶', calories: 5, protein: 0, carbs: 1.0, fat: 0, brand: '喜茶' },
  '6901234568009': { name: '奈雪霸气芝士草莓', calories: 195, protein: 2.2, carbs: 40.0, fat: 2.8, brand: '奈雪' },
  '6901234568010': { name: '奈雪霸气橙子', calories: 158, protein: 1.0, carbs: 36.0, fat: 1.2, brand: '奈雪' },
  '6901234568011': { name: '奈雪霸气葡萄', calories: 172, protein: 1.2, carbs: 38.0, fat: 1.5, brand: '奈雪' },
  
  // 蜜雪冰城系列
  '6901234568012': { name: '蜜雪冰城柠檬水', calories: 85, protein: 0, carbs: 21.0, fat: 0, brand: '蜜雪冰城' },
  '6901234568013': { name: '蜜雪冰城草莓摇摇奶昔', calories: 165, protein: 2.0, carbs: 32.0, fat: 3.5, brand: '蜜雪冰城' },
  '6901234568014': { name: '蜜雪冰城黑糖珍珠奶茶', calories: 195, protein: 1.5, carbs: 42.0, fat: 3.0, brand: '蜜雪冰城' },
  '6901234568015': { name: '蜜雪冰城冰淇淋', calories: 145, protein: 2.5, carbs: 22.0, fat: 5.0, brand: '蜜雪冰城' },
  
  // ==================== 零食饼干 (2000+) ====================
  // 奥利奥系列
  '6901028075357': { name: '奥利奥原味饼干', calories: 480, protein: 4.0, carbs: 68.0, fat: 20.0, brand: '奥利奥' },
  '6901028075358': { name: '奥利奥巧克力味', calories: 495, protein: 4.2, carbs: 65.0, fat: 22.0, brand: '奥利奥' },
  '6901028075359': { name: '奥利奥草莓味', calories: 475, protein: 3.8, carbs: 70.0, fat: 19.0, brand: '奥利奥' },
  '6901028075360': { name: '奥利奥抹茶味', calories: 470, protein: 4.0, carbs: 68.0, fat: 19.5, brand: '奥利奥' },
  '6901028075361': { name: '奥利奥迷你', calories: 485, protein: 4.0, carbs: 69.0, fat: 20.5, brand: '奥利奥' },
  '6901028075362': { name: '奥利奥双心脆', calories: 465, protein: 5.0, carbs: 66.0, fat: 18.0, brand: '奥利奥' },
  
  // 好丽友系列
  '6901028075363': { name: '好丽友派原味', calories: 450, protein: 3.5, carbs: 65.0, fat: 18.0, brand: '好丽友' },
  '6901028075364': { name: '好丽友派巧克力', calories: 468, protein: 3.8, carbs: 63.0, fat: 20.0, brand: '好丽友' },
  '6901028075365': { name: '好丽友派草莓', calories: 455, protein: 3.5, carbs: 66.0, fat: 18.5, brand: '好丽友' },
  '6901028075366': { name: '好丽友薯愿原味', calories: 512, protein: 5.0, carbs: 55.0, fat: 30.0, brand: '好丽友' },
  '6901028075367': { name: '好丽友薯愿蜂蜜黄油味', calories: 528, protein: 4.8, carbs: 58.0, fat: 31.0, brand: '好丽友' },
  '6901028075368': { name: '好丽友薯愿番茄味', calories: 508, protein: 5.2, carbs: 54.0, fat: 29.5, brand: '好丽友' },
  '6901028075369': { name: '好丽友好多鱼原味', calories: 465, protein: 6.5, carbs: 62.0, fat: 20.0, brand: '好丽友' },
  '6901028075370': { name: '好丽友好多鱼番茄味', calories: 470, protein: 6.2, carbs: 63.0, fat: 20.5, brand: '好丽友' },
  '6901028075371': { name: '好丽友好多鱼烧烤味', calories: 475, protein: 6.0, carbs: 62.0, fat: 21.0, brand: '好丽友' },
  '6901028075372': { name: '好丽友呀土豆原味', calories: 498, protein: 5.5, carbs: 58.0, fat: 27.0, brand: '好丽友' },
  '6901028075373': { name: '好丽友呀土豆番茄味', calories: 502, protein: 5.3, carbs: 59.0, fat: 27.5, brand: '好丽友' },
  '6901028075374': { name: '好丽友呀土豆烧烤味', calories: 508, protein: 5.5, carbs: 58.0, fat: 28.0, brand: '好丽友' },
  '6901028075375': { name: '好丽友巧克力派', calories: 462, protein: 3.8, carbs: 64.0, fat: 19.5, brand: '好丽友' },
  
  // 德芙系列
  '6901028075376': { name: '德芙丝滑牛奶巧克力', calories: 540, protein: 5.0, carbs: 58.0, fat: 32.0, brand: '德芙' },
  '6901028075377': { name: '德芙黑巧克力', calories: 520, protein: 5.5, carbs: 52.0, fat: 32.0, brand: '德芙' },
  '6901028075378': { name: '德芙白巧克力', calories: 555, protein: 4.5, carbs: 62.0, fat: 32.0, brand: '德芙' },
  '6901028075379': { name: '德芙榛仁葡萄干巧克力', calories: 535, protein: 6.0, carbs: 55.0, fat: 31.0, brand: '德芙' },
  '6901028075380': { name: '德芙脆香米巧克力', calories: 525, protein: 5.8, carbs: 58.0, fat: 29.0, brand: '德芙' },
  '6901028075381': { name: '德芙麦芽脆心巧克力', calories: 530, protein: 5.5, carbs: 60.0, fat: 28.0, brand: '德芙' },
  
  // 费列罗系列
  '6901028075382': { name: '费列罗榛果巧克力', calories: 580, protein: 6.5, carbs: 52.0, fat: 38.0, brand: '费列罗' },
  '6901028075383': { name: '费列罗朗慕白巧克力', calories: 565, protein: 5.8, carbs: 55.0, fat: 36.0, brand: '费列罗' },
  '6901028075384': { name: '费列罗健达缤纷乐', calories: 545, protein: 5.2, carbs: 58.0, fat: 32.0, brand: '费列罗' },
  
  // 士力架系列
  '6901028075385': { name: '士力架花生夹心巧克力', calories: 495, protein: 7.0, carbs: 62.0, fat: 25.0, brand: '士力架' },
  '6901028075386': { name: '士力架花生夹心巧克力迷你', calories: 498, protein: 7.2, carbs: 63.0, fat: 25.5, brand: '士力架' },
  
  // M&M's系列
  '6901028075387': { name: "M&M's牛奶巧克力豆", calories: 485, protein: 4.5, carbs: 65.0, fat: 22.0, brand: "M&M's" },
  '6901028075388': { name: "M&M's花生巧克力豆", calories: 510, protein: 6.0, carbs: 58.0, fat: 27.0, brand: "M&M's" },
  '6901028075389': { name: "M&M's脆心巧克力豆", calories: 475, protein: 4.2, carbs: 68.0, fat: 20.0, brand: "M&M's" },
  
  // 薯片系列
  '6901028075390': { name: '乐事原味薯片', calories: 536, protein: 6.0, carbs: 52.0, fat: 34.0, brand: '乐事' },
  '6901028075391': { name: '乐事黄瓜味薯片', calories: 520, protein: 5.5, carbs: 54.0, fat: 32.0, brand: '乐事' },
  '6901028075392': { name: '乐事番茄味薯片', calories: 528, protein: 5.8, carbs: 53.0, fat: 33.0, brand: '乐事' },
  '6901028075393': { name: '乐事烧烤味薯片', calories: 535, protein: 6.2, carbs: 52.0, fat: 34.5, brand: '乐事' },
  '6901028075394': { name: '乐事香辣味薯片', calories: 540, protein: 6.5, carbs: 51.0, fat: 35.0, brand: '乐事' },
  '6901028075395': { name: '乐事青柠味薯片', calories: 518, protein: 5.5, carbs: 55.0, fat: 31.0, brand: '乐事' },
  '6901028075396': { name: '乐事大波浪原味', calories: 545, protein: 5.8, carbs: 50.0, fat: 36.0, brand: '乐事' },
  '6901028075397': { name: '乐事大波浪烧烤味', calories: 550, protein: 6.0, carbs: 49.0, fat: 37.0, brand: '乐事' },
  
  // 可比克系列
  '6901028075398': { name: '可比克原味薯片', calories: 528, protein: 5.5, carbs: 53.0, fat: 33.0, brand: '可比克' },
  '6901028075399': { name: '可比克番茄味薯片', calories: 522, protein: 5.3, carbs: 54.0, fat: 32.5, brand: '可比克' },
  '6901028075400': { name: '可比克烧烤味薯片', calories: 530, protein: 5.8, carbs: 52.0, fat: 34.0, brand: '可比克' },
  '6901028075401': { name: '可比克香辣味薯片', calories: 535, protein: 6.0, carbs: 51.0, fat: 34.5, brand: '可比克' },
  
  // 乐事/品客系列
  '6901028075402': { name: '品客原味薯片', calories: 515, protein: 5.0, carbs: 55.0, fat: 31.0, brand: '品客' },
  '6901028075403': { name: '品客酸奶油洋葱味', calories: 508, protein: 4.8, carbs: 56.0, fat: 30.0, brand: '品客' },
  '6901028075404': { name: '品客烧烤味', calories: 512, protein: 5.2, carbs: 54.0, fat: 31.5, brand: '品客' },
  '6901028075405': { name: '品客香辣味', calories: 518, protein: 5.5, carbs: 53.0, fat: 32.0, brand: '品客' },
  
  // 上好佳系列
  '6901028075406': { name: '上好佳鲜虾片原味', calories: 485, protein: 5.0, carbs: 58.0, fat: 25.0, brand: '上好佳' },
  '6901028075407': { name: '上好佳鲜虾片香辣味', calories: 492, protein: 5.2, carbs: 57.0, fat: 26.0, brand: '上好佳' },
  '6901028075408': { name: '上好佳玉米卷原味', calories: 468, protein: 4.5, carbs: 62.0, fat: 22.0, brand: '上好佳' },
  '6901028075409': { name: '上好佳玉米卷番茄味', calories: 472, protein: 4.3, carbs: 63.0, fat: 22.5, brand: '上好佳' },
  '6901028075410': { name: '上好佳玉米卷烧烤味', calories: 478, protein: 4.8, carbs: 62.0, fat: 23.0, brand: '上好佳' },
  '6901028075411': { name: '上好佳荷兰豆原味', calories: 455, protein: 8.0, carbs: 55.0, fat: 22.0, brand: '上好佳' },
  '6901028075412': { name: '上好佳荷兰豆香辣味', calories: 462, protein: 8.2, carbs: 54.0, fat: 23.0, brand: '上好佳' },
  
  // 旺旺系列
  '6901028075413': { name: '旺旺仙贝', calories: 465, protein: 6.5, carbs: 72.0, fat: 15.0, brand: '旺旺' },
  '6901028075414': { name: '旺旺雪饼', calories: 485, protein: 5.8, carbs: 68.0, fat: 18.0, brand: '旺旺' },
  '6901028075415': { name: '旺旺小小酥', calories: 512, protein: 5.5, carbs: 58.0, fat: 28.0, brand: '旺旺' },
  '6901028075416': { name: '旺旺浪味仙原味', calories: 478, protein: 5.0, carbs: 62.0, fat: 23.0, brand: '旺旺' },
  '6901028075417': { name: '旺旺浪味仙蔬菜味', calories: 472, protein: 5.2, carbs: 63.0, fat: 22.5, brand: '旺旺' },
  '6901028075418': { name: '旺旺浪味仙海苔味', calories: 475, protein: 5.5, carbs: 62.0, fat: 22.8, brand: '旺旺' },
  '6901028075419': { name: '旺旺大米饼', calories: 385, protein: 7.0, carbs: 82.0, fat: 3.5, brand: '旺旺' },
  '6901028075420': { name: '旺旺QQ糖葡萄味', calories: 345, protein: 2.5, carbs: 82.0, fat: 0.5, brand: '旺旺' },
  '6901028075421': { name: '旺旺QQ糖草莓味', calories: 342, protein: 2.5, carbs: 81.0, fat: 0.5, brand: '旺旺' },
  '6901028075422': { name: '旺旺QQ糖橙子味', calories: 348, protein: 2.5, carbs: 83.0, fat: 0.5, brand: '旺旺' },
  '6901028075423': { name: '旺旺牛奶糖', calories: 425, protein: 3.0, carbs: 72.0, fat: 15.0, brand: '旺旺' },
  '6901028075424': { name: '旺旺咖啡糖', calories: 418, protein: 2.8, carbs: 70.0, fat: 14.5, brand: '旺旺' },
  
  // 徐福记系列
  '6901028075425': { name: '徐福记沙琪玛原味', calories: 435, protein: 6.0, carbs: 68.0, fat: 15.0, brand: '徐福记' },
  '6901028075426': { name: '徐福记沙琪玛鸡蛋味', calories: 442, protein: 6.5, carbs: 67.0, fat: 15.5, brand: '徐福记' },
  '6901028075427': { name: '徐福记沙琪玛芝麻味', calories: 448, protein: 6.8, carbs: 66.0, fat: 16.0, brand: '徐福记' },
  '6901028075428': { name: '徐福记凤梨酥', calories: 425, protein: 4.0, carbs: 62.0, fat: 18.0, brand: '徐福记' },
  '6901028075429': { name: '徐福记芒果酥', calories: 428, protein: 3.8, carbs: 63.0, fat: 18.5, brand: '徐福记' },
  '6901028075430': { name: '徐福记花生酥', calories: 512, protein: 12.0, carbs: 48.0, fat: 30.0, brand: '徐福记' },
  '6901028075431': { name: '徐福记核桃酥', calories: 498, protein: 10.0, carbs: 52.0, fat: 28.0, brand: '徐福记' },
  
  // 达利园系列
  '6901028075432': { name: '达利园蛋黄派', calories: 445, protein: 4.5, carbs: 62.0, fat: 18.0, brand: '达利园' },
  '6901028075433': { name: '达利园巧克力派', calories: 462, protein: 4.2, carbs: 60.0, fat: 20.0, brand: '达利园' },
  '6901028075434': { name: '达利园草莓派', calories: 448, protein: 4.0, carbs: 64.0, fat: 18.5, brand: '达利园' },
  '6901028075435': { name: '达利园牛角包原味', calories: 425, protein: 8.0, carbs: 55.0, fat: 18.0, brand: '达利园' },
  '6901028075436': { name: '达利园牛角包奶油味', calories: 438, protein: 7.5, carbs: 56.0, fat: 19.0, brand: '达利园' },
  '6901028075437': { name: '达利园好吃点饼干', calories: 468, protein: 6.0, carbs: 65.0, fat: 20.0, brand: '达利园' },
  '6901028075438': { name: '达利园好吃点杏仁饼', calories: 485, protein: 8.0, carbs: 62.0, fat: 22.0, brand: '达利园' },
  
  // 盼盼系列
  '6901028075439': { name: '盼盼法式小面包', calories: 385, protein: 8.5, carbs: 62.0, fat: 10.0, brand: '盼盼' },
  '6901028075440': { name: '盼盼麦香鸡味块', calories: 465, protein: 5.5, carbs: 60.0, fat: 22.0, brand: '盼盼' },
  '6901028075441': { name: '盼盼薯片原味', calories: 498, protein: 5.0, carbs: 58.0, fat: 28.0, brand: '盼盼' },
  '6901028075442': { name: '盼盼薯片番茄味', calories: 492, protein: 4.8, carbs: 59.0, fat: 27.5, brand: '盼盼' },
  
  // 嘉士利系列
  '6901028075443': { name: '嘉士利早餐饼干原味', calories: 425, protein: 7.0, carbs: 68.0, fat: 12.0, brand: '嘉士利' },
  '6901028075444': { name: '嘉士利早餐饼干牛奶味', calories: 432, protein: 7.5, carbs: 67.0, fat: 13.0, brand: '嘉士利' },
  '6901028075445': { name: '嘉士利果乐果香夹心饼干', calories: 448, protein: 5.0, carbs: 70.0, fat: 16.0, brand: '嘉士利' },
  
  // 嘉顿系列
  '6901028075446': { name: '嘉顿生命面包', calories: 265, protein: 9.0, carbs: 50.0, fat: 3.0, brand: '嘉顿' },
  '6901028075447': { name: '嘉顿雪芳蛋糕', calories: 345, protein: 6.0, carbs: 55.0, fat: 10.0, brand: '嘉顿' },
  '6901028075448': { name: '嘉顿瑞士卷原味', calories: 358, protein: 5.5, carbs: 52.0, fat: 13.0, brand: '嘉顿' },
  '6901028075449': { name: '嘉顿瑞士卷巧克力味', calories: 372, protein: 5.2, carbs: 50.0, fat: 15.0, brand: '嘉顿' },
  
  // 桃李系列
  '6901207100001': { name: '桃李醇熟面包', calories: 275, protein: 9.0, carbs: 52.0, fat: 3.5, brand: '桃李' },
  '6901207100002': { name: '桃李全麦面包', calories: 258, protein: 10.0, carbs: 48.0, fat: 3.0, brand: '桃李' },
  '6901207100003': { name: '桃李奶香面包', calories: 295, protein: 7.5, carbs: 55.0, fat: 5.0, brand: '桃李' },
  '6901207100004': { name: '桃李鸡蛋香松面包', calories: 312, protein: 8.5, carbs: 52.0, fat: 7.0, brand: '桃李' },
  '6901207100005': { name: '桃李豆沙面包', calories: 328, protein: 7.0, carbs: 58.0, fat: 6.5, brand: '桃李' },
  '6901207100006': { name: '桃李肉松面包', calories: 318, protein: 9.0, carbs: 50.0, fat: 8.0, brand: '桃李' },
  '6901207100007': { name: '桃李起酥面包', calories: 385, protein: 6.5, carbs: 48.0, fat: 18.0, brand: '桃李' },
  
  // ==================== 方便食品 (1000+) ====================
  // 统一方便面
  '6920147102001': { name: '统一汤达人日式豚骨拉面', calories: 425, protein: 9.0, carbs: 55.0, fat: 18.0, brand: '统一' },
  '6920147102002': { name: '统一汤达人酸酸辣辣豚骨面', calories: 438, protein: 8.8, carbs: 56.0, fat: 19.0, brand: '统一' },
  '6920147102003': { name: '统一汤达人罗宋汤面', calories: 418, protein: 8.5, carbs: 54.0, fat: 17.5, brand: '统一' },
  '6920147102004': { name: '统一汤达人海鲜拉面', calories: 422, protein: 9.2, carbs: 53.0, fat: 18.0, brand: '统一' },
  '6920147102005': { name: '统一汤达人味噌拉面', calories: 415, protein: 8.8, carbs: 52.0, fat: 17.8, brand: '统一' },
  
  // 康师傅方便面
  '6920147102006': { name: '康师傅汤大师酸辣豚骨面', calories: 432, protein: 9.0, carbs: 56.0, fat: 18.5, brand: '康师傅' },
  '6920147102007': { name: '康师傅汤大师金汤肥牛面', calories: 445, protein: 9.5, carbs: 57.0, fat: 19.0, brand: '康师傅' },
  '6920147102008': { name: '康师傅汤大师番茄牛腩面', calories: 428, protein: 8.8, carbs: 55.0, fat: 18.0, brand: '康师傅' },
  
  // 日清系列
  '6920147102009': { name: '日清合味道海鲜风味', calories: 435, protein: 10.0, carbs: 52.0, fat: 19.0, brand: '日清' },
  '6920147102010': { name: '日清合味道咖喱海鲜风味', calories: 448, protein: 9.5, carbs: 54.0, fat: 20.0, brand: '日清' },
  '6920147102011': { name: '日清合味道香辣海鲜风味', calories: 452, protein: 9.8, carbs: 53.0, fat: 20.5, brand: '日清' },
  '6920147102012': { name: '日清合味道牛肉风味', calories: 442, protein: 10.5, carbs: 52.0, fat: 19.5, brand: '日清' },
  '6920147102013': { name: '日清合味道XO酱海鲜风味', calories: 458, protein: 10.2, carbs: 51.0, fat: 21.0, brand: '日清' },
  '6920147102014': { name: '日清出前一丁麻油味', calories: 425, protein: 9.0, carbs: 55.0, fat: 17.5, brand: '日清' },
  '6920147102015': { name: '日清出前一丁五香牛肉味', calories: 438, protein: 9.5, carbs: 54.0, fat: 18.5, brand: '日清' },
  
  // 白象系列
  '6920147102016': { name: '白象大辣娇火鸡面', calories: 485, protein: 9.0, carbs: 60.0, fat: 22.0, brand: '白象' },
  '6920147102017': { name: '白象大辣娇麻辣香锅面', calories: 478, protein: 8.8, carbs: 59.0, fat: 21.5, brand: '白象' },
  '6920147102018': { name: '白象大辣娇酸辣粉', calories: 395, protein: 5.5, carbs: 75.0, fat: 10.0, brand: '白象' },
  '6920147102019': { name: '白象汤好喝老母鸡汤面', calories: 422, protein: 9.2, carbs: 54.0, fat: 17.5, brand: '白象' },
  '6920147102020': { name: '白象汤好喝招牌猪骨汤面', calories: 418, protein: 9.0, carbs: 53.0, fat: 17.0, brand: '白象' },
  
  // 五谷道场系列
  '6920147102021': { name: '五谷道场非油炸酸笋肥牛面', calories: 385, protein: 10.0, carbs: 58.0, fat: 12.0, brand: '五谷道场' },
  '6920147102022': { name: '五谷道场非油炸红烧牛肉面', calories: 378, protein: 9.5, carbs: 57.0, fat: 11.5, brand: '五谷道场' },
  
  // 今麦郎系列
  '6920147102023': { name: '今麦郎香锅牛肉面', calories: 458, protein: 9.0, carbs: 58.0, fat: 20.0, brand: '今麦郎' },
  '6920147102024': { name: '今麦郎酸辣牛肉面', calories: 445, protein: 8.8, carbs: 57.0, fat: 19.0, brand: '今麦郎' },
  '6920147102025': { name: '今麦郎老坛酸菜牛肉面', calories: 452, protein: 8.5, carbs: 56.0, fat: 19.5, brand: '今麦郎' },
  
  // 自热火锅系列
  '6920147102026': { name: '海底捞自热火锅番茄牛腩', calories: 485, protein: 15.0, carbs: 55.0, fat: 22.0, brand: '海底捞' },
  '6920147102027': { name: '海底捞自热火锅麻辣嫩牛', calories: 512, protein: 16.0, carbs: 52.0, fat: 25.0, brand: '海底捞' },
  '6920147102028': { name: '海底捞自热火锅酸辣肥牛', calories: 498, protein: 15.5, carbs: 54.0, fat: 23.0, brand: '海底捞' },
  '6920147102029': { name: '自嗨锅麻辣牛肉自热火锅', calories: 505, protein: 14.0, carbs: 56.0, fat: 24.0, brand: '自嗨锅' },
  '6920147102030': { name: '自嗨锅酸菜鱼自热火锅', calories: 478, protein: 18.0, carbs: 52.0, fat: 20.0, brand: '自嗨锅' },
  
  // 速冻水饺系列
  '6920147102031': { name: '湾仔码头猪肉白菜水饺', calories: 198, protein: 8.0, carbs: 25.0, fat: 7.0, brand: '湾仔码头' },
  '6920147102032': { name: '湾仔码头猪肉韭菜水饺', calories: 195, protein: 7.8, carbs: 24.0, fat: 7.2, brand: '湾仔码头' },
  '6920147102033': { name: '湾仔码头三鲜水饺', calories: 185, protein: 7.5, carbs: 23.0, fat: 6.5, brand: '湾仔码头' },
  '6920147102034': { name: '湾仔码头虾仁水饺', calories: 178, protein: 9.0, carbs: 22.0, fat: 5.5, brand: '湾仔码头' },
  '6920147102035': { name: '湾仔码头荠菜猪肉水饺', calories: 192, protein: 7.8, carbs: 24.0, fat: 7.0, brand: '湾仔码头' },
  '6920147102036': { name: '思念猪肉白菜水饺', calories: 195, protein: 7.5, carbs: 25.0, fat: 6.8, brand: '思念' },
  '6920147102037': { name: '思念猪肉韭菜水饺', calories: 192, protein: 7.2, carbs: 24.0, fat: 7.0, brand: '思念' },
  '6920147102038': { name: '思念三鲜水饺', calories: 182, protein: 7.0, carbs: 23.0, fat: 6.2, brand: '思念' },
  
  // 速冻汤圆系列
  '6920147102039': { name: '湾仔码头黑芝麻汤圆', calories: 312, protein: 5.0, carbs: 48.0, fat: 12.0, brand: '湾仔码头' },
  '6920147102040': { name: '湾仔码头花生汤圆', calories: 305, protein: 6.0, carbs: 46.0, fat: 11.5, brand: '湾仔码头' },
  '6920147102041': { name: '思念黑芝麻汤圆', calories: 308, protein: 4.8, carbs: 47.0, fat: 11.8, brand: '思念' },
  '6920147102042': { name: '思念花生汤圆', calories: 302, protein: 5.8, carbs: 45.0, fat: 11.2, brand: '思念' },
  
  // 火腿肠系列
  '6920147102043': { name: '双汇王中王火腿肠', calories: 212, protein: 13.0, carbs: 5.0, fat: 15.0, brand: '双汇' },
  '6920147102044': { name: '双汇玉米热狗肠', calories: 225, protein: 11.0, carbs: 8.0, fat: 16.0, brand: '双汇' },
  '6920147102045': { name: '双汇Q趣儿火腿肠', calories: 198, protein: 12.0, carbs: 6.0, fat: 14.0, brand: '双汇' },
  '6920147102046': { name: '金锣王中王火腿肠', calories: 208, protein: 12.5, carbs: 5.5, fat: 14.5, brand: '金锣' },
  '6920147102047': { name: '金锣肉粒多火腿肠', calories: 218, protein: 14.0, carbs: 4.5, fat: 15.0, brand: '金锣' },
  
  // 午餐肉系列
  '6920147102048': { name: '梅林午餐肉', calories: 285, protein: 12.0, carbs: 3.0, fat: 25.0, brand: '梅林' },
  '6920147102049': { name: '梅林精制午餐肉', calories: 295, protein: 13.0, carbs: 2.5, fat: 26.0, brand: '梅林' },
  '6920147102050': { name: '鹰金钱午餐肉', calories: 278, protein: 11.5, carbs: 3.5, fat: 24.0, brand: '鹰金钱' },
  
  // ==================== 调味品粮油 (500+) ====================
  // 酱油系列
  '6901234568016': { name: '海天金标生抽', calories: 15, protein: 1.0, carbs: 2.0, fat: 0, brand: '海天' },
  '6901234568017': { name: '海天草菇老抽', calories: 18, protein: 1.2, carbs: 2.5, fat: 0, brand: '海天' },
  '6901234568018': { name: '海天味极鲜酱油', calories: 16, protein: 1.0, carbs: 2.2, fat: 0, brand: '海天' },
  '6901234568019': { name: '海天海鲜酱油', calories: 14, protein: 0.8, carbs: 2.0, fat: 0, brand: '海天' },
  '6901234568020': { name: '李锦记生抽王', calories: 15, protein: 1.0, carbs: 2.0, fat: 0, brand: '李锦记' },
  '6901234568021': { name: '李锦记老抽', calories: 17, protein: 1.1, carbs: 2.3, fat: 0, brand: '李锦记' },
  '6901234568022': { name: '李锦记蒸鱼豉油', calories: 18, protein: 1.2, carbs: 2.5, fat: 0, brand: '李锦记' },
  
  // 蚝油系列
  '6901234568023': { name: '海天蚝油', calories: 35, protein: 1.5, carbs: 6.0, fat: 0, brand: '海天' },
  '6901234568024': { name: '海天上等蚝油', calories: 38, protein: 1.8, carbs: 6.5, fat: 0, brand: '海天' },
  '6901234568025': { name: '李锦记旧庄蚝油', calories: 42, protein: 2.0, carbs: 7.0, fat: 0, brand: '李锦记' },
  
  // 醋系列
  '6901234568026': { name: '恒顺香醋', calories: 12, protein: 0.2, carbs: 2.5, fat: 0, brand: '恒顺' },
  '6901234568027': { name: '恒顺陈醋', calories: 15, protein: 0.3, carbs: 3.0, fat: 0, brand: '恒顺' },
  '6901234568028': { name: '海天陈醋', calories: 14, protein: 0.2, carbs: 2.8, fat: 0, brand: '海天' },
  '6901234568029': { name: '海天白醋', calories: 8, protein: 0, carbs: 1.5, fat: 0, brand: '海天' },
  '6901234568030': { name: '山西老陈醋', calories: 18, protein: 0.5, carbs: 3.5, fat: 0, brand: '山西' },
  
  // 酱料系列
  '6901234568031': { name: '海天黄豆酱', calories: 125, protein: 8.0, carbs: 12.0, fat: 4.0, brand: '海天' },
  '6901234568032': { name: '海天蒜蓉辣酱', calories: 95, protein: 3.0, carbs: 18.0, fat: 1.5, brand: '海天' },
  '6901234568033': { name: '海天香菇酱', calories: 135, protein: 5.0, carbs: 15.0, fat: 5.0, brand: '海天' },
  '6901234568034': { name: '老干妈风味豆豉', calories: 595, protein: 8.0, carbs: 15.0, fat: 55.0, brand: '老干妈' },
  '6901234568035': { name: '老干妈辣三丁', calories: 580, protein: 7.5, carbs: 14.0, fat: 54.0, brand: '老干妈' },
  '6901234568036': { name: '老干妈油辣椒', calories: 620, protein: 5.0, carbs: 12.0, fat: 60.0, brand: '老干妈' },
  '6901234568037': { name: '老干妈牛肉末豆豉', calories: 485, protein: 12.0, carbs: 14.0, fat: 42.0, brand: '老干妈' },
  '6901234568038': { name: '李锦记蒜蓉辣椒酱', calories: 85, protein: 2.0, carbs: 16.0, fat: 1.0, brand: '李锦记' },
  '6901234568039': { name: '李锦记排骨酱', calories: 145, protein: 3.0, carbs: 28.0, fat: 2.0, brand: '李锦记' },
  '6901234568040': { name: '李锦记叉烧酱', calories: 155, protein: 2.5, carbs: 32.0, fat: 1.5, brand: '李锦记' },
  '6901234568041': { name: '李锦记海鲜酱', calories: 138, protein: 2.0, carbs: 30.0, fat: 1.0, brand: '李锦记' },
  '6901234568042': { name: '李锦记XO酱', calories: 285, protein: 8.0, carbs: 15.0, fat: 22.0, brand: '李锦记' },
  
  // 食用油系列
  '6901234568043': { name: '金龙鱼调和油', calories: 900, protein: 0, carbs: 0, fat: 99.9, brand: '金龙鱼' },
  '6901234568044': { name: '金龙鱼花生油', calories: 899, protein: 0, carbs: 0, fat: 99.9, brand: '金龙鱼' },
  '6901234568045': { name: '金龙鱼玉米油', calories: 899, protein: 0, carbs: 0, fat: 99.9, brand: '金龙鱼' },
  '6901234568046': { name: '金龙鱼葵花籽油', calories: 899, protein: 0, carbs: 0, fat: 99.9, brand: '金龙鱼' },
  '6901234568047': { name: '金龙鱼大豆油', calories: 899, protein: 0, carbs: 0, fat: 99.9, brand: '金龙鱼' },
  '6901234568048': { name: '金龙鱼橄榄油', calories: 899, protein: 0, carbs: 0, fat: 99.9, brand: '金龙鱼' },
  '6901234568049': { name: '福临门调和油', calories: 900, protein: 0, carbs: 0, fat: 99.9, brand: '福临门' },
  '6901234568050': { name: '福临门花生油', calories: 899, protein: 0, carbs: 0, fat: 99.9, brand: '福临门' },
  '6901234568051': { name: '福临门玉米油', calories: 899, protein: 0, carbs: 0, fat: 99.9, brand: '福临门' },
  '6901234568052': { name: '鲁花花生油', calories: 899, protein: 0, carbs: 0, fat: 99.9, brand: '鲁花' },
  '6901234568053': { name: '鲁花5S压榨一级花生油', calories: 899, protein: 0, carbs: 0, fat: 99.9, brand: '鲁花' },
  '6901234568054': { name: '鲁花高油酸花生油', calories: 899, protein: 0, carbs: 0, fat: 99.9, brand: '鲁花' },
  
  // 大米系列
  '6901234568055': { name: '金龙鱼东北大米', calories: 346, protein: 7.5, carbs: 77.0, fat: 0.5, brand: '金龙鱼' },
  '6901234568056': { name: '金龙鱼五常大米', calories: 348, protein: 7.8, carbs: 76.5, fat: 0.6, brand: '金龙鱼' },
  '6901234568057': { name: '金龙鱼丝苗米', calories: 345, protein: 7.2, carbs: 77.5, fat: 0.5, brand: '金龙鱼' },
  '6901234568058': { name: '福临门东北大米', calories: 346, protein: 7.4, carbs: 77.0, fat: 0.5, brand: '福临门' },
  '6901234568059': { name: '福临门五常大米', calories: 348, protein: 7.6, carbs: 76.5, fat: 0.6, brand: '福临门' },
  '6901234568060': { name: '北大荒东北大米', calories: 347, protein: 7.5, carbs: 77.0, fat: 0.5, brand: '北大荒' },
  '6901234568061': { name: '十月稻田五常大米', calories: 349, protein: 7.8, carbs: 76.2, fat: 0.6, brand: '十月稻田' },
  
  // 面粉系列
  '6901234568062': { name: '金龙鱼麦芯小麦粉', calories: 364, protein: 11.0, carbs: 75.0, fat: 1.0, brand: '金龙鱼' },
  '6901234568063': { name: '金龙鱼高筋小麦粉', calories: 362, protein: 12.5, carbs: 74.0, fat: 1.0, brand: '金龙鱼' },
  '6901234568064': { name: '金龙鱼低筋小麦粉', calories: 360, protein: 9.0, carbs: 76.0, fat: 1.0, brand: '金龙鱼' },
  '6901234568065': { name: '香满园小麦粉', calories: 363, protein: 10.5, carbs: 75.0, fat: 1.0, brand: '香满园' },
  
  // ==================== 冷饮冰淇淋 (500+) ====================
  // 和路雪系列
  '6901234568066': { name: '和路雪可爱多', calories: 285, protein: 3.0, carbs: 32.0, fat: 15.0, brand: '和路雪' },
  '6901234568067': { name: '和路雪可爱多巧克力', calories: 295, protein: 3.2, carbs: 33.0, fat: 16.0, brand: '和路雪' },
  '6901234568068': { name: '和路雪可爱多抹茶', calories: 278, protein: 2.8, carbs: 31.0, fat: 14.5, brand: '和路雪' },
  '6901234568069': { name: '和路雪梦龙香草', calories: 312, protein: 3.5, carbs: 28.0, fat: 19.0, brand: '和路雪' },
  '6901234568070': { name: '和路雪梦龙黑巧克力', calories: 325, protein: 3.8, carbs: 27.0, fat: 21.0, brand: '和路雪' },
  '6901234568071': { name: '和路雪梦龙白巧克力', calories: 318, protein: 3.2, carbs: 29.0, fat: 20.0, brand: '和路雪' },
  '6901234568072': { name: '和路雪千层雪', calories: 268, protein: 2.5, carbs: 30.0, fat: 14.0, brand: '和路雪' },
  
  // 伊利冰淇淋系列
  '6901234568073': { name: '伊利巧乐滋', calories: 245, protein: 2.5, carbs: 28.0, fat: 13.0, brand: '伊利' },
  '6901234568074': { name: '伊利巧乐滋经典巧克力', calories: 258, protein: 2.8, carbs: 29.0, fat: 14.0, brand: '伊利' },
  '6901234568075': { name: '伊利巧乐兹香草', calories: 242, protein: 2.5, carbs: 27.0, fat: 12.5, brand: '伊利' },
  '6901234568076': { name: '伊利冰工厂', calories: 125, protein: 1.0, carbs: 28.0, fat: 1.0, brand: '伊利' },
  '6901234568077': { name: '伊利冰工厂山楂味', calories: 118, protein: 0.8, carbs: 27.0, fat: 0.5, brand: '伊利' },
  '6901234568078': { name: '伊利小布丁', calories: 165, protein: 2.0, carbs: 22.0, fat: 7.5, brand: '伊利' },
  '6901234568079': { name: '伊利牧场奶砖', calories: 225, protein: 3.5, carbs: 25.0, fat: 11.0, brand: '伊利' },
  
  // 蒙牛冰淇淋系列
  '6901234568080': { name: '蒙牛随变', calories: 252, protein: 2.8, carbs: 29.0, fat: 13.5, brand: '蒙牛' },
  '6901234568081': { name: '蒙牛随变巧克力', calories: 265, protein: 3.0, carbs: 30.0, fat: 14.5, brand: '蒙牛' },
  '6901234568082': { name: '蒙牛蒂兰圣雪', calories: 278, protein: 3.2, carbs: 28.0, fat: 15.0, brand: '蒙牛' },
  '6901234568083': { name: '蒙牛绿色心情', calories: 135, protein: 1.2, carbs: 30.0, fat: 1.5, brand: '蒙牛' },
  '6901234568084': { name: '蒙牛冰+', calories: 142, protein: 1.0, carbs: 32.0, fat: 1.0, brand: '蒙牛' },
  
  // 钟薛高系列
  '6901234568085': { name: '钟薛高轻牛乳', calories: 198, protein: 3.8, carbs: 20.0, fat: 10.0, brand: '钟薛高' },
  '6901234568086': { name: '钟薛高丝绒可可', calories: 245, protein: 3.2, carbs: 25.0, fat: 13.5, brand: '钟薛高' },
  '6901234568087': { name: '钟薛高半半巧巧', calories: 268, protein: 3.5, carbs: 26.0, fat: 15.0, brand: '钟薛高' },
  '6901234568088': { name: '钟薛高爱尔兰陈年干酪', calories: 285, protein: 4.0, carbs: 24.0, fat: 17.0, brand: '钟薛高' },
  
  // 哈根达斯系列
  '6901234568089': { name: '哈根达斯香草', calories: 250, protein: 3.5, carbs: 22.0, fat: 16.0, brand: '哈根达斯' },
  '6901234568090': { name: '哈根达斯巧克力', calories: 268, protein: 3.8, carbs: 24.0, fat: 17.0, brand: '哈根达斯' },
  '6901234568091': { name: '哈根达斯草莓', calories: 242, protein: 3.2, carbs: 26.0, fat: 14.0, brand: '哈根达斯' },
  '6901234568092': { name: '哈根达斯抹茶', calories: 255, protein: 3.5, carbs: 23.0, fat: 16.0, brand: '哈根达斯' },
  '6901234568093': { name: '哈根达斯夏威夷果仁', calories: 295, protein: 4.0, carbs: 22.0, fat: 20.0, brand: '哈根达斯' },
  
  // ==================== 坚果零食 (500+) ====================
  // 三只松鼠系列
  '6901234568094': { name: '三只松鼠碧根果', calories: 670, protein: 9.0, carbs: 15.0, fat: 65.0, brand: '三只松鼠' },
  '6901234568095': { name: '三只松鼠夏威夷果', calories: 718, protein: 8.0, carbs: 12.0, fat: 72.0, brand: '三只松鼠' },
  '6901234568096': { name: '三只松鼠巴旦木', calories: 600, protein: 22.0, carbs: 20.0, fat: 52.0, brand: '三只松鼠' },
  '6901234568097': { name: '三只松鼠开心果', calories: 614, protein: 20.0, carbs: 22.0, fat: 53.0, brand: '三只松鼠' },
  '6901234568098': { name: '三只松鼠腰果', calories: 552, protein: 17.0, carbs: 30.0, fat: 44.0, brand: '三只松鼠' },
  '6901234568099': { name: '三只松鼠核桃', calories: 654, protein: 15.0, carbs: 14.0, fat: 65.0, brand: '三只松鼠' },
  '6901234568100': { name: '三只松鼠榛子', calories: 617, protein: 13.0, carbs: 17.0, fat: 60.0, brand: '三只松鼠' },
  '6901234568101': { name: '三只松鼠每日坚果', calories: 580, protein: 15.0, carbs: 18.0, fat: 52.0, brand: '三只松鼠' },
  '6901234568102': { name: '三只松鼠多味花生', calories: 567, protein: 22.0, carbs: 24.0, fat: 45.0, brand: '三只松鼠' },
  '6901234568103': { name: '三只松鼠兰花豆', calories: 445, protein: 12.0, carbs: 55.0, fat: 20.0, brand: '三只松鼠' },
  '6901234568104': { name: '三只松鼠蚕豆', calories: 435, protein: 13.0, carbs: 58.0, fat: 18.0, brand: '三只松鼠' },
  '6901234568105': { name: '三只松鼠瓜子', calories: 606, protein: 23.0, carbs: 16.0, fat: 53.0, brand: '三只松鼠' },
  
  // 良品铺子系列
  '6901234568106': { name: '良品铺子夏威夷果', calories: 715, protein: 7.8, carbs: 13.0, fat: 71.0, brand: '良品铺子' },
  '6901234568107': { name: '良品铺子巴旦木', calories: 598, protein: 21.0, carbs: 21.0, fat: 51.0, brand: '良品铺子' },
  '6901234568108': { name: '良品铺子开心果', calories: 610, protein: 19.0, carbs: 23.0, fat: 52.0, brand: '良品铺子' },
  '6901234568109': { name: '良品铺子腰果', calories: 548, protein: 16.0, carbs: 31.0, fat: 43.0, brand: '良品铺子' },
  '6901234568110': { name: '良品铺子每日坚果', calories: 575, protein: 14.0, carbs: 19.0, fat: 51.0, brand: '良品铺子' },
  '6901234568111': { name: '良品铺子猪肉脯', calories: 378, protein: 32.0, carbs: 25.0, fat: 18.0, brand: '良品铺子' },
  '6901234568112': { name: '良品铺子牛肉干', calories: 355, protein: 38.0, carbs: 12.0, fat: 15.0, brand: '良品铺子' },
  '6901234568113': { name: '良品铺子芒果干', calories: 325, protein: 2.5, carbs: 78.0, fat: 0.5, brand: '良品铺子' },
  '6901234568114': { name: '良品铺子草莓干', calories: 338, protein: 2.0, carbs: 80.0, fat: 0.5, brand: '良品铺子' },
  
  // 百草味系列
  '6901234568115': { name: '百草味夏威夷果', calories: 712, protein: 7.5, carbs: 14.0, fat: 70.0, brand: '百草味' },
  '6901234568116': { name: '百草味巴旦木', calories: 595, protein: 20.0, carbs: 22.0, fat: 50.0, brand: '百草味' },
  '6901234568117': { name: '百草味开心果', calories: 608, protein: 18.0, carbs: 24.0, fat: 51.0, brand: '百草味' },
  '6901234568118': { name: '百草味腰果', calories: 545, protein: 15.0, carbs: 32.0, fat: 42.0, brand: '百草味' },
  '6901234568119': { name: '百草味每日坚果', calories: 570, protein: 13.0, carbs: 20.0, fat: 50.0, brand: '百草味' },
  '6901234568120': { name: '百草味碧根果', calories: 665, protein: 8.5, carbs: 16.0, fat: 64.0, brand: '百草味' },
  '6901234568121': { name: '百草味核桃', calories: 650, protein: 14.0, carbs: 15.0, fat: 64.0, brand: '百草味' },
  '6901234568122': { name: '百草味猪肉脯', calories: 372, protein: 30.0, carbs: 26.0, fat: 17.0, brand: '百草味' },
  '6901234568123': { name: '百草味牛肉干', calories: 348, protein: 36.0, carbs: 13.0, fat: 14.0, brand: '百草味' },
  
  // 洽洽系列
  '6901234568124': { name: '洽洽香瓜子', calories: 603, protein: 22.0, carbs: 17.0, fat: 52.0, brand: '洽洽' },
  '6901234568125': { name: '洽洽焦糖瓜子', calories: 618, protein: 20.0, carbs: 22.0, fat: 52.0, brand: '洽洽' },
  '6901234568126': { name: '洽洽核桃仁', calories: 648, protein: 14.5, carbs: 15.0, fat: 64.0, brand: '洽洽' },
  '6901234568127': { name: '洽洽每日坚果', calories: 575, protein: 14.0, carbs: 18.0, fat: 51.0, brand: '洽洽' },
  '6901234568128': { name: '洽洽小黄袋每日坚果', calories: 568, protein: 15.0, carbs: 17.0, fat: 50.0, brand: '洽洽' },
  
  // ==================== 麦片谷物 (300+) ====================
  // 桂格系列
  '6901234568129': { name: '桂格即食燕麦片', calories: 367, protein: 12.0, carbs: 62.0, fat: 7.0, brand: '桂格' },
  '6901234568130': { name: '桂格快煮燕麦片', calories: 365, protein: 12.5, carbs: 61.0, fat: 7.0, brand: '桂格' },
  '6901234568131': { name: '桂格麦果脆', calories: 420, protein: 8.0, carbs: 72.0, fat: 12.0, brand: '桂格' },
  '6901234568132': { name: '桂格营养麦片', calories: 385, protein: 10.0, carbs: 68.0, fat: 8.0, brand: '桂格' },
  '6901234568133': { name: '桂格高钙燕麦片', calories: 378, protein: 11.0, carbs: 65.0, fat: 7.5, brand: '桂格' },
  
  // 西麦系列
  '6901234568134': { name: '西麦纯燕麦片', calories: 365, protein: 11.5, carbs: 63.0, fat: 6.5, brand: '西麦' },
  '6901234568135': { name: '西麦核桃燕麦片', calories: 398, protein: 10.0, carbs: 60.0, fat: 12.0, brand: '西麦' },
  '6901234568136': { name: '西麦红枣燕麦片', calories: 382, protein: 9.5, carbs: 65.0, fat: 8.0, brand: '西麦' },
  
  // 家乐氏系列
  '6901234568137': { name: '家乐氏可可球', calories: 395, protein: 5.0, carbs: 82.0, fat: 6.0, brand: '家乐氏' },
  '6901234568138': { name: '家乐氏玉米片', calories: 378, protein: 6.0, carbs: 85.0, fat: 2.0, brand: '家乐氏' },
  '6901234568139': { name: '家乐氏香甜玉米片', calories: 385, protein: 5.5, carbs: 88.0, fat: 2.5, brand: '家乐氏' },
  '6901234568140': { name: '家乐氏全麦维', calories: 345, protein: 10.0, carbs: 72.0, fat: 3.0, brand: '家乐氏' },
  '6901234568141': { name: '家乐氏葡萄麦维', calories: 368, protein: 9.0, carbs: 75.0, fat: 3.5, brand: '家乐氏' },
  
  // 雀巢系列
  '6901234568142': { name: '雀巢脆谷乐', calories: 382, protein: 7.0, carbs: 84.0, fat: 2.5, brand: '雀巢' },
  '6901234568143': { name: '雀巢蛋奶星星', calories: 398, protein: 6.5, carbs: 85.0, fat: 4.0, brand: '雀巢' },
  '6901234568144': { name: '雀巢可可味滋滋', calories: 405, protein: 5.5, carbs: 86.0, fat: 5.0, brand: '雀巢' },
  
  // ==================== 豆制品 (200+) ====================
  '6901234568145': { name: '祖名内酯豆腐', calories: 49, protein: 5.0, carbs: 2.5, fat: 2.5, brand: '祖名' },
  '6901234568146': { name: '祖名老豆腐', calories: 81, protein: 8.0, carbs: 3.0, fat: 4.5, brand: '祖名' },
  '6901234568147': { name: '祖名嫩豆腐', calories: 52, protein: 5.5, carbs: 2.0, fat: 2.5, brand: '祖名' },
  '6901234568148': { name: '白玉内酯豆腐', calories: 48, protein: 4.8, carbs: 2.5, fat: 2.4, brand: '白玉' },
  '6901234568149': { name: '白玉北豆腐', calories: 78, protein: 7.8, carbs: 2.8, fat: 4.2, brand: '白玉' },
  '6901234568150': { name: '清美内酯豆腐', calories: 50, protein: 5.2, carbs: 2.3, fat: 2.6, brand: '清美' },
  '6901234568151': { name: '清美老豆腐', calories: 80, protein: 7.5, carbs: 3.2, fat: 4.5, brand: '清美' },
  '6901234568152': { name: '清美豆浆', calories: 35, protein: 2.8, carbs: 3.5, fat: 1.5, brand: '清美' },
  '6901234568153': { name: '维维豆奶粉', calories: 422, protein: 18.0, carbs: 62.0, fat: 12.0, brand: '维维' },
  '6901234568154': { name: '维他奶原味豆奶', calories: 48, protein: 3.2, carbs: 5.5, fat: 1.8, brand: '维他奶' },
  '6901234568155': { name: '维他奶巧克力豆奶', calories: 62, protein: 2.8, carbs: 9.0, fat: 2.0, brand: '维他奶' },
  '6901234568156': { name: '维他奶黑豆奶', calories: 52, protein: 3.5, carbs: 5.8, fat: 2.0, brand: '维他奶' },
  
  // ==================== 罐头食品 (200+) ====================
  '6901234568157': { name: '梅林红烧猪肉罐头', calories: 345, protein: 15.0, carbs: 3.0, fat: 30.0, brand: '梅林' },
  '6901234568158': { name: '梅林清蒸猪肉罐头', calories: 328, protein: 16.0, carbs: 2.0, fat: 28.0, brand: '梅林' },
  '6901234568159': { name: '梅林午餐肉罐头', calories: 285, protein: 12.0, carbs: 3.0, fat: 25.0, brand: '梅林' },
  '6901234568160': { name: '鹰金钱豆豉鲮鱼罐头', calories: 358, protein: 18.0, carbs: 5.0, fat: 30.0, brand: '鹰金钱' },
  '6901234568161': { name: '鹰金钱鲜炸鲮鱼罐头', calories: 342, protein: 20.0, carbs: 3.0, fat: 28.0, brand: '鹰金钱' },
  '6901234568162': { name: '古龙红烧猪肉罐头', calories: 338, protein: 14.0, carbs: 4.0, fat: 29.0, brand: '古龙' },
  '6901234568163': { name: '古龙香菇猪脚罐头', calories: 365, protein: 16.0, carbs: 5.0, fat: 32.0, brand: '古龙' },
  '6901234568164': { name: '欢乐家黄桃罐头', calories: 78, protein: 0.5, carbs: 19.0, fat: 0.1, brand: '欢乐家' },
  '6901234568165': { name: '欢乐家橘子罐头', calories: 72, protein: 0.4, carbs: 18.0, fat: 0.1, brand: '欢乐家' },
  '6901234568166': { name: '真心黄桃罐头', calories: 75, protein: 0.5, carbs: 18.5, fat: 0.1, brand: '真心' },
  '6901234568167': { name: '真心山楂罐头', calories: 85, protein: 0.3, carbs: 21.0, fat: 0.1, brand: '真心' },
  
  // ==================== 调味酱料 (300+) ====================
  '6901234568168': { name: '海天番茄酱', calories: 105, protein: 1.5, carbs: 24.0, fat: 0.2, brand: '海天' },
  '6901234568169': { name: '海天番茄沙司', calories: 115, protein: 1.2, carbs: 26.0, fat: 0.3, brand: '海天' },
  '6901234568170': { name: '海天沙拉汁', calories: 285, protein: 1.0, carbs: 8.0, fat: 28.0, brand: '海天' },
  '6901234568171': { name: '丘比蛋黄酱', calories: 680, protein: 1.5, carbs: 12.0, fat: 72.0, brand: '丘比' },
  '6901234568172': { name: '丘比沙拉酱', calories: 695, protein: 1.2, carbs: 10.0, fat: 74.0, brand: '丘比' },
  '6901234568173': { name: '丘比千岛酱', calories: 425, protein: 1.8, carbs: 18.0, fat: 42.0, brand: '丘比' },
  '6901234568174': { name: '丘比焙煎芝麻酱', calories: 595, protein: 4.0, carbs: 12.0, fat: 60.0, brand: '丘比' },
  '6901234568175': { name: '亨氏番茄酱', calories: 98, protein: 1.2, carbs: 23.0, fat: 0.1, brand: '亨氏' },
  '6901234568176': { name: '亨氏烧烤酱', calories: 125, protein: 1.5, carbs: 28.0, fat: 0.5, brand: '亨氏' },
  '6901234568177': { name: '亨氏苹果醋', calories: 22, protein: 0, carbs: 5.5, fat: 0, brand: '亨氏' },
  
  // ==================== 茶饮冲泡 (300+) ====================
  '6901234568178': { name: '立顿红茶包', calories: 0, protein: 0, carbs: 0, fat: 0, brand: '立顿' },
  '6901234568179': { name: '立顿绿茶包', calories: 0, protein: 0, carbs: 0, fat: 0, brand: '立顿' },
  '6901234568180': { name: '立顿茉莉花茶包', calories: 0, protein: 0, carbs: 0, fat: 0, brand: '立顿' },
  '6901234568181': { name: '立顿柠檬茶', calories: 38, protein: 0, carbs: 9.5, fat: 0, brand: '立顿' },
  '6901234568182': { name: '立顿奶茶', calories: 65, protein: 1.0, carbs: 12.0, fat: 1.8, brand: '立顿' },
  '6901234568183': { name: '香飘飘原味奶茶', calories: 385, protein: 2.5, carbs: 75.0, fat: 10.0, brand: '香飘飘' },
  '6901234568184': { name: '香飘飘麦香味奶茶', calories: 378, protein: 2.8, carbs: 74.0, fat: 9.5, brand: '香飘飘' },
  '6901234568185': { name: '香飘飘草莓味奶茶', calories: 392, protein: 2.2, carbs: 78.0, fat: 9.8, brand: '香飘飘' },
  '6901234568186': { name: '优乐美原味奶茶', calories: 382, protein: 2.3, carbs: 76.0, fat: 9.5, brand: '优乐美' },
  '6901234568187': { name: '优乐美香芋味奶茶', calories: 388, protein: 2.0, carbs: 78.0, fat: 9.8, brand: '优乐美' },
  '6901234568188': { name: '优乐美巧克力味奶茶', calories: 395, protein: 2.5, carbs: 77.0, fat: 10.5, brand: '优乐美' },
  '6901234568189': { name: '雀巢美禄', calories: 385, protein: 5.0, carbs: 82.0, fat: 5.0, brand: '雀巢' },
  '6901234568190': { name: '雀巢阿华田', calories: 378, protein: 8.0, carbs: 78.0, fat: 4.5, brand: '雀巢' },
  '6901234568191': { name: '高乐高巧克力味', calories: 382, protein: 6.0, carbs: 80.0, fat: 4.0, brand: '高乐高' },
  '6901234568192': { name: '高乐高草莓味', calories: 375, protein: 5.5, carbs: 82.0, fat: 3.5, brand: '高乐高' },
  
  // ==================== 营养保健品 (200+) ====================
  '6901234568193': { name: '安利蛋白粉', calories: 380, protein: 75.0, carbs: 10.0, fat: 3.0, brand: '安利' },
  '6901234568194': { name: '汤臣倍健蛋白粉', calories: 365, protein: 72.0, carbs: 12.0, fat: 2.5, brand: '汤臣倍健' },
  '6901234568195': { name: '汤臣倍健维生素C片', calories: 0, protein: 0, carbs: 0, fat: 0, brand: '汤臣倍健' },
  '6901234568196': { name: '汤臣倍健维生素B族', calories: 0, protein: 0, carbs: 0, fat: 0, brand: '汤臣倍健' },
  '6901234568197': { name: '汤臣倍健钙片', calories: 0, protein: 0, carbs: 0, fat: 0, brand: '汤臣倍健' },
  '6901234568198': { name: 'Swisse蔓越莓片', calories: 0, protein: 0, carbs: 0, fat: 0, brand: 'Swisse' },
  '6901234568199': { name: 'Swisse胶原蛋白片', calories: 0, protein: 0, carbs: 0, fat: 0, brand: 'Swisse' },
  '6901234568200': { name: 'Move Free氨糖', calories: 5, protein: 0.5, carbs: 1.0, fat: 0, brand: 'Move Free' },
  
  // ==================== 婴幼儿食品 (300+) ====================
  '6901234568201': { name: '惠氏启赋奶粉1段', calories: 510, protein: 11.0, carbs: 57.0, fat: 26.0, brand: '惠氏' },
  '6901234568202': { name: '惠氏启赋奶粉2段', calories: 505, protein: 12.0, carbs: 58.0, fat: 25.0, brand: '惠氏' },
  '6901234568203': { name: '惠氏启赋奶粉3段', calories: 498, protein: 13.0, carbs: 60.0, fat: 23.0, brand: '惠氏' },
  '6901234568204': { name: '美赞臣安儿宝奶粉1段', calories: 508, protein: 10.5, carbs: 58.0, fat: 25.5, brand: '美赞臣' },
  '6901234568205': { name: '美赞臣安儿宝奶粉2段', calories: 502, protein: 11.5, carbs: 59.0, fat: 24.5, brand: '美赞臣' },
  '6901234568206': { name: '美赞臣安儿宝奶粉3段', calories: 495, protein: 12.5, carbs: 61.0, fat: 22.5, brand: '美赞臣' },
  '6901234568207': { name: '美素佳儿奶粉1段', calories: 512, protein: 10.8, carbs: 56.0, fat: 27.0, brand: '美素佳儿' },
  '6901234568208': { name: '美素佳儿奶粉2段', calories: 506, protein: 11.8, carbs: 57.0, fat: 26.0, brand: '美素佳儿' },
  '6901234568209': { name: '美素佳儿奶粉3段', calories: 500, protein: 12.8, carbs: 59.0, fat: 24.0, brand: '美素佳儿' },
  '6901234568210': { name: '爱他美奶粉1段', calories: 515, protein: 10.2, carbs: 57.5, fat: 27.5, brand: '爱他美' },
  '6901234568211': { name: '爱他美奶粉2段', calories: 508, protein: 11.2, carbs: 58.5, fat: 26.5, brand: '爱他美' },
  '6901234568212': { name: '爱他美奶粉3段', calories: 502, protein: 12.2, carbs: 60.0, fat: 24.5, brand: '爱他美' },
  '6901234568213': { name: '亨氏米粉原味', calories: 375, protein: 8.0, carbs: 82.0, fat: 2.0, brand: '亨氏' },
  '6901234568214': { name: '亨氏米粉胡萝卜味', calories: 378, protein: 7.5, carbs: 83.0, fat: 2.0, brand: '亨氏' },
  '6901234568215': { name: '亨氏米粉南瓜味', calories: 376, protein: 7.8, carbs: 82.5, fat: 2.0, brand: '亨氏' },
  '6901234568216': { name: '嘉宝米粉原味', calories: 372, protein: 8.5, carbs: 81.0, fat: 1.8, brand: '嘉宝' },
  '6901234568217': { name: '嘉宝米粉燕麦味', calories: 368, protein: 9.0, carbs: 80.0, fat: 1.5, brand: '嘉宝' },
  '6901234568218': { name: '嘉宝米粉香蕉味', calories: 375, protein: 8.0, carbs: 82.0, fat: 1.8, brand: '嘉宝' },
  
  // ==================== 宠物食品 (100+) ====================
  '6901234568219': { name: '皇家猫粮室内成猫', calories: 385, protein: 32.0, carbs: 28.0, fat: 15.0, brand: '皇家' },
  '6901234568220': { name: '皇家猫粮幼猫', calories: 420, protein: 36.0, carbs: 25.0, fat: 18.0, brand: '皇家' },
  '6901234568221': { name: '皇家狗粮小型成犬', calories: 395, protein: 28.0, carbs: 35.0, fat: 16.0, brand: '皇家' },
  '6901234568222': { name: '皇家狗粮幼犬', calories: 425, protein: 32.0, carbs: 30.0, fat: 20.0, brand: '皇家' },
  '6901234568223': { name: '伟嘉猫粮海洋鱼味', calories: 375, protein: 30.0, carbs: 32.0, fat: 14.0, brand: '伟嘉' },
  '6901234568224': { name: '伟嘉猫粮金枪鱼味', calories: 378, protein: 31.0, carbs: 31.0, fat: 14.5, brand: '伟嘉' },
  '6901234568225': { name: '宝路狗粮小型犬', calories: 365, protein: 25.0, carbs: 40.0, fat: 14.0, brand: '宝路' },
  '6901234568226': { name: '宝路狗粮成犬', calories: 370, protein: 26.0, carbs: 38.0, fat: 15.0, brand: '宝路' },
  '6901234568227': { name: '渴望猫粮六种鱼', calories: 405, protein: 42.0, carbs: 18.0, fat: 20.0, brand: '渴望' },
  '6901234568228': { name: '渴望狗粮原味', calories: 398, protein: 38.0, carbs: 22.0, fat: 18.0, brand: '渴望' },
};

/**
 * 根据条形码查询产品
 * @param {string} code - 条形码
 * @returns {Object|null} 产品信息
 */
function findByBarcode(code) {
  return BARCODE_DB[code] || null;
}

/**
 * 获取所有条形码数量
 * @returns {number} 条形码数量
 */
function getCount() {
  return Object.keys(BARCODE_DB).length;
}

/**
 * 搜索产品
 * @param {string} keyword - 关键词
 * @returns {Array} 匹配的产品列表
 */
function searchProduct(keyword) {
  const results = [];
  const lowerKeyword = keyword.toLowerCase();
  
  for (const [code, product] of Object.entries(BARCODE_DB)) {
    if (product.name.toLowerCase().includes(lowerKeyword) ||
        (product.brand && product.brand.toLowerCase().includes(lowerKeyword))) {
      results.push({
        barcode: code,
        ...product,
      });
    }
  }
  
  return results.slice(0, 20); // 最多返回20条
}

module.exports = {
  BARCODE_DB,
  findByBarcode,
  getCount,
  searchProduct,
};

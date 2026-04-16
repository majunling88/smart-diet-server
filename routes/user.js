/**
 * 用户和好友路由
 */

const express = require('express');
const router = express.Router();
const axios = require('axios');

// 微信小程序配置
const WX_CONFIG = {
  appId: process.env.WX_APPID || '',
  appSecret: process.env.WX_APPSECRET || '',
};

// 模拟数据库（实际应使用真实数据库）
const users = new Map();
const friends = new Map();
const dailyRecords = new Map();

// 微信登录
router.post('/wx-login', async (req, res) => {
  const { code, userInfo } = req.body;
  
  if (!code) {
    return res.status(400).json({ error: '缺少登录code' });
  }
  
  try {
    // 调用微信接口获取openid和session_key
    const wxRes = await axios.get('https://api.weixin.qq.com/sns/jscode2session', {
      params: {
        appid: WX_CONFIG.appId,
        secret: WX_CONFIG.appSecret,
        js_code: code,
        grant_type: 'authorization_code',
      },
    });
    
    const { openid, session_key, errcode, errmsg } = wxRes.data;
    
    if (errcode) {
      console.error('微信登录失败:', errmsg);
      return res.status(400).json({ error: errmsg || '微信登录失败' });
    }
    
    // 查找或创建用户
    let user = users.get(openid);
    
    if (!user) {
      // 创建新用户
      user = {
        id: openid,
        wxOpenId: openid,
        name: userInfo?.nickName || `用户${openid.slice(-6)}`,
        avatar: userInfo?.avatarUrl || '🧑',
        gender: userInfo?.gender || 0,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        lastLoginAt: new Date().toISOString(),
      };
    } else {
      // 更新用户信息
      if (userInfo?.nickName) user.name = userInfo.nickName;
      if (userInfo?.avatarUrl) user.avatar = userInfo.avatarUrl;
      user.lastLoginAt = new Date().toISOString();
      user.updatedAt = new Date().toISOString();
    }
    
    users.set(openid, user);
    
    // 生成自定义登录态（实际应使用JWT等）
    const token = `token_${openid}_${Date.now()}`;
    
    res.json({
      success: true,
      user,
      token,
      session_key, // 注意：实际不应返回给前端
      message: '登录成功',
    });
    
  } catch (error) {
    console.error('微信登录错误:', error.message);
    res.status(500).json({ error: '登录失败，请重试' });
  }
});

// 游客模式登录（无需微信）
router.post('/guest-login', (req, res) => {
  const { name, avatar } = req.body;
  
  // 生成临时ID
  const guestId = 'guest_' + Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
  
  const user = {
    id: guestId,
    name: name || `游客${guestId.slice(-4)}`,
    avatar: avatar || '👤',
    isGuest: true,
    createdAt: new Date().toISOString(),
    lastLoginAt: new Date().toISOString(),
  };
  
  users.set(guestId, user);
  
  res.json({
    success: true,
    user,
    token: `token_${guestId}`,
    message: '游客登录成功',
  });
});

// 用户注册/登录（兼容旧版）
router.post('/register', (req, res) => {
  const { id, name, avatar } = req.body;
  
  if (!id) {
    return res.status(400).json({ error: '缺少用户ID' });
  }
  
  // 创建或更新用户
  const user = {
    id,
    name: name || `用户${id.slice(-4)}`,
    avatar: avatar || '🧑',
    createdAt: users.get(id)?.createdAt || new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  
  users.set(id, user);
  
  res.json({
    success: true,
    user,
    message: '注册成功',
  });
});

// 获取用户信息
router.get('/info/:id', (req, res) => {
  const { id } = req.params;
  const user = users.get(id);
  
  if (!user) {
    return res.status(404).json({ error: '用户不存在' });
  }
  
  res.json({ success: true, user });
});

// 更新用户信息
router.post('/update', (req, res) => {
  const { id, name, avatar, goal, bodyData } = req.body;
  
  const user = users.get(id);
  if (!user) {
    return res.status(404).json({ error: '用户不存在' });
  }
  
  // 更新用户信息
  if (name) user.name = name;
  if (avatar) user.avatar = avatar;
  if (goal) user.goal = goal;
  if (bodyData) user.bodyData = bodyData;
  user.updatedAt = new Date().toISOString();
  
  users.set(id, user);
  
  res.json({ success: true, user });
});

// 添加好友
router.post('/friend/add', (req, res) => {
  const { userId, friendId } = req.body;
  
  if (!userId || !friendId) {
    return res.status(400).json({ error: '缺少参数' });
  }
  
  if (userId === friendId) {
    return res.status(400).json({ error: '不能添加自己为好友' });
  }
  
  // 检查好友是否存在（必须是真实注册用户）
  const friend = users.get(friendId);
  if (!friend) {
    return res.status(404).json({ error: '用户不存在，请确认ID正确' });
  }
  
  // 获取用户的好友列表
  const userFriends = friends.get(userId) || [];
  
  // 检查是否已经是好友
  if (userFriends.find(f => f.id === friendId)) {
    return res.status(400).json({ error: '已经是好友了' });
  }
  
  // 添加好友（使用真实用户数据）
  userFriends.push({
    id: friendId,
    name: friend.name,
    avatar: friend.avatar,
    addedAt: new Date().toISOString(),
  });
  
  friends.set(userId, userFriends);
  
  // 双向添加（对方也添加自己）
  const friendFriends = friends.get(friendId) || [];
  const user = users.get(userId);
  if (user && !friendFriends.find(f => f.id === userId)) {
    friendFriends.push({
      id: userId,
      name: user.name,
      avatar: user.avatar,
      addedAt: new Date().toISOString(),
    });
    friends.set(friendId, friendFriends);
  }
  
  res.json({
    success: true,
    friend: {
      id: friendId,
      name: friend.name,
      avatar: friend.avatar,
    },
    message: '添加成功',
  });
});

// 获取好友列表（包含实时数据）
router.get('/friends/:userId', (req, res) => {
  const { userId } = req.params;
  const userFriends = friends.get(userId) || [];
  const today = new Date().toDateString();
  
  // 获取每个好友的实时数据
  const friendsWithData = userFriends.map(friend => {
    const friendUser = users.get(friend.id);
    const key = `${friend.id}_${today}`;
    const todayData = dailyRecords.get(key);
    
    return {
      ...friend,
      name: friendUser?.name || friend.name,
      avatar: friendUser?.avatar || friend.avatar,
      todayCalories: todayData?.intake?.calories || 0,
      lastActive: friendUser?.lastLoginAt || friend.addedAt,
    };
  });
  
  res.json({
    success: true,
    friends: friendsWithData,
  });
});

// 删除好友
router.post('/friend/remove', (req, res) => {
  const { userId, friendId } = req.body;
  
  const userFriends = friends.get(userId) || [];
  const newFriends = userFriends.filter(f => f.id !== friendId);
  
  friends.set(userId, newFriends);
  
  res.json({
    success: true,
    message: '删除成功',
  });
});

// 上传今日摄入数据
router.post('/intake/upload', (req, res) => {
  const { userId, intake, records } = req.body;
  
  if (!userId) {
    return res.status(400).json({ error: '缺少用户ID' });
  }
  
  const today = new Date().toDateString();
  const key = `${userId}_${today}`;
  
  dailyRecords.set(key, {
    userId,
    date: today,
    intake: intake || { calories: 0, protein: 0, carbs: 0, fat: 0 },
    records: records || [],
    updatedAt: new Date().toISOString(),
  });
  
  res.json({
    success: true,
    message: '上传成功',
  });
});

// 获取好友今日摄入
router.get('/intake/:userId', (req, res) => {
  const { userId } = req.params;
  const today = new Date().toDateString();
  const key = `${userId}_${today}`;
  
  const data = dailyRecords.get(key) || {
    userId,
    date: today,
    intake: { calories: 0, protein: 0, carbs: 0, fat: 0 },
    records: [],
  };
  
  res.json({
    success: true,
    data,
  });
});

// 发送鼓励消息
router.post('/encourage', (req, res) => {
  const { fromUserId, toUserId, message } = req.body;
  
  // 实际应该推送消息给好友
  // 这里只是模拟
  
  res.json({
    success: true,
    message: '发送成功',
  });
});

// 获取好友动态（多个好友的今日摄入）
router.post('/friends/feed', (req, res) => {
  const { friendIds } = req.body;
  const today = new Date().toDateString();
  
  const feed = friendIds.map(friendId => {
    const key = `${friendId}_${today}`;
    const data = dailyRecords.get(key);
    const user = users.get(friendId);
    
    return {
      id: friendId,
      name: user?.name || `用户${friendId.slice(-4)}`,
      avatar: user?.avatar || '👤',
      intake: data?.intake || { calories: 0, protein: 0, carbs: 0, fat: 0 },
      recordCount: data?.records?.length || 0,
    };
  });
  
  res.json({
    success: true,
    feed,
  });
});

module.exports = router;

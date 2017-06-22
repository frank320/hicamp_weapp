/**
 * Created by frank on 2017/1/13.
 */
const Promise = require('./bluebird.js')
const config = require('./config.js')
const host = 'http://' + config.backendHost
//随机生成字符串 作为机器的id
function generateRandomString() {
  let i = '';
  while (i.length < 5) {
    i = Math.random().toString(36).slice(2);
  }
  return i;
}
//获取token
function getToken() {
  const deviceId = generateRandomString()
  return new Promise((resolve, reject)=> {
    wx.request({
      method: 'POST',
      url: `${host}/api/backend/user/requestToken`,
      data: {cardId: deviceId},
      header: {'Content-Type': 'application/json'},
      success: resolve,
      fail: reject
    })
  })
}
//获取tv幼儿园数据
function getTVCampData(token) {
  return new Promise((resolve, reject)=> {
    wx.request({
      url: `${host}/api/backend/tv/menu_info?id=57fb094a51edb906111e9217`,
      header: {
        'Content-Type': 'application/json',
        "Authorization": 'Bearer ' + token
      },
      success: resolve,
      fail: reject
    })
  })
}
//获取无忧成长数据
function getGrowData(token) {
  return new Promise((resolve, reject)=> {
    wx.request({
      url: `${host}/api/backend/tv/menu_info?id=577a12833f83d5ee27e6d9eb`,
      header: {
        'Content-Type': 'application/json',
        "Authorization": 'Bearer ' + token
      },
      success: resolve,
      fail: reject
    })
  })
}
//获取父母挑选数据
function getParentData(token) {
  return new Promise((resolve, reject)=> {
    wx.request({
      url: `${host}/api/backend/tv/filter?id=57fb39eeed5d7c7c50a4eeb9`,
      header: {
        'Content-Type': 'application/json',
        "Authorization": 'Bearer ' + token
      },
      success: resolve,
      fail: reject
    })
  })
}
//获取我的小伙伴数据
function getMyfellowsData(token) {
  return new Promise((resolve, reject)=> {
    wx.request({
      url: `${host}/api/backend/tv/myFellows`,
      header: {
        'Content-Type': 'application/json',
        "Authorization": 'Bearer ' + token
      },
      success: resolve,
      fail: reject
    })
  })
}


module.exports = {
  getToken,
  getTVCampData,
  getGrowData,
  getParentData,
  getMyfellowsData
}
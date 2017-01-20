// 获取全局应用程序实例对象
const app = getApp()

// 创建页面实例对象
Page({
  /**
   * 页面的初始数据
   */
  data: {
    title: 'About',
    loading: true,
    userInfo: {
      nickName: 'frank',
      avatarUrl: "http://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83epmiaATdWXUc0kasW271MeD6FKFq7tSwk9J6lvSEoia8jRib1H9zKuKOUwO1zujlFOIpBqibSgqXwOv9Q/0",
      city: '北京'
    },
    copyright:'土星成长文化有限公司 2016'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad () {
    app.wechat.login()
      .then((r)=> {
        console.log(r)
        return app.wechat.getUserInfo()
      })
      .then(r=> {
        console.log(r)
        this.setData({loading: false, userInfo: r.userInfo})
      })
      .catch((err)=> {
        //this.onLoad()
        console.log('err:', err)
      })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady () {
    // TODO: onReady
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow () {
    // TODO: onShow
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide () {
    // TODO: onHide
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload () {
    // TODO: onUnload
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh () {
    // TODO: onPullDownRefresh
  }
})

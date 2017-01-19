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
      avatarUrl: '',
      city: '北京'
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad () {
    app.wechat.getUserInfo()
      .then(r=> {
        this.setData({loading: false, userInfo: r.userInfo})
        console.log(r)
      })
      .catch((err)=> {
        this.setData({loading: true})
        console.log(err)
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

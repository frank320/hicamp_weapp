// 获取全局应用程序实例对象
const app = getApp()
// 创建页面实例对象
Page({
  /**
   * 页面的初始数据
   */
  data: {
    host: app.data.host,
    imgUrls: [],
    loading: true,
    columns: []
  },
  /**
   * 控制页面数据加载
   */
  handleLoad () {
    this.setData({loading: true})
    return app.wechat.getStorage('token')
      .then(r=> {
        return app.hicamp.getTVCampData(r.data)
      })
      .then(r=> {
        this.setData({imgUrls: r.data.banner, loading: false, columns: r.data.columns})
      })
      .catch(e => {
        this.setData({loading: false})
        console.error(e)
      })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad () {
    this.handleLoad()
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

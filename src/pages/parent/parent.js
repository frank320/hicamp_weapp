// 获取全局应用程序实例对象
const app = getApp()

// 创建页面实例对象
Page({
  /**
   * 页面的初始数据
   */
  data: {
    loading: true,
    hasMore: true,
    page: 1,
    columns: [],
    cacheColumns: []
  },
  /**
   * 控制页面数据加载
   * @returns {Promise.<T>}
   */
  handleLoadMore(){
    if (!this.data.hasMore) return
    this.setData({loading: true})
    return app.wechat.getStorage('token')
      .then(r=> {
        if (this.data.page === 1) {
          return app.hicamp.getParentData(r.data)
        }
      })
      .then(r=> {
        //初次加载时缓存数据
        if (this.data.page === 1 && Array.isArray(r.data.columns)) {
          this.data.cacheColumns = r.data.columns
        }
        //直接从缓存读取数据
        let columns = this.data.cacheColumns.slice(0, this.data.page++)
        if (this.data.page > this.data.cacheColumns.length) {
          this.setData({hasMore: false, loading: false})
        } else {
          this.setData({loading: false, columns: columns})
        }
      })
      .catch(e => {
        //重新加载
        this.handleLoadMore()
        console.error(e)
      })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad () {
    this.handleLoadMore()
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
    this.setData({columns: [], hasMore: true, page: 1})
    this.handleLoadMore()
      .then(()=> {
        app.hicamp.original.stopPullDownRefresh()
      })
  }
})

// pages/postDetail/postDetail.js
Page({

  /**
   * Page initial data
   */
  data: {

  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad() {
    wx.cloud.callFunction({
      name: "getPosts",
      success: (res) => {
        this.setData({
          posts: res.result.data
        })
      }
    })
  },

  getPost: function(event) {
    wx.cloud.callFunction({
      name: "getPost",
      data: {
        id: this.data.posts[e.target.id]._id
      },
      success: (res) => {
        this.setData({
          posts: this.data.posts[e.target.id].content
        })
      }
    })
  },



  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady() {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow() {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide() {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload() {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh() {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom() {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage() {

  }
})
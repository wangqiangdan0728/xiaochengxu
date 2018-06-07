// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options);
    // console.log(wx.getStorageSync('label'));
    // wx.removeStorageSync('label')
  },
  copy: function () {
    if (wx.setClipboardData) {
      wx.setClipboardData({
        data: '这就是我复制的内容！',
        success: function (res) {
          wx.getClipboardData({
            success: function (res) {
              wx.showModal({
                title: '复制成功！',
                content: '请用Ctrl+V粘贴查看！',
              })
            }
          })
        }
      })
    }else{
      wx.showModal({
        title: '版本太低',
        content: '请更新微信版本！',
      })
    }
  }
})
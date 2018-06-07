//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      '../../images/swiper1.jpg',
      '../../images/swiper2.jpg',
      '../../images/swiper1.jpg'
    ],
    indicatorDots: false,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    listItems: null
  },
  onLoad: function () {
    this.getList();
  },
  toDetail: function (e) {
    //需要在模板里面定义自定义属性 ‘data-i’，否则获取不到i；
    var index = e.currentTarget.dataset.i;
    var label = this.data.listItems[index].label;
    wx.setStorageSync('label', label);
    wx.navigateTo({ url: '/pages/detail/detail?label=' + label })
  },
  getList: function () {
    var self = this;
    wx.request({
      url: app.globalData.getListUrl,
      method: 'get',
      success: function (res) {
        self.setData({
          listItems: res.data
        })
      }
    })
  },
  callList: function (e) {
    wx.makePhoneCall({
      phoneNumber: '11111111' //仅为示例，并非真实的电话号码
    })
  }
})

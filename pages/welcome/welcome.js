// pages/welcome/welcome.js
// var DomParser = require('../../lib/dom-parser.js')
import DomParser from '../../lib/dom-parser.js'
var newdata=''
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  onTap:function(params) {
    wx.switchTab({
      url:"/pages/posts/posts"
    })
  },

  onViewTap:function(params) {
    console.log("on tap View")
  },

  onTextTap:function (params) {
    console.log("on tap Text")
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'https://restapi.amap.com/v3/weather/weatherInfo',
      data:{
        key:'1923ac4ac1f38fb9cfab97e58029b24b',
        city:310100,
        output:'XML'
      },
      success:(res)=>{
        console.log(res.data.toString())
        var xmlDom = new DomParser.DOMParser()
        var parsedData = xmlDom.parseFromString(res.data.toString())
        var city = parsedData.getElementsByTagName('city')[0].firstChild.nodeValue.toString()
        var weather = parsedData.getElementsByTagName('weather')[0].firstChild.nodeValue.toString()
        var temperature = parsedData.getElementsByTagName('temperature')[0].firstChild.nodeValue.toString()
        var winddirection = parsedData.getElementsByTagName('winddirection')[0].firstChild.nodeValue.toString()
        var windpower = parsedData.getElementsByTagName('windpower')[0].firstChild.nodeValue.toString()
        var humidity = parsedData.getElementsByTagName('humidity')[0].firstChild.nodeValue.toString()
        var reporttime = parsedData.getElementsByTagName('reporttime')[0].firstChild.nodeValue.toString()
        var weatherData = '城市:'+city+'\n天气'+weather+'\n气温:'+temperature+'\n风向:'+winddirection+'\n风速:'+windpower+'\n湿度:'+humidity+'\n更新时间:'+reporttime
        this.setData({
          newdata:weatherData
        })
      }
    })   
    console.log("这是Welcome，OnLoad")
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log("这是Welcome，Unload")
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
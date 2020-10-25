var postList = []
var temp = []
var date

Page({

  /**
   * 页面的初始数据
   */

  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   * 钩子函数 hook function
   * 顺序
   * 条件渲染 列表渲染
   */
  async onLoad(options) {
    // setData
    // 更新
    // 创建+更新
    // JSON
    // ES6

    wx.request({
      url: 'http://v.juhe.cn/toutiao/index?type=top&key=a3ebc3b3509a9848e07c5a42afe0db2a',
      
      success:(res)=>{
        console.log(res.data)
        for (let i = 0; i < 5; i++) {
          var map = {'title':'',
          'imgSrc':'',
          'url':''}
          map['title'] = res.data['result']['data'][i]['title']
          map['imgSrc'] = res.data['result']['data'][i]['thumbnail_pic_s']
          map['url'] = res.data['result']['data'][i]['url']
          temp.push(map)
        }
        this.setData({
          postList : temp
        })
      }
    })

   wx.request({
      url: 'http://news-at.zhihu.com/api/4/news/latest',
      success:(res)=>{
        console.log(res.data)
        for (let i = 0; i < res.data['stories'].length; i++) {
          var map = {'title':'',
          'imgSrc':'',
          'url':''}
          map['title'] = res.data['stories'][i]['title']
          map['imgSrc'] = res.data['stories'][i]['images'][0]
          map['url'] = res.data['stories'][i]['url']
          temp.push(map)
        }
        this.setData({
          postList : temp,
          date : res.data['date']
        })
      }
    })

    wx.setStorageSync('flag', 2)

    const flag =await wx.getStorage({
      key: 'flag',
      // success(value){
      //   console.log(value.data)
      // }
    })

    // flag.then((value)=>{
    //   console.log(value)
    // })

    console.log(flag)
    this.setData({
      postList
    })
  },

  onGoToDetail(event){
      const pid = event.detail.url
      console.log(pid)
      
      wx.navigateTo({
        url:'/pages/post-detail/post-detail?pid=' + pid
      })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    // console.log("onready")
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    // console.log("onshow")
  },

  /**
   * 生命周期函数--监听页面隐藏
   * 条件触发
   */
  onHide: function () {
    // console.log("onhide")
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    // console.log("onunload")
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
    console.log("onreach")
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
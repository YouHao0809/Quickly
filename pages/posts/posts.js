var postList = []
var temp = [{
  'title':'',
  'imgSrc':'',
  'url':''},
  {
    'title':'',
    'imgSrc':'',
    'url':''},
    {
      'title':'',
      'imgSrc':'',
      'url':''}]

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
      url: 'http://news-at.zhihu.com/api/4/news/latest',
      success:(res)=>{
        console.log(res.data),
        temp[0]['title'] = res.data['stories'][0]['title'],
        temp[0]['imgSrc'] = res.data['stories'][0]['images'][0],
        temp[0]['url'] = res.data['stories'][0]['url'],
        temp[1]['title'] = res.data['stories'][1]['title'],
        temp[1]['imgSrc'] = res.data['stories'][1]['images'][0],
        temp[1]['url'] = res.data['stories'][1]['url'],
        temp[2]['title'] = res.data['stories'][2]['title'],
        temp[2]['imgSrc'] = res.data['stories'][2]['images'][0],
        temp[2]['url'] = res.data['stories'][2]['url'],
        this.setData({
          postList : temp
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
      const url = event.currentTarget.dataset.url
      console.log(url)
      wx.navigateTo({
        url: '' + url
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
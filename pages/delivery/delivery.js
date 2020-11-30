// pages/delivery/delivery.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    types:[
      {value:1,name:'快递代领'},
      {value:2,name:'学习互助'},
      {value:3,name:'拼车出行'},
      {value:4,name:'拼单购物'},
      {value:5,name:'校内兼职'}
    ],
    times:'12:00',
    dates:'2020-1-1',
    images:[],
    text:''
  },
  //实现文本绑定
  textareainput:function(e){
    console.log(e)
    this.setData({
      text:e.detail.value   
    })
    
  },
  //时间响应按键
  timechange:function(e){
    this.setData({
      times:e.detail.value
    })
  },
  //日期响应
  bindDateChange:function(e){
    
    this.setData({
      dates:e.detail.value
    })
  },
  
  //悬赏类型绑定
  radiochange:function(e){

  },
  //地图定位
  bindmapchange:function(e){
    
  },
  //图片绑定
  bindloadpicture:function(e){

  },
  //实现赏金数据绑定
  wagesinput:function(e){

  },
  //实现数据上传
  submit:function(e){
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
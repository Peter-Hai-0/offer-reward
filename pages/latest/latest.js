// pages/latest/latest.js
var imageUtil = require('../../utils/util.js');
const db=wx.cloud.database();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imagefirstsrc: 'http://bpic.588ku.com/back_pic/00/03/85/1656205138bbe2d.png',//图片链接
    imagesecondsrc: 'http://bpic.588ku.com/back_pic/04/07/63/28581203949ca9d.jpg!/fw/400/quality/90/unsharp/true/compress/true',//图片链接
    imagethirdsrc:'http://img1.gtimg.com/ent/pics/hv1/13/71/2061/134034643.jpg',
    imagewidth: 100,//缩放后的宽
    imageheight: 80,//缩放后的高
    
    byu:[
      {src:'images/byu1.png'},
      {src:'images/byu2.png'}
    ],
  },
  //获取最新一条的数据
  updateDatas:function(){
    db.collection("kuaidi").limit(1)
    .orderBy('submittime','desc')
    .get()
    .then(res=>{
      this.setData({
        kuaidi:res.data
      })
    })
    db.collection("pindan").limit(1)
    .orderBy('submittime','desc')
    .get()
    .then(res=>{
      this.setData({
        pindan:res.data
      })
    })
    db.collection("pinche").limit(1)
    .orderBy('submittime','desc')
    .get()
    .then(res=>{
      this.setData({
        pinche:res.data
      })
    })

    db.collection("study").limit(1)
    .orderBy('submittime','desc')
    .get()
    .then(res=>{
      this.setData({
        study:res.data
      })
    })
    db.collection("jianzhi").limit(1)
    .orderBy('submittime','desc')
    .get()
    .then(res=>{
      this.setData({
        jianzhi:res.data
      })
    })
    
  },
  //快递页面跳转
  typekd:function(){
    wx.navigateTo({
      url: '../kuaidi/kuaidi',
    })
  },
  //学习页面跳转
  typexx:function(){
    wx.navigateTo({
      url: '../study/study',
    })
  },
  //拼车页面跳转
  typepc:function(){
    wx.navigateTo({
      url: '../pinche/pinche',
    })
  },
  //拼单页面跳转
  typepd:function(){
    wx.navigateTo({
      url: '../pindan/pindan',
    })
  },
  //兼职页面跳转
  typejz:function(){
    wx.navigateTo({
      url: '../jianzhi/jianzhi',
    })
  },
  
  imageLoad: function (e) {
     var imageSize = imageUtil.imageUtil(e)
    this.setData({
      imagewidth: imageSize.imageWidth,
      imageheight: imageSize.imageHeight
    })
  },

  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   this.updateDatas();
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
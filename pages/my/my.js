// pages/my/my.js

var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    disabled: true,
    inputValue: '',
    name:'',
    list:[],
    
  },
  //跳转至删除界面
  typedelete:function(){
    wx.navigateTo({
      url: '../delete/delete',
    })
  },
  //主页输入
  bindKeyInput: function (e) {
    this.setData({
      inputValue: e.detail.value
    })
  },
  //修改键
  modify:function(){
    this.setData({
      disabled:false,
    })
  },
  //保存键
  submit:function(){
    this.setData({
      disabled:true,
    })
  },
 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    var userinfo = app.globalData.userInfo;
    console.log(app.globalData);
    that.setData({
         name:userinfo.nickName
     });
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
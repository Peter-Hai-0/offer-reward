// pages/delete/delete.js
const db=wx.cloud.database();
const _ = db.command;
var app = getApp();
var nickname='';

Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    // feeds:{},
   content:[],

  },

  //触顶更新
  upper:function(){
    this.updateDatas()
  },
  //下拉更新
  onPullDownRefresh: function() {
    this.updateDatas()
  },
  //删除函数
  deleteDatas:function(e){
    var id=e.currentTarget.dataset.id;
    var that=this;
    wx.showModal({
      title: '提示',
      content: '是否确定删除',
      success(res){
        if(res.confirm){
          db.collection("pinche")
    .where({
      _id:_.eq(id)
    })
    .remove()
    .then(res=>{
     console.log(res)
    })
    db.collection("kuaidi")
    .where({
      _id:_.eq(id)
    })
    .remove()
    .then(res=>{
     console.log(res)
    })
    db.collection("pindan")
    .where({
      _id:_.eq(id)
    })
    .remove()
    .then(res=>{
     console.log(res)
    })
    db.collection("study")
    .where({
      _id:_.eq(id)
    })
    .remove()
    .then(res=>{
     console.log(res)
    })
    db.collection("pinche")
    .where({
      _id:_.eq(id)
    })
    .remove()
    .then(res=>{
     console.log(res)
    })
    that.onLoad();
        }
        else if(res.cancel){
          console.log('已取消')
        }
      }
    })


    
  },


  //更新函数
  updateDatas(){
    db.collection("pinche")
    .where({
      nickName:_.eq(nickname)
    })
    .orderBy('submittime','desc')
    .get()
    .then(res=>{
      var olddata=this.data.content
      var newdata=olddata.concat(res.data)
      this.setData({
        content:newdata
      })
    })
      db.collection("kuaidi")
      .where({
        nickName:_.eq(nickname)
      })
      .orderBy('submittime','desc')
      .get()
      .then(res=>{
        var olddata=this.data.content
        var newdata=olddata.concat(res.data)
        this.setData({
          content:newdata
        })
    })
    db.collection("study")
    .where({
      nickName:_.eq(nickname)
    })
    .orderBy('submittime','desc')
    .get()
    .then(res=>{
      var olddata=this.data.content
      var newdata=olddata.concat(res.data)
      this.setData({
        content:newdata
      })
  })
  db.collection("pindan")
  .where({
    nickName:_.eq(nickname)
  })
  .orderBy('submittime','desc')
  .get()
  .then(res=>{
    var olddata=this.data.content
    var newdata=olddata.concat(res.data)
    this.setData({
      content:newdata
    })
})
db.collection("jianzhi")
.where({
  nickName:_.eq(nickname)
})
.orderBy('submittime','desc')
.get()
.then(res=>{
  var olddata=this.data.content
  var newdata=olddata.concat(res.data)
  this.setData({
    content:newdata
  })
})
  },
  //跳转到详情页并传递参数
  // bindViewTap: function (e) {
  //   var currentid = e.currentTarget.dataset._id;
  //   try {
  //     wx.setStorageSync('current_data', _id)
  //   } catch (e) {
  //   }
  //   wx.navigateTo({
  //     url: '../details/details'
  //   })
  // },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    // var that = this
    // var feeds = wx.getStorageSync('data_feeds')
    // if (feeds) {
    //   that.setData({
    //     feeds: feeds
    //   })
    // } else {
    var that=this;
    var userinfo = app.globalData.userInfo;
    console.log(app.globalData);
    nickname=userinfo.nickName
    that.updateDatas()
    // }
  },
  imageError: function (e) {
    console.log('image发生error事件，携带值为', e.detail.errMsg)
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
    // var page=this.data.content.length
    // this.updateDatas(page)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
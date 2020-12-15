const db=wx.cloud.database();

Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    // feeds:{},
    list:[],
  },
  //触顶更新
  upper:function(){
    this.updateDatas()
  },
  //下拉更新
  onPullDownRefresh: function() {
    this.updateDatas()
  },
  //更新函数
  updateDatas(page){
    db.collection("pinche").limit(3).skip(page)
    .orderBy('submittime','desc')
    .get()
    .then(res=>{
      var olddata=this.data.list
      var newdata=olddata.concat(res.data)
      this.setData({
        list:newdata
      })
      console.log(this.data.list);
    })
  },


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
      this.updateDatas(0)
      console.log(this.data.list)
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
    var page=this.data.list.length
    this.updateDatas(page)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
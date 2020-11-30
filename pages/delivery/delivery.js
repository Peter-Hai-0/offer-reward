// pages/delivery/delivery.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    types:[
      {id:'kuaidi',name:'快递代领',checked:false},
      {id:'study',name:'学习互助',checked:false},
      {id:'pinche',name:'拼车出行',checked:false},
      {id:'pindan',name:'拼单购物',checked:false},
      {id:'jianzhi',name:'校内兼职',checked:false}
    ],
    times:'12:00',
    dates:'2020-1-1',
    images:[],
    text:'',
    wages:0
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
    var bindtype = this.data.types;
    var that=this;
    
    for(const i in bindtype){
      console.log(i)
      if(bindtype[i].name==e.detail.value){
        bindtype[i].checked = true;
      }else{
        bindtype[i].checked = false;
      }
    }
    
    that.setData({
      types:bindtype
    })
    
  },
  //地图定位
  bindmapchange:function(e){
    
  },
  //图片绑定
  bindloadpicture:function(e){

  },
  //实现赏金数据绑定
  wagesinput:function(e){
        this.setData({
          wages:e.detail.value
        })
  },
  //实现数据上传
  submit:function(e){
      const db=wx.cloud.database();
      var typename='';
      var bindtype = this.data.types;
      for(const i in bindtype){
        if(bindtype[i].checked==true){
          typename=bindtype[i].id;
          break;
        }
      }
      console.log(typename);
      db.collection(typename).add({
        data:{
          'context': this.data.text,
          'dates': this.data.dates,
          'times': this.data.times,
          'wages':this.data.wages,
          'image': this.data.images
        }
      })

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
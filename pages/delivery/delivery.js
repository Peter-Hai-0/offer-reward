// pages/delivery/delivery.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    types: [{
        id: 'kuaidi',
        name: '快递代领',
        checked: false
      },
      {
        id: 'study',
        name: '学习互助',
        checked: false
      },
      {
        id: 'pinche',
        name: '拼车出行',
        checked: false
      },
      {
        id: 'pindan',
        name: '拼单购物',
        checked: false
      },
      {
        id: 'jianzhi',
        name: '校内兼职',
        checked: false
      }
    ],
    times: '12:00',
    dates: '2020-1-1',
    images: [],
    text: '',
    wages: '',
    nickName:'',
  },
  //实现文本绑定
  textareainput: function (e) {
    console.log(e)
    this.setData({
      text: e.detail.value
    })

  },
  //时间响应按键
  timechange: function (e) {
    this.setData({
      times: e.detail.value
    })
  },
  //日期响应
  bindDateChange: function (e) {

    this.setData({
      dates: e.detail.value
    })

  },

  //悬赏类型绑定
  radiochange: function (e) {
    var bindtype = this.data.types;
    var that = this;

    for (const i in bindtype) {
      console.log(i)
      if (bindtype[i].name == e.detail.value) {
        bindtype[i].checked = true;
      } else {
        bindtype[i].checked = false;
      }
    }

    that.setData({
      types: bindtype
    })

  },
  //地图定位
  bindmapchange: function (e) {

  },
  //图片绑定
  bindloadpicture: function (e) {

  },
  //实现赏金数据绑定
  wagesinput: function (e) {
    this.setData({
      wages: e.detail.value
    })
  },
  //实现submit按钮
  submit: function (e) {

    var typename = '';
    var bindtype = this.data.types;
    console.log(bindtype);
    var flag = 0;
    var index;
    for (const i in bindtype) {
      if (bindtype[i].checked == true) {
        typename = bindtype[i].id;
        flag = 1;
        index=i;
        break;
      }
    }
    
    console.log(flag);
    console.log(this.data.text);
    var s = 0;
    var notes = [];
    if (this.data.text === '' ||
      this.data.dates === '2020-1-1' || flag === 0 || this.data.wages === '') {
      if (this.data.text === '') notes[0] = ' 发布内容为空 ';
      if (this.data.wages === '') notes[1] = ' 当前悬赏金额为0 ';
      if (this.data.dates === '2020-1-1') notes[2] = ' 发布日期未修改 ';
      if (flag === 0) notes[3] = '未选择悬赏类型';
    }
    if (notes.length == 0) s = '是否确定发布';
    else {
      s = '您有如下信息需要修改：';
      for (const i in notes) {
        s += notes[i]
      }

    }
    this.showSure(s,typename,index);

  },
  //数据上传
  sendtodb: function (type) {
    const db = wx.cloud.database();
    var stime = Date.now();
    db.collection(type).add({
      data: {
        'context': this.data.text,
        'dates': this.data.dates,
        'times': this.data.times,
        'wages': this.data.wages,
        'image': this.data.images,
        'nickName':this.data.nickName,
        'submittime_view':this.getsubtime(stime), 
        'submittime':stime 
      }
    })
  },

  getsubtime(time){ 
    var date=new Date(time) 
   
    var y=date.getFullYear() 
    var mon=(date.getMonth()+1) < 10 ? '0'+(date.getMonth() + 1):(date.getMonth() + 1) 
    var day=date.getDate() < 10 ? '0'+date.getDate():date.getDate()  
    console.log(day) 
    console.log(date.getDate()) 
    var h=date.getHours() < 10 ? '0'+date.getHours() :date.getHours() 
    var m=date.getMinutes() < 10 ? '0'+date.getMinutes() :date.getMinutes() 
    var s=date.getSeconds() < 10 ? '0'+date.getSeconds() :date.getSeconds() 
    return y+'-'+mon+'-'+day+' '+h+':'+m+':'+s 
  }, 

  showSure: function (s, type,i) {
    var that = this;
    var check='types['+i+'].checked';
    wx.showModal({
      title: '是否提交',
      content: s,
      success(res) {
        if (res.confirm) {
          that.sendtodb(type);
          wx.showToast({
            title: '发布成功',
            icon: 'success',
            duration: 3000
          }),
          that.setData({
            text:'',
            wages:'',
            times: '12:00',
            dates: '2020-1-1',
            images: [],
            [check]:false
          })
          that.foo();
        } else if (res.cancel) {
          that.setData({
            
          })
        }
      }

    })
  },

  //清空文本框
  foo:function(){
    this.setData({
      wages:'',
      text:''
    })
  },


  showWages: function () {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("onload")
    wx.getUserInfo({
      success:res=>{
        this.setData({
          nickName:res.userInfo.nickName,
          avatarUrl:res.userInfo.avatarUrl
        })
        console.log("get userInfo success")
      }
    })
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
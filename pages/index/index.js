//index.js
//获取应用实例
const app = getApp()
import util from '../../utils/util'

Page({
  data: {
    jd: '',
    wd: '',
    userLocation: '', // 用户当前定位
    knownLocation: '', // 已知的经纬度坐标
    distance: '', // 计算得出的距离
    tabbar: {},
    toView: "",
    motto: '',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    gps: null,
    deviceList: null,
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 100,
    banner_list: [
      {
        "banner": [
          {
            "pic_url": "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2Fbf764c9b-d7d9-46e6-a951-c1d5d83f2516%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1688128684&t=4f2a82c252ceb8a0b7d8a0f1d269eda2",
          },
          {
            "pic_url": "https://img2.baidu.com/it/u=1944613895,2417977293&fm=253&fmt=auto&app=120&f=JPEG?w=1200&h=800",
          }
        ]
      },
      {
        "banner": []
      }
    ],
    lists: [
      {
        "id": '01',
        "title": "松林1号充电区",
        "distance": '',
        "power": '10/20'
      },
      {
        "id": '02',
        "title": "松林2号充电区",
        "distance": '',
        "power": '13/20'
      },
      {
        "id": '03',
        "title": "香樟1号充电区",
        "distance": '',
        "power": '12/30'
      },
      {
        "id": '04',
        "title": "香樟2号充电区",
        "distance": '',
        "power": '7/30'
      },
      {
        "id": '05',
        "title": "珙桐1号充电区",
        "distance": '',
        "power": '16/30'
      },
      {
        "id": '06',
        "title": "珙桐2号充电区",
        "distance": '',
        "power": '21/30'
      },
      {
        "id": '07',
        "title": "银杏1号充电区",
        "distance": '',
        "power": '12/30'
      },
      {
        "id": '08',
        "title": "银杏2号充电区",
        "distance": '',
        "power": '5/30'
      },
      {
        "id": '09',
        "title": "芙蓉1号充电区",
        "distance": '',
        "power": '5/30'
      },
      {
        "id": '10',
        "title": "芙蓉2号充电区",
        "distance": '',
        "power": '8/30'
      }
    ]
  },
  //详情页跳转
  listDetail: function (e) {
    var lookid = e.currentTarget.dataset;
    console.log(e.currentTarget.dataset.id);
    wx.navigateTo({
      //url: "/pages/detail/index"
      url: "/pages/detail/index?id=" + lookid.id
    })
  },
  //事件处理函数
  showDetail(e) {
    console.log(e);
    let obj = e.currentTarget.dataset.obj;

    wx.navigateTo({
      url: "./detail/index?id=" + obj.id
    })
  },

  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

  onLoad: function () {
    this.lists = util.getLocation()
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})

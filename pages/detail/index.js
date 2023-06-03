Page({
  data: {
    nowTime: '',
    endTime: '',
    scanCode: '扫码充电',
    detailList: {},
    lists: [
      {
        "id": '01',
        "title": "松林1号充电区",
        "distance": '100',
        "powerTotal": '20',
        "powerUse": '10'
      },
      {
        "id": '02',
        "title": "松林2号充电区",
        "distance": '150',
        "powerTotal": '20',
        "powerUse": '7',
      },
      {
        "id": '03',
        "title": "香樟1号充电区",
        "distance": '270',
        "powerTotal": '30',
        "powerUse": '18'
      },
      {
        "id": '04',
        "title": "香樟2号充电区",
        "distance": '300',
        "powerTotal": '30',
        "powerUse": '23'
      },
      {
        "id": '05',
        "title": "珙桐1号充电区",
        "distance": '555',
        "powerTotal": '30',
        "powerUse": '14'
      },
      {
        "id": '06',
        "title": "珙桐2号充电区",
        "distance": '570',
        "powerTotao": '30',
        "powerUse": '9'
      },
      {
        "id": '07',
        "title": "银杏1号充电区",
        "distance": '800',
        "powerTotal": '30',
        "powerUse": '18'
      },
      {
        "id": '08',
        "title": "银杏2号充电区",
        "distance": '820',
        "powerTotal": '30',
        "powerUse": '25'
      },
      {
        "id": '09',
        "title": "芙蓉1号充电区",
        "distance": '1000',
        "powerTotal": '30',
        "powerUSe": '25',
      },
      {
        "id": '10',
        "title": "芙蓉2号充电区",
        "distance": '1050',
        "powerTotal": '30',
        "powerUse": '22',
      }
    ]
  },

  onLoad: function (options) {
    setInterval(() => {
      const timeRule = '{h}:{i}:{s}' // 时间显示格式 

      // 获取当前时间戳
      const nowTimeTemp = new Date().getTime()

      // 计算四小时后的时间戳并格式化
      const endTimeObj = new Date(nowTimeTemp + 4 * 60 * 60 * 1000)
      const hours = endTimeObj.getHours().toString().padStart(2, '0')
      const minutes = endTimeObj.getMinutes().toString().padStart(2, '0')
      const seconds = endTimeObj.getSeconds().toString().padStart(2, '0')
      const endTime = timeRule.replace('{h}', hours).replace('{i}', minutes).replace('{s}', seconds)

      this.setData({
        nowTime: new Date().toLocaleTimeString(),
        endTime,
      })
    }, 5000);
    // 页面初始化 options为页面跳转所带来的参数
    var id = options.id;
    let list = this.data.lists;
    var that = this;
    list.forEach(function (arr) {
      console.log(arr.id.toString())
      console.log(id)
      if (id == arr.id) {
        that.setData({
          detailList: arr
        })
      }
    })
    console.log(this.data.detailList)
  },
  onReady: function () {

    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },
  /**
   * 扫码事件
   */
  scanBtn: function () {
    var that = this;
    wx.scanCode({
      onlyFromCamera: true,// 只允许从相机扫码
      success(res) {
        console.log("扫码成功：" + JSON.stringify(res))

        // 扫码成功后  在此处理接下来的逻辑
        that.setData({
          scanCode: res.result
        })
      }
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function (res) {
    return {
      title: '',
      desc: '',
      path: "/pages/detail/index?id="
    }
  }
})

//根据经纬度算距离
const getDistance = (latitude1, longitude1, latitude2, longitude2) => {
  const EARTH_RADIUS = 6378137 // 地球半径

  // 经纬度转弧度
  const radLat1 = latitude1 * Math.PI / 180.0
  const radLon1 = longitude1 * Math.PI / 180.0
  const radLat2 = latitude2 * Math.PI / 180.0
  const radLon2 = longitude2 * Math.PI / 180.0

  // 计算经纬度差值
  const a = radLat1 - radLat2
  const b = radLon1 - radLon2

  // 应用 Haversine 公式
  let distance = 2 * Math.asin(Math.sqrt(
    Math.pow(Math.sin(a / 2), 2) +
    Math.cos(radLat1) * Math.cos(radLat2) *
    Math.pow(Math.sin(b / 2), 2)
  )) * EARTH_RADIUS

  // 返回单位为米的距离
  return distance.toFixed(2)
}

const getLocation = () => {
  // 获取用户定位信息
  setInterval(() => {
    wx.getLocation({
      type: 'bd09ll',
      success: (res) => {
        const userLatitude = res.latitude // 用户所在经度
        const userLongitude = res.longitude // 用户所在纬度

        const newArr = [
          {
            "id": '01',
            "title": "松林1号充电区",
            "distance": '100',
            "power": '10/20'
          },
          {
            "id": '02',
            "title": "松林2号充电区",
            "distance": '150',
            "power": '13/20'
          },
          {
            "id": '03',
            "title": "香樟1号充电区",
            "distance": '270',
            "power": '12/30'
          },
          {
            "id": '04',
            "title": "香樟2号充电区",
            "distance": '300',
            "power": '7/30'
          },
          {
            "id": '05',
            "title": "珙桐1号充电区",
            "distance": '555',
            "power": '16/30'
          },
          {
            "id": '06',
            "title": "珙桐2号充电区",
            "distance": '570',
            "power": '21/30'
          },
          {
            "id": '07',
            "title": "银杏1号充电区",
            "distance": '800',
            "power": '12/30'
          },
          {
            "id": '08',
            "title": "银杏2号充电区",
            "distance": '820',
            "power": '5/30'
          },
          {
            "id": '09',
            "title": "芙蓉1号充电区",
            "distance": '1000',
            "power": '5/30'
          },
          {
            "id": '10',
            "title": "芙蓉2号充电区",
            "distance": '1050',
            "power": '8/30'
          }
        ]

        // 获取已知的经纬度信息
        const knownLocation1 = {
          latitude: 30.673400, // 纬度
          longitude: 104.152506, // 经度
        }
        const knownLocation2 = {
          latitude: 30.672311, // 纬度
          longitude: 104.152122, // 经度
        }
        const knownLocation3 = {
          latitude: 30.678402, // 纬度
          longitude: 104.155013, // 经度
        }
        const knownLocation4 = {
          latitude: 30.676134, // 纬度
          longitude: 104.155066, // 经度
        }
        const knownLocation5 = {
          latitude: 30.671667, // 纬度
          longitude: 104.147627, // 经度
        }
        const knownLocation6 = {
          latitude: 30.671729, // 纬度
          longitude: 104.149997, // 经度
        }
        const knownLocation7 = {
          latitude: 30.670925, // 纬度
          longitude: 104.145971, // 经度
        }
        const knownLocation8 = {
          latitude: 30.670009, // 纬度
          longitude: 104.144417, // 经度
        }
        const knownLocation9 = {
          latitude: 30.676889, // 纬度
          longitude: 104.144632, // 经度
        }
        const knownLocation10 = {
          latitude: 30.676045, // 纬度
          longitude: 104.141284, // 经度
        }

        // 计算两个坐标之间的距离
        newArr[0].distance = getDistance(userLatitude, userLongitude, knownLocation1.latitude, knownLocation1.longitude)

        newArr[1].distance = getDistance(userLatitude, userLongitude, knownLocation2.latitude, knownLocation2.longitude)

        newArr[2].distance = getDistance(userLatitude, userLongitude, knownLocation3.latitude, knownLocation3.longitude)

        newArr[3].distance = getDistance(userLatitude, userLongitude, knownLocation4.latitude, knownLocation4.longitude)

        newArr[4].distance = getDistance(userLatitude, userLongitude, knownLocation5.latitude, knownLocation5.longitude)

        newArr[5].distance = getDistance(userLatitude, userLongitude, knownLocation6.latitude, knownLocation6.longitude)

        newArr[6].distance = getDistance(userLatitude, userLongitude, knownLocation7.latitude, knownLocation7.longitude)

        newArr[7].distance = getDistance(userLatitude, userLongitude, knownLocation8.latitude, knownLocation8.longitude)

        newArr[8].distance = getDistance(userLatitude, userLongitude, knownLocation9.latitude, knownLocation9.longitude)

        newArr[9].distance = getDistance(userLatitude, userLongitude, knownLocation10.latitude, knownLocation10.longitude)

        // console.log('排序前' + JSON.stringify(newArr))
        // 按照 distance 字段进行排序，从近到远
        newArr.sort((a, b) => a.distance - b.distance)
        // console.log('排序后' + JSON.stringify(newArr))
        return newArr
      },
      fail: () => {
        wx.showToast({
          title: '定位失败',
          icon: 'none',
        })
      },
    })
  }, 5000);
}

module.exports = {
  getLocation
}

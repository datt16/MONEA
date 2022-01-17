export const state = () => ({
  sensors: null
})

export const getters = {
  sensors(state) {
    return state.sensors
  },
  roomViewState(state, getters, rootState, rootGetters) {
    const res = {}
    const records = rootGetters["record/currentRecordWithAllSensor"]
    const sensorData = state.sensors
    const headers = rootGetters["common/headers"]

    if (records === null) return {}
    if (sensorData === null) return {}

    const sensorList = records ? Object.keys(records).filter(key => records[key].id !== "avg") : []
    const target = "co2"

    sensorList.forEach(key => {
      const sensor = sensorData[key]
      if (sensor) {
        res[key] = {
          id: sensor.id,
          isShown: true,
          title: sensor.name,
          subTitle: headers[target].text,
          value: records ? records[key][target] : -255, // 注意: データ欠損の可能性あリ
          color: sensor.color,
          unit: headers[target].unit,
          posX: sensor.position.x,
          posY: sensor.position.y,
          description: sensor.description,
          statusCode: sensor.status.code
        }
      }
    })
    return res
  }
}

export const actions = {
  async getAllSensorData({commit}) {
    const rootRef = this.$fire.database.ref(`v1/sensors`)
    try {
      await rootRef.on('value', (snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val()
          commit('SET_SENSORS', {data})
        }
      })
    } catch (e) {
      alert(e)
    }
  }
}

export const mutations = {
  INIT(state) {
    state.sensors = []
  },
  SET_SENSORS(state, {data}) {
    state.sensors = data
  },
  SET_SENSOR_STATE(state, {key, data}) {
    state.roomViewState[key] = data
  }
}

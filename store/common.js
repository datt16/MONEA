export const state = () => ({
  currentSensor: null,
  headers: {
    co2: {
      text: '二酸化炭素濃度',
      value: 'co2',
      unit: 'ppm',
    },
    temp: {
      text: '気温',
      value: 'temp',
      unit: '℃',
    },
    humid: {
      text: '湿度',
      value: 'humid',
      unit: '%',
    },
    pressure: {
      text: '気圧',
      value: 'pressure',
      unit: 'hPa',
    },
  },
})

export const getters = {
  currentSensor(state) {
    return state.currentSensor
  },
  headers(state) {
    return state.headers
  },
}

export const mutations = {
  /**
   * @param  {String} {currentSensorId} 初期値として設定するセンサーの一意id
   * 共通状態管理ストアを初期化します。
   */
  INIT(state, { currentSensorId }) {
    state.currentSensor = currentSensorId
  },

  /**
   * @param  {String} {sensorId} 変更後のセンサーの一意id
   * 表示するセンサーを切り替えます。(historyページ用)
   */
  SET_CURRENT_SENSOR(state, { sensorId }) {
    state.currentSensor = sensorId
  },
}

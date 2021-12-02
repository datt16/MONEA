export const state = () => ({
  records: {},
})

export const getters = {
  records(state) {
    return state.records
  },
  recordKeys(state) {
    return Object.keys(state.records)
  },
}

export const actions = {
  async getRecordData({ commit }, { sensorId }) {
    const rootRef = this.$fire.database.ref(
      `v1/records/sensorId/${sensorId}/records`
    )
    try {
      await rootRef
        // .orderByChild('created')
        .limitToLast(10)
        .once('value', (snapshot) => {
          if (snapshot.exists()) {
            const data = snapshot.val()
            commit('SET_RECORD', { record: data, sensorId })
          }
        })
    } catch (e) {
      alert(e)
    }
  },
}

export const mutations = {
  // RESET_STORE: recordsストアをリセット
  RESET_STORE(state) {
    state.records = null
  },
  // SET_RECORD: RECORDをセット
  // TODO: 時間がずれていた時、どのようにして同期を行うか考える
  SET_RECORD(state, { record, sensorId }) {
    state.records = {
      ...state.records,
      [sensorId]: Object.entries(record).map(([date, value]) => ({
        ...value,
        date,
      })),
    }
  },
  // CALC_AVG: 各センサーの値から部屋全体の計測値の平均を求める
  CALC_AVG(state) {
    // TODO: 時間がずれていた時、どのようにして対応するか考える
    const avgArray = state.records.HANDSON.map((_, index) => {
      return avg(state.records.HANDSON[index], state.records.HANDSON2[index])
    })

    state.records = {
      ...state.records,
      avg: avgArray,
    }
  },
}

const avg = (data1, data2) => {
  const res = {}
  res.date = data1.date
  res.co2 = (data1.co2 + data2.co2) / 2
  res.temp = (data1.temp + data2.temp) / 2
  res.pressure = (data1.pressure + data2.pressure) / 2
  res.humid = (data1.humid + data2.humid) / 2
  return res
}

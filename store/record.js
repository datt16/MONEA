export const state = () => ({
  records: {},
  recordCnt: 18,
})

export const getters = {
  records(state) {
    return state.records
  },
  recordKeys(state) {
    return Object.keys(state.records)
  },
  currentRecord(state) {
    if (state.records.avg) {
      return state.records.avg.filter((_, i) => {
        return i >= state.recordCnt - 1
      })
    } else {
      return [
        {
          date: '0000-00-00_00:00',
          co2: -255,
          temp: -255,
          pressure: -255,
          humid: -255,
        },
      ]
    }
  },
  co2Array(state) {
    const data = state.records.avg
    return data ? data.map((x) => ({ co2: x.co2, date: x.date })) : []
  },
  recordCnt(state) {
    return state.recordCnt
  },
}

export const actions = {
  async getRecordData({ commit, state }, { sensorId }) {
    const rootRef = this.$fire.database.ref(
      `v1/records/sensorId/${sensorId}/records`
    )
    try {
      await rootRef
        // .orderByChild('created')
        .limitToLast(state.recordCnt)
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
    state.records = {}
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
    const avgArray = state.records.HANDSON.map((record, i) => {
      return calcRecordAvg(record, state.records.HANDSON[i])
    })
    state.records = {
      ...state.records,
      avg: avgArray,
    }
  },
}

const calcRecordAvg = (data1, data2) => {
  const res = {}
  res.date = data1.date
  res.co2 = (data1.co2 + data2.co2) / 2
  res.temp = (data1.temp + data2.temp) / 2
  res.pressure = (data1.pressure + data2.pressure) / 2
  res.humid = (data1.humid + data2.humid) / 2
  return res
}

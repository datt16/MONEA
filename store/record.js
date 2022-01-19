export const state = () => ({
  records: {},
  recordCnt: 18,
})

export const getters = {
  records(state) {
    return state.records ? state.records : {}
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
      return []
    }
  },

  currentRecordWithAllSensor(state, getters) {
    const list = {}
    if (state.records !== {}) {
      getters.recordKeys.forEach((key) => {
        const rec = state.records[key].filter((_, i) => {
          return i >= state.recordCnt - 1
        })
        list[key] = {...{id: key}, ...rec[0]}
      })
      return list
    } else {
      return {}
    }
  },

  heatmap(state) {
    if (state.records.avg) {
      const result = []
      let a = []
      let current = ''

      // recordsを時間ごとに分ける
      state.records.avg.forEach((rec) => {
        if (rec.date.split('_')[1].split(':')[0] !== current) {
          if (a.length !== 0) result.push(a)
          current = rec.date.split('_')[1].split(':')[0]
          a = []
          a.push(rec)
        } else {
          a.push(rec)
        }
      })
      result.push(a)

      // 欠損値処理
      const baseList = ['00', '10', '20', '30', '40', '50']
      result.map((hour) => {
        if (hour.length !== 6) {
          // 欠損値あったとき
          // どの分数が欠損しているのか探す → 欠損値を埋めた配列を生成 → 元の配列に追加して返却
          const whiteList = []
          hour.forEach((minute) => {
            whiteList.push(minute.date.split('_')[1].split(':')[1])
          })
          const blackList = baseList.filter((x) => !whiteList.includes(x))

          // 欠損値埋め
          blackList.forEach((minute) => {
            const newDate = hour[0].date.split(':')[0] + ':' + minute
            hour.push({
              date: newDate,
              co2: -255,
              temp: -255,
              pressure: -255,
              humid: -255,
            })
          })

          // compareWithRecordMinute : ソート用、recordの配列をそれぞれの分数(dateの後ろ2文字)でソート
          // a,b: record
          const compareWithRecordMinute = (a, b) => {
            if (parseInt(a.date.split(':')[1]) > parseInt(b.date.split(':')[1]))
              return 1
            else if (
              parseInt(a.date.split(':')[1]) < parseInt(b.date.split(':')[1])
            )
              return -1
            else return 0
          }

          hour.sort(compareWithRecordMinute)

          return hour
        }
        return hour
      })

      return result
    } else {
      return []
    }
  },
  co2Array(state) {
    const data = state.records.avg
    return data ? data.map((x) => ({co2: x.co2, date: x.date})) : []
  },
  recordCnt(state) {
    return state.recordCnt
  },
}

export const actions = {
  async getRecordData({commit, state}, {sensorId}) {
    const rootRef = this.$fire.database.ref(
      `v1/records/sensorId/${sensorId}/records`
    )
    try {
      await rootRef
        // .orderByChild('created')
        .limitToLast(state.recordCnt)
        .on('value', (snapshot) => {
          if (snapshot.exists()) {
            const data = snapshot.val()
            commit('SET_RECORD', {record: data, sensorId})
            // TODO: records未取得時の処理の追加
            commit('CALC_AVG', {
              dataA: state.records[Object.keys(state.records)[0]],
              dataB: state.records[Object.keys(state.records)[1]],
            })
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
  SET_RECORD(state, {record, sensorId}) {
    state.records = {
      ...state.records,
      [sensorId]: Object.entries(record).map(([date, value]) => ({
        ...value,
        date,
      })),
    }
  },
  // CALC_AVG: 各センサーの値から部屋全体の計測値の平均を求める
  CALC_AVG(state, {dataA, dataB}) {
    if (!dataA) {
      state.records = {...state.records}
      return
    }

    const avgArray = dataB ? dataA.map((record, i) => {
      return calcRecordAvg(record, dataB[i])
    }) : dataA.map((record) => {
      return calcRecordAvg(record, record)
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


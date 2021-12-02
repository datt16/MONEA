export const state = () => ({
  sensors: ['HADSON'],
  records: {},
})

export const getters = {
  records(state) {
    return state.records
  },
  sensors(state) {
    return state.sensors
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
  SET_RECORD(state, { record, sensorId }) {
    state.records = {
      ...state.records,
      [sensorId]: Object.entries(record).map(([date, value]) => ({
        ...value,
        date,
      })),
    }
  },
}

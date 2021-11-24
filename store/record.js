export const state = () => ({
  sensors: ['HADSON'],
  records: null,
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
  async getRecordData({ commit }) {
    const rootRef = this.$fire.database.ref()
    try {
      await rootRef
        .child('v1')
        .child('records')
        .child('sensorId')
        .child('HANDSON')
        .get()
        .then((snapshot) => {
          if (snapshot.exists()) {
            const data = snapshot.val()
            commit('SET_RECORD', data)
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
  // SET_USER: USERをセット
  SET_RECORD(state, record) {
    state.records = Object.entries(record.records).map(([date, value]) => ({
      ...value,
      date,
    }))
  },
}

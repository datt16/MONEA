export const state = () => ({
  sensors: ['HADSON'],
  records: null,
})

export const getters = {
  records(state) {
    return state.user
  },
  sensors(state) {
    return state.sensors
  },
}

export const actions = {
  async getRecordData({ state }) {
    // const dburl = 'v1/records/sensorId/' + state.sensors[0]
    const rootRef = this.$fire.database.ref()
    try {
      await rootRef
        .child('v1')
        .get()
        .then((snapshot) => {
          if (snapshot.exists()) {
            console.log(snapshot.val())
          } else {
            console.log('No data')
          }
        })
      // .orderByValue()
      // .limitToFirst(10)
      // .on('value', (snapshot) => {
      //   console.log("データ取得 : ", snapshot.val())
      // })
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
  SET_RECORD(state, { record }) {},
}

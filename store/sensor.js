export const state = () => ({
  sensors: null,
})

export const getters = {
  sensors(state) {
    return state.sensors
  },
}

export const actions = {
  async getAllSensorData({ commit }) {
    const rootRef = this.$fire.database.ref(`v1/sensors`)
    try {
      await rootRef.on('value', (snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val()
          commit('SET_SENSORS', { data })
        }
      })
    } catch (e) {
      alert(e)
    }
  },
}

export const mutations = {
  INIT(state) {
    state.sensors = []
  },
  SET_SENSORS(state, { data }) {
    state.sensors = data
  },
}

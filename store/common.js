export const state = () => ({
  room: null,
  currentSensor: null,
})

export const getters = {
  room(state) {
    return state.room
  },
  currentSensor(state) {
    return state.currentSensor
  },
  currentRoom(state) {}
}

export const actions = {
  async getRoomData({ commit }) {
    const ref = this.$fire.database.ref('v1/rooms/roomId/TEST_ROOM')
    try {
      await ref.once('value', (snapshot) => {
        const data = snapshot.val()
        if (snapshot.exists()) {
          commit('SET_ROOM', { data })
        }
      })
    } catch (e) {
      alert('[Action] COMMON/getRoomData\n', e)
    }
  },
}

export const mutations = {
  SET_ROOM(state, { data }) {
    state.room = data
    state.currentSensor = data.sensors[0]
  },
  SET_CURRENT_SENSOR(state, { id }) {
    state.currentSensor = id
  },
}

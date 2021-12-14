export const state = () => ({
  room: null,
  rooms: null,
  currentSensor: null,
})

export const getters = {
  room(state) {
    return state.room
  },
  room_keys(state) {
    return Object.keys(state.rooms)
  },
  currentSensor(state) {
    return state.currentSensor
  },
  currentRoom(state) {},
}

export const actions = {
  async getAllRoomsData({ commit }) {
    const rootRef = this.$fire.database.ref(`v1/rooms/roomId/`)
    try {
      await rootRef.once('value', (snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val()
          commit('SET_ROOMS', { data })
        }
      })
    } catch (e) {
      alert(e)
    }
  },
  async getRoomData({ commit }) {
    const ref = this.$fire.database.ref('v1/rooms/roomId/TEST_ROOM')
    await ref.once('value', (snapshot) => {
      const data = snapshot.val()
      if (snapshot.exists()) {
        commit('SET_ROOM', { data })
      }
    })
  },
}

export const mutations = {
  INIT(state) {
    state.currentRoom = Object.keys(state.rooms)[0]
    state.room = state.rooms[state.currentRoom]
  },
  SET_ROOM_FROM_ID(state) {
    state.room = state.rooms[state.currentRoom]
  },
  SET_ROOM(state, { data }) {
    state.room = data
    state.currentSensor = data.sensors[0]
  },
  SET_CURRENT_SENSOR(state, { id }) {
    state.currentSensor = id
  },
  SET_ROOMS(state, { data }) {
    state.rooms = data
  },
}

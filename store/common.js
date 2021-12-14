export const state = () => ({
  room: null,
  rooms: null,
  currentSensor: null,
})

export const getters = {
  room(state) {
    return state.room
  },
  rooms(state) {
    return state.rooms
  },
  room_keys(state) {
    return Object.keys(state.rooms)
  },
  currentSensor(state) {
    return state.currentSensor
  },
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
  async switchRoom({ state, commit, dispatch }, { id }) {
    commit('SWITCH_CURRENT_ROOM', { id })
    const sensors = state.room.sensors
    commit('record/RESET_STORE', null, { root: true })
    for (let i = 0; i < sensors.length; i++) {
      await dispatch(
        'record/getRecordData',
        { sensorId: sensors[i] },
        { root: true }
      )
    }
    commit('record/CALC_AVG', null, { root: true })
  },
}

export const mutations = {
  INIT(state) {
    state.currentRoom = Object.keys(state.rooms)[0]
    state.room = state.rooms[state.currentRoom]
  },
  SWITCH_CURRENT_ROOM(state, { id }) {
    state.room = state.rooms[id]
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

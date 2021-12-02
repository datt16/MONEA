export const state = () => ({
  room: null,
})

export const getters = {
  room(state) {
    return state.room
  },
}

export const actions = {
  async getRoomData({ commit }) {
    const rootRef = this.$fire.database.ref()
    try {
      await rootRef
        .child('v1')
        .child('rooms')
        .child('roomId')
        .child('TEST_ROOM') // roomIdを入力
        .get()
        .then((snapshot) => {
          const data = snapshot.val()
          commit('SET_ROOM', data)
        })
    } catch (e) {
      alert('[Action] COMMON/getRoomData\n', e)
    }
  },
}

export const mutations = {
  SET_ROOM(state, data) {
    state.room = data
  },
}

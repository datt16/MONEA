export const state = () => ({
  room: null,
  rooms: null,
  currentRoom: null,
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
}

export const actions = {
  /**
   * RDB上の部屋データを取得します。
   */
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

  /**
   * 表示する部屋情報を id で指定した部屋情報に切り替えます。
   * @param  {String} id 変更先の部屋情報データセット上の一意のid
   */
  async switchRoom({ state, commit, dispatch, _, rootGetters }, { id }) {
    // 1. 部屋情報更新
    commit('SWITCH_CURRENT_ROOM', { id })

    // 2.1. 部屋情報に登録されているセンサーのidで計測データを設定し直し
    const sensors = state.room.sensors
    commit('record/RESET_STORE', null, { root: true })
    for (let i = 0; i < sensors.length; i++) {
      await dispatch(
        'record/getRecordData',
        { sensorId: sensors[i] },
        { root: true }
      )
    }

    // 2.2. 設定し直された計測データを元に平均値を求める
    const data = rootGetters['record/records']
    commit(
      'record/CALC_AVG',
      { dataA: data[0], dataB: data[1] },
      { root: true }
    )

    // 3. 部屋情報に登録されているセンサーのデータを取得 -> 反映
    commit('sensor/INIT', {}, { root: true })
    await dispatch('sensor/getAllSensorData', null, { root: true })
  },
}

export const mutations = {
  /**
   * 部屋情報に関連する状態を初期化します。
   */
  INIT(state) {
    state.currentRoom = Object.keys(state.rooms)[0]
    state.room = state.rooms[state.currentRoom]
    state.currentSensor = state.room.sensors[0]
  },

  /**
   * @param  {String} {id} 変更先の部屋情報データセット上の一意のid
   * id で指定された部屋情報への切り替えを適用します。
   */
  SWITCH_CURRENT_ROOM(state, { id }) {
    state.room = state.rooms[id]
    state.currentSensor = state.room.sensors[0]
  },

  /**
   * @param  {Array} {data} 部屋情報のデータセット
   * ストア上の部屋情報のデータセットを引数で指定された値で更新します。
   */
  SET_ROOMS(state, { data }) {
    state.rooms = data
  },
}

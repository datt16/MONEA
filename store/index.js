export const actions = {
  nuxtClientInit: async (context) => {
    // 部屋とセンサーの情報取ってくる
    await context.dispatch('common/getAllRoomsData')
    await context.dispatch('sensor/getAllSensorData')

    // 部屋情報の初期化、配列の0番目のセンサーをセットする。
    context.commit('common/INIT')

    // センサーのキーを取ってくる
    const roomSensorKeys = context.getters['common/room'].sensors

    // 部屋の中にあるセンサーの計測値データを取ってくる
    // await使うために通常for
    for (let i = 0; i < roomSensorKeys.length; i++) {
      await context.dispatch('record/getRecordData', {
        sensorId: roomSensorKeys[i],
      })
    }
  },
}

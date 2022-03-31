export const actions = {
  nuxtClientInit: async (context) => {
    // 部屋とセンサーの情報取ってくる
    await context.dispatch('room/getAllRoomsData')
    await context.dispatch('sensor/getAllSensorData')

    // 部屋情報の初期化
    context.commit('room/INIT')

    // センサー情報を部屋に設定してあるセンサーの情報で初期化
    const roomSensors = context.getters['room/room'].sensors
    context.commit('common/INIT', { currentSensorId: roomSensors[0] })

    // 部屋の中にあるセンサーの計測値データを取ってくる
    // await使うために通常for
    for (let i = 0; i < roomSensors.length; i++) {
      await context.dispatch('record/getRecordData', {
        sensorId: roomSensors[i],
      })
    }
  },
}

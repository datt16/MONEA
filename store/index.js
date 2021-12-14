export const actions = {
  nuxtClientInit: async (context) => {
    // 部屋の情報取ってくる
    // await context.dispatch('common/getRoomData')
    await context.dispatch('common/getAllRoomsData')

    context.commit('common/INIT')

    // センサーの値取ってくる
    const sensors = context.getters['common/room'].sensors

    for (let i = 0; i < sensors.length; i++) {
      await context.dispatch('record/getRecordData', { sensorId: sensors[i] })
    }
    context.commit('record/CALC_AVG')
  },
}

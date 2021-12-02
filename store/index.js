export const actions = {
  nuxtClientInit: async (context) => {
    // 部屋の情報取ってくる
    await context.dispatch('common/getRoomData')

    // センサーの値取ってくる
    const sensors = context.getters['common/room'].sensors
    await sensors.map((sensor) =>
      context.dispatch('record/getRecordData', { sensorId: sensor })
    )
  },
}

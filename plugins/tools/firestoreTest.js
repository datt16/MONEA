export default (context, inject) => {
  const setSampleData = () => {
    // const db = context.app.$fireModule.firestore()
    //   let dbUsers = db.collection('users')
    //   dbUsers.add({}).then((ref) => {
    //     console.log('Add ID: ', ref.id)
    //   })
    const user = context.app.store.getters['auth/user']
    if (!user) {
      console.warn('not login')
      return
    }

    const ref = context.app.$fire.firestore.collection('users').doc(user.uid)

    ref.set({
      name: user.displayName,
      isAdmin: false,
      rooms: ['SAMPLE_ROOM1'],
      lastUse: context.app.$fireModule.firestore.Timestamp.fromDate(new Date()),
    }).then((res) => {
      console.log("Add user :", res)
    })
  }

  inject('setSample', setSampleData)
}

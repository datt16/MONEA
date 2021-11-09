export const state = () => ({
  user: null,
})

export const getters = {
  isAuthenticated(state) {
    return !!state.user
  },
}

export const mutations = {
  setUser(state, { authUser }) {
    console.info('[Ready] Go')
    if (!authUser) {
      state.user = null
    } else {
      const { uid, email, emailVerified } = authUser
      state.user = { uid, email, emailVerified }
    }
  },
}

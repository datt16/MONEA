export const state = () => ({
  user: null,
})

export const getters = {
  user(state) {
    return state.user
  },
  isAuthenticated(state) {
    return !!state.user
  },
}

export const actions = {
  async onAuthStateChanged({ commit }, { authUser, claims }) {
    if (!authUser) {
      // ログアウトしたらページ遷移します
      await this.$router.push('/login')
      commit('RESET_STORE')
      return
    }

    if (authUser && claims) {
      try {
        // ログインしたらページ遷移します
        await this.$router.push('/')
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e)
      }
    }

    commit('SET_USER', { authUser, claims })
  },
}

export const mutations = {
  RESET_STORE(state) {
    // user を空にするやつ
    state.user = null
  },
  SET_USER(state, { authUser }) {
    if (!authUser) {
      state.user = null
    } else {
      const { uid, email, emailVerified, displayName } = authUser
      state.user = { uid, email, emailVerified, displayName }
    }
  },
}

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
  // onAuthStateChanged: ログイン状態が変わったとき
  onAuthStateChanged({ commit }, { authUser, claims }) {
    // ログアウト時
    if (!authUser) {
      console.log("!authUser")
      commit('RESET_STORE') // ストア初期化
      if (this.$router.path !== '/') {
        this.$router.push('/')
      }
      return
    }

    // ログイン時
    if (authUser && claims) {
      console.log('authUser')
      if (this.$router.path !== '/') {
        this.$router.push('/')
      }
    }

    commit('SET_USER', { authUser, claims })
  },
}

export const mutations = {
  // RESET_STORE: authストアをリセット
  RESET_STORE(state) {
    state.user = null
  },
  // SET_USER: USERをセット
  SET_USER(state, { authUser }) {
    if (!authUser) {
      state.user = null
    } else {
      const { uid, email, emailVerified, displayName } = authUser
      state.user = { uid, email, emailVerified, displayName }
    }
  },
}

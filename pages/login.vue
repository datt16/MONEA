<template>
  <v-btn @click="act">{{ isAuth ? 'ログアウト' : 'ログイン' }}</v-btn>
</template>

<script>
export default {
  computed: {
    isAuth() {
      return this.$store.getters['auth/isAuthenticated']
    },
  },
  methods: {
    act() {
      if (this.isAuth) {
        this.$signOut()
      } else {
        this.$signInWithGoogle()
      }
    },
  },
}
</script>

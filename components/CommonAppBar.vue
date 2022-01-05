<template>
  <v-app-bar app flat height="70">
    <div class="d-flex align-center">
      <span class="mr-2 text-h6 font-weight-bold">{{ title }}</span>
    </div>

    <v-spacer></v-spacer>

  </v-app-bar>
</template>

<script>
export default {
  props: {
    title: {
      default: 'ホーム',
      type: String,
    },
  },
  computed: {
    isAuth() {
      return this.$store.getters['auth/isAuthenticated']
    },
    user() {
      return this.$store.getters['auth/user']
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

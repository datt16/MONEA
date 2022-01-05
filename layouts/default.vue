<template>
  <v-app>
    <common-app-bar />
    <v-main>
      <v-container>
<!--      <common-room-switcher />-->
        <Nuxt />
      </v-container>
    </v-main>

    <common-bottom-navigation />
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      title: 'Vuetify.js',
      nav: 1,
    }
  },
  // middleware: 'auth',
}
</script>

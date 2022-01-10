<template>
  <v-app>
    <common-app-bar :title="currentPageTitle"/>
    <v-main>
      <v-container fluid>
        <v-slide-x-transition>
          <Nuxt/>
        </v-slide-x-transition>
      </v-container>
    </v-main>

    <common-bottom-navigation @navigate="currentPageTitle = $event"/>
  </v-app>
</template>

<script>
export default {
  name: "DefaultLayout",
  data: () => ({
    currentPageTitle: "ホーム"
  }),
  methods: {
    switchSensor(id) {
      this.$store.dispatch('common/switchRoom', {id})
    },
  },
}
</script>

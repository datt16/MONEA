<template>
  <v-app>
    <common-app-bar :title="currentPageTitle"/>
    <v-main>
      <v-container>
        <common-room-switcher/>
        <Nuxt/>
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

}
</script>

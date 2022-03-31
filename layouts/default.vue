<template>
  <v-app>
    <common-app-bar :title="currentPageTitle" />

    <v-main>
      <v-container>
        <v-slide-x-transition>
          <Nuxt />
        </v-slide-x-transition>
      </v-container>
    </v-main>

    <common-bottom-navigation @navigate="currentPageTitle = $event" />
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data: () => ({
    currentPageTitle: 'ホーム',
  }),
}
</script>

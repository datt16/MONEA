<template>
  <v-app>
    <v-app-bar app color="transparent" flat height="80">
      <div class="d-flex align-center">
        <span class="mr-2 text-h6">換気状況</span>
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">build:2021/10/04 9:22</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container>
        <div id="room-switcher" class="pb-3">
          <div class="text-h5">4J教室</div>
        </div>
        <router-view />
      </v-container>
    </v-main>
    <bottom-nav />
  </v-app>
</template>

<script>
import bottomNav from '@/components/bottomNavigation.vue'

export default {
  name: 'App',
  components: { bottomNav },

  data: () => ({}),
}
</script>

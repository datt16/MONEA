<template>
  <v-app>
    <v-app-bar app color="white" flat height="90">
      <div class="d-flex align-center">
        <span class="mr-2 text-h6 font-weight-bold">換気状況</span>
      </div>

      <v-spacer></v-spacer>

      <v-btn color="blue lighten-5" depressed>
        <span class="mr-2">build:2021/10/04 9:22</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container>
        <div id="room-switcher" class="pb-3">
          <div class="text-h5 ml-3">4J教室</div>
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

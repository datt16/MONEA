<template>
  <v-app>
    <v-app-bar app color="white" flat height="90">
      <div class="d-flex align-center">
        <span class="mr-2 text-h6 font-weight-bold">換気状況</span>
      </div>

      <v-spacer></v-spacer>

      <v-avatar color="primary" size="36">
        <v-icon dark> mdi-account-circle </v-icon>
      </v-avatar>
    </v-app-bar>

    <v-main>
      <v-container>
        <div id="room-switcher" class="pb-3">
          <room-switcher />
        </div>
        <router-view />
      </v-container>
    </v-main>
    <bottom-nav />
  </v-app>
</template>

<script>
import bottomNav from '@/components/bottomNavigation.vue'
import roomSwitcher from '@/components/RoomSwitcher.vue'

export default {
  name: 'App',
  components: { bottomNav, roomSwitcher },

  data: () => ({}),
}
</script>

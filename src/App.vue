<template>
  <v-app>
    <appBar :title="pageName" />
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
import bottomNav from '@/components/BottomNavigation.vue'
import roomSwitcher from '@/components/RoomSwitcher.vue'
import appBar from '@/components/AppBar.vue'

export default {
  name: 'App',
  components: { bottomNav, roomSwitcher, appBar },

  data: () => ({
    pageName: '換気状況',
  }),
}
</script>

<template>
  <div id="bottomNavigation">
    <v-bottom-navigation :value="nav" color="primary" grow fixed shift>
      <v-btn to="/history" icon style="height: 100%">
        <span>History</span>
        <v-icon>mdi-history</v-icon>
      </v-btn>

      <v-btn to="/" icon style="height: 100%">
        <span>Home</span>
        <v-icon>mdi-home</v-icon>
      </v-btn>

      <v-btn to="/actions" icon style="height: 100%">
        <span>Actions</span>

        <v-icon>mdi-menu</v-icon>
      </v-btn>

      <v-btn to="/heatmap" icon style="height: 100%">
        <span>Actions</span>

        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </div>
</template>

<script>
export default {
  name: 'bottomNavigation',
  props: {
    nav: {
      default: 1,
      type: Number,
    },
  },
}
</script>

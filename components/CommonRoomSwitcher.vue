<template>
  <v-toolbar flat>
    <v-menu offset-y>
      <template #activator="{ on, attrs }">
        <v-btn
          depressed
          color="transparent"
          class="pa-0"
          v-bind="attrs"
          v-on="on"
        >
          <div class="text-h5">
            {{ roomData ? roomData.name : '4J教室' }}
          </div>
          <v-icon>mdi-menu-down</v-icon>
        </v-btn>
      </template>
      <v-list dense dark>
        <v-list-item link>
          <v-icon left dense>mdi-home</v-icon>
          <v-list-item-content>
            <v-list-item-title> 4J教室 </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-icon left dense>mdi-sync</v-icon>
          <v-list-item-content>
            <v-list-item-title> [DEBUG] common/getRoomData </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-menu>
    <v-spacer />
  </v-toolbar>
</template>

<script>
export default {
  computed: {
    roomData() {
      const data = this.$store.getters['common/room']
      return data
    },
  },
  methods: {},
}
</script>

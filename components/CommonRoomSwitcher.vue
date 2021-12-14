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
      <v-list v-for="(item, i) in rooms" :key="i" dense dark>
        <v-list-item link @click="switchSensor(item.id)">
          <v-icon left dense>mdi-home</v-icon>
          <v-list-item-content>
            <v-list-item-title> {{ item.name }} </v-list-item-title>
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
    rooms() {
      const allRoom = this.$store.getters['common/rooms']
      return allRoom
    },
  },
  methods: {
    switchSensor(id) {
      this.$store.dispatch('common/switchRoom', { id })
    },
  },
}
</script>

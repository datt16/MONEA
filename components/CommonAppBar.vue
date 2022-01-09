<template>
  <v-app-bar app flat height="70">

    <div class="d-flex align-center">
      <span class="mr-2 text-h6 font-weight-bold">{{ title }}</span>
    </div>

    <v-menu offset-y>
      <template #activator="{on, attr}">
        <v-btn depressed v-bind="attr" v-on="on">
          {{ roomData ? roomData.name : '4J教室' }}
          <v-icon>mdi-menu-down</v-icon>
        </v-btn>
      </template>
      <v-list v-for="(item, i) in rooms" :key="i" dense dark>
        <v-list-item link @click="switchSensor(item.id)">
          <v-icon left dense>mdi-home</v-icon>
          <v-list-item-content>
            <v-list-item-title> {{ item.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-menu>

    <v-spacer></v-spacer>

  </v-app-bar>
</template>

<script>
export default {
  props: {
    title: {
      default: 'ホーム',
      type: String,
    },
  },
  computed: {
    roomData() {
      return this.$store.getters['common/room']
    },
    rooms() {
      return this.$store.getters['common/rooms']
    },
  },
  methods: {
    switchSensor(id) {
      this.$store.dispatch('common/switchRoom', {id})
    },
  },
}
</script>

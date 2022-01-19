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

      <v-list dense dark>
        <v-subheader>モニタリング中の部屋</v-subheader>
        <v-list-item v-for="(item, i) in rooms" :key="i" link @click="switchSensor(item.id)">
          <v-icon left dense>mdi-home</v-icon>
          <v-list-item-content>
            <v-list-item-title> {{ item.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider/>
        <v-subheader>試験的機能</v-subheader>
        <v-list-item link to="/signage">
          <v-icon left dense color="blue">mdi-view-dashboard-variant</v-icon>
          <v-list-item-content>
            <v-list-item-title class="blue--text">サイネージモード</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

      </v-list>
    </v-menu>

    <v-spacer></v-spacer>

    <v-btn color="cyan darken-2" depressed dark link href="https://forms.office.com/r/Y0j5b1400H" target="_blank">
      アンケート
    </v-btn>

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
      this.$router.replace('/')
    },
  },
}
</script>

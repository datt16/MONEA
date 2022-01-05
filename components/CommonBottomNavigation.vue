<template>
  <v-bottom-navigation v-model="current" color="primary" grow fixed shift>
    <v-btn
      v-for="nav in navigation"
      :key="nav.id"
      :to="nav.link"
      style="height: 100%"
      @click="navigate(nav.id)"
    >
      <span>{{ nav.title }}</span>
      <v-icon v-text="nav.icon"></v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
const navigation = {
  history: {
    id: "history",
    link: "/history",
    icon: "mdi-history",
    title: "過去の計測データ"
  },
  home: {
    id: "home",
    link: "/",
    icon: "mdi-home",
    title: "ホーム"
  },
  actions: {
    id: "actions",
    link: "/actions",
    icon: "mdi-menu",
    title: "操作"
  },
}

export default {
  data: () => ({
    current: "home"
  }),

  computed: {
    navigation() {
      return navigation
    }
  },

  methods: {
    navigate(to) {
      this.$emit("navigate", this.navigation[to].title)
    }
  },
}
</script>

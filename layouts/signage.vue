<template>
  <v-app>
    <v-app-bar app color="transparent" flat>
      <v-toolbar-title>
        <span class="font-weight-bold">MONEA</span>
        <span class="text-caption">複数台センサー対応型モニタリングシステム</span>
      </v-toolbar-title>
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <Nuxt/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "SignageLayout",
  data: () => ({}),
  methods: {},
}
</script>

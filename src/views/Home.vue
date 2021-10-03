<template>
  <div id="home">
    <div id="room-switcher" class="d-flex pa-3">
      <div class="text-h5">4J教室</div>
    </div>
    <div class="px-3 pb-3">
      <v-card min-width="350px" min-height="200px" color="grey"></v-card>
    </div>

    <div class="px-3">
      <v-row no-gutters>
        <v-col xs="6" class="pr-3">
          <v-card min-width="100px" min-height="100px" color="grey"></v-card>
        </v-col>
        <v-col xs="6">
          <v-card min-width="100px" min-height="100px" color="grey"></v-card>
        </v-col>
      </v-row>
      <v-row no-gutters class="pt-3">
        <v-col xs="6" class="pr-3">
          <v-card min-width="100px" min-height="100px" color="grey"></v-card>
        </v-col>
        <v-col xs="6">
          <v-card min-width="100px" min-height="100px" color="grey"></v-card>
        </v-col>
      </v-row>
    </div>

    <div class="pa-3">
      <v-card min-width="350px" min-height="200px" color="grey"></v-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {},
}
</script>

<template>
  <div id="home">
    <v-row no-gutters>
      <v-card min-width="350px" min-height="200px" color="grey"></v-card>
    </v-row>

    <v-row dense>
      <v-col cols="6">
        <v-card min-height="100px" color="grey"></v-card>
      </v-col>
      <v-col cols="6">
        <v-card min-height="100px" color="grey"></v-card>
      </v-col>
      <v-col cols="6">
        <v-card min-height="100px" color="grey"></v-card>
      </v-col>
      <v-col cols="6">
        <v-card min-height="100px" color="grey"></v-card>
      </v-col>
    </v-row>

    <div class="py-2">
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

<template>
  <div id="home">
    <v-row no-gutters>
      <v-col cols="12">
        <air-status-view />
      </v-col>
    </v-row>

    <v-row dense>
      <v-col cols="6" md="3">
        <value-view />
      </v-col>
      <v-col cols="6" md="3">
        <v-card min-height="100px" color="grey"></v-card>
      </v-col>
      <v-col cols="6" md="3">
        <v-card min-height="100px" color="grey"></v-card>
      </v-col>
      <v-col cols="6" md="3">
        <v-card min-height="100px" color="grey"></v-card>
      </v-col>
    </v-row>

    <v-row class="py-2" no-gutters>
      <v-col cols="12">
        <chart-view />
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {}
</script>

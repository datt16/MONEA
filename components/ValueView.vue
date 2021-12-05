<template>
  <v-card min-height="100px" outlined>
    <v-col>    
      <p class="text-h7 text-center"><v-icon small>mdi-cloud-outline</v-icon>二酸化炭素濃度</p>
      <strong class="text-h3 font-weight-bold display-" >{{ sensorppm }}</strong>
      <strong class="text-h5">ppm</strong>
    </v-col>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    sensorppm: '440',
  }),
}
</script>

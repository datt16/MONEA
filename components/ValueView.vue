<template>
  <v-card min-height="100px" outlined>
    <p class="text-h7">二酸化炭素濃度(ppm)</p>
    <center>
      <p class="text-h2">{{ sensorppm }}</p>
    </center>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    sensorppm: '440',
  }),
}
</script>

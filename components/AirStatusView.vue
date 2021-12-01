<template>
  <v-card outlined min-width="350px">
    <v-card-title>
      <v-icon size="36" color="success" class="pr-3 py-2">mdi-check</v-icon>
      <span class="text-h6 font-weight-bold"> 適切に換気されています </span>
    </v-card-title>
    <v-card-text>
      <v-row dense>
        <v-col align-center="stretch">
          <v-icon size="12" color="success" class="pr-1">mdi-circle</v-icon>
          <span class="text-subtitle text-center">平均CO2濃度 600未満 </span>
        </v-col>
      </v-row>
      <v-row dense>
        <v-col align-center="stretch">
          <v-icon size="12" color="success" class="pr-1">mdi-circle</v-icon>
          <span class="text-subtitle text-center">センサー正常稼働中</span>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      ventilation: 0,
      sensor: 4,
      average: 500,
    }
  },
}
</script>

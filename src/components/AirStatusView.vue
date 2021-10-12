<template>
  <div id="air-status-view">
    <v-card tile min-width="350px" min-height="200px" color="white">
        <v-card-title class="text-h5 justify-center">
            適切に換気されています。
        </v-card-title>    
        <v-card-text>
          4/4 センサー異常なし
        </v-card-text>
        <v-card-text >
          平均CO2濃度 600未満
        </v-card-text>
    </v-card>
  </div>
</template>



<script>
export default {
  name: 'AirStatusView',
}
</script>



<template>
  <div id="air-status-view">
    <v-card tile min-width="350px" min-height="200px" color="white">
        <v-card-title v-if="ventilation = 1" class="text-h5 justify-center">
          適切に換気されています。
        </v-card-title>    
        <v-card-title v-else class="text-h5 justify-center">
          換気が必要です。
        </v-card-title> 

        <v-card-text v-if="sensor === 4" class="justify-center">
          4/4 センサー異常なし
        </v-card-text>
        <v-card-text v-else-if="sensor === 3" class="justify-center">
          3/4 センサー異常あり
        </v-card-text>
        <v-card-text v-else-if="sensor === 2" class="justify-center">
          2/4 センサー異常あり
        </v-card-text>
        <v-card-text v-else-if="sensor === 1" class="justify-center">
          1/4 センサー異常あり
        </v-card-text>
        <v-card-text v-else class="justify-center">
          0/4 センサー異常あり
        </v-card-text>

        <v-card-text v-if="average < 600" class="justify-center">
          平均CO2濃度 600未満
        </v-card-text>
        <v-card-text v-else class="justify-center">
          平均CO2濃度 600以上
        </v-card-text>

    </v-card>
  </div>
</template>

<script>
export default {
  name: 'AirStatusView',
  data(){
    return{
      ventilation:0,
      sensor:1,
      avarage:500
    }
  }
}


</script>


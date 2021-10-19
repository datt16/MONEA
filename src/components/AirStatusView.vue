<template>
  <div id="air-status-view">
    <v-card tile min-width="350px" min-height="200px" color="white">
        <v-card-title v-if="ventilation === 1" class="text-h5 text-center">
          適切に換気されています。
        </v-card-title>    
        <v-card-title v-else class="text-h5 text-center">
          換気が必要です。
        </v-card-title> 

        <p v-if="sensor === 4" class="text-subtitle-1 text-center">
          4/4 センサー異常なし
        </p>
        <p v-else-if="sensor === 3" class="text-subtitle-1 text-center">
          3/4 センサー異常あり
        </p>
        <p v-else-if="sensor === 2" class="text-subtitle-1text-center">
          2/4 センサー異常あり
        </p>
        <p v-else-if="sensor === 1" class="text-subtitle-1 text-center">
          1/4 センサー異常あり
        </p>
        <p v-else class="text-subtitle-1 text-center">
          0/4 センサー異常あり
        </p>

        <p v-if="average < 600" class="text-subtitle-1 text-center">
          平均CO2濃度 600未満
        </p>
        <p v-else class="text-subtitle-1 text-center">
          平均CO2濃度 600以上
        </p>

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
      avarage:500,
    }
  }
}


</script>


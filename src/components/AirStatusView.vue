<template>
  <div id="air-status-view">
    <v-card tile min-width="350px" min-height="200px" color="white">
      <div v-if="ventilation === 1">
        <div  class="pa-5 align-center">
          <v-icon color="LIME">mdi-Check-Bold</v-icon>
          <div  class="my-4">
            <p class="text-h5 text-center">適切に換気されています</p>  
          </div>  
        </div>
      </div>
      <div v-else>
        <div class="pa-5 align-center">
          <v-icon large color="LIME">mdi-Check-Bold</v-icon>
          <div class="my-4">
            <p class="text-h5 text-center">換気が必要です</p> 
          </div>
        </div>
      </div>
        
        <p v-if="sensor === 4" class="text-subtitle-1 text-center my-4">
          4/4 センサー異常なし
        </p>
        <p v-else-if="sensor === 3" class="text-subtitle-1 text-center my-4">
          3/4 センサー異常あり
        </p>
        <p v-else-if="sensor === 2" class="text-subtitle-1text-center my-4">
          2/4 センサー異常あり
        </p>
        <p v-else-if="sensor === 1" class="text-subtitle-1 text-center my-4">
          1/4 センサー異常あり
        </p>
        <p v-else class="text-subtitle-1 text-center my-4">
          0/4 センサー異常あり
        </p>

        
        <p v-if="average >= 600" class="text-subtitle-1 text-center my-4">
          平均CO2濃度 600以上
        </p>
        <p v-else class="text-subtitle-1 text-center my-4">
          平均CO2濃度 600未満
        </p>

    </v-card>
  </div>
</template>

<script>
export default {
  name: 'AirStatusView',
  data(){
    return{
      ventilation:1,
      sensor:1,
      avarage:500,
    }
  }
}

</script>
<style>

</style>



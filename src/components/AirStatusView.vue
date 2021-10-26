<template>
  <div id="air-status-view">
    <v-card tile min-width="350px" min-height="200px" color="white">
      <div v-if="ventilation === 1">
          <div  class="pt-3">
            <p class="text-h5 text-center font-weight-bold">適切に換気されています</p>  
          </div>  
      </div>
      <div v-else>
          <div class="pt-3">
            <p class="text-h5 text-center font-weight-bold">換気が必要です</p> 
          </div>
      </div>
        
      <div v-if="sensor === 4">
        <div>
          <div class="my-2">
            <p  class="text-subtitle-1 text-center">
              4/4  センサー異常なし
            </p>
          </div> 
        </div>
      </div>
      <div v-else-if="sensor === 3">
        <div>
          <div class="my-2">
            <p  class="text-subtitle-1 text-center">
              3/4  センサー異常あり
            </p>
          </div>
        </div>
      </div>
      <div v-else-if="sensor === 2">
        <div>
          <div class="my-2">
            <p  class="text-subtitle-1 text-center">
              2/4  センサー異常あり
            </p>
          </div>
        </div>
      </div>
      <div v-else-if="sensor === 1">
        <div>
          <div class="my-2">
            <p  class="text-subtitle-1 text-center">
              1/4  センサー異常あり
            </p>
          </div>
        </div>
      </div>
      <div v-else>
        <div>
          <div class="my-2">
            <p  class="text-subtitle-1 text-center">
              0/4  センサー異常あり
            </p>
          </div>
        </div>
      </div>

      <div v-if="average >=600">
        <div>
          <div class="pb-3">
            <p class="text-subtitle-1 text-center">
              平均CO2濃度  600以上
            </p>
          </div>
        </div>
      </div>
      <div v-else>
        <div>
          <div class="pb-3">
            <p class="text-subtitle-1 text-center">
              平均CO2濃度  600未満
            </p>
          </div>
        </div>
      </div>

    </v-card>
  </div>
</template>

<script>
export default {
  name: 'AirStatusView',
  data(){
    return{
      ventilation:0,
      sensor:4,
      avarage:500,
    }
  }
}

</script>
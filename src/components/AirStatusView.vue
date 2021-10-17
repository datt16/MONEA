<template>
  <div id="air-status-view">
    <v-card tile min-width="350px" min-height="200px" color="white">
        <v-card-title class="text-h4 justify-center mx-auto">
          適切に換気されています。
        </v-card-title>    
        <v-card-text class="text-h6 justify-center mx-auto">
          4/4 センサー異常なし
        </v-card-text>
        <v-card-text class="text-h6 justify-center mx-auto">
          平均CO2濃度 600未満
        </v-card-text>

        <v-card-actions>
          <v-btn icon@click="show = !show">
            <v-icon>
              {{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
          </v-btn>
        </v-card-actions>

      <v-expand-transition>
       <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          センサー配置図
        </v-card-text>
        <v-card-text>
          HELP
        </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'AirStatusView'
}
</script>


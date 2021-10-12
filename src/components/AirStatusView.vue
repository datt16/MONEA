<template>
  <div id="air-status-view">
    <v-card tile min-width="350px" min-height="200px" color="white">
      <v-list-item three-line>
        <v-list-item-content>
          <v-list-item-title class="title">
            適切に換気されています。
          </v-list-item-title>    
        </v-list-item-content>  
        <v-list-item-subtitle>
          4/4 センサー異常なし
        </v-list-item-subtitle>
        <v-list-item-subtitle>
          平均CO2濃度 600未満
        </v-list-item-subtitle>
      </v-list-item>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'AirStatusView',
}
</script>


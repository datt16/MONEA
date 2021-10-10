<template>
  <div id="air-status-view">
    <v-card tile min-width="350px" min-height="200px" color="white">
      <v-list-item three-line>
        <v-list-item-content>
          <v-list-item-title class="text-h5 mb-1">
            適切に換気されています。
          </v-list-item-title>    
        </v-list-item-content>      
      </v-list-item>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'AirStatusView',
}
</script>


<template>
  <div id="value-view">
    <v-card min-height="100px" outlined>
      <p class="text-h7">二酸化炭素濃度(ppm)</p>
      <center>
      <p class="text-h2">{{ sensorppm }}</p>
      </center>    
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'ValueView',
  data: ()=>({
    sensorppm:'440'
  })
}
</script>

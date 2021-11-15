<template>
  <div id="chart-view">
    <v-card min-width="350px" min-height="200px" outline>
      <v-card-text 
      class="text-center text-h5 black--text"
      >
        二酸化炭素濃度の推移
      </v-card-text>
      <v-sheet
        class="v-sheet--offset mx-auto"
        color="white"
        elevation="12"
        max-width="calc(100% - 32px)"
      >
        <v-sparkline 
          :labels="labels"
          class="body-2"
          color="black"
          :value="value"
          :gradient="gradient"
          :smooth="radius || false"
          :padding="padding"
          :line-width="width"
          :stroke-linecap="lineCap"
          :gradient-direction="gradientDirection"
          :fill="fill"
          :type="type"
          :auto-line-width="autoLineWidth"
          auto-draw
        >
        </v-sparkline>
      </v-sheet>

      <v-card-text class="pt-0">
       <div class="text-body-2 greydarken-1--text">
        <v-icon small>
          mdi-clock
        </v-icon>          
         過去00分間の推移を表示（00分間隔）
       </div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
const gradients = [
  ['#222'],
  ['#42b3f4'],
  ['red', 'orange', 'yellow'],
  ['darkblue','aquamarine'],
  ['#00c6ff', '#F0F', '#FF0'],
  ['#f72047', '#ffd200', '#1feaea'],
]

export default {
  name: 'ChartView',
  data: () => ({
    width: 2,
    radius: 0,
    padding: 13,
    lineCap: 'round',
    gradient: gradients[3],
    labels: ['00:00','00:00','00:00','00:00','00:00','00:00','00:00','00:00','00:00',],
    value: [390,340,350,370,390,400,450,390,440],
    gradientDirection: 'top',
    gradients,
    fill: false,
    type: 'trend',
    autoLineWidth: false,
  }),
}
</script>

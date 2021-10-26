<template>
  <div id="chart-view">
    <v-card min-width="350px" min-height="200px" outline>
      二酸化炭素濃度の推移
      <v-sparkline
        :labels="labels"
        class="text-h3"
        color="white"
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
    </v-card>
  </div>
</template>

<script>
const gradients = [
  ['#222'],
  ['#42b3f4'],
  ['red', 'orange', 'yellow'],
  ['purple', 'violet'],
  ['#00c6ff', '#F0F', '#FF0'],
  ['#f72047', '#ffd200', '#1feaea'],
]
export default {
  name: 'ChartView',
  data: () => ({
    width: 2,
    radius: 0,
    padding: 3,
    lineCap: 'round',
    gradient: gradients[5],
    labels: [
      '00:00',
      '02:00',
      '04:00',
      '06:00',
      '08:00',
      '10:00',
      '12:00',
      '14:00',
      '16:00',
      '18:00',
      '20:00',
      '22:00',
    ],
    value: [0, 2, 5, 9, 3, 10, 3, 5, 0, 0, 1, 8],
    gradientDirection: 'top',
    gradients,
    fill: false,
    type: 'trend',
    autoLineWidth: false,
  }),
}
</script>

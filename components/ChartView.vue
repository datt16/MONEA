<template>
  <div id="chart-view">
    <v-card min-width="350px" min-height="200px" outlined>
      <v-card-text class="text-center text-h6 black--text">
        二酸化炭素濃度の推移
      </v-card-text>
      <v-sheet
        class="v-sheet--offset mx-auto"
        color="white"
        elevation="0"
        max-width="calc(100% - 32px)"
      >
        <v-sparkline
          class="body-2"
          color="black"
          :value="value"
          :labels="labels"
          :gradient="gradient"
          :padding="padding"
          :line-width="width"
          :stroke-linecap="lineCap"
          :gradient-direction="gradientDirection"
          :auto-line-width="autoLineWidth"
          auto-draw
        >
          <template #label="label">
            {{ label.value }}
          </template>
        </v-sparkline>
      </v-sheet>

      <v-card-text class="pt-0">
        <div class="text-body-2 grey--text text--darken-2">
          <v-icon small> mdi-clock </v-icon>
          過去{{ records.length * 10 }}分間の推移を表示（10分間隔）
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
  ['darkblue', 'aquamarine'],
  ['#00c6ff', '#F0F', '#FF0'],
  ['#f72047', '#ffd200', '#1feaea'],
]

export default {
  name: 'ChartView',
  props: {
    records: {
      type: Array,
      default: () => [],
    },
  },
  data: () => ({
    width: 2,
    radius: 0,
    padding: 13,
    lineCap: 'round',
    gradient: gradients[3],
    gradientDirection: 'top',
    gradients,
    fill: false,
    type: 'trend',
    autoLineWidth: false,
  }),
  computed: {
    labels() {
      return this.records.map((x, i) => {
        if (i === this.records.length - 1) return x.date.substr(-5)
        if (i % 6 === 0) {
          return x.date.substr(-5)
        } else {
          return ' '
        }
      })
    },
    value() {
      return this.records.map((x) => x.co2)
    },
  },
}
</script>

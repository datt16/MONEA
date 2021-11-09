<template>
  <div id="history">
    <v-row no-gutters>
      <v-col cols="12">
        <div class="example">
          <no-ssr>
            <apexchart
              width="350"
              height="600"
              type="heatmap"
              :options="chartOptions"
              :series="series"
            >
            </apexchart>
          </no-ssr>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'Heatmap',
  data: function () {
    return {
      chartOptions: {
        dataLabels: {
          enabled: false,
        },
        colors: ["'#008FFB'"],
        xaxis: {
          type: 'category',
        },
        title: {
          text: 'HeatMap',
        },
      },
      series: [
        {
          name: '1',
          data: this.generateData(6, {
            min: 0,
            max: 90,
          }),
        },
        {
          name: '2',
          data: this.generateData(6, {
            min: 0,
            max: 90,
          }),
        },
        {
          name: '3',
          data: this.generateData(6, {
            min: 0,
            max: 90,
          }),
        },
        {
          name: '4',
          data: this.generateData(6, {
            min: 0,
            max: 90,
          }),
        },
        {
          name: '5',
          data: this.generateData(6, {
            min: 0,
            max: 90,
          }),
        },
        {
          name: '6',
          data: this.generateData(6, {
            min: 0,
            max: 90,
          }),
        },
        {
          name: '7',
          data: this.generateData(6, {
            min: 0,
            max: 90,
          }),
        },
        {
          name: '8',
          data: this.generateData(6, {
            min: 0,
            max: 90,
          }),
        },
        {
          name: '9',
          data: this.generateData(6, {
            min: 0,
            max: 90,
          }),
        },
        {
          name: '6',
          data: this.generateData(6, {
            min: 0,
            max: 90,
          }),
        },
      ],
    }
  },
  methods: {
    generateData(count) {
      var i = 0
      var series = []
      while (i < count) {
        var x = (i + 1).toString()
        var y =
          'Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min'
        series.push({
          x: x,
          y: y,
        })
        i++
      }
      return series
    },
  },
}
</script>

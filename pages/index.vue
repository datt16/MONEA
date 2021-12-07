<template>
  <div id="home">
    <v-row no-gutters>
      <v-col cols="12">
        <air-status-view :co2="currentRecord.co2" />
      </v-col>
    </v-row>

    <v-row dense>
      <v-col v-for="(head, index) in headers" :key="index" cols="6" md="3">
        <value-view
          :type="head.type"
          :title="head.text"
          :icon="head.icon"
          :value="currentRecord[head.value]"
        />
      </v-col>
    </v-row>

    <v-row class="py-2" no-gutters>
      <v-col cols="12">
        <chart-view :records="co2ChartData" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    headers: [
      {
        text: '二酸化炭素濃度',
        value: 'co2',
        type: 'ppm',
        icon: 'mdi-fan'
      },
      {
        text: '気温',
        value: 'temp',
        type: '℃',
        icon: 'mdi-temperature-celsius',
      },
      {
        text: '湿度',
        value: 'humid',
        type: '%',
        icon: 'mdi-water'
      },
      {
        text: '気圧',
        value: 'pressure',
        type: 'hPa',
      },
    ],
  }),
  computed: {
    currentRecord() {
      return this.$store.getters['record/currentRecord'][0]
    },
    co2ChartData() {
      return this.$store.getters['record/co2Array']
    },
  },
}
</script>

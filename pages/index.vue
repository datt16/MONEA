<template>
  <div id="home">
    <v-row no-gutters>
      <v-col cols="12">
        <air-status-view :co2="currentRecord ? currentRecord.co2 : null"/>
      </v-col>
    </v-row>

    <v-row dense>
      <v-col v-for="(head, index) in headers" :key="index" cols="6" md="3">
        <value-view
          :type="head.type"
          :title="head.text"
          :icon="head.icon"
          :value="currentRecord ? currentRecord[head.value] : null"
        />
      </v-col>
    </v-row>

    <v-row class="py-2" no-gutters>
      <v-col cols="12">
        <chart-view :records="co2ChartData"/>
      </v-col>
    </v-row>

    <v-row class="py-2" no-gutters>
      <v-col cols="12">
        <v-card dark color="cyan darken-2" class="mb-16">
          <v-card-title>
            <span class="text-h6 font-weight-bold">アンケート協力のお願い</span>
          </v-card-title>
          <v-card-subtitle class="pb-0">
            <span class="text-caption">
              システム評価のためのアンケートへの回答をお願いします。
            </span>
          </v-card-subtitle>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn text dark class="justify-end font-weight-bold" href="https://forms.office.com/r/Y0j5b1400H" target="_blank">
              <span>
                回答する
                <v-icon small>mdi-open-in-new</v-icon>
              </span>
            </v-btn>
          </v-card-actions>

        </v-card>
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
        icon: 'mdi-fan',
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
        icon: 'mdi-water',
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
      const data = this.$store.getters['record/co2Array']
      if (data) {
        return data
      } else {
        return []
      }
    },
  }
}
</script>

<template>
  <div id="home">
    <v-row>

      <v-col cols="6">
        <v-row no-gutters>
          <v-col cols="12">
            <air-status-view :co2="currentRecord ? currentRecord.co2 : null"/>
          </v-col>
        </v-row>

        <v-row dense>
          <v-col v-for="(head, index) in headers" :key="index" cols="6">
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
      </v-col>

      <v-col cols="6">
        <v-row no-gutters>
          <v-col cols="12">
            <v-card class="pa-4" outlined>
              <v-card-title>
                <span class="text-h5 font-weight-bold">各センサーの値</span>
                <span class="text-subtitle-1 ml-2">二酸化炭素濃度</span>
              </v-card-title>
              <RoomView />
            </v-card>
          </v-col>
        </v-row>

        <v-row no-gutters class="py-2">
          <v-col cols="12">
            <v-card class="pa-4" outlined>
              <v-row no-gutters align-content="center">
                <v-col cols="3" align-self="center">
                  <v-img max-width="140" src="/qrcode.png"></v-img>
                </v-col>
                <v-col cols="9" align-self="end">
                  <span class="text-body-2">このQRコードからWebアプリ版にアクセスできます。</span>
                  <p class="no-gutters text-caption">過去の換気状況が確認できます。</p>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>

      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Signage",
  layout: "signage",
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
    records() {
      return this.$store.getters["record/records"]
    }

  }
}
</script>

<style scoped>

</style>

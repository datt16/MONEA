<template>
  <v-row no-gutters>
    <v-tabs v-model="mode" class="mb-4" fixed-tabs>
      <v-tabs-slider color="blue"/>
      <v-tab>
        <v-icon dense>mdi-table</v-icon>
        <span class="pl-1">テーブル</span>
      </v-tab>
      <v-tab>
        <v-icon dense>mdi-view-dashboard</v-icon>
        <span class="pl-1">ヒートマップ</span>
      </v-tab>
    </v-tabs>
    <v-col cols="12">
      <v-tabs-items v-model="mode">
        <v-tab-item>
          <v-menu offset-y>
            <template #activator="{ on, attrs }">
              <v-btn
                depressed
                color="transparent"
                class="px-3"
                v-bind="attrs"
                v-on="on"
              >
                <div class="text-h6">
                  <span class="font-weight-bold mr-1">センサーの計測値</span>
                  <span class="text-button">{{ currentSensorName }}</span>
                </div>
                <v-icon>mdi-menu-down</v-icon>
              </v-btn>
            </template>
            <v-list v-for="(id, index) in sensorsKeys" :key="index">
              <v-list-item link @click="switchSensor(id)">
                <v-icon left dense>mdi-home</v-icon>
                <v-list-item-content>
                  <v-list-item-title v-if="sensors">{{
                      sensors[id] ? sensors[id].name : "センサーの平均値"
                    }}
                  </v-list-item-title>
                  <v-list-item-title v-else>Loading</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-menu>

          <v-data-table
            hide-default-footer
            :headers="headers"
            :items="records"
            :page.sync="page"
            sort-by="date"
            sort-desc=""
            :mobile-breakpoint="null"
          >
            <template #[`item.date`]="{ item }">
              <div>{{ item.date.split("_")[1] }}</div>
            </template>

            <template #[`item.co2`]="{ item }">
              <v-chip
                :color="
                    item.co2 < 0
                      ? 'grey'
                      : item.co2 > 1000
                      ? 'error'
                      : item.co2 > 700
                      ? 'warning'
                      : 'success'
                  "
                dark
              >
                {{ item.co2 }}
              </v-chip>
            </template>

            <template #[`item.temp`]="{ item }">
              <span>{{ Math.round(item.temp * 10) / 10 }}</span>
            </template>

            <template #[`item.pressure`]="{ item }">
              <span>{{ Math.round(item.pressure * 10) / 10 }}</span>
            </template>

            <template #[`item.humid`]="{ item }">
              <span>{{ Math.round(item.humid * 10) / 10 }}</span>
            </template>
          </v-data-table>

          <v-pagination
            v-model="page"
            :length="pageCount"
            circle
          ></v-pagination>

        </v-tab-item>

        <v-tab-item>
          <span class="text-h6">
            <HeatmapView/>
          </span>
        </v-tab-item>

      </v-tabs-items>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    page: 1,
    mode: 0,
    dialog: false,
    headers: [
      {
        text: '時刻',
        value: 'date',
        align: 'start',
      },
      {
        text: 'CO2濃度',
        value: 'co2',
      },
      {
        text: '気温',
        value: 'temp',
      },
      {
        text: '湿度',
        value: 'humid',
      },
      {
        text: '気圧',
        value: 'pressure',
      },
    ],
  }),
  computed: {
    sensorsKeys() {
      return this.$store.getters['record/recordKeys']
    },
    sensors() {
      return this.$store.getters['sensor/sensors']
    },
    current() {
      return this.$store.getters['common/currentSensor']
    },
    currentSensorName() {
      const key = this.$store.getters['common/currentSensor']
      return key === "avg" ? "各センサーの平均値" : this.sensors ? this.sensors[key].name : ""
    },
    records() {
      const data = this.$store.getters['record/records']
      return data[this.current] || []
    },
    currentRecord() {
      const data = this.$store.getters['record/currentRecord']
      return data || []
    },
    pageCount() {
      const num = this.$store.getters['record/recordCnt']
      return parseInt(num / 10) + 1
    },
  },
  methods: {
    switchSensor(id) {
      this.$store.commit('common/SET_CURRENT_SENSOR', {id})
    },
  },
}
</script>

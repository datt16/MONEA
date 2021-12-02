<template>
  <v-row no-gutters>
    <v-col cols="12">
      <div class="example">
        <v-row>
          <v-col>
            <v-menu offset-y>
              <template #activator="{ on, attrs }">
                <v-btn
                  depressed
                  color="transparent"
                  class="px-4"
                  v-bind="attrs"
                  v-on="on"
                >
                  <div class="text-h6">
                    <span class="font-weight-bold mr-1"
                      >モニタリングデータ</span
                    >
                    <span class="text-button">{{ current }}</span>
                  </div>
                  <v-icon>mdi-menu-down</v-icon>
                </v-btn>
              </template>
              <v-list v-for="(id, index) in sensors" :key="index">
                <v-list-item link @click="switchSensor(id)">
                  <v-icon left dense>mdi-home</v-icon>
                  <v-list-item-content>
                    <v-list-item-title>{{ id }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-menu>

            <v-data-table
              disable-sort
              hide-default-footer
              dense
              :headers="headers"
              :items="records"
            ></v-data-table>
          </v-col>
        </v-row>
      </div>
    </v-col>
  </v-row>
</template>
<script>
export default {
  data: () => ({
    headers: [
      {
        text: 'date',
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
    sensors() {
      return this.$store.getters['common/sensors']
    },
    current() {
      return this.$store.getters['common/currentSensor']
    },
    records() {
      const data = this.$store.getters['record/records']
      return data[this.current] || []
    },
  },
  methods: {
    switchSensor(id) {
      this.$store.commit('common/SET_CURRENT_SENSOR', { id })
    },
  },
}
</script>

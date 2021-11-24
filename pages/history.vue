<template>
  <v-row no-gutters>
    <v-col cols="12">
      <div class="example">
        
        <v-row>
          <v-col>
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
    records() {
      const data = this.$store.getters['record/records']
      return data || []
    },
  },
}
</script>

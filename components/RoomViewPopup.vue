<template>
  <v-menu v-model="isShown" offset-y
          :close-on-content-click="false"
          :close-on-click="false"
          :nudge-width="100">

    <template #activator="{on, attr}">
      <v-btn fab rounded :color="sensor.color" elevation="0" dark v-bind="attr" v-on="on">
        <v-icon>mdi-broadcast</v-icon>
      </v-btn>
    </template>

    <v-card>

      <v-toolbar flat :color="sensor.color" dark>
        <v-toolbar-title class="font-weight-bold align-baseline">
          {{ sensor.title }}
        </v-toolbar-title>

        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn icon @click="isShown = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>

      <v-row no-gutters class="pa-4">
        <v-col cols="12">
          <span class="text-subtitle-1">{{ sensor.subTitle }}</span>
        </v-col>
        <v-col cols="12">
          <span class="text-h3 font-weight-bold">{{ sensor.value }}</span>
          <span class="text-lg-subtitle-1">{{ sensor.unit }}</span>
        </v-col>
      </v-row>

    </v-card>
  </v-menu>
</template>
<script>
export default {
  name: 'RoomViewPopup',
  props: {
    sensor: {
      type: Object,
      default: () => ({
        id: "sensor1",
        isShown: false,
        title: "センサーA",
        subTitle: "二酸化炭素濃度",
        value: 1000,
        unit: "ppm",
        color: "blue",
      })
    },
    active: {
      default: false,
      type: Boolean
    }
  },
  data: () => ({
    isShown: false
  }),
  beforeMount() {
    this.isShown = true
  },
  methods: {
    popupClose() {
      this.isShown = false
    }
  },
}
</script>

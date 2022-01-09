<template>
  <v-menu v-model="isShown" offset-y
          :close-on-content-click="false"
          :close-on-click="false">

    <template #activator="{on, attr}">
      <v-btn fab rounded :color="sensor.color" elevation="0" dark v-bind="attr" v-on="on">
        <v-icon>mdi-broadcast</v-icon>
      </v-btn>
    </template>

    <v-card>

      <v-toolbar flat :color="sensor.color" dark dense>
        <v-tooltip bottom>
          <template #activator="{on, attr}">

            <v-toolbar-title class="font-weight-bold align-baseline" v-bind="attr" v-on="on">
              <span>{{ sensor.title }}</span>
              <v-chip v-if="sensor.statusCode === 200" small color="success" class="ml-2">
                正常
              </v-chip>
              <v-chip v-else small color="error" class="ml-2">
                異常
              </v-chip>
            </v-toolbar-title>

          </template>
          <span>{{ sensor.description }}</span>
        </v-tooltip>

        <v-spacer></v-spacer>
        <v-btn icon @click="isShown = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>

      <v-row no-gutters class="pa-2">
        <v-col cols="12">
          <span class="text-subtitle-2">{{ sensor.subTitle }}</span>
        </v-col>
        <v-col cols="12">
          <span class="text-h4 font-weight-bold">{{ sensor.value }}</span>
          <span class="text-lg-body">{{ sensor.unit }}</span>
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
        title: "データなし",
        subTitle: "---",
        value: "N/A",
        unit: "---",
        color: "grey",
        description: ""
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

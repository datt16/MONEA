<template>
  <div>
    <v-row>
      <v-col cols="12">
        <v-sheet color="grey" class="pa-1">
          <v-row v-for="(i, indexY) in areas" :key="indexY" no-gutters align-content="stretch">
            <v-col v-for="(areaItem, indexX) in i" :key="indexX" align-self="stretch">
              <v-card min-height="100" tile outlined
                      class="d-flex justify-center align-center">

                <v-menu v-if="areaItem.id" v-model="sensors[areaItem.id].isShown" offset-x
                        :close-on-content-click="false">
                  <template #activator="{on, attr}">
                    <v-btn fab rounded color="grey darken-1" elevation="0" dark v-bind="attr" v-on="on">
                      <v-icon>mdi-home</v-icon>
                    </v-btn>
                  </template>
                  <v-card>
                    <v-toolbar flat color="cyan" dark>
                      <v-toolbar-title class="font-weight-bold">センサーA</v-toolbar-title>
                      <v-spacer></v-spacer>
                      <v-toolbar-items>
                        <v-btn icon>
                          <v-icon>mdi-close</v-icon>
                        </v-btn>
                      </v-toolbar-items>
                    </v-toolbar>

                    <v-row no-gutters class="pa-4">
                      <v-col cols="12">
                        <span class="text-subtitle-1">CO2濃度</span>
                      </v-col>
                      <v-col cols="12">
                        <span class="text-h3 font-weight-bold">1000</span>
                        <span class="text-lg-subtitle-1">ppm</span>
                      </v-col>
                    </v-row>
                  </v-card>
                </v-menu>

              </v-card>
            </v-col>
          </v-row>
        </v-sheet>
      </v-col>
    </v-row>
  </div>

</template>

<script>
export default {
  name: "RoomView",
  data: () => ({
    areas: {
      0: [{}, {id: "sensor1"}, {}, {}],
      1: [{}, {}, {}, {}],
      2: [{}, {}, {id: "sensor2"}, {}],
      3: [{}, {}, {}, {}]
    },

    sensors: {
      sensor1: {
        id: "sensor1",
        isShown: false,
        title: "センサーA",
        subTitle: "二酸化炭素濃度",
        value: 1200,
        color: "blue",
        posX: 0,
        posY: 0
      },
      sensor2: {
        id: "sensor2",
        isShown: false,
        title: "センサーB",
        subTitle: "二酸化炭素濃度",
        value: 1200,
        color: "blue",
        posX: 3,
        posY: 3
      },
    }
  }),
}
</script>

<style scoped>

</style>

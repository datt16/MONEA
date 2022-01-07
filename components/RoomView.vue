<template>
  <div>
    <v-row>
      <v-col cols="12">
        <v-sheet color="grey" class="pa-1">
          <v-row v-for="(i, indexY) in areas" :key="indexY" no-gutters align-content="stretch">
            <v-col v-for="(areaItem, indexX) in i" :key="indexX" align-self="stretch">
              <v-card min-height="100" tile outlined
                      class="d-flex justify-center align-center">

                <RoomViewPopup v-if="areaItem.id" v-model="popup" :active="sensors[areaItem.id].isShown"
                               :sensor="sensors[areaItem.id]"/>

              </v-card>
            </v-col>
          </v-row>
        </v-sheet>
      </v-col>
    </v-row>
  </div>

</template>

<script>
import RoomViewPopup from "~/components/RoomViewPopup";

const sampleData = {
  sensor1: {
    id: "sensor1",
    isShown: true,
    title: "センサーA",
    subTitle: "二酸化炭素濃度",
    value: 1400,
    color: "orange",
    unit: "ppm",
    posX: 0,
    posY: 0
  },
  sensor2: {
    id: "sensor2",
    isShown: true,
    title: "センサーB",
    subTitle: "二酸化炭素濃度",
    value: 800,
    color: "cyan",
    unit: "ppm",
    posX: 1,
    posY: 3
  }
}

export default {
  name: "RoomView",
  components: {
    RoomViewPopup
  }
  ,
  data: () => ({
    areas: {},
    sensors: {},
    popup: false
  }),
  mounted() {
    this.areas = {
      0: [{}, {}, {}, {}],
      1: [{}, {}, {}, {}],
      2: [{}, {}, {}, {}],
      3: [{}, {}, {}, {}]
    }
    this.sensors = sampleData
    Object.keys(this.sensors).forEach(x => {
      const sensor = this.sensors[x]
      this.areas[sensor.posY][sensor.posY].id = sensor.id
    })
  }

}
</script>


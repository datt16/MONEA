<template>
  <div>
    <!--    <v-row no-gutters>-->
    <!--      <v-col cols="12 pa-0 ma-0">-->
    <!--        <span class="subtitle-1 font-weight-bold">各センサーの状態</span>-->
    <!--      </v-col>-->
    <!--    </v-row>-->
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

    const records = this.$store.getters['record/currentRecordWithAllSensor']
    const sensors = this.$store.getters['sensor/sensors']
    const headers = this.$store.getters['common/headers']

    const sensorList = Object.keys(records).filter(key => records[key].id !== "avg")
    const target = "co2"

    sensorList.forEach(key => {
      const sensor = sensors[key]
      if (sensor) {
        this.sensors[key] = {
          id: sensor.id,
          isShown: true,
          title: sensor.name,
          subTitle: headers[target].text,
          value: records[key][target], // 注意: データ欠損の可能性あリ
          color: sensor.color,
          unit: headers[target].unit,
          posX: sensor.position.x,
          posY: sensor.position.y,
          description: sensor.description,
          statusCode: sensor.status.code
        }
      }
    })

    Object.keys(this.sensors).forEach(x => {
      const sensor = this.sensors[x]
      this.areas[sensor.posY][sensor.posX].id = sensor.id
    })
  }

}
</script>


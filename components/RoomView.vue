<template>
  <div>
    <v-row no-gutters>
      <v-col cols="2">
        <span class="grey--text">廊下側</span>
      </v-col>
      <v-col cols="8">
        <span class="d-flex justify-center grey--text">後ろ</span>
      </v-col>
      <v-col cols="2">
        <span class="d-flex justify-end grey--text">窓側</span>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col cols="12">
        <v-sheet color="grey" class="pa-2 root">
          <v-row v-if="loading" no-gutters>Loading...</v-row>
          <v-row v-for="(i, indexY) in areas" v-else :key="indexY" no-gutters align-content="stretch">
            <v-col v-for="(areaItem, indexX) in i" :key="indexX" align-self="stretch">
              <v-card min-height="100" tile outlined
                      class="d-flex justify-center align-center">


                <div v-if="indexY == 0 && indexX == 0" class="door"/>
                <div v-if="indexY == 3 && indexX == 0" class="door"/>


                <div v-if="indexY == 0 && indexX == 3" class="window window-top on-wall-right"/>
                <div v-if="indexY == 1 && indexX == 3" class="window window-bottom on-wall-right"/>

                <div v-if="indexY == 2 && indexX == 3" class="window window-top on-wall-right"/>
                <div v-if="indexY == 3 && indexX == 3" class="window window-bottom on-wall-right"/>


                <RoomViewPopup v-if="areaItem.id" v-model="popup"
                               :offset-x="indexX === 0"
                               :offset-y="indexX > 0"
                               :active="sensors[areaItem.id] ? sensors[areaItem.id].isShown : false"
                               :sensor="sensors[areaItem.id]"/>

              </v-card>
            </v-col>
          </v-row>
        </v-sheet>
      </v-col>
    </v-row>
    <v-row no-gutters justify="center"><span class="grey--text">前</span></v-row>

  </div>

</template>

<script>
import RoomViewPopup from "~/components/RoomViewPopup";

export default {
  name: "RoomView",
  components: {
    RoomViewPopup
  },
  data: () => ({
    popup: false,
    loading: false,
    sensors: {},
  }),
  computed: {
    base() {
      return this.$store.getters["sensor/roomViewState"]
    },
    areas() {
      const a = {
        0: [{}, {}, {}, {}],
        1: [{}, {}, {}, {}],
        2: [{}, {}, {}, {}],
        3: [{}, {}, {}, {}]
      }
      const base = this.base
      Object.keys(base).forEach(x => {
        this.$set(this.sensors, x, base[x])
      })
      if (this.sensors) {
        Object.keys(this.sensors).forEach(x => {
          const sensor = this.sensors[x]
          a[sensor.posY][sensor.posX].id = sensor.id
        })
      }
      return a
    }
  }
}
</script>

<style lang="scss">
$cell-height: 100px;

.door {
  width: 10px;
  height: 90px;
  background: white;

  position: absolute;

  top: 4px;
  left: -9px;
}

.door::after {
  content: "";
  background: white;
  width: 5px;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  border: 2px #9E9E9E;
  border-style: hidden dashed hidden hidden;
}


.window {
  background: white;
  border: 1px solid #9E9E9E;
  width: 8px;
  height: calc(#{$cell-height} * 0.8);
}

.basic::after {
  content: "";
  background: white;
  width: 4px;
  height: calc(#{$cell-height} * 0.8);
  position: absolute;
  top: -1px;
  right: -1px;
  border: 1px solid #9E9E9E;
}

.on-wall-right {
  position: absolute;
  right: -9px;
}

.on-wall-left {
  position: absolute;
  left: -9px;
}

.window-bottom {
  border: 1px #9E9E9E;
  border-style: hidden solid solid solid;
  top: -1px;
}

.window-top {
  border: 1px #9E9E9E;
  border-style: solid solid hidden solid;
  bottom: -1px;
}

</style>

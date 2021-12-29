<template>
  <v-row>
    <v-col cols="6">
      <v-card dark>
        <v-card-title class="pb-0">過去の換気状況</v-card-title>
        <v-container>
          <div class="root" :style="responsiveStyleRoot">
            <div
              v-for="i in genarateRandomArray"
              :key="i[0].value"
              class="heat-row"
              :style="rowStyle"
            >
              <div v-for="j in i" :key="j.value" class="heat-col">
                <Chip :color="j.color" :height="width" />
              </div>
            </div>
          </div>

          <div class="top">
            <div class="ex">
              <div>CO2濃度&nbsp;&nbsp;低&nbsp;</div>
              <div class="box1"></div>
              <div class="box2"></div>
              <div class="box3"></div>
              <div class="box4"></div>
              <div class="box5"></div>
              <div>&nbsp;高</div>
            </div>
          </div>
        </v-container>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import Chip from '@/components/heatmap/Chip.vue'

const levels = ['#ffebee', '#ffcdd2', '#ef9a9a', '#e57373', '#ef5350']
export default {
  name: 'Heatmap',
  data() {
    return {
      values: [],
      width: 50,
      rowCnt: 3,
    }
  },

  components: {
    Chip,
  },

  computed: {
    genarateRandomArray() {
      const a = []
      for (let i = 0; i < 10; ++i) {
        const b = []
        for (let j = 0; j < 6; ++j) {
          const v = Math.random()
          const m = {
            value: v,
            color:
              v < 0.2
                ? levels[0]
                : v < 0.4
                ? levels[1]
                : v < 0.6
                ? levels[2]
                : v < 0.8
                ? levels[3]
                : levels[4],
          }
          b.push(m)
        }
        a.push(b)
      }
      return a
    },
    rowStyle() {
      return {
        width: `${this.width}px`,
      }
    },
    responsiveStyleRoot() {
      return {
        maxHeight: `${this.width * this.rowCnt + 2 * this.rowCnt}px`,
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.root {
  overflow: scroll;
  max-width: 100%;
  display: flex;

  .heat-row {
    margin: 1px;
  }
  .heat-col {
    margin: 0px;
    padding: 1px;
  }
}

.ex {
  display: flex;
  justify-content: flex-end;
  margin-top: 7px;
}
.box1 {
  margin: 3px 1px 0px;
  width: 15px;
  height: 15px;
  background: #ffebee;
}
.box2 {
  margin: 3px 1px 0px;
  width: 15px;
  height: 15px;
  background: #ffcdd2;
}
.box3 {
  margin: 3px 1px 0px;
  width: 15px;
  height: 15px;
  background: #ef9a9a;
}
.box4 {
  margin: 3px 1px 0px;
  width: 15px;
  height: 15px;
  background: #e57373;
}
.box5 {
  margin: 3px 1px 0px;
  width: 15px;
  height: 15px;
  background: #ef5350;
}
</style>

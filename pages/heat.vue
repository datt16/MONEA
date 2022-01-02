<template>
  <v-row v-resize="onResize">
    <v-col :cols="cols">
      <v-card dark>
        <v-card-title class="pb-0">過去の換気状況</v-card-title>
        <v-container>
          <div class="d-flex">
            <div>
              <div class="root" :style="responsiveStyleRoot">
                <div
                  v-for="(i, Index) in genarateRandomArray"
                  :key="Index"
                  class="map-row"
                >
                  <div v-for="(j, index) in i" :key="index" class="map-col">
                    <!-- ヒートマップ: 行ラベル -->
                    <div
                      v-if="Index === 0"
                      :class="`map-col-label ${labelsStyle}`"
                      :style="tileWidth"
                    >
                      {{ j.value }}
                    </div>

                    <!-- ヒートマップ: 列ラベル -->
                    <div
                      v-else-if="index === 0"
                      :class="`map-row-label ${labelsStyle}`"
                      :style="{ ...tileWidth, ...tileHeight }"
                    >
                      {{ j.value }}
                    </div>

                    <!-- ヒートマップ: 通常タイル -->
                    <div v-else :style="tileHeight">
                      <Chip :color="j.attr" :height="width" />
                    </div>
                  </div>
                </div>
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
const lavels = ['0', '1', '2', '3']

const responsiveStyle = {
  lg: {
    cols: 6,
    chipWidth: 75,
  },
  xl: {
    cols: 4,
    chipWidth: 75,
  },
  md: {
    cols: 6,
    chipWidth: 50,
    labelsStyle: 'text-caption',
  },
  sm: {
    cols: 6,
    chipWidth: 48,
    labelsStyle: 'text-caption',
  },
  xs: {
    cols: 12,
    chipWidth: 44,
    labelsStyle: 'text-caption',
  },
}

export default {
  name: 'Heatmap',
  components: {
    Chip,
  },
  data() {
    return {
      values: [],
      cols: 6,
      width: 50,
      rowCnt: 3,
      labelsStyle: '',
    }
  },
  computed: {
    genarateRandomArray() {
      const a = []

      const labels = []
      this.rowLabels.forEach((x) => labels.push({ value: x, attr: 'LABEL' }))
      a.push(labels)

      for (let i = 0; i < 3; ++i) {
        const b = []
        b.push({ value: lavels[i], attr: 'LABEL' })
        for (let j = 0; j < 6; ++j) {
          const v = Math.random()
          const m = {
            value: v,
            attr:
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
    tileHeight() {
      return {
        height: `${this.width}px`,
      }
    },
    tileWidth() {
      return {
        width: `${this.width}px`,
      }
    },
    responsiveStyleRoot() {
      return {
        maxHeight: `${this.width * this.rowCnt + 24 + 2 * this.rowCnt + 1}px`,
      }
    },
    rowLabels() {
      return ['時間 | 分', '0~', '10~', '20~', '30~', '40~', '50~']
    },
    colLabels() {
      return ['(時間)', '8', '9', '10']
    },
  },
  methods: {
    onResize() {
      const breakpoint = this.$vuetify.breakpoint.name
      const style = responsiveStyle[breakpoint]
      if (style) {
        this.cols = style.cols
        this.width = style.chipWidth
        this.labelsStyle = style.labelsStyle ? style.labelsStyle : ''
      }
    },
  },
  mounted() {
    this.onResize()
  },
}
</script>

<style lang="scss" scoped>
.root {
  overflow: auto;
  max-width: 100%;

  .map-row {
    display: flex;
  }

  .map-row-label {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .map-col {
    margin-bottom: 1px;
    margin-left: 1px;
  }

  .map-col-label {
    display: flex;
    justify-content: center;
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

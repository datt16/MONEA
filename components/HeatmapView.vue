<template>
  <v-row v-resize="onResize" justify="center">
    <v-col cols="12" sm="10" lg="6">
      <v-card flat>
        <v-card-title class="pb-0 font-weight-bold">過去の換気状況</v-card-title>
        <v-container>
          <div class="d-flex overflow-auto justify-center">
            <div>
              <div class="root">
                <div
                  v-for="(i, Index) in generateHeatmapArray"
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
                      <Chip :color="j.attr" :height="width"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Legend/>
        </v-container>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import Chip from '@/components/heatmap/Chip.vue'
import Legend from '@/components/heatmap/Legend.vue'

const colors = ['#ffebee', '#ffcdd2', '#ef9a9a', '#e57373', '#ef5350']

const responsiveStyle = {
  lg: {
    chipWidth: 75,
    labelsStyle: 'text-body-1',
  },
  xl: {
    chipWidth: 75,
  },
  md: {
    chipWidth: 75,
    labelsStyle: 'text-caption',
  },
  sm: {
    chipWidth: 48,
    labelsStyle: 'text-caption',
  },
  xs: {
    chipWidth: 44,
    labelsStyle: 'text-caption',
  },
}

export default {
  name: "HeatmapView",
  components: {
    Chip,
    Legend
  },
  data() {
    return {
      values: [],
      cols: 6,
      width: 50,
      rowCnt: 24,
      labelsStyle: '',
    }
  },
  computed: {
    generateHeatmapArray() {
      const a = []
      const data = this.$store.getters['record/heatmap']

      if (!data) return []

      const levels = [400, 600, 800, 1000]
      const target = 'co2'

      const labels = []
      this.rowLabels.forEach((x) => labels.push({value: x, attr: 'LABEL'}))
      a.push(labels)

      data.forEach((x) => {
        const b = []
        b.push({value: x[0].date.split('_')[1].split(':')[0], attr: 'LABEL'})
        x.forEach((y) => {
          const v = y[target]
          const m = {
            value: v,
            attr:
              v <= -255 ? "#666" :
                v <= levels[0]
                  ? colors[0]
                  : v < levels[1]
                    ? colors[1]
                    : v < levels[2]
                      ? colors[2]
                      : v < levels[3]
                        ? colors[3]
                        : colors[4],
          }
          b.push(m)
        })
        a.push(b)
      })
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
    rowLabels() {
      return ['時間 | 分', '0~', '10~', '20~', '30~', '40~', '50~']
    },
  },
  mounted() {
    this.onResize()
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
}
</script>

<style lang="scss" scoped>
.root {
  overflow: auto;

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

</style>


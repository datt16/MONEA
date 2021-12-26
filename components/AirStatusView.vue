<template>
  <v-card :dark="theme.dark" :color="theme.bgColor" outlined min-width="350px">
    <div v-if="co2 < 0">
      <v-skeleton-loader type="card" />
    </div>
    <div v-else>
      <v-card-title>
        <v-icon
          size="36"
          :color="theme.color"
          class="pr-3 py-1"
          v-text="theme.mainIcon"
        ></v-icon>
        <span class="text-h6 font-weight-bold">{{ mainInfoText }}</span>
      </v-card-title>
      <v-card-text>
        <v-row dense>
          <div class="d-flex align-center justify-center">
            <v-icon
              size="18"
              :color="theme.color"
              class="px-2"
              v-text="theme.subIcon"
            ></v-icon>
            <span class="text-subtitle-1">{{ co2InfoText }}</span>
          </div>
        </v-row>
        <v-row v-if="isSensorProblem" dense>
          <div class="d-flex align-center justify-center">
            <v-icon
              size="18"
              :color="theme.color"
              class="px-2"
              v-text="theme.subIcon"
            ></v-icon>
            <span class="text-subtitle-1">センサー正常稼働中</span>
          </div>
        </v-row>
      </v-card-text>
    </div>
  </v-card>
</template>

<script>
export default {
  props: {
    co2: {
      type: Number,
      default: 1900,
    },
  },
  data() {
    return {
      isSensorProblem: false,
      themeSet: {
        Normal: {
          bgColor: null,
          color: 'success',
          dark: null,
          mainIcon: 'mdi-check-circle',
          subIcon: 'mdi-circle',
        },
        UnNormal: {
          bgColor: 'warning',
          color: null,
          dark: true,
          mainIcon: 'mdi-alert',
          subIcon: 'mdi-alert-circle-outline',
        },
      },
    }
  },
  computed: {
    theme() {
      return this.co2 < 1000 ? this.themeSet.Normal : this.themeSet.UnNormal
    },
    mainInfoText() {
      return this.co2 < 1000
        ? '適切に換気されています。'
        : '換気が不足しています。'
    },
    co2InfoText() {
      return this.co2 < 1000 ? '平均CO2濃度 1000未満' : '平均CO2濃度 1000以上'
    },
  },
}
</script>

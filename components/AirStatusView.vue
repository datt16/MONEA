<template>
  <v-card :dark="theme.dark" :color="theme.bgColor" outlined min-width="350px">
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
        <v-col cols="1" align-self="center">
          <v-icon
            size="18"
            :color="theme.color"
            v-text="theme.subIcon"
          ></v-icon>
        </v-col>
        <v-col>
          <span class="text-subtitle-1">{{ co2InfoText }}</span>
        </v-col>
      </v-row>
      <v-row v-if="isSensorProblem" dense>
        <v-col cols="1" align-self="center">
          <v-icon
            size="18"
            :color="theme.color"
            v-text="theme.subIcon"
          ></v-icon>
        </v-col>
        <v-col>
          <span class="text-subtitle-1">センサー正常稼働中</span>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      co2: 900,
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

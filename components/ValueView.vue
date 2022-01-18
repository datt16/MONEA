<template>
  <v-card min-height="100px" outlined>
    <v-skeleton-loader v-if="!value" type="article"></v-skeleton-loader>
    <div v-else>
      <div v-if="value < -250">
        <v-skeleton-loader type="card"/>
      </div>
      <div v-else>
        <v-card-title
          v-if="$vuetify.breakpoint.xs"
          class="pb-0 pt-3 text-subtitle-1"
        >
          <v-icon small class="mr-2">{{ icon }}</v-icon>
          <span>
          {{ title }}
        </span>
        </v-card-title>

        <v-card-title v-else class="pb-0 pt-3">
          <v-icon class="mr-2">{{ icon }}</v-icon>
          <span>
          {{ title }}
        </span>
        </v-card-title>

        <v-col v-if="$vuetify.breakpoint.xs">
          <strong :class="`text-h3 font-weight-bold ${theme.bgColor}--text`">{{ Math.round(value) }}</strong>
          <span
            v-if="type.length >= 3"
            :class="`text-subtitle-2 ${theme.bgColor}--text`"
          >{{ type }}</span
          >
          <span v-else :class="`text-h6 ${theme.bgColor}--text`">{{ type }}</span>
        </v-col>
        <v-col v-else>
          <strong :class="`text-h3 font-weight-bold ${theme.bgColor}--text`">{{
              Math.round(value)
            }}</strong>
          <span :class="`text-h5 ${theme.bgColor}--text`">{{ type }}</span>
        </v-col>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '二酸化炭素濃度(ppm)',
    },
    value: {
      type: Number,
      default: null,
    },
    type: {
      type: String,
      default: 'ppm',
    },
    icon: {
      type: String,
      default: 'mdi-cloud',
    },
  },
  data: () => ({
    themeSet: {
      Normal: {
        bgColor: null,
        dark: null,
      },
      UnNormal: {
        bgColor: 'warning',
        dark: true,
      },
    },
  }),
  computed: {
    theme() {
      if (this.type === 'ppm') {
        return this.value < 1000 ? this.themeSet.Normal : this.themeSet.UnNormal
      }
      return this.themeSet.Normal
    },
  },
}
</script>

<template>
  <v-card min-height="100px" outlined>
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
      <strong class="text-h3 font-weight-bold">{{ value }}</strong>
      <span v-if="type.length >= 3" class="text-subtitle-2">{{ type }}</span>
      <span v-else class="text-h6">{{ type }}</span>
    </v-col>
    <v-col v-else>
      <strong class="text-h3 font-weight-bold">{{ value }}</strong>
      <span class="text-h5">{{ type }}</span>
    </v-col>
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
      default: 0,
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
}
</script>

<template>
  <v-card min-height="100px" outlined>
    <v-col>
      <p class="text-h7 text-center">
        <v-icon small>mdi-cloud</v-icon>{{ title }}
      </p>
      <strong class="text-h3 font-weight-bold display-">{{ value }}</strong>
      <strong class="text-h5">{{ type }}</strong>
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
  },
}
</script>

<template>
  <v-card min-height="100px" outlined>
    <p class="text-h7">{{ title }}</p>
    <center>
      <p class="text-h2">{{ value }}</p>
    </center>
  </v-card>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "二酸化炭素濃度(ppm)"
    },
    value: {
      type: Number,
      default: 0
    }
  },
}
</script>

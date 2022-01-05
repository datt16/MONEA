<template>
  <div :style="computedStyle"></div>
</template>
<script>
export default {
  name: 'Chip',
  props: {
    height: {
      type: Number,
      default: 25,
    },
    color: {
      type: String,
      default: '#000000',
    },
  },
  computed: {
    computedStyle() {
      const height = this.height
      const color = this.color
      return {
        height: `${height}px`,
        width: `${height}px`,
        backgroundColor: color,
      }
    },
  },
}
</script>

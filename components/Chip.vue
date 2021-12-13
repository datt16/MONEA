<template>
  <div :style="computedStyle"></div>
</template>
<script>
export default {
  props: {
    height: {
      type: Number,
      default: 25,
    },
    color: {
      type: String,
      default: "#000000",
    },
  },
  computed: {
    computedStyle() {
      const height = this.height,
        color = this.color,
        width = height;
      return {
        height: `${height}px`,
        width: `${width}px`,
        backgroundColor: color,
      };
    }
  },
  name: "Chip",
};
</script>
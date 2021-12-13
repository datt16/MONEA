<template>
  <div>
    <div class="root">
      <div v-for="i in genarateRandomArray" :key="i[0].value" class="row" >
        <div v-for="j in i" :key="j.value" class="col" >
          <Chip :color="j.color" :height="50" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>

const levels = ["#ffebee", "#ffcdd2", "#ef9a9a", "#e57373", "#ef5350"];
export default {
  name: "Heatmap",
  data() {
    return {
      values: [],
    };
  },
  
  computed: {
    genarateRandomArray() {
      const a = [];
      for (let i = 0; i < 6; ++i) {
        const b = [];
        for (let j = 0; j < 11; ++j) {
          const v = Math.random();
          const m = {
            value: v,
            color:
              v < 0.2
                ? levels[0]
                : v < 0.4
                ? levels[1]
                : v < 0.6
                ? levels[2]
                : v < 0.8
                ? levels[3]
                : levels[4],
          };
          b.push(m);
        }
        a.push(b);
      }
      // eslint-disable-next-line no-console 
      console.log(a);
      return a;
    },
  },
};
</script>

<style lang="scss" scoped>
.root {
  margin-left: 19px;
  margin-right: 18px;
  margin-top: 25px;
  display: flex;
  justify-content: center;
}
.row {
  width: 30px; 
  margin: 0px;
}
.col {
  width: 50px;
  padding: 1px;
}


</style>
<template>
  <div class='top'>
    <p class="text-h6 text-left ml-2 mt-3">
      過去の換気状況
    </p>
    <div class="root">
      <div v-for="i in genarateRandomArray" :key="i[0].value" class="row" >
        <div v-for="j in i" :key="j.value" class="col" >
          <Chip :color="j.color" :height="50" />
        </div>
      </div>
    </div>
      <div class='ex'>
        <div>CO2濃度&nbsp;&nbsp;低&nbsp;</div>
        <div class="box1"></div>
        <div class="box2"></div>
        <div class="box3"></div>
        <div class="box4"></div>
        <div class="box5"></div>
        <div>&nbsp;高</div>
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
        for (let j = 0; j < 10; ++j) {
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
.ex{
  display: flex;
  justify-content: flex-end;
  margin-top: 7px;
}
.box1{
  margin       :3px 1px 0px;
  width        : 15px;
  height       : 15px;
  background   : #ffebee;
}
.box2{
  margin       :3px 1px 0px;
  width        : 15px;
  height       : 15px;
  background   : #ffcdd2;
}
.box3{
  margin       :3px 1px 0px;
  width        : 15px;
  height       : 15px;
  background   : #ef9a9a;
}
.box4{
  margin       :3px 1px 0px;
  width        : 15px;
  height       : 15px;
  background   : #e57373;
}
.box5{
  margin       :3px 1px 0px;
  width        : 15px;
  height       : 15px;
  background   : #ef5350;
}
</style>
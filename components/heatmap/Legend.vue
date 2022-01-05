<template>
  <div class="top">
    <div class="ex">
      <div class="text-caption text-sm-body-1">
        <span>CO2濃度</span>
        <span class="mx-2 ml-1">低</span>
      </div>
      <div class="box1"></div>
      <div class="box2"></div>
      <div class="box3"></div>
      <div class="box4"></div>
      <div class="box5"></div>
      <div class="ml-2 text-caption text-sm-body-1">高</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Legend"
}
</script>

<style scoped>
.ex {
  display: flex;
  justify-content: flex-end;
  margin-top: 7px;
}

.box1 {
  margin: 3px 1px 0;
  width: 15px;
  height: 15px;
  background: #ffebee;
}

.box2 {
  margin: 3px 1px 0;
  width: 15px;
  height: 15px;
  background: #ffcdd2;
}

.box3 {
  margin: 3px 1px 0;
  width: 15px;
  height: 15px;
  background: #ef9a9a;
}

.box4 {
  margin: 3px 1px 0;
  width: 15px;
  height: 15px;
  background: #e57373;
}

.box5 {
  margin: 3px 1px 0;
  width: 15px;
  height: 15px;
  background: #ef5350;
}
</style>

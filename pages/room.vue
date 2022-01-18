<template>
  <div>

    <h3 class="text-center">センサーの位置と値</h3>
    <RoomView />
    <p class="mt-16 pt-16 mb-0 d-flex align-center">
      <v-icon dense color="blue">mdi-help-circle</v-icon>
      <span class="ml-2 text-subtitle-1 font-weight-bold blue--text">この画面について</span>
    </p>
    <p class="text-caption">部屋に設置されている<b>センサーの位置</b>とそれぞれの<b>センサーの計測値</b>を表示しています。</p>

  </div>
</template>

<script>

export default {
  data: () => ({}),
}
</script>

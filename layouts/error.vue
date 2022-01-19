<template>
  <v-app dark>

    <v-container fluid>
      <v-row>
        <v-col cols="12" class="">
          <span class="text-h5 d-flex text-center justify-center align-center"><b
            class="mr-1"> :(</b>エラーが発生しました</span><br>
          <span
            class="mt-3 text-caption d-flex text-center justify-center align-center">下のボタンからホームに移動するかリロードしてみてください。</span><br>
          <span
            class="text-caption d-flex text-center justify-center align-center">何度もこの画面が表示される場合は作成者に問い合わせください。</span>
        </v-col>
      </v-row>
      <v-row class="mt-6">
        <v-spacer/>
        <v-btn link to="/">ホームに戻る</v-btn>
        <v-spacer/>
      </v-row>
    </v-container>

    <p class="body-1 font-weight-bold ma-0 grey--text">Error Code</p>
    <span class="text-caption grey--text">{{ error.statusCode }}</span>
  </v-app>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred'
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>

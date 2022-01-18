<template>
  <v-container fluid>
    <v-card min-width="300px" outlined>
      <div class="pa-5 d-flex align-center">
        <v-icon size="40" color="blue">mdi-open-in-new</v-icon>
        <div class="d-flex flex-column ml-5">
          <span class="text-h6 font-weight-bold">センサーの追加</span>
          <span class="text-caption">部屋にセンサーを登録します。</span>
        </div>
      </div>
    </v-card>
    <v-card class="mt-2" min-width="300px" outlined>
      <div class="pa-5 d-flex align-center">
        <v-icon size="40" color="blue">mdi-open-in-new</v-icon>
        <div class="d-flex flex-column ml-5">
          <span class="text-h6 font-weight-bold">部屋の追加</span>
          <span class="text-caption"
          >新しい部屋のセットアップを行います。</span
          >
        </div>
      </div>
    </v-card>
  </v-container>
</template>
<script>
export default {
  name: 'ActionMenu'
}
</script>
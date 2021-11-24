<template>
  <div class="justify-center">
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
    <v-list>
      <v-subheader>操作</v-subheader>
      <v-list-item v-for="act in actions" :key="act.title" link>
        <v-list-item-avatar>
          <v-icon :class="act.color" dark v-text="act.icon"></v-icon>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>{{ act.title }}</v-list-item-title>
          <v-list-item-subtitle>{{ act.subtitle }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
export default {
  data: () => ({
    actions: [
      {
        color: 'blue',
        icon: 'mdi-access-point-plus',
        title: 'センサーの追加',
        subtitle: '部屋にセンサーを登録します。',
      },
      {
        color: 'blue',
        icon: 'mdi-card-plus',
        title: '部屋の追加',
        subtitle: '新しい部屋のセットアップを行います。',
      },
      {
        color: 'red accent-2',
        icon: 'mdi-information',
        title: 'バージョン情報',
        subtitle: 'Build : 2021-10-17',
      },
    ],
  }),
}
</script>

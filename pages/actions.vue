<template>
  <div class="justify-center">
    <ActionMenu/>
    <ActionList :actions="actions"/>
  </div>
</template>

<script>
import ActionMenu from "~/components/action/ActionMenu";
import ActionList from "~/components/action/ActionList";

export default {
  components: {ActionList, ActionMenu},
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

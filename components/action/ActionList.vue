<template>
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
</template>
<script>
export default {
  name: 'ActionList',
  props: {
    actions: {
      default: () => [],
      type: Array
    }
  }
}
</script>

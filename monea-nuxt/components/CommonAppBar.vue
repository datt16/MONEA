<template>
  <v-app-bar app flat height="70">
    <div class="d-flex align-center">
      <span class="mr-2 text-h6 font-weight-bold">{{ title }}</span>
    </div>

    <v-spacer></v-spacer>

    <v-avatar color="primary" size="36">
      <v-icon dark> mdi-account-circle </v-icon>
    </v-avatar>
  </v-app-bar>
</template>

<script>
export default {
  props: {
    title: {
      default: 'title',
      type: String,
    },
  },
}
</script>

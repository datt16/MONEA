<template>
  <v-menu offset-y>
    <template #activator="{ on, attrs }">
      <v-btn
        depressed
        color="transparent"
        class="pa-0"
        v-bind="attrs"
        v-on="on"
      >
        <div class="text-h5">4J教室</div>
        <v-icon>mdi-menu-down</v-icon>
      </v-btn>
    </template>
    <v-list dense dark>
      <v-list-item link>
        <v-icon left dense>mdi-home</v-icon>
        <v-list-item-content>
          <v-list-item-title> 4J教室 </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
export default {}
</script>

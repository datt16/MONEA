<template>
  <v-app id="inspire">
    <v-app-bar
      app
      shrink-on-scroll
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>test</v-toolbar-title>

      <v-spacer>test</v-spacer>

      <v-btn icon>
        <v-iocn>mdi-dots-vertical</v-iocn>
      </v-btn>
    </v-app-bar>


    <v-main>
      <v-container>
        <v-row justify="center">
          <v-col
            :key="n"
            cols="5"
          >
            <v-card height="300" class="red--text" >test1</v-card>
          </v-col>
                    <v-col
            :key="n"
            cols="5"
          >
            <v-card height="300" class="blue--text">
              test2
              <v-img
                alt="Vuetify Logo"
                class="shrink mr-2"
                contain
                src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg"
                transition="scale-transition"
                width="2500"
              />
            </v-card>
          </v-col>
                    <v-col
            :key="n"
            cols="5"
          >
            <v-card height="300" class="green--text">
              test3
              <v-img
                alt="Vuetify Logo"
                class="shrink mr-2"
                contain
                src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg"
                transition="scale-transition"
                width="2500"
              />
            </v-card>
          </v-col>
                    <v-col
            :key="n"
            cols="5"
          >
            <v-card height="300" class="yellow--text">
              test4
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    //
  }),
}
</script>

<template>
  <v-app>
    <!-- Appbar -->
    <div id="appBar">
      <v-app-bar app flat height="70">
        <div class="d-flex align-center">
          <span class="mr-2 text-h6 font-weight-bold">{{ title }}</span>
        </div>

        <v-spacer></v-spacer>

        <v-avatar color="primary" size="36">
          <v-icon dark> mdi-account-circle </v-icon>
        </v-avatar>
      </v-app-bar>
    </div>
    <!-- __Appbar -->

    <v-main>
      <v-container>
        <!-- roomSwitcher -->
        <div id="roomSwicther">
          <v-menu offset-y dark>
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="transparent" class="pa-0" v-bind="attrs" v-on="on">
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
        </div>
        <!-- __roomSwitcher -->

        <!-- Nuxt ... 実質RouterView -->
        <Nuxt />
      </v-container>
    </v-main>

    <!-- BottomNav -->
    <div id="bottomNavigation">
      <v-bottom-navigation :value="nav" color="primary" grow fixed shift>
        <v-btn to="/history" icon style="height: 100%">
          <span>History</span>
          <v-icon>mdi-history</v-icon>
        </v-btn>

        <v-btn to="/" icon style="height: 100%">
          <span>Home</span>
          <v-icon>mdi-home</v-icon>
        </v-btn>

        <v-btn to="/actions" icon style="height: 100%">
          <span>Actions</span>

          <v-icon>mdi-menu</v-icon>
        </v-btn>
      </v-bottom-navigation>
    </div>
    <!--  __BottomNav -->

    <!-- <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer> -->
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      // fixed: false,
      title: 'Vuetify.js',
      nav: 1,
    }
  },
}
</script>

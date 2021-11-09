import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'
import VueApexCharts from 'vue-apexcharts'

Vue.use(VueApexCharts)
Vue.use(Vuetify)

export default new Vuetify({})
Vue.component('apexchart', VueApexCharts)
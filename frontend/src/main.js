import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'

import store from './store/store';

Vue.use(Vuetify)

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})

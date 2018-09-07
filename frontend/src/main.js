import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'

import router from '@/router';
import routerInterceptor from '@/router/routerInterceptor';

import store from './store/';

Vue.use(Vuetify)

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})

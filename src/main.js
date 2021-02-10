import axios from 'axios';
import VueAxios from 'vue-axios';

import Vue from 'vue'
import App from './App.vue'
import router from './router/router'

Vue.use(VueAxios, axios)
axios.defaults.baseURL = 'https://soundsense.srv1.hfgiot.cloud/',


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

import axios from 'axios';
import VueAxios from 'vue-axios';

import Vue from 'vue'
import App from './App.vue'

Vue.use(VueAxios, axios)
axios.defaults.baseURL = 'http://localhost:3000/'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

import Vue from 'vue';
import Buefy from 'buefy';
import App from './App.vue';
import router from './router';
import store from './store';
import 'buefy/dist/buefy.css';
import axios from 'axios';

Vue.use(Buefy);
Vue.config.productionTip = false;


const base = axios.create({
  baseURL: 'https://cryptic-tor-26183.herokuapp.com/'
})

Vue.prototype.$http = base

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');

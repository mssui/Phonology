import Vue from 'vue';
import Buefy from 'buefy';
import App from './App.vue';
import router from './router';
import store from './store';
import 'buefy/dist/buefy.css';
import axios from 'axios'
axios.defaults.headers.common = {'X-Requested-With': 'XMLHttpRequest'}
axios.defaults.baseURL = (process.env.NODE_ENV !== 'production') ? 'http://localhost:3030/' : ''

Vue.use(Buefy);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');


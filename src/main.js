import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant';
import {Button,Lazyload,Swipe, SwipeItem} from 'vant'
import 'vant/lib/index.css';

Vue.use(Vant);
Vue.use(Button).use(Lazyload).use(Swipe).use(SwipeItem)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

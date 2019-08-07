import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Css from './css/base.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'


import axios from 'axios'
Vue.prototype.$http = axios



// 配置每个实例对象可以使用vue
Vue.use(VueRouter)

//引入Mint-ui
import Mint from 'mint-ui';
//import'mint-ui/lib/style.css';
Vue.use(Mint);


import router from './js/router.js'
import '../node_modules/mint-ui/lib/style.css'




new Vue({
  el: '#app',
  router,
  render: h => h(App),
})

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
// import VueScroller from "vue-scroller/src";
import FastClick from 'fastclick'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)
// Vue.use(VueScroller)
Vue.config.productionTip = false
//事件总线
Vue.prototype.$bus = new Vue()
//解决移动端300ms延迟
FastClick.attach(document.body)
new Vue({
  render: h => h(App),
  router
}).$mount('#app')

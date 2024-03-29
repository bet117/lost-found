import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueRouter from "vue-router"
import router from "@/routers"
import store from "./store"

Vue.config.productionTip = false

Vue.use(ElementUI);
Vue.use(VueRouter);
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')

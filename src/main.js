import Vue from 'vue'
import Antd from 'ant-design-vue';
import BootstrapVue from "bootstrap-vue";
import App from './App.vue'
import router from './router'
import store from './store'
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import 'ant-design-vue/dist/antd.css'; // or 'ant-design-vue/dist/antd.less'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(Antd)

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')

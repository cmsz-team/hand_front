// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import echarts from '@/../static/js_lib/echarts/echarts'

import 'bootstrap/js/bootstrap.js'
import 'bootstrap/css/bootstrap.css'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

//项目打包的时候手动删除以下这行代码
require('@/../mockJs/index.js');

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

Vue.prototype.$axios = axios;
Vue.prototype.$echarts = echarts;

Vue.config.productionTip = false
Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

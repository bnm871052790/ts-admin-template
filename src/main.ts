import Vue from 'vue'
import App from './App.vue'
import { router } from './router/router'
import store from './store/'

import ElementUI from 'element-ui'
import '@/assets/css/element-variables.scss'

import 'normalize.css'
import './permission'
// TODO: sass变量引入ts检测出错，先暂时忽略检测，据说是要写个.d.ts配置变量
// @ts-ignore
import { size } from '@/assets/css/element-variables.scss'

Vue.use(ElementUI, {
  size
})

Vue.config.productionTip = false

export default new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

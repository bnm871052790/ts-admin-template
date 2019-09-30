import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout/index.vue'
import Root from '@/views/Root.vue'
Vue.use(Router)

let menuRouter = [
  {
    path: '/root',
    name: 'root',
    component: Root,
    meta: { title: '首页' }
  }
]

const modulesFiles = require.context('./modules', false, /\.ts$/)
modulesFiles.keys().forEach(item => {
  const value = modulesFiles(item).default
  menuRouter = menuRouter.concat(value)
}, {})

const router = new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login/Login.vue')
    },
    {
      path: '/layout',
      component: Layout,
      children: menuRouter
    }
  ]
})
export { router, menuRouter }

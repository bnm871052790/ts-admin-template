import { router } from '@/router/router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

NProgress.configure({ showSpinner: false })

const whiteList = ['/login']

router.beforeEach((to, from, next) => {
  NProgress.start()
  // document.title = getPageTitle(to.meta.title)
  // const token = sessionStorage.getItem('userToken')
  // if (token) {
  next()
  // } else {
  //   if (whiteList.indexOf(to.path) !== -1) {
  //     next()
  //   } else {
  //     next('/login')
  //   }
  // }
})

router.afterEach(() => {
  NProgress.done()
})

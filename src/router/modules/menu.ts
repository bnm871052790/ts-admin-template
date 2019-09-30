import View from '@/components/View.vue'
const details = [
  {
    path: '/menu1',
    name: 'menu1',
    component: View,
    meta: { title: '多级菜单演示' },
    children: [
      {
        path: '/menu1/menu1-1',
        name: 'menu1-1',
        component: View,
        meta: { title: '菜单1-1' },
        children: [
          {
            path: '/menu1/menu1-1/menu1-1-1',
            name: 'menu1-1-1',
            component: () => import('@/views/menu/menu1-1-1.vue'),
            meta: { title: '菜单1-1-1' }
          }
        ]
      },
      {
        path: '/menu1/menu1-2',
        name: 'menu1-2',
        component: View,
        meta: { title: '菜单1-2' }
      }
    ]
  },
  {
    path: '/menu2',
    name: 'menu2',
    component: () => import('@/views/menu/menu2.vue'),
    meta: {
      title: '菜单2',
      keepAlive: true
    }
  }
]

export default details

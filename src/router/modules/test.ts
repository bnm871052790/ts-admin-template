const details = [
  {
    path: '/test',
    name: 'test',
    component: () => import('@/views/Test.vue'),
    meta: {
      title: '测试菜单',
      keepAlive: true
    }
  }
]

export default details

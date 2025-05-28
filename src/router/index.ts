import useUserStore from '@/stores/modules/user'
import { createRouter, createWebHistory } from 'vue-router'
import useRouteCacheStore from '@/stores/modules/routeCache'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
    },
    {
      path: '/',
      component: () => import('../layout/BaseLayout.vue'),
      children: [
        {
          path: '/home',
          name: 'home',
          component: () => import('../views/HomeView.vue'),
        },
        {
          path: '/setting',
          name: 'settingView',
          component: () => import('../views/setting/index.vue'),
          meta: { keepAlive: true }
        },

        {
          path: '/setting/user',
          name: 'settingUser',
          component: () => import('../views/setting/userSetting.vue'),
        },
        {
          path: '/setting/userInfo',
          name: 'settingUserInfo',
          component: () => import('../views/setting/userInfo.vue'),
        },
        {
          path: '/about',
          name: 'about',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('../views/AboutView.vue'),
        },
      ]
    },

  ],
})

router.beforeEach((to, from) => {
  const { user } = useUserStore()
  const routeCacheStore = useRouteCacheStore()

  // 已登录禁止返回
  if (to.fullPath === '/login' && user.isLogin) {
    return false
  }

  // 未登录跳到登录
  if (to.fullPath !== '/login' && !user.isLogin) {
    router.push('/login')
    router.clearRoutes()
    return false
  }

  routeCacheStore.addRoute(to)

  // ...
  // 返回 false 以取消导航
  return true
})

export default router

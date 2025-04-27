import useUserStore from '@/stores/modules/user'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/setting',
      name: 'setting',
      component: () => import('../views/setting/index.vue'),
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
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
    },
  ],
})

router.beforeEach((to, from) => {
  const { user } = useUserStore()

  // 已登录禁止返回
  if (to.fullPath === '/login' && user.username) {
    return false
  }

  // 未登录跳到登录
  if (to.fullPath !== '/login' && !user.username) {
    router.push('/login')
    return
  }

  // ...
  // 返回 false 以取消导航
  return true
})

export default router

import { reactive } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const user = reactive({
    username: undefined,
    password: undefined,
    isLogin: false,
  })

  const login = () => {
    if (!user.username || !user.password) {
      return false
    }

    if (user.username === '123' && user.password === '123456') {
      user.isLogin = true
      return true
    }

    return false
  }

  return { user, login }
})

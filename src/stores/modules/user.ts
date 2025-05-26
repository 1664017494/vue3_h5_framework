import { reactive } from 'vue'
import { defineStore } from 'pinia'

const useUserStore = defineStore(
  'user',
  () => {
    const user = reactive<{
      username: undefined | string
      password: undefined | string
      isLogin: boolean
    }>({
      username: 'admin',
      password: '123456',
      isLogin: false,
    })

    const login = () => {
      console.log("@@@");

      if (!user.username || !user.password) {
        return false
      }

      if (user.username === 'admin' && user.password === '123456') {
        user.isLogin = true
        return true
      }

      return false
    }

    const logout = () => {
      user.username = ''
      user.password = ''
      user.isLogin = false
    }

    return { user, login, logout }
  },
  {
    persist: true,
  },
)

export default useUserStore

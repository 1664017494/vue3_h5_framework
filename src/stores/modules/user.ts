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

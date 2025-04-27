import { ref } from 'vue'
import { defineStore } from 'pinia'

const useConfigStore = defineStore(
  'config',
  () => {
    const theme = ref<'dark' | 'light'>('light')

    const toggleTheme = () => {
      theme.value = theme.value === 'light' ? 'dark' : 'light'
    }

    return {
      theme,
      toggleTheme,
    }
  },
  { persist: true },
)

export default useConfigStore

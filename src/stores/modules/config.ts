import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import { useDark, useToggle } from '@vueuse/core'

const useConfigStore = defineStore(
  'config',
  () => {

    const isDark = useDark()
    const toggleDark = useToggle(isDark)

    return {
      isDark,
      toggleDark,
    }
  },
  { persist: true },
)

export default useConfigStore

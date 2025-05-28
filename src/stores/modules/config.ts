import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useDark, useToggle } from '@vueuse/core'

export type LanguageType = 'zh-CN' | 'en-US'

const useConfigStore = defineStore(
  'config',
  () => {

    const isDark = useDark()
    const toggleDark = useToggle(isDark)

    const language = ref<LanguageType>('zh-CN')

    const changeLanguage = (val: LanguageType) => {
      language.value = val
    }

    return {
      isDark,
      language,
      toggleDark,
      changeLanguage
    }
  },
  { persist: true },
)

export default useConfigStore

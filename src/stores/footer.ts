import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useFooter = defineStore('counter', () => {
  const active = ref('home')

  function setActive(newActive: string) {
    active.value = newActive
  }

  return { active, setActive }
})

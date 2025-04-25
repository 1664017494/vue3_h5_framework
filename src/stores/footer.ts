import { ref, watch } from 'vue'
import { defineStore } from 'pinia'
import { useRoute } from 'vue-router'

export const useFooter = defineStore('counter', () => {
  const route = useRoute()
  const active = ref('home')
  const show = ref(false)

  const whiteList = ['home', 'setting']

  watch(route, () => {
    show.value = typeof route.name === 'string' && whiteList.includes(route.name)
  })

  function setActive(newActive: string) {
    active.value = newActive
  }

  return { active, show, setActive }
})

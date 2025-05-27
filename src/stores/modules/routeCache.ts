import { defineStore } from 'pinia'
import type { RouteRecordName, RouteLocationNormalizedGeneric } from 'vue-router'
import { ref } from 'vue'

const useRouteCacheStore = defineStore('route-cache', () => {
  const routeCaches = ref<RouteRecordName[]>([])

  const addRoute = (route: RouteLocationNormalizedGeneric) => {
    if (routeCaches.value.includes(route.name))
      return

    if (route?.meta?.keepAlive) {
      routeCaches.value.push(route.name)
    }
  }

  return {
    routeCaches,
    addRoute,
  }
})

export default useRouteCacheStore

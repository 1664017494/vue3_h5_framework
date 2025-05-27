<template>
  <div class="base-layout">
    <div class="view-area" :style="styleObject">
      <router-view v-slot="{ Component }">
        <keep-alive :include="['setting']">
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </div>
    <Footer></Footer>
  </div>
</template>

<script lang="ts" setup>
import Footer from '../components/Footer.vue'
import { computed } from 'vue'
import useConfig from '../stores/modules/config'
import useRouteCacheStore from '@/stores/modules/routeCache'

const config = useConfig()
const routeCacheStore = useRouteCacheStore()

const styleObject = computed(() => ({
  backgroundColor: config.theme === 'dark' ? '#222' : undefined,
  flex: 1
}))

</script>

<style lang="less" scoped>
.base-layout {
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>

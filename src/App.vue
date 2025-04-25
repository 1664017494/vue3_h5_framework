<script setup lang="ts">
import { RouterView } from 'vue-router'
import Footer from './components/Footer.vue'
import { useConfig } from './stores/config'
import { computed } from 'vue'

const config = useConfig()

const styleObject = computed(() => ({
  backgroundColor: config.theme === 'dark' ? '#222' : undefined,
}))
</script>

<template>
  <van-config-provider :theme="config.theme">
    <div class="view-area" :style="styleObject">
      <RouterView />
    </div>

    <Footer></Footer>
  </van-config-provider>
</template>

<style scoped lang="less">
.van-config-provider {
  width: 100%;
  height: 100%;
}
.view-area {
  height: calc(100% - 50px);
}
</style>

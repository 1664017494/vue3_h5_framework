<script setup lang="ts">
import { RouterView } from 'vue-router'
import Footer from './components/Footer.vue'
import { useConfig } from './stores/config'
import { computed } from 'vue'
import { useFooter } from './stores/footer'

const config = useConfig()
const { show } = useFooter()

const styleObject = computed(() => ({
  backgroundColor: config.theme === 'dark' ? '#222' : undefined,
  height: `calc(100% - ${show ? '50px' : '0px'})`,
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
</style>

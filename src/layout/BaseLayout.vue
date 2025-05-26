<template>
  <div class="base-layout">
    <div class="view-area" :style="styleObject">
      <RouterView />
    </div>
    <Footer></Footer>
  </div>
</template>

<script lang="ts" setup>
import Footer from '../components/Footer.vue'
import { computed } from 'vue'
import useConfig from '../stores/modules/config'

const config = useConfig()

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

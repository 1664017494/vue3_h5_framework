<script setup lang="ts">
import { RouterView } from 'vue-router'
import useConfig from './stores/modules/config'
import { computed } from 'vue'

const config = useConfig()

const theme = computed(() => config.isDark ? "dark" : 'light')
</script>

<template>
  <van-config-provider :theme="theme">
    <RouterView />
  </van-config-provider>
</template>

<style scoped lang="less">
.van-config-provider {
  height: 100dvh;
}
</style>

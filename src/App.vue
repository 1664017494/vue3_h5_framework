<script setup lang="ts">
import { RouterView } from 'vue-router'
import useConfig from './stores/modules/config'

const config = useConfig()
</script>

<template>
  <van-config-provider :theme="config.theme">
    <RouterView />
  </van-config-provider>
</template>

<style scoped lang="less">
.van-config-provider {
  height: 100dvh;
}
</style>

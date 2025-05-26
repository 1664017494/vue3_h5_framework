<template>
  <van-tabbar :route="true">
    <van-tabbar-item v-for="item in tabbarItemList" :key="item.name" v-bind="item">{{
      item.name
      }}</van-tabbar-item>
  </van-tabbar>
</template>

<script setup lang="ts">
import type { TabbarItemProps } from 'vant'
import { reactive } from 'vue'

defineOptions({
  name: 'home-footer',
})

const tabbarItemList = reactive<TabbarItemProps[]>([
  {
    dot: false,
    replace: true,
    to: '/home',
    icon: 'home-o',
    name: '主页',
  },
  {
    dot: false,
    replace: true,
    to: '/setting',
    icon: 'setting-o',
    name: '设置',
  },
])
</script>

<style scoped lang="less">
.van-tabbar {
  position: relative;
  box-shadow: 5px 5px 10px 2px rgba(0, 0, 0, 0.3);
}
</style>

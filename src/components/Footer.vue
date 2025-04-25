<template>
  <van-tabbar :route="true" v-if="user.isLogin && show">
    <!-- <van-tabbar-item replace to="/home" icon="home-o">主页</van-tabbar-item>
    <van-tabbar-item replace to="/setting" icon="setting-o">设置</van-tabbar-item> -->
    <van-tabbar-item v-for="item in tabbarItemList" :key="item.to" v-bind="item">{{
      item.name
    }}</van-tabbar-item>
  </van-tabbar>
</template>

<script setup lang="ts">
import { useUserStore } from '@/stores/user'
import type { TabbarItemProps } from 'vant'
import { computed, reactive } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const { user } = useUserStore()

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

const whiteList = ['home', 'setting']

const show = computed(() => typeof route.name === 'string' && whiteList.includes(route.name))
</script>

<style scoped lang="less">
.van-tabbar {
  box-shadow: 5px 5px 10px 2px rgba(0, 0, 0, 0.3);
}
</style>

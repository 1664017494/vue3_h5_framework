<template>
  <van-tabbar :route="true" v-if="user.isLogin && footer.show">
    <!-- <van-tabbar-item replace to="/home" icon="home-o">主页</van-tabbar-item>
    <van-tabbar-item replace to="/setting" icon="setting-o">设置</van-tabbar-item> -->
    <van-tabbar-item v-for="item in tabbarItemList" :key="item.to" v-bind="item">{{
      item.name
    }}</van-tabbar-item>
  </van-tabbar>
</template>

<script setup lang="ts">
import { useFooter } from '@/stores/footer'
import { useUserStore } from '@/stores/user'
import type { TabbarItemProps } from 'vant'
import { reactive } from 'vue'
const { user } = useUserStore()
const footer = useFooter()

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
  box-shadow: 5px 5px 10px 2px rgba(0, 0, 0, 0.3);
}
</style>

<template>
  <van-tabbar :route="true">
    <van-tabbar-item replace to="/home" icon="home-o">主页</van-tabbar-item>
    <!-- <van-tabbar-item replace to="search" icon="search">查询</van-tabbar-item>
    <van-tabbar-item replace to="friends" icon="friends-o">好友</van-tabbar-item> -->
    <van-tabbar-item replace to="/setting" icon="setting-o">设置</van-tabbar-item>
  </van-tabbar>
</template>

<script setup lang="ts">
defineOptions({
  name: 'home-footer',
})
</script>

<style scoped></style>

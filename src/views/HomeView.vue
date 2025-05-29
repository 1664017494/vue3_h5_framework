<script setup lang="ts">
import { ref } from 'vue';
import BasketballNews from './home/BasketballNews.vue';

const active = ref('')
</script>

<template>
  <van-tabs v-model:active="active" swipeable>
    <van-tab :title="'篮球'">
      <BasketballNews></BasketballNews>
    </van-tab>
  </van-tabs>
</template>

<style scoped lang="less">
.container {
  width: 100%;
  height: 100%;
}
</style>

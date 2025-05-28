<template>
  <van-tabbar :route="true">
    <van-tabbar-item v-for="item in tabbarItemList" :key="item.name" v-bind="item">{{
      item.name
    }}</van-tabbar-item>
  </van-tabbar>
</template>

<script setup lang="ts">
// import type { TabbarItemProps } from 'vant'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

defineOptions({
  name: 'home-footer',
})

const { t } = useI18n()

const tabbarItemList = computed(() => {
  return [
    {
      dot: false,
      replace: true,
      to: '/home',
      icon: 'home-o',
      name: t('common.home'),
    },
    {
      dot: false,
      replace: true,
      to: '/setting',
      icon: 'setting-o',
      name: t('common.setting'),
    },
  ]
})
</script>

<style scoped lang="less">
.van-tabbar {
  position: relative;
  box-shadow: 5px 5px 10px 2px rgba(0, 0, 0, 0.3);
}
</style>

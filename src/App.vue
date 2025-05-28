<script setup lang="ts">
import { RouterView } from 'vue-router'
import useConfig, { type LanguageType } from './stores/modules/config'
import { computed, watch } from 'vue'
import { Locale } from 'vant';
// 引入英文语言包
import enUS from 'vant/es/locale/lang/en-US';
import zhCN from 'vant/es/locale/lang/zh-CN';
import { useI18n } from 'vue-i18n';

const config = useConfig()
const i18n = useI18n()

const theme = computed(() => config.isDark ? "dark" : 'light')

watch(() => config.language, (lang: LanguageType) => {
  // 设置 vue 的国际化
  i18n.locale.value = lang
  // 设置 vant 的国际化
  Locale.use(lang, lang === 'zh-CN' ? zhCN : enUS)
}, { immediate: true }) // immediate:true 可以在组件挂架的时候立即执行一次


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

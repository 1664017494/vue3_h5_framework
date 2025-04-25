<script setup lang="ts">
import { useConfig } from '@/stores/config'
import { computed } from 'vue'

defineOptions({
  name: 'settingView',
})

const config = useConfig()

const isDark = computed(() => config.theme === 'dark')
</script>

<template>
  <van-nav-bar title="设置" />
  <van-cell-group inset>
    <van-cell is-link to="/setting/userInfo" center>
      <template #title>
        <van-image
          round
          width="88px"
          height="88px"
          src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
        />
      </template>
    </van-cell>
  </van-cell-group>
  <van-cell-group inset title="基本配置">
    <van-cell title="修改信息" is-link to="/setting/user" />
    <van-cell title="暗黑主题" icon="shop-o">
      <!-- 使用 right-icon 插槽来自定义右侧图标 -->
      <template #right-icon>
        <van-switch v-model="isDark" @change="config.toggleTheme" />
      </template>
    </van-cell>
  </van-cell-group>
</template>

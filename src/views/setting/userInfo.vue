<template>
  <van-nav-bar title="个人信息" left-text="返回" left-arrow @click-left="back" />
  <div class="container">
    <van-image round width="240px" height="240px" src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" />
  </div>
  <div :style="styleObj">用户很懒，什么也没写</div>
</template>

<script setup lang="ts">
import useConfig from '@/stores/modules/config'
import { reactive } from 'vue'
import { useRouter } from 'vue-router'

const config = useConfig()
const router = useRouter()

const back = () => {
  router.back()
}

const styleObj = reactive({
  color: config.isDark ? '#fff' : '#000',
})
</script>

<style scoped lang="less">
.container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 16px 0;
}
</style>

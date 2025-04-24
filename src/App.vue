<script setup lang="ts">
import { RouterView } from 'vue-router'
import Footer from './components/Footer.vue'
import { useUserStore } from './stores/user'

const { user } = useUserStore()
</script>

<template>
  <div class="view-area">
    <RouterView />
  </div>

  <Footer v-if="user.isLogin"></Footer>
</template>

<style scoped lang="less">
.view-area {
  height: calc(100% - 50px);
}
</style>

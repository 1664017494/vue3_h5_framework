<template>
  <div class="base-layout">
    <div class="view-area">
      <router-view v-slot="{ Component }">
        <keep-alive :include="['setting']">
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </div>
    <Footer></Footer>
  </div>
</template>

<script lang="ts" setup>
import Footer from '../components/Footer.vue'

</script>

<style lang="less" scoped>
.base-layout {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.view-area {
  flex: 1;
  min-height: 0;
  overflow: auto;
}
</style>

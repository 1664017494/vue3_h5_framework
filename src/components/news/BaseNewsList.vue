<template>
  <div v-if="props.newsList.length > 0">
    <van-list v-model:loading="loading" :finished="props.finished" finished-text="没有更多了" @load="onLoad">
      <BaseNewsItem v-for="news in props.newsList" :key="news.newsId" :news="news"></BaseNewsItem>
    </van-list>

  </div>
  <div v-else>No Data</div>
</template>

<script setup lang="ts">
import BaseNewsItem from './BaseNewsItem.vue';

const loading = defineModel('loading', { type: Boolean })
const emit = defineEmits(["onLoad"]);

const props = defineProps<{
  newsList: IBaseNewsItem[],
  finished: boolean
}>()

const onLoad = () => {
  emit('onLoad')
};
</script>

<style lang="less" scoped></style>

<template>
  <div class="news-container">
    <div class="left">
      <van-image width="100" height="100" :src="prop.news.imgUrl" />
    </div>
    <div class="right">
      <div class="title">{{ prop.news.title }}</div>
      <MutiLineEllipsisText class="content" :content="prop.news.content" :line-clamp="2"></MutiLineEllipsisText>
      <div class="oper-line">
        <van-icon name="eye-o" /> 123456
        <van-icon name="more-o" /> 456
        <van-icon name="star" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import MutiLineEllipsisText from '../ellipsis/MutiLineEllipsisText.vue';

const prop = defineProps<{
  news: IBaseNewsItem
}>()

</script>

<style lang="less" scoped>
.news-container {
  display: flex;
  flex-direction: row;
  padding: 8px;
  gap: 8px;
  height: 116px;

  .left {
    width: fit-content;
  }

  .right {
    min-width: 0;
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 2px;

    .title {
      font-size: 16px;
    }

    .content {
      font-size: 12px;
    }

    .oper-line {
      height: fit-content;
      font-size: 8px;
    }
  }
}
</style>

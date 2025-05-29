<template>
  <BaseNewsList :newsList="basketballNews" v-bind:loading="loading" :finished="finished" @load="onLoad">
  </BaseNewsList>
</template>

<script setup lang="ts">
import BaseNewsList from '@/components/news/BaseNewsList.vue';
import { ref } from 'vue';

const basketballTempNews = [
  {
    newsId: 1,
    title: "科比怒砍42分，湖人大胜黄蜂",
    content: '科比怒砍42分，湖人大胜黄蜂科比怒砍42分，湖人大胜黄蜂科比怒砍42分，湖人大胜黄蜂科比怒砍42分，湖人大胜黄蜂科比怒砍42分，湖人大胜黄蜂科比怒砍42分，湖人大胜黄蜂',
    imgUrl: 'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg'
  },
  {
    newsId: 2,
    title: "詹姆斯23分三节打卡，骑士大胜奇才",
    content: '詹姆斯23分三节打卡，骑士大胜奇才詹姆斯23分三节打卡，骑士大胜奇才詹姆斯23分三节打卡，骑士大胜奇才詹姆斯23分三节打卡，骑士大胜奇才詹姆斯23分三节打卡，骑士大胜奇才詹姆斯23分三节打卡，骑士大胜奇才',
    imgUrl: 'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg'
  },
  {
    newsId: 3,
    title: "皮尔斯高效砍下28分，凯尔特人赢掘金",
    content: '皮尔斯高效砍下28分，凯尔特人赢掘金皮尔斯高效砍下28分，凯尔特人赢掘金皮尔斯高效砍下28分，凯尔特人赢掘金皮尔斯高效砍下28分，凯尔特人赢掘金皮尔斯高效砍下28分，凯尔特人赢掘金',
    imgUrl: 'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg'
  },
  {
    newsId: 4,
    title: "韦德39分赢森林狼",
    content: '韦德39分赢森林狼',
    imgUrl: 'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg'
  },
  {
    newsId: 5,
    title: "灰熊胜马刺，双熊合砍60分",
    content: '灰熊胜马刺，双熊合砍60分',
    imgUrl: 'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg'
  },
]

const basketballNews = ref<IBaseNewsItem[]>(basketballTempNews)


const loading = ref(false);
const finished = ref(false);
const time = ref(0)

const onLoad = () => {
  try {
    // 异步更新数据
    // setTimeout 仅做示例，真实场景中一般为 ajax 请求
    setTimeout(() => {
      console.log("timeout");
      time.value++
      for (let i = 0; i < 10; i++) {
        const ramdomIndex = Math.floor(Math.random() * 5)

        console.log("@@@-ramdomIndex", ramdomIndex);


        basketballNews.value.push({
          ...basketballTempNews[ramdomIndex],
          newsId: basketballTempNews[ramdomIndex].newsId + time.value + ramdomIndex
        });
      }

      // 加载状态结束
      loading.value = false;

      // 数据全部加载完成
      if (basketballNews.value.length >= 40) {
        console.log("over");

        finished.value = true;
      }
    }, 1000);
  } catch (error) {
    console.log("@@@", error);

  }
};

</script>

<style lang="less" scoped></style>

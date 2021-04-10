<template>
  <div class="news">
    <news-listitem v-for="(item,index) in news" :key="index" :NewsItem="item"/>
  </div>
</template>

<script>
import NewsListitem from "@/components/content/news/NewsListitem";
export default {
name: "NewsList",
  components: {
    NewsListitem
  },
  props: {
  news: {
    type: Array,
    default() {
      return []
    }
  }
  }
}
</script>

<style scoped>
  .news{
    width: 100%;
    margin-bottom: 10px;
    margin-top: 10px;
  }

</style>

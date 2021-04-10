<template>
  <div class="news_style">
    <a :href="NewsItem.url">
      <div class="news_font_style">
        <h3>{{NewsItem.title}}</h3>
        <span>{{NewsItem.author_name}}</span>
        <span>{{NewsItem.category}}</span>
        <p class="right">{{NewsItem.date}}</p>
      </div>
      <img :src="NewsItem.thumbnail_pic_s" alt="" @load="imageLoad">
    </a>

  </div>
</template>

<script>
export default {
  name: "NewsListitem",
  props: {
    NewsItem: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    imageLoad() {
      this.$bus.$emit('itemimageLoad')
    }
  }
}
</script>

<style scoped>
  .news_style {
    width: 100%;
    border-bottom: #666666 solid 1px;
    margin-top: 10px;
    padding-bottom: 5px;
  }
  .news_style h3 {
    line-height: 26px;
  }
  .news_style span {
    font-size: 12px;
    color: var(--color-text);
    padding: 3px;
    margin: 3px;
    background-color: rgba(100,100,100,.1);
  }
  .news_style p{
    font-size: 12px;
  }
  .news_style img {
    padding: 3px;
    margin-top: 3px;
    width: 100%;
  }
  .news_font_style {
    margin: 5px;
  }
</style>

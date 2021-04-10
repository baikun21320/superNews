<template>
  <div class="recommend" v-if="recommends.length>1">
    <div v-for="(item,index) in recommends" class="recommed-item" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeRecommendView",
  props:{
    recommends: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
  .recommend {
    display: flex;
    text-align: center;
    font-size: 12px;
    padding: 10px 0 20px;
    border-bottom: 10px solid #eee;
  }
  .recommed-item {
    flex: 1; /* 均等分*/
  }
  .recommed-item img{
    flex: 1; /* 均等分*/
    width: 68px;
    height: 68px;
    margin-bottom: 10px;
  }
</style>

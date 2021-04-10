<template>
  <div>
    <!--    //第一个轮播 加了v-if 判断，可以实现 loop 轮循-->
    <swiper v-if="banners.length>1" :options="swiperOption" ref="mySwiper" class="swiper-box">
      <!-- slides -->
      <swiper-slide v-for="(m,index) in banners" :key="index">
        <a :href="m.link">
          <img :src="m.image" alt="" @load="imageLoad">
        </a>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
//前提你已经下载好vue-awesome-swiper,swiper.min.css 引入
import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.min.css'
Vue.use(VueAwesomeSwiper)

export default{
  components: {
    swiper:VueAwesomeSwiper.swiper,
    swiperSlide:VueAwesomeSwiper.swiperSlide
  },
  props: {
    banners: {
      type: Array,
      default() {
        return []
      }
    },
  },
  data(){
    return{
//配置
      swiperOption: {
        loop : true,
        speed: 100,
        notNextTick: true,
        preloadImages: false,
        pagination: {
          el: '.swiper-pagination',
        },
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: false
        },
        paginationClickable :true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
      isLoad: false
    }
  },
  beforeCreate:function(){
  },
  created:function(){
    //1.请求多个数据
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  },
  methods: {
    imageLoad() {
      if(!this.isLoad) {
        this.$emit('swiperImageLoad')
      }
      this.isLoad = true
    }
  }

}

</script>
<style scoped>
.recommendPage .swiper-container{
  position: relative;
  width: 100%;
  height: 200px;
}
img {
  width: 100%;
}
.recommendPage .swiper-container .swiper-slide{
  width: 100%;
  line-height: 200px;
  background: yellowgreen;
  color: #000;
  font-size: 16px;
  text-align: center;
}
</style>

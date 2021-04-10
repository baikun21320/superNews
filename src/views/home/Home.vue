<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <tab-control :titles="['最新','时尚','娱乐']"
                 @tabClick="tabClick"
                 ref="tabControl1"
                 class="tab-control"
                 v-show="isTabFixed"/>
    <scroll class="content"
            :probe-type="3"
            ref="scroll"
            @scroll="contentScroll"
            :pull-up-load="true"
            :pull-down-refresh="true"
            @pullingUp="loadmore"
            @pullingDown="refresh">
      <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"/>
      <home-recommend-view :recommends="recommends"/>
      <tab-control :titles="['最新','时尚','娱乐']"
                   @tabClick="tabClick"
                    ref="tabControl2"/>
      <news-list :news="news[currentType].list"/>
      <ul>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
        <li>kkk</li>
      </ul>
    </scroll>
    <back-top @click.native="backClick" v-show="isShowTop" ref="backtop"/>
  </div>

</template>

<script>
import HomeSwiper from "@/views/home/childComps/HomeSwiper";
import HomeRecommendView from "@/views/home/childComps/HomeRecommendView";

import NavBar from "@/components/common/navbar/NavBar";
import TabControl from "@/components/content/tabControl/TabControl";
import NewsList from "@/components/content/news/NewsList";
import Scroll from "@/components/common/scroll/Scroll";
import BackTop from "@/components/content/backTop/BackTop";

import {getHomeMultidata, getHomenews} from "@/network/home";
import {debounce} from "@/common/utils";

export default {
  name: "Home",
  components: {
    HomeRecommendView,
    NavBar,
    HomeSwiper,
    TabControl,
    NewsList,
    Scroll,
    BackTop
  },
  data() {
    return {
      banners: [],
      recommends: [],
      news: {    //请求数据模式
        'top': {page: 0, list: []},
        'shishang': {page: 0, list: []},
        'yule': {page: 0, list: []},
      },
      currentType: 'top',
      isShowTop: true,
      tabOffsetTop: 0,
      backtopPosition: 0,
      load: false,
      isTabFixed: false,
      saveY: 0,
      isLoading: false
    }
  },
  created() {
    //1.请求多个数据
    this.getHomeMultidata()
    //请求新闻数据
    this.getHomenews('top')
    // this.getHomenews('yule')
    // this.getHomenews('shishang')
    //监听item中的图片加载完成

  },
mounted() {
  const refresh = debounce(this.$refs.scroll.refresh, 50)
  this.$bus.$on('itemimageLoad', ()=> {
    refresh()
  })
},
  activated() {  //进入页面
    this.$refs.scroll.scrollTo(0,this.saveY,0)
    this.$refs.scroll.refresh()
  },
  deactivated() {   //离开页面
    this.saveY = this.$refs.scroll.getScrollY()
  },
  methods: {
    /*
    * 事件监听
    * */

    tabClick(index) {   //分类点击
      switch (index) {
        case 0 :
          this.currentType = 'top'
              break
        case 1 :
          this.currentType = 'shishang'
          break
        case 2 :
          this.currentType = 'yule'
          break
      }
      this.$refs.tabControl1.currentIndex = index
      this.$refs.tabControl2.currentIndex = index
    },
    //回到顶部
    backClick() {
      this.$refs.scroll.scrollTo(0,0,500)
    },
    contentScroll(position) {
      //判断Backtop是否显示
      this.isShowTop = (-position.y) > 1000
      //决定tabcontrol是否吸顶
      this.isTabFixed = (-position.y) > this.tabOffsetTop
    },
    //图片加载  $el用于获取组件的元素
    swiperImageLoad() {
      // console.log(this.$refs.tabControl.$el.offsetTop);
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
    },

    //上拉加载
    loadmore(){
      this.isLoading = false
      this.$refs.scroll.$emit('infinitescroll.reInit');
      this.$refs.scroll.$emit('infinitescroll.loading');
      this.getHomenews(this.currentType)
      if(!this.isLoading) {
        setTimeout(()=>{
          if(!this.isLoading) {
            this.$refs.scroll.$emit('infinitescroll.loadedDone');
            this.finishPullUp()
          }
        },2500)
      }
    },
    //下拉刷新
    refresh(){
      this.isLoading = false
      this.$refs.scroll.$emit('infinitescroll.downloading');
      console.log('shuaxing')
      this.news[this.currentType].page = 0
      this.news[this.currentType].list = []
      this.getHomenews(this.currentType)
      if(!this.isLoading) {
        setTimeout(()=>{
          if(!this.isLoading) {
            this.finishPullDown()
            this.$refs.scroll.$emit('infinitescroll.reInit');
          }
        },2500)
      }
    },
    /*
    * 网络请求
    * */
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        this.banners = res.data.data.banner.list;
        this.recommends = res.data.data.recommend.list;
      })
    },
    getHomenews(type) {
      const page = this.news[type].page + 1
      getHomenews(type,page).then(res => {
        // console.log(res.data.result.data);
        this.news[type].list.push(...res.data.result.data)
        // console.log(this.news[type].list);
        this.news[type].page += 1
        this.$refs.scroll.$emit('infinitescroll.reInit');
        this.isLoading =true
        this.finishPullUp()
        this.finishPullDown()
      })
    },
    //完成上拉加载
    finishPullUp() {
      this.$refs.scroll.finishPullUp()
    },
    finishPullDown() {
      this.$refs.scroll.finishPullDown()
    }
  }
}
</script>

<style scoped>
#home{
  height: 100vh;
  position: relative;
}
  .home-nav {
    background: var(--color-tint);
    color: #fff;
    z-index: 1;
  }
  .tab-control {
    position: relative;/*最新属性 判断是否fixed属性*/
    z-index: 9;
  }
  .content {
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
/*.content {*/
/*  height: calc(100% - 93px);*/
/*  overflow: hidden;*/
/*  !*margin-top: 44px;*!*/
/*}*/
</style>

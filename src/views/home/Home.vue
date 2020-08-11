<template>
  <div id="home">
    <nav-bar id="home-nav-bar">
      <template v-slot:center>
        <div>购物街</div>
      </template>
    </nav-bar>
    <home-tab-control
      ref="homeTabControl1"
      :cards="cards"
      :class="{showTab: true}"
      :style="{visibility: isShow}"
      @click="changeTab"
    ></home-tab-control>
    <scroll
      class="wrapper"
      ref="scroll"
      :probeType="3"
      :pullUpLoad="true"
      @contentScroll="contentScroll"
      @loadMore="loadMore"
    >
      <template>
        <home-swiper :banners="banners"></home-swiper>
        <home-recommend :recommends="recommends"></home-recommend>
        <home-feature></home-feature>
        <home-tab-control  ref="homeTabControl2" :cards="cards" @click="changeTab"></home-tab-control>
        <home-goods ref="goods" :type="type"></home-goods>
      </template>
    </scroll>
    <back-top @click.native="backClick" v-show="isBack"></back-top>
  </div>
</template>

<script>
import NavBar from "@/components/common/navBar/NavBar";
import Scroll from "@/components/common/scroll/Scroll";
import { debounce } from "@/components/common/utils";

import HomeTabControl from "@/components/content/tabControl/TabControl";
import BackTop from "@/components/content/backTop/BackTop";

import { getHomeMultidata } from "@/network/home";

import HomeSwiper from "./homeContent/HomeSwiper";
import HomeRecommend from "./homeContent/HomeRecommend";
import HomeFeature from "./homeContent/HomeFeature";
import HomeGoods from "./homeContent/HomeGoods";

export default {
  name: "Home",
  data() {
    return {
      banners: [],
      recommends: [],
      isBack: false,
      type: "fashion",
      height: 642,
      isShow: 'hidden',
      saveY: 0
    };
  },
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommend,
    HomeFeature,
    HomeTabControl,
    Scroll,
    BackTop,
    HomeGoods,
  },
  created() {
    //   生命周期函数，发起请求可以在组件创建完之后就发起
    this.getHomeData();
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh, 1000);
    this.$bus.$on("imgOnLoad", () => {
      // 防抖函数
      refresh();
    });
    
  },
  updated() {
    // this.$refs.scroll.scroll.refresh();
  },
  methods: {
    getHomeData() {
      let p = getHomeMultidata();
      p.then((res) => {
        this.banners = res.data.data.banner.list;
        this.recommends = res.data.data.recommend.list;
      });
      this.cards = [
        {
          type: "fashion",
          title: "流行",
        },
        {
          type: "news",
          title: "新款",
        },
        {
          type: "handpick",
          title: "精选",
        },
      ];
    },
    backClick() {
      this.$refs.scroll.scrollTo(0, 0, 1000);
    },
    contentScroll(position) {
      // console.log(window.innerHeight)
      this.isBack = Math.abs(position.y) > window.innerHeight ? true : false;
      // console.log(this.$refs.scroll.TabOffsetTop)
      this.isShow =  this.$refs.scroll.TabOffsetTop <= this.height ? 'hidden' : 'visible';
    },
    changeTab(index) {
      this.$refs.homeTabControl1.currentIndex = index;
      this.$refs.homeTabControl2.currentIndex = index;
      this.type = this.cards[index].type;
    },
    loadMore() {
      this.$refs.goods.getGoodsList(this.type);
      this.$refs.scroll.finishPullUp();
      // console.log(this.$refs.scroll.scroll);
    },
  },
  watch: {
    // [this.$refs.scroll.TabOffsetTop]() {
    //   console.log(this.$refs.scroll.TabOffsetTop)
    //   // this.isShow = this.$refs.scroll.TabOffsetTop == this.height
    // }
  },
  activated() {
    // 延迟bug 不要设置为 0ms 
    this.$refs.scroll.scrollTo(0, this.saveY, 1);
    this.$refs.scroll.refresh();
  },
  deactivated() {
    this.saveY = this.$refs.scroll.scroll.y;
  },
};
</script>

<style lang="less" scoped>
#home {
  padding-top: 44px;
  height: 100vh;
  position: relative;

  #home-nav-bar {
    color: #ffffff;
    font-size: 1.5rem;
    text-align: center;
    width: 100%;

    position: fixed;
    top: 0;
    left: 0;

    z-index: 9;
  }
  .showTab {
    position: fixed;
    left: 0;
    right: 0;
    top: 44px;
    z-index: 999;
  }

  .wrapper {
    position: absolute;
    top: 44px;
    bottom: 93px;
    // height: calc(100% - 93px);
    overflow: hidden;
  }
}
</style>
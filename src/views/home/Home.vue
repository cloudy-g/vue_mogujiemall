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
        <home-tab-control ref="homeTabControl2" :cards="cards" @click="changeTab"></home-tab-control>
        <home-goods ref="goods" :type="type"></home-goods>
      </template>
    </scroll>
    <back-top @click.native="backClick" v-show="isBack"></back-top>
  </div>
</template>

<script>
import NavBar from "@/components/common/navBar/NavBar";
import Scroll from "@/components/common/scroll/Scroll";

import HomeTabControl from "@/components/content/tabControl/TabControl";
import BackTop from "@/components/content/backTop/BackTop";

import { getHomeMultidata } from "@/network/home";
import { imgLoadMixin, backTopMixin } from "@/common/mixin";

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
      type: "fashion",
      saveY: 0,
     
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
  mixins: [imgLoadMixin, backTopMixin],
  created() {
    //   生命周期函数，发起请求可以在组件创建完之后就发起
    this.getHomeData();
  },
  deactived() {
    this.$bus.$off("imgOnLoad", this.imgRefresh);
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
    changeTab(index) {
      this.$refs.homeTabControl1.currentIndex = index;
      this.$refs.homeTabControl2.currentIndex = index;
      this.type = this.cards[index].type;
    },
    loadMore() {
      this.$refs.goods.getGoodsList(this.type);
      this.$refs.scroll.finishPullUp();
    },
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

    background-color: #ff8198;
  }
  .showTab {
    position: fixed;
    left: 0;
    right: 0;
    top: 44px;
    z-index: 9;
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
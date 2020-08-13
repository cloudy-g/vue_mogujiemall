<template>
  <div class="item-details">
    <details-nav-bar @scrollToPosition="scrollToPosition" class="nav-bar" :iid="iid"></details-nav-bar>
    <scroll class="content" ref="scroll" :probeType="3" @contentScroll="contentScroll">
      <details-slide :itemData="bannerItem"></details-slide>
      <details-item-info :info="itemInfo"></details-item-info>
      <details-shop-info :shop="shopInfo"></details-shop-info>
      <details-images :iamgeList="detailImages"></details-images>
      <details-item-params ref="params" :itemParams="itemParams"></details-item-params>
      <details-item-comments ref="comments" :itemComments="itemComments"></details-item-comments>
    </scroll>
    <back-top @click.native="backClick" v-show="isBack"></back-top>
    <details-tab-bar></details-tab-bar>
  </div>
</template>

<script>
import DetailsNavBar from "./childrenCom/DetailsNavBar";
import DetailsSlide from "./childrenCom/DetailsSlide";
import DetailsItemInfo from "./childrenCom/DetailsItemInfo";
import DetailsShopInfo from "./childrenCom/DetailsShopInfo";
import DetailsImages from "./childrenCom/DetailsImages";
import DetailsItemParams from "./childrenCom/DetailsItemParams";
import DetailsItemComments from "./childrenCom/DetailsItemComments";
import DetailsTabBar from "./childrenCom/DetailsTabBar";

import BackTop from "@/components/content/backTop/BackTop";
import Scroll from "@/components/common/scroll/Scroll";

import { getDetailsData } from "@/network/details";
import { imgLoadMixin, backTopMixin } from "@/common/mixin";

import {
  getBanners,
  getItemInfo,
  getShopInfo,
} from "@/components/content/transformData/detailsData.js";

export default {
  name: "Details",
  data() {
    return {
      iid: null,
      bannerItem: [],
      itemInfo: {},
      shopInfo: {},
      detailImages: [],
      itemParams: {},
      itemComments: {},
    };
  },
  components: {
    DetailsNavBar,
    DetailsSlide,
    DetailsItemInfo,
    DetailsShopInfo,
    Scroll,
    DetailsImages,
    DetailsItemParams,
    DetailsItemComments,
    BackTop,
    DetailsTabBar,
  },
  mixins: [imgLoadMixin, backTopMixin],
  created() {
    this.iid = this.$route.params.iid;
    this.getDetailsData(this.iid);
  },
  methods: {
    getDetailsData(iid) {
      getDetailsData(iid).then((res) => {
        let data = res.data.data.result;
        this.bannerItem.push(...getBanners(data));

        this.itemInfo = getItemInfo(data.itemInfo);

        this.shopInfo = getShopInfo(data.shopInfo);

        let list = data.detailInfo.detailImage[0].list;
        this.detailImages.push(...list);

        this.itemParams = data.itemParams.info;

        this.itemComments = data.rateInfo;
      });
    },
    getOffsetTop() {
      let comment = this.$refs.comments.$el.offsetTop;
      let params = this.$refs.params.$el.offsetTop;
      this.itemOffsetTopY.splice(0, 3, 0, params, comment);
    },
    scrollToPosition(index) {
      this.$refs.scroll.scrollTo(0, -this.itemOffsetTopY[index]+44, 100);
    },
  },
  watch: {
    $route(to, from) {
      this.iid = to.params.iid;
    },
  },
};
</script>

<style lang="less" scoped>
.item-details {
  position: relative;
  z-index: 999;
  background-color: #fff;
  height: 100vh;
  border-bottom: 1rem solid #cccccc;

  .content {
    height: calc(100% - 93px);
  }
}
</style>
<template>
  <div class="item-details">
    <details-nav-bar :iid="iid"></details-nav-bar>
    <details-slide :itemData="bannerItem"></details-slide>
    <details-item-info :info="itemInfo"></details-item-info>
    <details-shop-info :shop="shopInfo"></details-shop-info>
    <ul>
      <li>libioa1</li>
      <li>libioa2</li>
      <li>libioa3</li>
      <li>libioa4</li>
      <li>libioa5</li>
      <li>libioa6</li>
      <li>libioa7</li>
      <li>libioa8</li>
      <li>libioa9</li>
      <li>libioa10</li>
      <li>libioa11</li>
      <li>libioa12</li>
      <li>libioa13</li>
      <li>libioa14</li>
      <li>libioa15</li>
      <li>libioa16</li>
      <li>libioa17</li>
      <li>libioa18</li>
      <li>libioa19</li>
      <li>libioa20</li>
      <li>libioa21</li>
      <li>libioa22</li>
      <li>libioa23</li>
      <li>libioa24</li>
      <li>libioa25</li>
      <li>libioa26</li>
      <li>libioa27</li>
      <li>libioa28</li>
      <li>libioa29</li>
      <li>libioa30</li>
    </ul>
  </div>
</template>

<script>
import DetailsNavBar from "./childrenCom/DetailsNavBar";
import DetailsSlide from "./childrenCom/DetailsSlide";
import DetailsItemInfo from "./childrenCom/DetailsItemInfo";
import DetailsShopInfo from "./childrenCom/DetailsShopInfo";

import { getDetailsData } from "@/network/details";

import {
  getBanners,
  getItemInfo,
  getShopInfo
} from "@/components/content/transformData/detailsData.js";

export default {
  name: "Details",
  data() {
    return {
      iid: null,
      bannerItem: [],
      itemInfo: {},
      shopInfo: {}
    };
  },
  components: {
    DetailsNavBar,
    DetailsSlide,
    DetailsItemInfo,
    DetailsShopInfo
  },
  created() {
    this.iid = this.$route.params.iid;
    this.getDetailsData(this.iid);
  },
  activated() {},
  methods: {
    getDetailsData(iid) {
      getDetailsData(iid).then((res) => {
        let data = res.data.data.result;
        this.bannerItem.push(...getBanners(data));
        this.itemInfo = getItemInfo(data.itemInfo);
        this.shopInfo = getShopInfo(data.shopInfo);
      });
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
</style>
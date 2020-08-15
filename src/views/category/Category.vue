<template>
  <div class="category">
    <nav-bar class="category-nav-bar">
      <template v-slot:center>
        <div>商品分类</div>
      </template>
    </nav-bar>
    <div class="goods-category">
      <div class="category-list"></div>
      <div class="category-bar">
        <div class="category-tab-bar">
          <tab-control :cards="cards" @click="changeTab"></tab-control>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/common/navBar/NavBar";
import { tabControlMixin } from "@/common/mixin";

import BScroll from "better-scroll";

export default {
  name: "Category",
  data() {
    return {
      scroll: "",
    };
  },
  mixins: [tabControlMixin],
  components: {
    NavBar,
  },
};
</script>

<style lang="less" scoped>
.category {
  padding-top: 44px;
  .category-nav-bar {
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

  .goods-category {
    display: flex;
    height: 100vh;
    position: relative;

    .category-list {
      flex: 1;
      background-color: #cccccc;
    }

    .category-bar {
      flex: 3;
      .category-tab-bar {
        position: fixed;
        top: 44px;
        left: 25vw;
        right: 0;
      }
    }
  }
}
</style>
<template>
  <div class="goods-list">
    <goods-list :goodsList="goodsList[type].list"></goods-list>
  </div>
</template>

<script>
import GoodsList from "@/components/common/goods/GoodsList";

import { getHomeGoodsList } from "@/network/home";

export default {
  name: "Goods",
  data() {
    return {
      goodsList: {
        fashion: {
          page: 1,
          list: [],
        },
        news: {
          page: 1,
          list: [],
        },
        handpick: {
          page: 1,
          list: [],
        },
      },
    };
  },
  props: {
    type: {
      type: String,
    },
  },
  components: {
    GoodsList,
  },
  created() {
    this.getGoodsList("handpick");
    this.getGoodsList("news");
    this.getGoodsList("fashion");
  },
  updated() {
    //   this.getGoodsList(this.query.type, this.query.page);
  },
  methods: {
    getGoodsList(type) {
      let page = this.goodsList[type].page;
      if (page > 3) {
        return;
      }
      getHomeGoodsList(type, page).then((res) => {
        this.goodsList[type].list.push(...res.data.result.wall.docs);
        this.goodsList[type].page++;
      });
    },
  },
};
</script>

<style>
</style>
<template>
  <div class="home-news">
    <goods-list :goodsList="goodsList"></goods-list>
  </div>
</template>

<script>
import GoodsList from "@/components/common/goods/GoodsList";

import { getHomeGoodsList } from "@/network/home";

export default {
  name: "News",
  data() {
    return {
      goodsList: [],
    };
  },
  components: {
    GoodsList,
  },
  created() {
      this.getGoodsList('news', 1);
  },
  methods: {
    getGoodsList(type, page) {
      getHomeGoodsList(type, page).then((res) => {
        this.goodsList.push(...res.data.result.wall.docs);
      });
    },
  },
};
</script>

<style>
</style>
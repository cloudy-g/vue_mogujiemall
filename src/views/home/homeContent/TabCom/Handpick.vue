<template>
  <div class="home-handpick">
    <goods-list :goodsList="goodsList"></goods-list>
  </div>
</template>

<script>
import GoodsList from "@/components/common/goods/GoodsList";

import { getHomeGoodsList } from "@/network/home";

export default {
  name: "Handpick",
  data() {
    return {
      goodsList: [],
    };
  },
  components: {
    GoodsList,
  },
  created() {
      this.getGoodsList('handpick', 1);
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
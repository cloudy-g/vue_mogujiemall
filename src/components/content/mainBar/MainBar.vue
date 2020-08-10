<template>
  <tab-bar>
    <template>
      <tab-bar-item
        v-for="(item, index) in preference"
        :key="item.title"
        :link="item.path"
        :index="index"
        :activeColor="activeStyle"
      >
        <template v-slot:bar-icon>
          <img src="~@/assets/img/tabbar_img/logo.png" alt />
        </template>
        <template v-slot:bar-icon-active>
          <img src="~@/assets/img/tabbar_img/bilibilil.png" alt />
        </template>
        <template v-slot:bar-title="{actives}">
          <div :style="actives">{{item.title}}</div>
        </template>
      </tab-bar-item>
    </template>
  </tab-bar>
</template>

<script>
import TabBar from "@/components/common/tabBar/TabBar";
import TabBarItem from "@/components/common/tabBar/TabBarItem";

export default {
  name: "MainBar",
  data() {
      return {
          activeStyle: "#f40",
          preference: []
      }
  },
  props:{
      
  },
  computed: {
      
  },
  components: {
    TabBar,
    TabBarItem,
  },
  created() {
    let data = {
      details: [
        {
          title: "首页",
          path: "/home",
        },
        {
          title: "分类",
          path: "/category",
        },
        {
          title: "购物车",
          path: "/cart",
        },
        {
          title: "我的",
          path: "/profile",
        },
      ],
    };
    this.preference = data.details;
  }
};
</script>

<style>
</style>
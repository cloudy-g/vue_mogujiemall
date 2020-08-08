<template>
  <nav-bar id="home-nav-bar">
    <template v-slot:center>
      <div>购物街</div>
    </template>
  </nav-bar>
</template>

<script>
import NavBar from "@/components/common/navBar/NavBar.vue";
import { getHomeMultidata } from "@/network/home.js";

export default {
  name: "Home",
  data() {
      return {
          banners: [],
          recommends: []
      }
  },
  components: {
    NavBar,
  },
  created() {
    //   生命周期函数，发起请求可以在组件创建完之后就发起
    let p = getHomeMultidata();
    p.then((res) => {
        this.banners = res.data.data.banner.list;
        this.recommends = res.data.data.recommend.list;
        console.log(this.banners)
        console.log(this.recommends)
    });
  },
};
</script>

<style lang="less">
#home-nav-bar {
  color: #ffffff;
  font-size: 1.5rem;
  text-align: center;
}
</style>
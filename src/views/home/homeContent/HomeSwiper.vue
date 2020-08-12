<template>
  <div id="home-swiper">
    <swiper-tran :banners="banners"></swiper-tran>
  </div>
</template>

<script>
import SwiperTran from "@/components/common/carousel/SwiperTran";

export default {
  name: "HomeSwiper",
  data() {
    return {
      // srcPartic1: {
      //   src: "",
      //   link: "",
      // },
      // srcPartic2: {
      //   src: "",
      //   link: "",
      // },
      // singleWidth: 0,
    };
  },
  components: {
   SwiperTran
  },
  props: {
    banners: Array,
  },
  beforeUpdate() {
    // this.initImgs();
    // this.singleWidth = window.innerWidth;
  },
  methods: {
    // initImgs() {
    //   this.srcPartic1.src = this.banners[this.banners.length - 1].image;
    //   this.srcPartic1.link = this.banners[this.banners.length - 1].link;
    //   this.srcPartic2.src = this.banners[0].image;
    //   this.srcPartic2.link = this.banners[0].link;
    // },
  },
};
</script>

<style lang="less">
#home-swiper {
  height: 195px;
  width: 100%;
  position: relative;
}
</style>
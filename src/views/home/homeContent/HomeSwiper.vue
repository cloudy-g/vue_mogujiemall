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
    };
  },
  components: {
   SwiperTran
  },
  props: {
    banners: Array,
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
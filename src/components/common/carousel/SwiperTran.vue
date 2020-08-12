<template>
  <div class="swiper-tran">
    <swiper :imgs="banners" :singleWidth="singleWidth">
      <template v-slot:sliderShow>
        <swiper-item>
          <template v-slot:swiperItem>
            <a :href="srcPartic1.link">
              <img :src="srcPartic1.src" />
            </a>
          </template>
        </swiper-item>
        <swiper-item v-for="item in banners" :key="item.title">
          <template v-slot:swiperItem>
            <a :href="item.link">
              <img :src="item.image" />
            </a>
          </template>
        </swiper-item>
        <swiper-item>
          <template v-slot:swiperItem>
            <a :href="srcPartic2.link">
              <img :src="srcPartic2.src" />
            </a>
          </template>
        </swiper-item>
      </template>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "@/components/common/carousel";

export default {
  name: "SwiperTran",
  data() {
    return {
      srcPartic1: {
        src: "",
        link: "",
      },
      srcPartic2: {
        src: "",
        link: "",
      },
      singleWidth: 0,
    };
  },
  components: {
    Swiper,
    SwiperItem,
  },
  props: {
    banners: Array,
  },
  beforeUpdate() {
    this.initImgs();
    this.singleWidth = window.innerWidth;
  },
  methods: {
    initImgs() {
      this.srcPartic1.src = this.banners[this.banners.length - 1].image;
      this.srcPartic1.link = this.banners[this.banners.length - 1].link;
      this.srcPartic2.src = this.banners[0].image;
      this.srcPartic2.link = this.banners[0].link;
    },
  },
};
</script>

<style lang="less">
.swiper-tran{
    height: 100%;
    width: 100%;
}
</style>
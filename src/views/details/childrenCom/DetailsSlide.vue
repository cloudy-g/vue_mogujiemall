<template>
  <swiper-tran class="detail-item" :banners="imgs"></swiper-tran>
</template>

<script>
import SwiperTran from "@/components/common/carousel/SwiperTran";

export default {
  name: "DetailItem",
  data() {
    return {
      imgs: [],
    };
  },
  props: {
    itemData: Array,
  },
  components: {
    SwiperTran,
  },
  mounted() {},
  watch: {
    itemData(to, from) {
      this.imgs = to;
    },
  },
};
</script>

<style lang="less" scoped>
.detail-item {
  height: 300px;
}
</style>
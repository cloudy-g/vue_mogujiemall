<template>
  <swiper-tran class="detail-item" :banners="itemData"></swiper-tran>
</template>

<script>
import SwiperTran from "@/components/common/carousel/SwiperTran";

export default {
  name: "DetailItem",
  data() {
    return {
    };
  },
  props: {
    itemData: Array,
  },
  components: {
    SwiperTran,
  },
};
</script>

<style lang="less" scoped>
.detail-item {
  height: 300px;
  width: 100%;
}
</style>
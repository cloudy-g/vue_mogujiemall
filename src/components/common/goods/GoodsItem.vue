<template>
  <div class="goods-item" @click="itemClick">
    <div class="item-image">
      <img v-lazy="info.img" @load="imgLoad" />
    </div>
    <div class="item-info">
      <div class="item-desc">{{info.title}}</div>
      <div class="item-price">
        <div>
          <span class="item-price-current">{{info.price | priceFormat}}</span>
        </div>
        <div class="item-collect">
          <div class="item-cfav"></div>
          <div>{{info.cfav}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { priceFormat } from "@/common/utils";

export default {
  name: "GoodsItem",
  props: {
    info: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  filters: {
    priceFormat,
  },
  methods: {
    imgLoad() {
      this.$bus.$emit("imgOnLoad");
    },
    itemClick() {
      this.$router.push({
        path: `/home/${this.info.iid}`,
      });
    },
  },
};
</script>

<style lang="less">
.goods-item {
  display: flex;
  flex-direction: column;
  width: 48%;
  margin-top: 1rem;
  padding-bottom: 4rem;

  position: relative;
  box-shadow: 0 0 0.2rem rgba(100, 100, 100, 1);

  .item-image {
    img {
      width: 100%;
    }
  }

  .item-info {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;

    padding: 0 0.5rem 0.5rem;

    display: flex;
    flex-direction: column;

    .item-desc {
      flex: 1;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      margin: 1rem 0.2rem;
    }

    .item-price {
      flex: 1;
      display: flex;
      justify-content: space-between;

      .item-collect {
        display: flex;
        justify-content: space-around;

        .item-cfav {
          width: 1rem;
          height: 1rem;
          background-color: red;
          background: url("~@/assets/img/common/collect.svg");
          background-size: 1rem 1rem;
        }
      }

      .item-price-current {
        color: #f40;
      }
    }
  }
}
</style>
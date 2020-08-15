<template>
  <div class="item-box">
    <div class="cart-select">
      <div :class="{active: flag}" @click="changeClick(item)"></div>
    </div>
    <div class="cart-item-img">
      <img :src="item.img" alt />
    </div>
    <div class="cart-item-info">
      <div class="item-title">{{item.title}}</div>
      <div class="item-desc">{{item.desc}}</div>
      <div class="item-goods-price">
        <div class="item-price">{{item.lowNowPrice | priceFormat}}</div>
        <div class="item-num">×{{item.num}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { priceFormat } from "@/common/utils";

export default {
  name: "CartItme",
  data() {
    return {};
  },
  props: {
    item: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    flag() {
      let index;
      this.$store.state.cartList.some((el, i) => {
        if (el.iid == this.item.iid) {
          index = i;
          return true;
        }
        return false;
      });
      return this.$store.state.flagList[index];
    },
  },
  methods: {},
  filters: {
    priceFormat,
  },
  methods: {
    changeClick(item) {
      if (!this.flag) {
        this.$store.commit("inMoney", item);
      } else {
        this.$store.commit("deMoney", item);
      }
      this.$emit('noticeAll');
    },
  },
};
</script>

<style lang="less" scoped>
.item-box {
  width: 100%;
  display: flex;

  padding-bottom: 0.5rem;
  border-bottom: 1px solid #cccccc;

  .cart-select {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;

    div {
      width: 1rem;
      height: $width;
      border-radius: 1rem;
      border: 2px solid #cccccc;

      &.active {
        border: 2px solid transparent;
        background-color: #ff8198;
        background-image: url("~@/assets/img/cart/tick.svg");
        background-size: 1rem;
      }
    }
  }

  .cart-item-img {
    flex: 5;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 90%;
      border-radius: 1rem;
    }
  }

  .cart-item-info {
    flex: 10;
    width: 58%;
    padding: 1rem 1rem 0 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .item-title {
      font-size: 1.3rem;
      line-height: 1.3rem;
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .item-desc {
      margin-top: 1rem;
      flex: 2;
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .item-goods-price {
      flex: 1;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .item-price {
        font-size: 1.3rem;
        color: #ff4400;
      }
      .item-num {
        font-size: 1.3rem;
      }
    }
  }
}
</style>
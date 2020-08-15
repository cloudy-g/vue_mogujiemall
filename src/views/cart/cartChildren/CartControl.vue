<template>
  <div class="cart-control">
    <div class="cart-all-choose">
      <div :class="{active: flag}" @click="changeAll"></div>全选
    </div>
    <div class="cart-sum-price">合计:{{getSumMoney | priceFormat}}</div>
    <div class="cart-pay" @click="countMoney">去计算({{calcNum}})</div>
  </div>
</template>

<script>
import { priceFormat } from "@/common/utils";

import { mapGetters } from "vuex";

export default {
  name: "CartControl",
  data() {
    return {
      flag: false,
    };
  },
  props: {},
  filters: {
    priceFormat,
  },
  methods: {
    changeAll() {
      this.flag = !this.flag;
      this.$store.commit("changeAll", this.flag);
    },
    getFlag() {
      if (this.$store.state.flagList.length == 0) {
        this.flag = false;
      } else{
        this.flag = !(this.$store.state.flagList.some(el => el == false));
      }
    },
    countMoney() {
      if(this.calcNum == 0){
        this.$toast.show('请点击要购买的商品');
      }
    }
  },
  computed: {
    ...mapGetters(["getSumMoney", "calcNum"]),
  },
};
</script>

<style lang="less" scoped>
.cart-control {
  position: fixed;
  bottom: 49px;
  left: 0;
  right: 0;
  height: 3rem;
  display: flex;
  background-color: #eeeeee;

  .cart-all-choose {
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
        border: none;
        border: 2px solid transparent;
        background-color: #ff8198;
        background-image: url("~@/assets/img/cart/tick.svg");
        background-size: 1rem;
        background-repeat: no-repeat;
      }
    }
  }

  .cart-sum-price {
    flex: 2;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .cart-pay {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ff4400;
    color: #fff;
  }
}
</style>
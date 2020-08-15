<template>
  <div id="cart">
    <nav-bar class="cart-nav-bar">
      <template #center>
        <div class="cart-title">
          <div>购物车({{sum}})</div>
          <div class="cart-icon"></div>
        </div>
      </template>
    </nav-bar>
    <scroll class="content">
      <div v-if="isShow">
        <cart-item @noticeAll="noticeAll" :item="item" v-for="item in list" v-bind:key="item.iid"></cart-item>
      </div>
      <div v-else class="cart-empty">购物车是空的</div>
    </scroll>
    <cart-control ref="control"></cart-control>
  </div>
</template>

<script>
import NavBar from "@/components/common/navBar/NavBar";
import Scroll from "@/components/common/scroll/Scroll";

import CartItem from "./cartChildren/CartItem";
import CartControl from "./cartChildren/CartControl";

export default {
  name: "Cart",
  data() {
    return {
      sumMoney: 0,
    };
  },
  components: {
    NavBar,
    CartItem,
    CartControl,
    Scroll,
  },
  computed: {
    isShow() {
      return this.$store.state.cartList.length != 0;
    },
    list() {
      return this.$store.state.cartList;
    },
    sum() {
      return this.$store.state.cartList.length;
    },
  },
  updated() {
    this.noticeAll();
  },
  methods: {
    noticeAll() {
      this.$refs.control.getFlag();
    },
  },
};
</script>

<style lang="less" scoped>
#cart {
  width: 100%;
  height: 100vh;

  .cart-nav-bar {
    box-shadow: 0.1rem 0 0.1rem rgba(100, 100, 100, 0.5);
    background: #ff8198;
    color: #fff;
    position: fixed;
    z-index: 9;
    top: 0;

    .cart-title {
      display: flex;
      justify-content: center;
      font-size: 2rem;
      text-align: center;
    }
    .cart-icon {
      margin: 11px;
      width: 22px;
      height: 22px;
      background-image: url("~@/assets/img/detail/cart.svg");
      background-repeat: no-repeat;
      background-size: 22px;
    }
  }

  .content{
    position: relative;
    top: 44px;
    height: calc(100% - 44px - 49px - 3rem);
    overflow: hidden;
  }

  .cart-empty {
    margin: 5rem auto;
    font-size: 3rem;
    text-align: center;
  }
}
</style>
<template>
  <div>
    <img
      :class="{'animate-active': isAnimate, 'trans': isTran}"
      class="car-animate"
      :style="{display: show}"
      :src="imgSrc"
      alt
    />
    <div class="item-tabbar">
      <div class="item-tabbar-shop">
        <div class="item-tabbar-shop-bgc"></div>
        <div>客服</div>
      </div>
      <div class="item-tabbar-sevice">
        <div class="item-tabbar-sevice-bgc"></div>
        <div>店铺</div>
      </div>
      <div class="item-tabbar-cart-info" @click="jumpToCart">
        <div class="item-tabbar-cart-bgc">
          <div :style="{display: nums == 0 ? 'none' : 'block'}" class="item-cart-shoulder">{{nums}}</div>
        </div>
        <div>购物车</div>
      </div>
      <div class="item-tabbar-cart">
        <div @click="addToCart">加入购物车</div>
      </div>
      <div class="item-tabbar-buy">
        <div>立即购买</div>
      </div>
    </div>
  </div>
</template>

<script>
import { deepCopy } from "@/common/utils";

import { mapActions } from "vuex";

export default {
  name: "CartTabBar",
  data() {
    return {
      nums: 0,
      isAnimate: false,
      isTran: false,
      show: "none",
      timer: null,
    };
  },
  props: {
    product: {
      type: Object,
      default() {
        return {};
      },
    },
    imgSrc: {
      type: String,
      default: "",
    },
    iid: String,
  },
  methods: {
    ...mapActions(["addCart"]),
    addToCart() {
      this.product.img = this.imgSrc;
      this.product.iid = this.iid;
      this.product.lowNowPrice = 49 * (parseInt(Math.random() * 3) + 1);
      let commitProduct = deepCopy(this.product);
      // this.$store.dispatch({
      //   type: "addCart",
      //   product: commitProduct,
      // });
      // this.animate();
      this.addCart({ product: commitProduct }).then((res) => {
        this.animate(res);
      });
    },
    jumpToCart() {
      this.$router.push("/cart");
    },
    animate(res) {
      this.show = "block";
      setTimeout(() => {
        this.isTran = true;
      }, 10);
      setTimeout(() => {
        this.isAnimate = true;
      }, 500);
      this.timer = setTimeout(() => {
        this.isAnimate = false;
        this.isTran = false;
        this.show = "none";
        this.nums++;
        this.$toast.show(res);
      }, 1500);
    },
  },
};
</script>

<style lang="less" scoped>
.item-tabbar {
  height: 49px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  background-color: #fff;

  .item-tabbar-shop,
  .item-tabbar-sevice,
  .item-tabbar-cart-info {
    flex: 1;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .item-tabbar-shop-bgc {
    width: 22px;
    height: 22px;
    background-image: url("~@/assets/img/detail/detail_bottom.png");
    background-repeat: no-repeat;
    background-size: 22px;
    background-position: 0 -53px;
    overflow: hidden;
  }
  .item-tabbar-sevice-bgc {
    width: 22px;
    height: 22px;
    background-image: url("~@/assets/img/detail/detail_bottom.png");
    background-repeat: no-repeat;
    background-size: 22px;
    background-position: 0 -98px;
    overflow: hidden;
  }
  .item-tabbar-cart-bgc {
    width: 22px;
    height: 22px;
    background-image: url("~@/assets/img/detail/cart.svg");
    background-repeat: no-repeat;
    background-size: 22px;
    position: relative;

    .item-cart-shoulder {
      width: 15px;
      height: 15px;
      border-radius: 15px;
      background-color: red;
      color: #fff;
      text-align: center;
      font-size: 12px;
      line-height: 15px;

      position: relative;
      right: -15px;
      top: -5px;
    }
  }
  .item-tabbar-cart {
    flex: 2;
    display: flex;
    justify-content: center;
    align-items: center;

    div {
      width: 90%;
      height: 80%;
      text-align: center;
      line-height: calc(49px * 0.8);
      background-color: yellow;
      border-radius: 25px;
      color: #111;
    }
  }
  .item-tabbar-buy {
    flex: 2;
    display: flex;
    justify-content: center;
    align-items: center;

    div {
      width: 90%;
      height: 80%;
      text-align: center;
      line-height: calc(49px * 0.8);
      background-color: #eb4868;
      border-radius: 25px;
      color: #fff;
    }
  }
}

.car-animate {
  display: none;
  position: fixed;
  width: 100vw;
  top: 49px;
  left: 0;
  transition: all 0.5s ease-in;
}

.trans {
  top: 50vh;
  left: 40vw;
  width: 10vw;
}

.animate-active {
  animation: animat 1s cubic-bezier(0.9, 0.4, 0.3, 0.8);
}

@keyframes animat {
  0% {
    top: 50vh;
    left: 40vw;
    width: 10vw;
  }

  100% {
    top: 100vh;
    left: 40vw;
    width: 0;
  }
}
</style>
<template>
  <div class="item-tabbar">
    <div class="item-tabbar-shop">
        <div class="item-tabbar-shop-bgc"></div>
        <div>客服</div>
    </div>
    <div class="item-tabbar-sevice">
        <div class="item-tabbar-sevice-bgc"></div>
        <div>店铺</div>
    </div>
    <div class="item-tabbar-cfav">
        <div class="item-tabbar-cfav-bgc"></div>
        <div>收藏</div>
    </div>
    <div class="item-tabbar-cart">
      <span>加入购物车</span>
    </div>
    <div class="item-tabbar-buy">立即购买</div>
  </div>
</template>

<script>
export default {
  name: "DetailsTabBar",
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

  .item-tabbar-shop,
  .item-tabbar-sevice,
  .item-tabbar-cfav {
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
      background-image: url('~@/assets/img/detail/detail_bottom.png');
      background-repeat: no-repeat;
      background-size: 22px;
      background-position: 0 -53px;
      overflow: hidden;
  }
  .item-tabbar-sevice-bgc {
      width: 22px;
      height: 22px;
      background-image: url('~@/assets/img/detail/detail_bottom.png');
      background-repeat: no-repeat;
      background-size: 22px;
      background-position: 0 -98px;
       overflow: hidden;
  }
  .item-tabbar-cfav-bgc {
      width: 22px;
      height: 22px;
      background-image: url('~@/assets/img/detail/detail_bottom.png');
      background-repeat: no-repeat;
      background-size: 22px;
      background-position: 0 0px;
       overflow: hidden;
  }
  .item-tabbar-cart {
    flex: 2;
    background-color: yellow;
    text-align: center;
    line-height: 49px;
    font-size: 1.2rem;
    color: #111;
  }
  .item-tabbar-buy {
    flex: 2;
    background-color: #eb4868;
    text-align: center;
    line-height: 49px;
    font-size: 1.2rem;
    color: #fff;
  }
}
</style>
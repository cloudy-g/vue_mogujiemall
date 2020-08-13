<template>
  <div class="item-info">
    <div class="item-title">{{info.title}}</div>
    <div class="item-price">
      <div class="item-low-now-price">{{info.lowNowPrice | priceFil}}</div>
      <div class="item-low-price">{{info.lowPrice | priceFil}}</div>
      <div class="item-special">今日特价</div>
    </div>
    <div class="item-detail">
      <span>销量{{info.sales}}</span>
      <span>收藏{{info.cFav}}</span>
      <span>72小时发货</span>
    </div>
    <div class="item-commit">
      <div>
        <span class="check-number"></span>退货补运费
      </div>
      <div>
        <span class="check-number"></span>全国包邮
      </div>
      <div>
        <span class="check-number"></span>7天无理由退货
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailsItemInfo",
  props: {
    info: Object,
  },
  filters: {
    priceFil(price) {
      return `￥${price}`;
    },
  },
};
</script>

<style lang="less" scoped>
.item-info {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-bottom: 0.4rem solid #eee;

  .item-title {
    font-size: 1.5rem;
    font-weight: 550;
    color: #000;
  }

  .item-price {
    display: flex;
    margin: 1rem 0 ;
    .item-low-now-price {
      color: #f40;
      font-size: 2rem;
    }
    .item-low-price {
      text-decoration-line: line-through;
      text-align: bottom;
      height: 1rem;
      margin-top: 1rem;
      margin-left: 0.5rem;
    }
    .item-special {
      font-size: 1rem;
      color: #ffffff;
      background-color: #f40;
      margin-left: 0.5rem;
      border-radius: 0.75rem;
      text-align: center;
      height: 1.5rem;
      line-height: 1.5rem;
      padding: 0 0.3rem;
    }
  }

  .item-detail {
    display: flex;
    justify-content: space-between;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid #cccccc;
    margin-bottom: 1rem;
  }

  .item-commit {
    display: flex;
    justify-content: space-between;
    font-size: 1.1rem;
    color: #111;
    padding: 0.5rem 0;

    div {
      display: flex;

      .check-number {
        display: block;

        width: 1rem;
        height: 1rem;
        background-image: url("https://s10.mogucdn.com/mlcdn/c45406/180417_25kbfg1c3hdbd120394ji4b11bk2k_36x36.png_80x80.v1cAC.40.webp");
        background-size: 1rem 1rem;
        background-repeat: no-repeat;
      }
    }
  }
}
</style>
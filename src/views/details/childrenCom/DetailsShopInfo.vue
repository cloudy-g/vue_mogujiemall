<template>
  <div class="shop-info">
    <div class="shop-head">
      <div class="shop-logo">
        <img :src="shop.shopLogo" alt />
      </div>
      <div class="shop-name">{{shop.name}}</div>
    </div>
    <div class="shop-desc">
      <div class="shop-sells">
        <div>{{shop.cSells}}</div>
        <div class="shop-sells-desc">总销量</div>
      </div>
      <div class="shop-sells">
        <div>{{shop.cGoods}}</div>
        <div class="shop-sells-desc">全部宝贝</div>
      </div>
      <div class="line"></div>
      <div class="shop-desc-details">
        <div class="desc" v-for="item in shop.score" v-bind:key="item.name">
          <div class="shop-name">{{item.name}}</div>
          <div class="shop-score" :class="{colordes: item.score > 5}">{{item.score}}</div>
          <div class="shop-isbetter">
            <span :class="{bgColor: item.score > 5}">{{item.isBetter ? '高' : '低'}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailsShopInfo",
  data() {
    return {
      flag: true,
    };
  },
  props: {
    shop: {
      type: Object,
      default: {},
    },
  },
  mounted() {},
};
</script>

<style lang="less" scoped>
.shop-info {
  padding: 1rem;
  display: flex;
  flex-direction: column;

  .shop-head {
    display: flex;
    justify-content: flex-start;

    .shop-logo {
      width: 4rem;
      height: 4rem;
      img {
        width: 100%;
      }
    }
    .shop-name {
      margin-left: 1rem;
      font-size: 1.4rem;
      color: #666;
      line-height: 4rem;
    }
  }

  .shop-desc {
    display: flex;
    justify-content: space-around;
    padding: 2rem 0;
    text-align: center;

    .shop-sells {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      font-size: 1.5rem;

      .shop-sells-desc {
        margin-top: 0.5rem;
        font-size: 1rem;
      }
    }

    .line {
      height: 3rem;
      width: 0.1rem;
      margin: auto 0;
      background-color: #666;
    }

    .shop-desc-details {
      flex: 2;
      display: flex;
      flex-direction: column;
      justify-content: space-around;

      .desc {
        display: flex;
        font-size: 1rem;
        justify-content: space-around;
        text-align: center;

        div {
          flex: 1;
          text-align: center;
        }
        .shop-name {
          flex: 2;
          margin-left: 1rem;
        }
        .shop-isbetter {
          span {
            color: #ffffff;
            background-color: green;

            &.bgColor {
              background-color: #f40;
            }
          }
        }
        .shop-score {
          &.colordes {
            color: #f40;
          }
        }
      }
    }
  }
}
</style>
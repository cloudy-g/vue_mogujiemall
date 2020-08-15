<template>
  <div class="user-package">
    <div class="package-detail">
      <div class="detail-desc">
        <span>{{balance.toFixed(2)}}</span>
        <span class="desc-emb">元</span>
      </div>
      <div class="package-desc">我的余额</div>
    </div>
    <div class="package-detail">
      <div class="detail-desc">
        <span>{{discount}}</span>
        <span class="desc-emb">个</span>
      </div>
      <div class="package-desc">我的优惠</div>
    </div>
    <div class="package-detail">
      <div class="detail-desc">
        <span>{{integral}}</span>
        <span class="desc-emb">分</span>
      </div>
      <div class="package-desc">我的积分</div>
    </div>
  </div>
</template>

<script>
import { priceFormat } from "@/common/utils";

export default {
  name: "UserPackage",
  data() {
    return {
      balance: 0,
      discount: 0,
      integral: 0,
    };
  },
  filters: {
    priceFormat,
  },
};
</script>

<style lang="less" scoped>
.user-package {
  display: flex;

  .package-detail {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &:not(:last-child) {
      border-right: 1px solid #cccccc;
    }

    .detail-desc {
      margin-top: 2rem;
      color: #ff4400;
      font-size: 2rem;

      span.desc-emb {
        font-size: 1rem;
        color: #111;
      }
    }

    .package-desc {
      margin: 1rem;
    }
  }
}
</style>
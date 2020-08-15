<template>
  <div>
    <div class="profile-list">
      <div class="list-item">
        <img src="~@/assets/img/profile/message.svg" alt />
        <div class="item-desc">我的消息</div>
      </div>
      <div class="list-item">
        <img src="~@/assets/img/profile/pointer.svg" alt />
        <div class="item-desc">积分商城</div>
      </div>
      <div class="list-item">
        <img src="~@/assets/img/profile/vip.svg" alt />
        <div class="item-desc item-desc-last">会员卡</div>
      </div>
    </div>
    <div class="profile-list">
      <div class="list-item">
        <img src="~@/assets/img/profile/shopping.svg" alt />
        <div class="item-desc">积分商城</div>
      </div>
      <div class="list-item">
        <img src="~@/assets/img/profile/cart.svg" alt />
        <div class="item-desc">我的购物车</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.profile-list {
  border-top: 1rem solid #cccccc;
  padding: 1rem 0 1rem 1rem;

  .list-item {
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      height: 1.5rem;
    }
    .item-desc {
      flex: 1;
      margin-left: 1rem;
      margin-top: 1rem;
      font-size: 1.2rem;
      padding-bottom: 1rem;
      border-bottom: 1px solid #cccccc;
    }

    .item-desc-last {
      border: none;
    }
  }
}
</style>
<template>
  <div class="profile-user">
    <div class="login-loading">
      <img src="~@/assets/img/profile/avatar.svg" alt />
    </div>
    <div class="login-btn">
      <div class="login">登录/注册</div>
      <div class="iphone">
        <img src="~@/assets/img/profile/phone.svg" alt />
        <span>暂无绑定手机号</span>
      </div>
    </div>
    <div class="login-arrow">→</div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.profile-user {
  padding: 0.7rem;
  display: flex;
  background-color: #ff8198;

  .login-loading {
    width: 20%;
    img {
      width: 100%;
      height: 100%;
      border-radius: 5rem;
    }
  }

  .login-btn {
    margin-left: 0.2rem;
    margin-top: 0.5rem;
    flex: 1;
    color: #fff;
    font-size: 1.1rem;

    .iphone {
      margin-top: 1rem;
      img {
        height: 1.3rem;
      }
    }
  }

  .login-arrow {
    width: 10%;
    color: #fff;
    font-size: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
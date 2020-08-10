<template>
  <div class="back-top">
    <img src="~@/assets/img/common/top.png" alt="">
  </div>
</template>

<script>
export default {
    name: 'BackTop',

};
</script>

<style lang="less" scoped>
.back-top{
    position: fixed;
    right: 1rem;
    bottom: 4rem;
    width: 4rem;
    height: 4rem;

    img{
        width: 100%;
        height: 100%;   
    }
}
</style>
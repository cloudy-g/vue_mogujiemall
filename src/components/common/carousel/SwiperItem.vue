<template>
  <div class="swiper-item">
    <slot name="swiperItem"></slot>
  </div>
</template>

<script>
export default {
    name: 'SwiperItem',
    props: {

    }
};
</script>

<style lang="less">
.swiper-item{
    width: 100%;

    img{
        width: 100%;
        vertical-align: middle;
    }
}

</style>
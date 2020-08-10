<template>
    <div class="home-goodslist">
      <goods-item v-for="item in goodsList" v-bind:key="item.title + getHash()" :info="item">
      </goods-item>
    </div>
</template>

<script>
import GoodsItem from './GoodsItem.vue'
 
export default {
    name: 'GoodsList',
    props: {
        goodsList: {
            type: Array,
            default() {
                return [];
            }
        }
    },
    components:{
        GoodsItem
    },
    methods: {
        getHash() {
            return parseInt(Math.random() * this.goodsList.length * 1000 + 1)
        }
    }
}
</script>

<style lang="less">
.home-goodslist{
    padding-top: 1rem;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}

</style>
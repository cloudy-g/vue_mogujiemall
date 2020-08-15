<template>
  <ul class="list-wrapper">
    <li v-for="item in iamgeList" :key="item">
      <img :src="item"  @load="imgLoad"/>
    </li>
  </ul>
</template>

<script>


export default {
    name: 'DetailsImages',
    props:{
        iamgeList: {
            type: Array,
            default() {
                return []
            }
        }
    },
    methods: {
        imgLoad() {
            this.$bus.$emit('imgOnLoad');
        }
    },
};
</script>

<style lang="less" scoped>
.list-wrapper{
    margin: 0;
    padding: 0;
    width: 100%;
    display: flex;
    flex-direction: column;

    img{
        width: 100%;
    }
}
</style>
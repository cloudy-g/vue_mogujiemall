<template>
  <ul id="home-recommed">
    <li v-for="item in recommends" v-bind:key="item.title">
      <a :href="item.link">
        <img :src="item.image" alt />
      </a>
      <div class="recommend-title">{{item.title}}</div>
    </li>
  </ul>
</template>

<script>
export default {
  name: "HomeRecommend",
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  beforeUpdate() {
  },
};
</script>

<style lang="less">
#home-recommed{
    padding: 1rem 0;
    width: 100%;
    border-bottom: 1rem solid #ddd;
    display: flex;

    li{
        width: 100%;
        margin: 0 0.5rem;
        img{
            width: 100%;
        }
        .recommend-title{
            margin-top:0.5rem;
            text-align: center;
        }
    }
}
</style>
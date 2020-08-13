<template>
  <ul class="item-params">
    <li v-for="(value, key) in itemParams.set" :key="key">
      <span class="params-key">{{key}}</span>
      <span class="params-value">{{value}}</span>
    </li>
  </ul>
</template>

<script>
export default {
  name: "DetailsItemParams",
  props: {
    itemParams: {
      type: Object,
      default: {},
    },
  },
};
</script>

<style lang="less" scoped>
.item-params {
  display: flex;
  flex-direction: column;
  padding: 0 1rem 1rem;

  li {
    border-bottom: 0.01rem solid #f4f4f4;

    span {
      display: inline-block;
      padding: 0.5rem 0;
      vertical-align: top;
      white-space: normal;

      &.params-key {
        width: 30%;
      }

      &.params-value {
        width: 70%;
        color: #eb4868;
      }
    }
  }
}
</style>
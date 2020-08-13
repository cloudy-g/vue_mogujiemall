<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBar",
  data() {
    return {};
  },
  components: {},
  created() {},
  methods: {},
};
</script>

<style lang="less">
#tab-bar {
  display: flex;

  height: 49px;
  background-color: #f6f6f6;

  position: fixed;
  bottom: 0px;
  left: 0px;
  right: 0px;

  box-shadow: 0 -2px 1px rgba(100, 100, 100, 0.1);
  z-index: 99;
}
</style>
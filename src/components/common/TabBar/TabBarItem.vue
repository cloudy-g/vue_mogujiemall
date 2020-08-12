<template>
  <div @click="btnClick" :class="{'tab-bar-item': true, 'tab-bar-item-active': !isActive}" >
    <slot v-if="isActive" name="bar-icon"></slot>
    <slot v-else name="bar-icon-active"></slot>
    <slot :actives="activeColors" name="bar-title"></slot>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  data() {
      return {
        
      }
  },
  props: {
    link: String,
    index: Number,
    activeColor: String
  },
  computed: {
      activeColors() {
          return this.isActive ? {} : {color: this.activeColor}
      },
      isActive() {
        return this.$route.path.indexOf(this.link) == -1
      }
  },
  methods: {
    btnClick() {
      this.$router.replace(this.link);
    },
  },
};
</script>

<style lang="less">
.tab-bar-item {
  flex: 1;
  text-align: center;
  position: relative;

  img {
    margin-top: 5px;
    height: 20px;
    width: 20px;
    vertical-align: middle;
  }

  &-active::after{
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 5px;
    border-radius: 5px;
    background-color: #ff4400;
    // position: sticky;
  }
}
</style>
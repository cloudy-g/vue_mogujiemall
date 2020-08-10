<template>
  <div class="tab-control">
    <div
      class="tab-card"
      v-for="(item, index) in cards"
      v-bind:key="item.title"
      @click="btnClick(index)"
    >
        <span :class="{active: index == currentIndex}">{{item.title}}</span>
    </div>
  </div>
</template>

<script>

export default {
  name: "TabControl",
  components: {
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  props: {
    cards: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  computed: {},
  methods: {
    btnClick(index) {
      this.currentIndex = index;
      this.$emit('click', this.cards[index].type);
    }
  },
};
</script>

<style lang="less">
.tab-control {
  height: 3rem;
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;

  line-height: 3rem;
  text-align: center;
  font-size: 1.3rem;

  .tab-card {
    position: relative;
    flex: 1;

    .active {
      color: #ff4400;

      &::after {
        content: "";
        position: absolute;
        bottom: 0;
        right: 30%;
        display: block;
        background-color: #ff4400;
        width: 40%;
        height: 0.2rem;
      }
    }
  }
}
</style>
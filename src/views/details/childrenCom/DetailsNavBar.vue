<template>
  <div class="detail-bar">
    <nav-bar>
      <template #left>
        <div class="bar-arrow" @click="backClick"></div>
      </template>
      <template #center>
        <ul class="bar-desc">
          <li
            :class="{'bar-desc-active': index == currentIndex}"
            v-for="(item,index) in desc"
            v-bind:key="item"
            @click="changeClick(index)"
          >{{item}}</li>
        </ul>
      </template>
      <template #right>
        <div>{{iid}}</div>
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "@/components/common/navBar/NavBar";

export default {
  name: "DetaisNavBar",
  data() {
    return {
      desc: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0,
    };
  },
  props:{
    iid: String
  },
  components: {
    NavBar,
  },
  methods: {
    changeClick(index) {
      this.currentIndex = index;
      this.$emit('scrollToPosition', index);
    },
    backClick() {
      this.$router.go(-1);
    }
  },
};
</script>

<style lang="less" scoped>
.detail-bar {
  background-color: #ffffff;
  box-shadow: 1px 0 1px rgba(100, 100, 100, 2);
  position: relative;
  z-index: 9;

  .bar-arrow {
    width: 100%;
    height: 100%;
    background-image: url("~@/assets/img/common/back.svg");
    background-size: 30px 30px;
    background-repeat: no-repeat;
    background-position: 50% 50%;
  }

  .bar-desc {
    display: flex;
    justify-content: space-around;

    margin: 0;
    padding: 0;

    .bar-desc-active {
      color: #ff4400;
    }
  }
}
</style>
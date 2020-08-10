<template>
  <div id="swiper">
    <div
      class="slider-show"
      :style="widthStyle"
      @touchstart="touchStart"
      @touchmove="touchMove"
      @touchend="touchEnd"
    >
      <slot name="sliderShow"></slot>
    </div>
    <ul class="slider-pointer">
      <li :class="{active : setColor(index)}" v-for="(item,index) in imgs" v-bind:key="item.title"></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Swiper",
  data() {
    return {
      widthStyle: {
        left: 0,
      },
      startX: 0,
      endX: 0,
      timer: null,
      currentIndex: 1,
      totalWidth: 0,
      activeColor: "active",
    };
  },
  props: {
    imgs: {
      type: Array,
    },
    moveRatio: {
      type: Number,
      default: 0.25,
    },
    singleWidth: {
      type: Number,
      default: 375,
    },
  },
  mounted() {
    setTimeout(() => {
      this.initDom();
      this.setTimer();
    }, 50);
  },
  methods: {
    initDom() {
      let width = this.imgs.length + 2;
      this.totalWidth = this.singleWidth * width;
      this.widthStyle.width = this.totalWidth + "px";
      this.widthStyle.left = `-${this.singleWidth}px`;
      this.widthStyle.visibility = "visible";
    },
    setTimer() {
      this.timer = setInterval(() => {
        clearInterval(this.timer);
        if (this.currentIndex == 4) {
          setTimeout(() => {
            this.currentIndex = 1;
            this.widthStyle.transition = "all 0s";
            this.widthStyle.left = `-${this.singleWidth}px`;
          }, 1000);
        }
        this.setPosition();
        this.setTimer();
      }, 2000);
    },
    setPosition() {
      this.currentIndex++;
      this.widthStyle.transition = "all .3s";
      this.widthStyle.left = `-${this.currentIndex * this.singleWidth}px`;
    },
    touchStart(event) {
      clearInterval(this.timer);
      this.widthStyle.transition = "all 0s";
      this.startX = event.targetTouches[0].clientX;
    },
    touchMove(event) {
      let instance = event.targetTouches[0].clientX - this.startX;
      let origin = this.currentIndex * this.singleWidth;
      this.widthStyle.left = `${-origin + instance}px`;
    },
    touchEnd(event) {
      this.endX = event.changedTouches[0].clientX;
      let flag = this.endX - this.startX;
      if (Math.abs(flag) > this.singleWidth / 2) {
        if (flag > 0) {
          this.currentIndex--;
          if (this.currentIndex == 0) {
            this.currentIndex = 4;
          }
        } else {
          this.currentIndex++;
          if (this.currentIndex == 5) {
            this.currentIndex = 1;
          }
        }
      }
      this.widthStyle.left = `-${this.currentIndex * this.singleWidth}px`;
      this.setColor(this.currentIndex - 1);
      this.setTimer();
    },
    setColor(index) {
      let flag = this.currentIndex;
      if (flag == 5) {
        flag = 1;
      }
      return flag - 1 == index;
    },
  },
};
</script>

<style lang="less">
#swiper {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  top: 0;
  left: 0;

  .slider-show {
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    visibility: hidden;
  }

  .slider-pointer {
    position: absolute;
    left: 25%;
    bottom: 2%;

    display: flex;

    li {
      width: 0.5rem;
      height: 0.5rem;

      margin-left: 0.5rem;
      border-radius: 0.5rem;
      background-color: #ffffff;

      &.active {
        background-color: #f40;
      }
    }
  }
}
</style>
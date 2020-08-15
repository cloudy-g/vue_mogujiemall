<template>
  <div class="toast" v-if="isShow">{{msg}}</div>
</template>

<script>
export default {
  name: "Toast",
  data() {
    return {
      isShow: false,
      msg: "",
    };
  },
  methods: {
    show(msg, duration = 2000) {
      this.msg = msg;
      this.isShow = true;
      setTimeout(() => {
        this.msg = "";
        this.isShow = false;
      }, duration);
    },
  },
};
</script>

<style lang="less" scoped>
.toast {
  height: 2rem;
  line-height: 2rem;
  font-size: 1.2rem;
  text-align: center;
  padding: 0.5rem 0.5rem ;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  border-radius: 1rem;

  z-index: 999;

  background-color: rgba(0, 0, 0, 0.7);
  color: #ffffff;
}
</style>
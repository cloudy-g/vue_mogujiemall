import {
  debounce
} from './utils'

export const imgLoadMixin = {
  data() {
    return {
      refresh: null,
      imgRefresh: null,
      itemOffsetTopY: [],
    }
  },
  mounted() {
    this.refresh = debounce(this.$refs.scroll.refresh, 1000);
    this.imgRefresh = () => {
      this.refresh();
      this.getOffsetTop && this.getOffsetTop();;
    }
    this.$bus.$on("imgOnLoad", this.imgRefresh);
  }
}

export const backTopMixin = {
  data() {
    return {
      height: 642,
      isBack: false,
      isShow: "hidden",
    }
  },
  methods: {
    backClick() {
      this.$refs.scroll.scrollTo(0, 0, 1000);
    },
    contentScroll(position) {
      this.isBack = Math.abs(position.y) > window.innerHeight ? true : false;
      this.isShow =
        this.$refs.scroll.TabOffsetTop <= this.height ? "hidden" : "visible";
    }
  },
}

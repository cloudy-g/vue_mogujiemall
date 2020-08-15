import {
  debounce
} from './utils';
import BackTop from "@/components/content/backTop/BackTop";


export const imgLoadMixin = {
  data() {
    return {
      refresh: null,
      imgRefresh: null,
      itemOffsetTopY: [],
      refreshTop: null
    }
  },
  mounted() {
    this.refresh = debounce(this.$refs.scroll.refresh, 1000);
    if (this.getOffsetTop) {
      this.refreshTop = debounce(this.getOffsetTop, 1000);
    }
    this.imgRefresh = () => {
      this.refresh();
      this.refreshTop && this.refreshTop(); 
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
  components:{
    BackTop,
  },
  methods: {
    backClick() {
      this.$refs.scroll.scrollTo(0, 0, 1000);
    },
    contentScroll(position) {
      this.isBack = Math.abs(position.y) > window.innerHeight ? true : false;
      this.isShow =
        this.$refs.scroll.TabOffsetTop <= this.height ? "hidden" : "visible";

      if (Math.abs(position.y) + 49 > this.itemOffsetTopY[0]) {
        this.$refs.bar.currentIndex = 0;
      }
      if (Math.abs(position.y) + 49 > this.itemOffsetTopY[1]) {
        this.$refs.bar.currentIndex = 1;
      }
      if (Math.abs(position.y) + 49 > this.itemOffsetTopY[2]) {
        this.$refs.bar.currentIndex = 2;
      }
    }
  },

}

<template>
    <div ref="wrapper">
      <div>
        <slot></slot>
      </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
    name: 'Scroll',
    data() {
        return {
            scroll: null
        }
    },
    props: {
        probeType: {
            type: Number,
            default: 0
        },
        pullUpLoad: {
            type: Boolean,
            default: false
        }
    },
    mounted() {
        this.scroll = new BScroll(this.$refs.wrapper, {
            probeType: this.probeType,
            click: true,
            pullUpLoad: this.pullUpLoad
        })
        this.scroll.on('scroll', (position) => {
            this.$emit('wraperScroll', position);
        })
        this.scroll.on('pullingUp', () => {
            // console.log(this.pullUpLoad)
            this.$emit('endScroll');
        })
    },
    methods: {
        scrollTo(x, y, time=2000){
            this.scroll.scrollTo(x, y, time);
        },
        finishPullUp() {
            this.scroll.finishPullUp();
        }
    },
}
</script>

<style>

</style>
<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <main-bar></main-bar>
  </div>
</template>

<script>
import MainBar from '@/components/content/MainBar.vue'

export default {
  name: 'App',
  components: {
    MainBar,
  }
}
</script>

<style lang="less">
@import url('assets/css/base.less');

</style>

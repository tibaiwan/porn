<!-- 主页面 -->
<template>
  <section class="container">
    <!-- <div @click="handleToggleDrawer" class="show-menu">{{!isDrawerShow ? '显示菜单' : '隐藏菜单'}}</div> -->
    <vue-drawer-layout ref="drawer">
      <div class="drawer" slot="drawer">
        <aside-bar @menuChange="handleToggleDrawer"/>
      </div>
      <div class="content" slot="content">
        <router-view/>
      </div>
    </vue-drawer-layout>
  </section>
</template>

<script>
import AsideBar from './Aside.vue'

export default {
  data () {
    return {
      isDrawerShow: false
    }
  },
  components: {
    AsideBar
  },
  methods: {
    handleToggleDrawer () {
      this.isDrawerShow = !this.isDrawerShow
      this.$refs.drawer.toggle()
    }
  }
}
</script>

<style lang="less" scoped>
  @import '~@/assets/styles/index.less';
</style>

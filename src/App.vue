<template>
  <div id="app">
    <router-view/>
    <div class="bg-image"></div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
  @import '~@/assets/styles/common.less';
</style>

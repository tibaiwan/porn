<!-- 列表页 -->
<template>
  <aside class="aside-wrap">
    <div class="top">
      <div class="img-wrap">
        <img src="~@/assets/images/fanleni.jpg" alt="">
      </div>
    </div>
    <div class="bottom">
      <ul>
        <li v-for="item in category" :key="item.id" @click="menuChange">
          <router-link tag="div" :to="item.path">{{item.title}}</router-link>
        </li>
      </ul>
    </div>
    <div class="cat-wrap">
      <img src="~@/assets/images/cat.png" alt="">
    </div>
  </aside>
</template>

<script>
export default {
  data () {
    return {
      category: [{
        id: 1,
        title: '德玛西亚',
        path: '/dema/list'
      }, {
        id: 2,
        title: '艾欧尼亚',
        path: '/aiou/list'
      }, {
        id: 3,
        title: '敬请期待',
        path: '/aiou/list'
      }, {
        id: 4,
        title: '敬请期待',
        path: '/aiou/list'
      }, {
        id: 5,
        title: '敬请期待',
        path: '/aiou/list'
      }]
    }
  },
  methods: {
    // 切换了目录
    menuChange () {
      this.$emit('menuChange')
    }
  }
}
</script>

<style lang="less" scoped>
  @import '~@/assets/styles/aside.less';
</style>

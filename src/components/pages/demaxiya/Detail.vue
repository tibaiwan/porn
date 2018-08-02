<!-- 详情页 德玛西亚 -->
<template>
  <section class="main-wrap">
    <div class="intro">
      <div>{{pageInfo.t}}</div>
    </div>
    <div class="img-wrap">
      <ul>
        <li v-for="(item, index) in pageInfo.imgList" :key="index">
          <img :src="preUrl + item">
        </li>
      </ul>
    </div>
    <div class="float-btn" @click="backForward">
      <span>返回</span>
    </div>
  </section>
</template>

<script>
import pageInfoList from '@/filesDema/detail.json'
import mixinDetail from '@/tool/mixinDetail'

export default {
  mixins: [mixinDetail],
  data () {
    return {
      pageInfoList: pageInfoList
    }
  }
}
</script>

<style lang="less" scoped>
  @import '~@/assets/styles/demaxiya/detail.less';
</style>

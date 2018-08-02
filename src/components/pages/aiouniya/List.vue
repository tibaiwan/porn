<!-- 列表页 艾欧尼亚 -->
<template>
  <section class="list-wrap">
    <div class="top">艾欧尼亚专区</div>
    <div class="bottom">
      <ul>
        <li v-for="(item, index) in titleList" :key="index" @click="selectTitle(item.id)">
          <a href="javascript:void(0)">{{item.t}}</a>
        </li>
      </ul>
    </div>
    <div class="float-btn" @click="refresh">
      <span>刷新</span>
    </div>
  </section>
</template>

<script>
import summaryList from '@/filesAiou/list.json'
import mixinList from '@/tool/mixinList'

export default {
  mixins: [mixinList],
  data () {
    return {
      summaryList: summaryList
    }
  }
}
</script>

<style lang="less" scoped>
  @import '~@/assets/styles/demaxiya/list.less';
</style>

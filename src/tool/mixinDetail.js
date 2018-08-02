export default {
  data () {
    return {
      pageId: sessionStorage.getItem('pageId'),
      type: 0, // 图片地址类型
      preUrl: '',
      pageInfo: {}
    }
  },
  mounted () {
    this.getPageInfo()
  },
  methods: {
    // 获取页面详情
    getPageInfo () {
      let listLength = this.pageInfoList.length
      console.log('listLength', listLength)
      this.pageInfo = this.pageInfoList.find(item => {
        return item.id === this.pageId
      })
      // type:1, http://p3.urlpic.club/picturespace/upload/image/
      // type:2, http://p.usxpic.com/imghost/upload/image/
      // type:3, http://p.vxotu.com/u/
      // type:4, http://www.nrcb3.com/
      var typeArray = ['', 'http://p3.urlpic.club/picturespace/upload/image/', 'http://p.usxpic.com/imghost/upload/image/', 'http://p.vxotu.com/u/', 'http://www.nrcb3.com/']
      this.preUrl = typeArray[+this.pageInfo.type]
    },
    // 返回
    backForward () {
      this.$router.push('list')
    }
  }
}

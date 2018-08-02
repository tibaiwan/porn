export default {
  data () {
    return {
      pageRows: 12,
      titleList: []
    }
  },
  mounted () {
    this.refresh()
  },
  methods: {
    // 获取num个随机数
    getRandomNum (num) {
      let listLength = this.summaryList.length
      let count = 0
      let numArray = []
      for (let i = 0; i < listLength && count < num; i++) {
        let randomNum = Math.floor(Math.random() * listLength)
        if (!numArray.includes(randomNum)) {
          numArray.push(randomNum)
          ++count
        }
      }
      return numArray
    },
    // 获取标题信息列表
    getTitleList (titleIdArr) {
      let titleList = []
      for (let i = 0; i < titleIdArr.length; i++) {
        titleList.push(this.summaryList[titleIdArr[i]])
      }
      return titleList
    },
    // 刷新，换一批
    refresh () {
      let titleIdArr = this.getRandomNum(this.pageRows)
      this.titleList = this.getTitleList(titleIdArr)
    },
    // 进入详情页
    selectTitle (id) {
      sessionStorage.setItem('pageId', id)
      this.$router.push('detail')
    }
  }
}

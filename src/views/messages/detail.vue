<template>
<div class="m_msg" >
<h2>{{ms.title}}</h2>
  <i style="">{{ms.src}}</i>
  <el-divider></el-divider>
<div v-html="ms.content"></div>
  <el-divider></el-divider>
  <div>创建于{{ms.created}}</div>
  <div style="display: inline">点赞：{{ms.praise}} 收藏：{{ms.star}}</div>
</div>
</template>

<script>
import req1 from '@/utils/request'

export default {
  name: 'detail',
  data () {
    return {
      ms: {
        title: '标题',
        content: '内容',
        src: '来源',
        created: '创建于',
        praise: '点赞',
        star: '收藏'
      }
    }
  },
  created () {
    const _this = this
    const messageId = this.$route.params.messageId
    _this.$axios.get(req1.defaults.baseURL + '/message/msg/' + messageId, {
      headers: {
        Authorization: localStorage.getItem('token')
      }
    }).then(res => {
      console.log(res)
      const message = res.data.data
      if (message != null) {
        _this.ms.title = message.title
        _this.ms.content = message.content
        _this.ms.src = message.src
        _this.ms.created = message.created
        _this.ms.praise = message.praise
        _this.ms.star = message.star
      }
    }).catch(res => {
      this.$router.push('/login')
      this.$message({
        message: '请先登录',
        type: 'error'
      })
    })
  }
}
</script>

<style scoped>
.m_msg{
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  width: 100%;
  min-height: 700px
}
</style>

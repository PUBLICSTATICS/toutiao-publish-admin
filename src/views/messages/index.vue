<template>
  <div class="block">
    <el-timeline>
      <el-timeline-item :timestamp="ms.created" :key="ms.id" placement="top" v-for='ms in msg'>
        <el-card>
          <router-link :to="{name: 'detail',params: {messageId:ms.id}}"> <h4>{{ ms.title }}</h4></router-link>

          <p>{{ ms.content }}</p>
        </el-card>
      </el-timeline-item>
      <el-pagination
        background
        layout="prev, pager, next"
        :current-page="currentPage"
        :page-size="pageSize"
        @current-change=page
        :total="total">
      </el-pagination>
    </el-timeline>
  </div>
</template>

<script>
import req1 from '@/utils/request'

export default {
  name: 'MessagesIndex.vue',
  data () {
    return {
      msg: {},
      currentPage: 1,
      total: 0,
      pageSize: 5
    }
  },
  methods: {
    page (currentPage) {
      const _this = this
      _this.$axios.get(req1.defaults.baseURL + '/message/msg?currentPage=' + currentPage).then(res => {
        console.log(res)
        _this.msg = res.data.data.records
        _this.currentPage = res.data.data.current
        _this.total = res.data.data.total
        _this.pageSize = res.data.data.size
      })
    }
  },
  created () {
    this.page(1)
  }
}
</script>

<style scoped>

</style>

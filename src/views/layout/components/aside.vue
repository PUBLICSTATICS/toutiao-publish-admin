<template>
    <el-menu
      class="el-menu-vertical-demo"
      default-active="/"
      background-color="#002033"
      text-color="#fff"
      active-text-color="#ffd04b"
      router>
      <el-menu-item index="/">
        <i class="el-icon-s-home"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-menu-item index="/article">
        <i class="el-icon-notebook-2"></i>
        <span slot="title">身份登记</span>
      </el-menu-item>
      <el-menu-item index="/image">
        <i class="el-icon-picture"></i>
        <span slot="title">居民物业</span>
      </el-menu-item>
      <el-menu-item index="/publish">
        <i class="el-icon-edit-outline"></i>
        <span slot="title">缴费模块</span>
      </el-menu-item>
      <el-menu-item index="/comment">
        <i class="el-icon-chat-dot-round"></i>
        <span slot="title">报事报修</span>
      </el-menu-item>
      <el-menu-item index="/fans">
        <i class="el-icon-present"></i>
        <span slot="title">访客通行</span>
      </el-menu-item>
      <el-menu-item index="/setting">
        <i class="el-icon-s-tools"></i>
        <span slot="title">客服沟通</span>
      </el-menu-item>
    </el-menu>
</template>

<script>
export default {
  name: 'AppAside',
  components: {

  },
  props: {

  },
  data () {
    return {

    }
  },
  computed: {

  },
  watch: {

  },
  created () {

  },
  mounted () {

  },
  methods: {
  }
}
</script>

<style lang="less">

</style>

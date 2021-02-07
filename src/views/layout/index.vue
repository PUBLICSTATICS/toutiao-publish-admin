<template>
  <el-container class='layout-container'>
      <el-aside
      class='aside'>
      <app-aside class='aside-menu'/>
      </el-aside>
  <el-container>
      <el-header class='header'>顶部导航栏</el-header>
      <el-main class='main'>
      <router-view/>
      </el-main>
  </el-container>
  </el-container>
</template>

<script>
import AppAside from './components/aside'
export default {
  name: 'LayOutIndex',
  components: {
    AppAside
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

<style scoped lang="less">
.aside {
    width: 211px !important;
    background: #d3dce6;
}
.header{
    background: #b3c0d1;
}
.main{
    background: #e9eef3;
}
.layout-container{
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
}
.aside-menu{
    height: 100%;
}
</style>

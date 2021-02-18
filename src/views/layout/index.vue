<template>
  <el-container class='layout-container'>
      <el-aside
      class='aside'>
      <app-aside class='aside-menu'/>
      </el-aside>
  <el-container>
      <el-header class='header'>
        <div>
          <i class='el-icon-s-fold'></i>
          <span>智慧物业平台</span>
        </div>
        <el-dropdown>
  <span class="el-dropdown-link">
      <img class="images" :src="tc01"/>
  </span>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item>个人设置</el-dropdown-item>
    <el-dropdown-item divided>退出登录</el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>

      </el-header>
      <el-main class='main'>
      <router-view/>
      </el-main>
  </el-container>
  </el-container>
</template>

<script>
import AppAside from './components/aside'
import tc01 from '@/assets/img/QQ图片20210127181355.jpg'
export default {
  name: 'LayOutIndex',
  components: {
    AppAside
  },
  props: {

  },
  data () {
    return {
      tc01: tc01
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
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ccc;
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
.images{
  width: 40px;
  border-radius: 25%;
}
</style>

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
    <img class="images" :src="user.avatar"/>
  </span>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item @click.native='onSettings'>个人中心</el-dropdown-item>
    <el-dropdown-item @click.native='onMessages'>消息列表</el-dropdown-item>
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
export default {
  name: 'LayOutIndex',
  components: {
    AppAside
  },
  props: {

  },
  data () {
    return {
      hasLogin: false,
      user: {
        username: '请先登录',
        avatar: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
      },
      messages: {},
      currentPage: 1,
      total: 0
    }
  },
  computed: {

  },
  watch: {

  },
  created () {
    if (this.$store.getters.getUser.name) {
      this.user.username = this.$store.getters.getUser.name
      this.user.avatar = 'http://localhost:8080\\img\\' + this.$store.getters.getUser.avatar
      this.hasLogin = true
    }
  },
  mounted () {

  },
  methods: {
    onSettings () {
      this.$router.push('/settings')
    },
    onMessages () {
      this.$router.push('/messages')
    },
    logout () {
      const _this = this
      this.$axios.get('http://localhost:8081/logout', {
        headers: {
          Authorization: localStorage.getItem('token')
        }
      }).then((res) => {
        _this.$store.commit('REMOVE_INFO')
        _this.$router.push('/login')
      })
    }
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

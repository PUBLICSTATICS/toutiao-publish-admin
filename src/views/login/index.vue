<template>
<div class="login-container">
  <!-- el-form 表单组件
  每个表单项都必须使用el-form-item组件包裹 -->
  <header class="login-header">欢迎使用即刻头条号</header>
  <hr/>
<el-form class="login-form" ref="form" :model="user">
  <el-form-item>
    <el-input v-model="user.mobile"
    placeholder="请输入手机号"></el-input>
  </el-form-item>
  <el-form-item>
    <el-input v-model="user.code"
    placeholder="请输入验证码"></el-input>
  </el-form-item>
  <el-form-item>
    <el-checkbox v-model="checked"></el-checkbox>
    我已阅读并同意用户协议和隐私条款
  </el-form-item>
  <el-form-item>
    <el-button
    class="login-btn"
    :loading="loginLoading"
    type="primary" @click="onLogin">登录</el-button>
  </el-form-item>
</el-form>
</div>
</template>
<script>
import request from '@/utils/request.js'
export default {
  name: 'LoginIndex',
  data () {
    return {
      user: {
        mobile: '',
        code: ''
      },
      checked: false,
      loginLoading: false
      // loading提示，防止网络请求慢用户多次点击出发登录请求
    }
  },
  methods: {
    onLogin () {
      // 获取表单数据，表单验证，验证通过，提交登录，处理后端响应结果

      // 表单验证

      // 验证通过，提交登录
      const user = this.user
      // 开启登陆中loading
      this.loginLoading = true
      request({
        method: 'post',
        url: '/mp/v1_0/authorizations',
        // data用来设置post请求体
        data: user
      }).then(res => {
        this.$message({
          message: '登陆成功~',
          type: 'success'
        })
        this.loginLoading = false
      }).catch(err => {
        // eslint-disable-next-line no-unused-expressions
        console.log('登陆失败', err)
        this.$message({
          message: '登陆成功~',
          type: 'success',
          showClose: true
        })
        this.loginLoading = false
      })
      // 处理后端相应结果
    }
  }
}
</script>

<style lang="less">
.login-container{
position: fixed;
left: 0;
top: 0;
right: 0;
bottom: 0;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background: url('./login_bg.jpg') no-repeat;
background-size: cover
}
.login-form{
background: #fff;
padding: 20px 50px;
min-width: 300px;
}
.login-btn{
width:100%
}
.login-header{
font-size: 28px;
width: 300px;
padding: 20px 50px 20px 50px;
background-color: #fff;
text-align: center;
}
</style>

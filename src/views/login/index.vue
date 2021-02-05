<template>
<div class="login-container">
  <!-- el-form 表单组件
  每个表单项都必须使用el-form-item组件包裹 -->
  <header class="login-header">欢迎使用即刻头条号</header>
  <hr/>
  <!--
    配置Form表单验证:
    1、给el-form组件绑定model为表单数据对象
    2、给需要验证的表单项el-form-item绑定prop属性
    注意prop属性需要指定表单对象中的数据名称
    3、通过el-form组件的rules属性配置验证规则
   -->
   <!--
     手动触发表单验证：
     1、给el-form设置ref起个名字
     2、通过ref或el-form组件，调用组件的validate进行验证
    -->
<el-form class="login-form"
  ref="loginref"
  :model="user"
  :rules = 'formRules'
  >
  <el-form-item prop='mobile'>
    <el-tooltip class="item" effect="dark" content="请输入正确格式的手机号" placement="right">
    <el-input v-model="user.mobile"
    placeholder="请输入手机号"></el-input>
    </el-tooltip>
  </el-form-item>
  <el-form-item prop='code'>
    <el-tooltip class="item" effect="dark" content="请输入六位数验证码" placement="right">
    <el-input v-model="user.code"
    placeholder="请输入验证码"></el-input>
        </el-tooltip>
  </el-form-item>
  <el-form-item prop='agree'>
    <el-checkbox v-model="user.agree"></el-checkbox>
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
import { login } from '@/api/user.js'
export default {
  name: 'LoginIndex',
  data () {
    return {
      user: {
        mobile: '',
        code: '',
        agree: false
      },
      loginLoading: false,
      // loading提示，防止网络请求慢用户多次点击出发登录请求
      formRules: {
        mobile: [
          { required: true, message: '手机号不能为空', trigger: 'blur' },
          { min: 11, max: 11, message: '手机号必须是11位', trigger: 'blur' }
        ],
        code: [
          { required: true, message: '请输入验证码', trigger: 'blur' }
        ],
        /**
         * 自定义校验规则,validator和if
         */
        agree: [
          {
            validator: (rule, value, callback) => {
              if (value === true) {
                callback()
              } else {
                callback(new Error('你必须同意用户协议才能登陆'))
              }
            }
          }
        ]
      }
    }
  },
  methods: {
    onLogin () {
      // 获取表单数据，表单验证，验证通过，提交登录，处理后端响应结果
      // 表单验证
      // 验证通过，提交登录
      // 开启登陆中loading
      this.$refs.loginref.validate((valid, err) => {
        if (valid) { this.login() }
      })
    },
    login () {
      this.loginLoading = true
      login(this.user).then(res => {
        this.$message({
          message: '登陆成功~',
          type: 'success'
        })
        console.log('登录成功了终于!')
        this.loginLoading = false
      }).catch(err => {
        // eslint-disable-next-line no-unused-expressions
        console.log('登陆失败', err)
        this.$message({
          message: err,
          type: 'fail',
          showClose: true
        })
        console.log('可你还是登录失败了!')
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

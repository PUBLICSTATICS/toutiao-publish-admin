<template>
<div class="settings-container">
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item to="/">首页
        </el-breadcrumb-item>
                <el-breadcrumb-item >个人中心
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <el-row>
      <el-col :span="16">
<el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="编号">
    <el-input v-model="user.id" disabled></el-input>
  </el-form-item>
  <el-form-item label="手机号">
    <el-input v-model="user.phone" ></el-input>
  </el-form-item>
   <el-form-item label="小区展示">
    <el-input v-model="user.name"></el-input>
  </el-form-item>
     <el-form-item label="身份展示">
    <el-input v-model="user.identify"></el-input>
  </el-form-item>
  <el-form-item>
  </el-form-item>
</el-form>
      </el-col>
      <el-col :span="5">
        <el-upload
          ref="upload"
          class="avatar-uploader"
          action="#"
          accept="image/png,image/jpg,image/jpeg"
          :limit="1"
          :show-file-list="true"
          :auto-upload=false
          :on-change="handleChange"
        >
          <img v-if="user.avatar" :src="user.avatar" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
        <el-button id="uploadAvatar" type="primary" @click="onSubmit">上传头像</el-button>
      </el-col>
    </el-row>
  </el-card>
</div>
</template>

<script>
import req1 from '@/utils/request'

export default {
  name: 'SettingIndex',
  components: {
  },
  props: {
  },
  data () {
    return {
      hasLogin: false,
      user: {
        name: '请先登录',
        avatar: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
        id: '',
        phone: '',
        identify: ''
      },
      messages: {},
      currentPage: 1,
      total: 0,
      form: {
      }
    }
  },
  created () {
    if (this.$store.getters.getUser.name) {
      this.user.name = this.$store.getters.getUser.name
      this.user.id = this.$store.getters.getUser.id
      this.user.phone = this.$store.getters.getUser.phone
      this.user.identify = this.$store.getters.getUser.identify
      this.user.avatar = 'http://localhost:8080\\img\\' + this.$store.getters.getUser.avatar
      this.hasLogin = true
    }
  },
  methods: {
    onSubmit: function () {
      const fd = new FormData()
      fd.append('file', this.fileList[0].raw)
      fd.append('userId', this.user.id)
      this.$axios.post(req1.defaults.baseURL + '/upload', fd).then(res => {
        this.$message({
          message: '操作成功~',
          type: 'success'
        })
        this.$refs.form.resetFields()
        this.$store.getters.getUser.avatar = this.fileList[0].raw.name
        this.$store.commit('SET_USERINFO', this.$store.getters.getUser)
      })
    },
    handleChange (file, fileList) {
      this.fileList = fileList
      console.log(file)
      this.user.avatar = URL.createObjectURL(file.raw)
      console.log(this.user.avatar)
    }
  }
}
</script>

<style scoped lang="less">
 .avatar-uploader .el-upload {
   border: 1px dashed #d9d9d9;
   border-radius: 6px;
   cursor: pointer;
   position: relative;
   overflow: hidden;
 }
.avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
#uploadAvatar{
  margin: 5px 0 0 20px;
}
</style>

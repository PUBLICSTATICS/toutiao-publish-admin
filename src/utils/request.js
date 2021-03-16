/**
 * 基于axios封装的请求模块
 */
import axios from 'axios'
import ElementUI from 'element-ui'
import router from '@/router'
import store from '@/store'
// 创建一个axios实例,我们通过这个实例去发请求，把需要的配置配置给这个实例来处理
// 复制了一个axios，不同的实例可以有不同的配置，不会互相冲突
const req1 = axios.create()
req1.defaults.baseURL = 'http://localhost:8080/'// 请求的基础路径
// 前置拦截
req1.interceptors.request.use(config => {
  return config
})
req1.interceptors.response.use(response => {
  const res = response.data
  console.log('-----------')
  console.log(res)
  console.log('-----------')
  if (res.code === 200) {
    return response
  } else {
    ElementUI.Message.error('出错', { duration: 3 * 1000 })
    return Promise.reject(response.data.msg)
  }
},
error => {
  console.log(error)
  if (error.response.data) {
    error.message = error.response.data
  }
  store.commit('REMOVE_INFO')
  router.push('/login')
  ElementUI.Message.error(error.message, { duration: 3 * 1000 })
  return Promise.reject(error)
}
)
// 导出请求方法
export default req1

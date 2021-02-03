import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/login'
// 在VueCLI后才能关键的项目中 @表示是src，他是src目录的路径别名
// 好处，他不收当前文件路径影响
Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    component: Login
  }
]

const router = new VueRouter({
  routes
})

export default router

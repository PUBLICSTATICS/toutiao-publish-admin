import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/login'
import Home from '@/views/home'
import Layout from '@/views/layout'
import Settings from '@/views/settings'
import Messages from '@/views/messages'
import detail from '@/views/messages/detail'
// 在VueCLI后才能关键的项目中 @表示是src，他是src目录的路径别名
// 好处，他不受当前文件路径影响
Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/',
    // 命名路由layout有一个默认子路由，这个名字没有意义
    // 如果有默认子路由，就不用给父路由起名字了。
    component: Layout,
    children: [
      {
        path: '', // path为空，会作为默认子路由渲染
        name: 'home',
        component: Home
      },
      {
        path: '/settings',
        name: '/settings',
        component: Settings
      },
      {
        path: '/messages',
        name: '/settings',
        component: Messages
      },
      {
        path: '/messages/messageId',
        name: 'detail',
        component: detail
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router

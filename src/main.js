/**
 * 项目入口
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
// 加载全局样式文件
import './styles/style.less'

// 加载element组件库
import ElementUI from 'element-ui'

// 加载element组件库样式
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
// 全局使用element组件库
Vue.use(ElementUI)
Vue.prototype.$axios = axios
/**
 * 创建一个vue实例，通过render方法把App根组件渲染到#app入口节点
 */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
// el: '#app' 等价于$mount('#app')

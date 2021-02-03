/**
 * 项目入口
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

/**
 * 创建一个vue实例，通过render方法把App根组件渲染到#app入口节点
 */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
// el: '#app' 等价于$mount('#app')

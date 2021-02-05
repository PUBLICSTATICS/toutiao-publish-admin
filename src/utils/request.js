/**
 * 基于axios封装的请求模块
 */
import axios from 'axios'

// 创建一个axios实例,我们通过这个实例去发请求，把需要的配置配置给这个实例来处理
// 复制了一个axios，不同的实例可以有不同的配置，不会互相冲突
const req1 = axios.create()
req1.defaults.baseURL = 'http://localhost:3001/'// 请求的基础路径

// 导出请求方法
export default req1

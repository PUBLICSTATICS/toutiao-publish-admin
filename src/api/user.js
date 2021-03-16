/**
 * 用户相关请求模块
 */
import request from '@/utils/request'
export const login = (data) => {
  return request({
    method: 'POST',
    url: '/login',
    data
  })
}
export const postUserAvatar = (data) => {
  return request({
    method: 'post',
    url: '/avatar',
    data
  })
}

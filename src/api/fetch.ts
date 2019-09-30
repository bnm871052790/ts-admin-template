import axios, { AxiosRequestConfig, AxiosResponse, AxiosInstance } from 'axios'
import qs from 'qs'
import vm from '@/main'

export function fetch({ url, headers, method, data, params }: AxiosRequestConfig) {
  const instance: AxiosInstance = axios.create({
    headers: { 'Content-Type': 'application/json' },
    timeout: 30 * 1000 // 30秒超时
  })
  // 处理数据
  headers = headers || { 'content-type': 'application/json' }
  data = data || {}
  if (method === 'get') params = data
  if (headers['Content-Type'] === 'application/x-www-form-urlencoded') data = qs.stringify(data)
  // 添加请求拦截器
  instance.interceptors.request.use(
    config => {
      return config
    },
    error => {
      return Promise.reject(error)
    }
  )
  // 添加响应拦截器
  instance.interceptors.response.use(
    function(response: AxiosResponse) {
      if (response.data.code !== 200) {
        vm.$message.error(response.data.msg)
      }
      return response.data
    },
    function(error) {
      vm.$message.error(error)
      return Promise.reject(error)
    }
  )
  return instance.request({ url, headers, method, data, params })
}

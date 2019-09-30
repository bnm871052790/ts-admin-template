import { fetch } from '@/api/fetch'
import api from '@/api/url'

// get post 统一传data,post已自动qs

/**
 * 接口1
 * @param params1 // 参数1
 * @param params2 // 参数2
 */
export function api1(data: object) {
  return fetch({
    url: api.path + '/api1',
    method: 'get',
    data
  })
}

export function api2(data: object) {
  return fetch({
    url: api.path + '/api1',
    method: 'post',
    data
  })
}

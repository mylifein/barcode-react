import { message } from 'antd'
import axios from 'axios'
/* import { getToken } from './auth' */

const instance = axios.create({
    baseURL: 'http://localhost:10010/api/auth/',
    withCredentials: true,
    timeout: 5000
})

instance.interceptors.request.use((config) => {
    // Do something before request is sent
    // config.headers['authorization'] = 'Bearer' +getToken() 
    return config
}, error => {
    // Do something with request error
    message.error(error.message)
    return new Promise(() => {})
})

instance.interceptors.response.use(response => {
    return response
}, error => {
    message.error(error.message)
    return new Promise(() => {})
})

/**
 * 
 * @param {*} url   请求地址
 * @param {*} params    url参数
 */
export function get(url, params) {
    return instance.get(url, {
        params
    })
}


/**
 * post请求
 * @param {*} url   请求地址
 * @param {*} data  数据
 */
export function post(url, data) {
    return instance.post(url, data)
}

/**
 * put 请求
 * @param {*} url   请求地址 
 * @param {*} data  数据
 */
export function put(url, data) {
    return instance.put(url, data)
}

/**
 * delete请求
 * @param {*} url   请求地址 
 */
export function del(url) {
    return instance.delete(url)
}
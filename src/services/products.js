import { get, post, put, del } from '../utils/request'

/**
 * 获取列表
 * key 搜索条件
 * page 当前页
 * rows 每页大小
 * sortBy 排序字段
 * desc 是否降序
 * @param {*} param0 
 */
export function listApi(conditions) {
    return get("/products/page", conditions)
}

/**
 * 创建数据
 * @param {*} data 
 */
export function createApi(data) {
    return post('/products', data)
}

/**
 *  根据id获取数据
 * @param {*} id 
 */
export function getOneById(id) {
    return get(`/products/${id}`)
}
/**
 * 修改数据
 * @param {*} product 
 */
export function modifyOne(product) {
    return put('/products', product)
}

/**
 * 删除数据
 * @param {*} id 
 */
export function delOne(id) {
    return del(`/products/${id}`)
}
import { get, post } from '../utils/request'


const qs = require('qs')
/**
 * 
 * @param {*} user 
 *  username
 *  password 
 */
export function loginApi(user) {
    return post('/authorize', qs.stringify(user))
}

export const verify = () => {
    return get('/verify')
}
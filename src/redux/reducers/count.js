/**
 * 该文件是用于创建一个为Count组件服务的reducer,reducer的本质就是一个函数
 * reducer函数会接收两个参数，分别为：之前的状态(prestate),动作对象(action)
 */
import { INCREMENT, DECREMENT } from '../constant'
const initState = 0
export default function countReducer(preState = initState, action) {
    const { type, data } = action
    switch (type) {
        case INCREMENT:
            console.log('reducer:', action);
            return preState + data
        case DECREMENT:
            return preState - data
        default:
            return preState
    }
}
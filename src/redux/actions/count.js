/**
 * 该文件专门为Count组件生成action对象
 */
import { INCREMENT, DECREMENT } from '../constant'
import store from '../store'
export const increment = (data) => ({ type: INCREMENT, data })


export const decrement = (data) => ({ type: DECREMENT, data })

// 异步action,就是指action的值为函数
export const incrementAsync = (data, time) => {
    return () => {
        setTimeout(() => {
            store.dispatch(increment(data))
        }, time)
    }
}
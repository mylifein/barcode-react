/**
 * 该文件专门用于暴露一个store对象，整个应用只有一个store对象
 */
// 引入createStore,专门用于创建redux
import { createStore, applyMiddleware } from 'redux'
// 引入redux-thunk,用于支持异步action
import thunk from 'redux-thunk'
// 引入all reducers
import reducer from './reducers'


export default createStore(reducer, applyMiddleware(thunk))

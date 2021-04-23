import React, { useState, useRef } from 'react'
// 引入connect用于连接UI组件与redux
import { connect } from 'react-redux'
import { increment, decrement, incrementAsync } from '../../redux/actions/count'

const Count = (props) => {


    const [count, setCount] = useState(0)
    const select = useRef()
    const increment = () => {
        const { value } = select.current
        props.increment(+value)
    }
    const decrement = () => {
        const { value } = select.current
        props.decrement(+value)
    }
    const incrementIfOdd = () => {
        const { value } = select.current
        if (props.count % 2 !== 0) {
            props.increment(+value)
        }
    }
    const incrementAsync = () => {
        const { value } = select.current
        props.incrementAsync(+value, 2000)
    }

    return (
        <div>
            <h1>我是Count组件</h1>
            <h4>当前求和为:{props.count},下方组件总人数为:{props.person}</h4>
            <select ref={select}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>&nbsp;
            <button onClick={increment}> + </button>&nbsp;
            <button onClick={decrement}> - </button>&nbsp;
            <button onClick={incrementIfOdd}> Odd + </button>&nbsp;
            <button onClick={incrementAsync}> 异步 + </button>
        </div>
    )
}

const mapStateToProps = ({ count }) => ({ count: count })


// 使用connect()() 创建并暴露一个Count的容器组件 
export default connect(({ count, person }) => ({ count, person: person.length }), {
    increment,
    decrement,
    incrementAsync
})(Count)
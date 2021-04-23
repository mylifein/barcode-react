import React, { useRef, useState } from 'react'
import { connect } from 'react-redux'
import { nanoid } from 'nanoid'
import { addPerson } from '../../redux/actions/person'

const Person = (props) => {
    const [persons, setPersons] = useState([])
    const userNode = useRef()
    const ageNode = useRef()
    const addPerson = () => {
        const { current: { value: name } } = userNode
        const { current: { value: age } } = ageNode
        const person = { id: nanoid(), name, age }
        props.addPerson(person)
        userNode.current.value = ''
        ageNode.current.value = ''
    }
    return (
        <div>
            <h2>我是Person组件，上方组件求和为:{props.count}</h2>
            <input type="text" ref={userNode} placeholder='请输入名字' />
            <input type="text" ref={ageNode} placeholder='请输入年龄' />
            <button onClick={addPerson}>添加</button>
            <ul>
                {props.person.map((p) => <li key={p.id}>姓名:{p.name} --- 年龄:{p.age}</li>)}
            </ul>
        </div>
    )
}

export default connect(({ person, count }) => ({ person, count }), { addPerson })(Person)
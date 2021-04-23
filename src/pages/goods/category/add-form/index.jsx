import React from 'react'
import { Form, Select, Input } from 'antd'

const { Item } = Form
const { Option } = Select
/**
 * 添加分类的组件
 * @returns 
 */

const AddForm = () => {

    const onFocus = () => {
        console.log('focus')
    }

    const onGenderChange = () => {

    }

    return (
        <Form>
            <Item label="Note" rules={[{ required: true }]}>
                <Input />
            </Item>
            <Item label="Type" >
                <Select
                    placeholder="Select a option and change input text above"
                    onChange={onGenderChange}
                    allowClear
                >
                    <Option value="male">male</Option>
                    <Option value="female">female</Option>
                    <Option value="other">other</Option>
                </Select>
            </Item>
        </Form>
    )
}

export default AddForm

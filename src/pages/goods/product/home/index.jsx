import React from 'react'
import { Card, Table, Select, Button, Input } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
/**
 * 
 * @returns 
 */
const Option = Select.Option

const ProductHome = () => {

    const title = (
        <span>
            <Select style={{ width: 150 }}>
                <Option value='1'>按名称搜索</Option>
                <Option value='2'>按描述搜索</Option>
            </Select>
            <Input placeholder='关键字' style={{ width: 150, margin: '0 15px' }} />
            <Button type='primary'>搜索</Button>
        </span>
    )

    const extra = (
        <Button type='primary'>
            <PlusOutlined />
            添加商品
        </Button>
    )

    const dataSource = [
        {
            key: '1',
            name: '胡彦斌',
            age: 32,
            address: '西湖区湖底公园1号',
        },
        {
            key: '2',
            name: '胡彦祖',
            age: 42,
            address: '西湖区湖底公园1号',
        },
    ];

    const columns = [
        {
            title: '姓名',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: '年龄',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: '住址',
            dataIndex: 'address',
            key: 'address',
        },
    ]

    return (
        <Card title={title} extra={extra}>
            <Table
                columns={columns}
                dataSource={dataSource}
                bordered
            />
        </Card>
    )
}

export default ProductHome

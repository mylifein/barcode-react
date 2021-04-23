import React, { useState, useEffect } from 'react'
import { Button, Card, Table, Popconfirm } from 'antd'
import print from 'print-js'
import { listApi } from '../../../services/products'

const List = (props) => {

    const [dataSource, setDataSource] = useState([])
    useEffect(() => {
        listApi()
            .then(res => {
                console.log(res);
                setDataSource(res.products)
            }).catch(err => {

            })
    }, [])




    const printf = () => {
        print({ printable: someJSONdata, properties: ['name', 'email', 'phone'], type: 'json' })
    }

    const someJSONdata = [
        {
            name: 'John Doe',
            email: 'john@doe.com',
            phone: '111-111-1111'
        },
        {
            name: 'Barry Allen',
            email: 'barry@flash.com',
            phone: '222-222-2222'
        },
        {
            name: 'Cool Dude',
            email: 'cool@dude.com',
            phone: '333-333-3333'
        }
    ]


    const colunms = [
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
        {
            title: '操作',
            render: (txt, record, index) => {
                return (
                    <div>
                        <Button type="primary" size="small" onClick={() => { props.history.push(`/admin/products/edit/id`)}}>修改</Button>
                        <Popconfirm title="确定删除此项?" onCancel={() => console.log('用户取消删除')} onConfirm={() => console.log('用户确认删除')}>
                            <Button type="danger" style={{ margin: "0 1rem" }} size="small">刪除</Button>
                        </Popconfirm>
                    </div>
                )
            }
        },
    ]


    return (
        <Card title="商品列表" extra={<Button type="primary" size="small" onClick={() => props.history.push('/admin/products/edit')}>新增</Button>}>
            <Table columns={colunms} dataSource={dataSource} />
        </Card >
    )
}
export default List
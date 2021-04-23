/**
 * 商品分类
 */
import { useState } from 'react'
import { Card, Table, Button, Space, Modal } from 'antd'
import AddForm from '@pages/goods/category/add-form'
import { PlusOutlined } from '@ant-design/icons'
const Category = () => {

    const title = '一级分类列表'


    const dataSource = [
        {
            key: '1',
            name: 'Lavine',
            age: 18,
            address: '崑山勤昆路18號',
        },
        {
            key: '2',
            name: 'Brave',
            age: 28,
            address: '塘廈鎮林村18號',
        },
    ]

    const columns = [
        {
            title: '分类的名称',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: '操作',
            width: 300,
            render: (text, record) => (
                <Space size="middle">
                    <Button type="link">修改分类</Button>
                    <Button type="link">查看子分类</Button>
                </Space>
            ),
        }
    ]

    const [showStatus, setShowStatus] = useState(0)
    const [confirmLoading, setConfirmLoading] = useState(false)

    const showModal = () => {
        setShowStatus(1)
    }

    const handleCancel = () => {
        setShowStatus(0)
    }

    const handleOk = () => {
        setConfirmLoading(true)
        setTimeout(() => {
            setShowStatus(0)
            setConfirmLoading(false)
        }, 2000)
    };

    const extra = (
        <Button type="primary" onClick={showModal}>
            <PlusOutlined />
            添加
        </Button>
    )

    return (
        <Card title={title} extra={extra} >
            <Table
                dataSource={dataSource}
                columns={columns}
                bordered
            />
            <Modal
                title="添加分类"
                visible={showStatus === 1}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
            >
                <AddForm />
            </Modal>
        </Card>
    )
}

export default Category
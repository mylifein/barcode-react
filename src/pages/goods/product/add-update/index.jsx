import React from 'react'
import { Card, Form, Input, Button } from 'antd'
import { ArrowLeftOutlined } from '@ant-design/icons'
import PicturesWall from '@components/pictures-wall'
import RichTextEditor from '@components/rich-text-editor'
/**
 * Product的添加和更新的子路由组件
 * @returns 
 */
const { Item } = Form
const { TextArea } = Input
const ProductAddUpdate = () => {

    const layout = {
        labelCol: { span: 2 },
        wrapperCol: { span: 8 },
    }
    const tailLayout = {
        wrapperCol: { offset: 8, span: 16 },
    }

    const title = (
        <span>
            <Button type="link">
                <ArrowLeftOutlined />
            </Button>
            <span>添加容量</span>
        </span>
    )
    return (
        <Form
            {...layout}
            name="basic"
            initialValues={{ remember: true }}
        >
            <Card title={title}>
                <Item label="客户" name="cusName">
                    <Input />
                </Item>
                <Item label="出货料号" name="delMat">
                    <Input.TextArea />
                </Item>
                <Item label="容量" name="capacity">
                    <Input type='number' addonAfter='个/箱' />
                </Item>
                <Item label="商品分类" name="capacity">
                    <div>商品分类</div>
                </Item>
                <Item label="商品图片" name="capacity">
                    <PicturesWall />
                </Item>
                <Item label="商品详情" name="capacity" labelCol={{ span: 2 }} wrapperCol={{ span: 20 }}>
                    <RichTextEditor />
                </Item>
                <Item>
                    <Button type="primary">提交</Button>
                </Item>
            </Card>
        </Form >
    )
}

export default ProductAddUpdate

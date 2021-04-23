import React from 'react'
import { Card, List } from 'antd'
import { ArrowLeftOutlined } from '@ant-design/icons'
/**
 * 商品详情的子路由组件
 * @returns 
 */
const { Item } = List
const ProductDetail = () => {
    const title = (
        <span>
            <ArrowLeftOutlined />
            <span>商品详情</span>
        </span>
    )
    return (
        <Card title={title}>
            <List>
                <Item>
                    <span>商品名称：</span>
                </Item>
            </List>
        </Card>
    )
}

export default ProductDetail

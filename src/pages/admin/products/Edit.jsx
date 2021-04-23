import React, { useState, useEffect } from 'react'
import { Form, Card, Input, Button, Checkbox } from 'antd'

const formItemLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 8 },
}

const formTailLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 8, offset: 4 },
}
const Edit = (props) => {

    // props.match.params.id  存在的话表示修改，否为新增
    const [form] = Form.useForm()
    const [checkNick, setCheckNick] = useState(false)
    const [currentData, setCurrentData] = useState({})



    useEffect(() => {
        if (props.match.params.id) {
            // 根据id 查询数据
        }
    }, [])

    useEffect(() => {
        form.validateFields(['nickname'])
    }, [checkNick])

    const onCheckboxChange = (e) => {
        setCheckNick(e.target.checked);
    }

    const onFinish = (values) => {
        console.log('Success:', values);
    }

    const onCheck = async () => {
        try {
            const values = await form.validateFields()
            console.log('Success:', values)
        } catch (errorInfo) {
            console.log('Failed:', errorInfo)
        }
    }

    return (
        <Card title="商品编辑">
            <Form form={form} name="product" >
                <Form.Item
                    {...formItemLayout}
                    name="productName"
                    label="名称"
                    rules={[
                        {
                            required: true,
                            message: '请输入商品名称',
                        },
                    ]}
                >
                    <Input placeholder="商品名称" />
                </Form.Item>
                <Form.Item
                    {...formItemLayout}
                    name="productType"
                    label="商品类别"
                    rules={[
                        {
                            required: checkNick,
                            message: '请输入商品类别',
                        },
                    ]}
                >
                    <Input placeholder="商品类别" />
                </Form.Item>
                <Form.Item {...formTailLayout}>
                    <Checkbox checked={checkNick} onChange={onCheckboxChange}>
                        价格
                    </Checkbox>
                </Form.Item>
                <Form.Item {...formTailLayout}>
                    <Button type="primary" onClick={onCheck}>
                        保存
                     </Button>
                </Form.Item>
            </Form>
        </Card>
    )
}
export default Edit
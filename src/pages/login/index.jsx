import React from 'react'
import { Form, Input, Button, message } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { loginApi, verify } from '@/services/auth'
import './index.less'
/**
 * 登录的路由组件
 */
const Login = (props) => {
    const onFinish = async (values) => {
        /*         loginApi(values).then(res => {
                    // setToken(res.token)
                    props.history.push("/admin")
                }).catch(err => {
                    message.error(err.message)
                    // setToken('admin')
                    props.history.push("/admin")
                }) */
        const response = await loginApi(values)
        props.history.replace("/admin")

    }

    return (
        <div className="login">
            <header className="login-header">
                {/*  <img src={logo} alt="logo" /> */}
                <h1>CHENBRO Barcode: 后台管理系统</h1>
            </header>
            <section className="login-content">
                <h2>用户登陆</h2>
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="username"
                        rules={[{ required: true, message: 'Please input your Username!' }]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Please input your Password!' }]}
                    >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Item>
                    <Form.Item>

                        <a className="login-form-forgot" href="">
                            Forgot password
                        </a>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Log in
                        </Button>
                    </Form.Item>
                </Form>
            </section>
        </div>
    )
}

export default Login

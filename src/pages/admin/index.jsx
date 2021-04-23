import React, { useState, useEffect } from 'react'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { Layout, message, Spin } from 'antd'
import Top from '@components/header'
import LeftNav from '@components/left-nav'
import { verify } from '@/services/auth'
import renderRoutes from '@utils/renderRoutes'
import { routes } from '@config/menuConfig'

const { Header, Content, Footer, Sider } = Layout

const Admin = (props) => {

    const [collapsed, setCollapsed] = useState(false)

    const [isLoading, setIsLoading] = useState(false)


    const onCollapse = collapsed => {
        setCollapsed(collapsed)
    }

    return (
        <Layout>
            <Layout>
                <Sider width={200} theme="light" className="site-layout-background" collapsible collapsed={collapsed} onCollapse={onCollapse}>
                    <LeftNav isCollapled={collapsed} />
                </Sider>
                <Layout style={{ padding: '16px' }} className="site-layout">
                    <Header className="site-layout-background" style={{ padding: 0 }} >
                        <Top />
                    </Header>
                    <Spin tip="Loading..." spinning={isLoading}></Spin>
                    <Content
                        className="site-layout-background"
                        style={{
                            padding: 24,
                            margin: 20,
                            minHeight: 280,
                        }}
                    >
                        {/* <Switch>
                                {routes.map(route => <Route
                                    key={route.path}
                                    path={route.path}
                                    exact={route.exact}
                                    render={routeProps => <route.component {...routeProps} />} />)}
                                <Redirect to='/home' />
                                <Redirect to="/404" />
                            </Switch> */}
                        {renderRoutes(routes)}
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        <strong>Copyright &copy; 2021 <a href="#">CHENBRO</a>.</strong>
                        All rights reserved.
                    </Footer>
                </Layout>
            </Layout>
        </Layout >
    )

}
export default withRouter(Admin)
import React, { useState } from 'react'
import { withRouter, NavLink } from 'react-router-dom'
import { Layout, Menu, Dropdown, Avatar, message, Spin } from 'antd'
import { DownOutlined, UserOutlined } from '@ant-design/icons'
import { adminRoutes } from '../../routes'
import { clearToken } from '../../utils/auth'
import logo from '../../assets/images/logo.png'
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout
const routes = adminRoutes.filter(route => route.isShow)



const Index = (props) => {

  const getIcon = (type) => {
    const Icon = require('@ant-design/icons')[type];
    return <Icon />
  }

  /**
   *  根据menu的数据数组生成对应的数据
   * @param {*} menuList 
   */
  const getMenuNodes = (menuList) => {
    return menuList.map(item => {
      if (!item.children) {
        return (
          <Menu.Item key={item.path} icon={getIcon(item.icon)}>
            <NavLink to={item.path}>
              {item.title}
            </NavLink>
          </Menu.Item>
        )
      } else {
        return (
          <SubMenu key={item.path} icon={getIcon(item.icon)} title={item.title}>
            {getMenuNodes(item.children)}
          </SubMenu>
        )
      }
    })
  }

  const [collapsed, setCollapsed] = useState(false)

  const [isLoading, setIsLoading] = useState(false)

  const onCollapse = collapsed => {
    setCollapsed(collapsed)
  }

  const menu = (
    <Menu onClick={(e) => {
      if (e.key === 'logout') {
        clearToken()
        props.history.push("/login")
      } else {
        message.info(e.key)
      }
    }}>
      <Menu.Item key="notification">
        通知中心
    </Menu.Item>
      <Menu.Item key="setting">
        设置
    </Menu.Item>
      <Menu.Item key="logout" danger>退出</Menu.Item>
    </Menu>
  )

  return (
    <Layout>
      <Layout>
        <Sider width={200} theme="light" className="site-layout-background" collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <div className="logo" >
            <img src={logo} alt="logo" />
            <h1>条码后台</h1>
          </div>
          <Menu
            defaultSelectedKeys={['1']}
            mode="inline"
            theme="light"
          >
            {routes.map(route => {
              return <Menu.Item key={route.path} icon={getIcon(route.icon)} onClick={e => props.history.push(e.key)}>{route.title}</Menu.Item>
            })}
          </Menu>
        </Sider>
        <Layout style={{ padding: '16px' }} className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} >
            <Dropdown overlay={menu} mode="horizontal" className="right">
              <div>
                <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
                <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                  超级管理员 <DownOutlined />
                </a>
                <button onClick={() => setIsLoading(!isLoading)}>切换</button>
              </div>
            </Dropdown>
          </Header>
          <Spin tip="Loading..." spinning={isLoading}></Spin>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            {props.children}
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            <strong>Copyright &copy; 2021 <a href="#">CHENBRO</a>.</strong>
            All rights reserved.
          </Footer>
        </Layout>
      </Layout>
    </Layout >

  );

}

export default withRouter(Index)
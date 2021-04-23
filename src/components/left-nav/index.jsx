/**
 * 左侧导航的组件
 */
import React, { useEffect, useState } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Menu } from 'antd'
import logo from '@assets/images/logo.png'
import { routes } from '@/config/menuConfig'
import './index.less'

const { SubMenu } = Menu

const LeftNav = (props) => {
    // 得到当前请求的路由路径
    let isMenuPath = false
    const { pathname } = props.location
    const { isCollapled } = props
    const [menuNodes, setMenuNodes] = useState([])
    const [openKey, setOpenKey] = useState([])
    const [parentMenu, setParentMenu] = useState(pathname)

    useEffect(() => {
        setMenuNodes(getMenuNodes(routes))
        if (!isMenuPath) {
            findParentMenu(routes, pathname)
        } else {
            setParentMenu(pathname)
        }
    }, [pathname])


    const getIcon = (type) => {
        const Icon = require('@ant-design/icons')[type];
        return <Icon />
    }

    const onOpenChange = (openKeys) => {
        setOpenKey(openKeys)
    }

    const findParentMenu = (routes, parentPath) => {
        routes.find((route) => {
            if (route.path === pathname) {
                setParentMenu(parentPath)
                return true
            } else if (route.routes) {
                return findParentMenu(route.routes, route.path)
            }
            return false
        })
    }

    const getMenuNodes = (menuList) => {
        return menuList.reduce((pre, item) => {
            // 如果当前用户有item对应的权限, 才需要显示对应的菜单项
            // 向pre添加<Menu.Item>
            if (item.isShow) {
                if (item.path === pathname) {
                    //setMenuPath(true)
                    isMenuPath = true
                }
                if ((!item.routes || item.isMenu)) {
                    pre.push((
                        <Menu.Item key={item.path} icon={getIcon(item.icon)}>
                            <Link to={item.path}>
                                <span>{item.title}</span>
                            </Link>
                        </Menu.Item>
                    ))
                } else {

                    // 查找一个与当前请求路径匹配的子Item
                    const cItem = item.routes.find(cItem => pathname.indexOf(cItem.path) === 0)
                    // 如果存在, 说明当前item的子列表需要打开
                    if (cItem) {
                        setOpenKey([item.path])
                    }
                    // 向pre添加<SubMenu>
                    pre.push((
                        <SubMenu key={item.path} icon={getIcon(item.icon)} title={item.title}>
                            {getMenuNodes(item.routes)}
                        </SubMenu>
                    ))
                }
            }
            return pre
        }, [])
    }



    return (
        <div className="left-nav">
            <Link to="/" className="logo" >
                <img src={logo} alt="logo" />
                <h1 style={{ display: isCollapled ? 'none' : 'block' }}>条码后台</h1>
            </Link>
            <Menu
                selectedKeys={[parentMenu]}
                mode="inline"
                theme="light"
                onOpenChange={onOpenChange}
                openKeys={openKey}
            >
                {menuNodes}
            </Menu>
        </div >
    )
}
export default withRouter(LeftNav)
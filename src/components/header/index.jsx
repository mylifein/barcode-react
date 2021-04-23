/**
 * 头部导航的组件
 */
import { Menu, Dropdown, Avatar, message, Modal, Space } from 'antd'
import { withRouter } from 'react-router-dom'
import { DownOutlined, UserOutlined, ExclamationCircleOutlined } from '@ant-design/icons'
import styles from './index.less'

const Header = (props) => {


    const confirm = () => {
        Modal.confirm({
            title: '确定退出吗？',
            icon: <ExclamationCircleOutlined />,
            // content: '确定退出吗？',
            okText: '确认',
            cancelText: '取消',
            onOk: () => {
                // 删除保存的user数据

                // 跳转到login
                props.history.replace("/login")
            },
        });
    }

    const menu = (
        <Menu onClick={(e) => {
            if (e.key === 'logout') {
                confirm()
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
            <Menu.Item key="logout" danger>
                退出
            </Menu.Item>
        </Menu>
    )

    return (
        <div className="header">
            <div className="header-top">
                <Dropdown overlay={menu} mode="horizontal" >
                    {/* <div>
                        <span>欢迎,admin</span>
                        <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
                        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                            超级管理员 <DownOutlined />
                        </a>
                    </div> */}
                    <span className={`${styles.action} ${styles.account}`}>
                        <Avatar size="small" className={styles.avatar} icon={<UserOutlined />} alt="avatar" />
                        <span className={`${styles.name} anticon`}>{'超级管理员'}</span>
                    </span>
                </Dropdown>
            </div>
            <div className="header-bottom">

            </div>
        </div>
    )
}
export default withRouter(Header)
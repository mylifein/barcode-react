import { Redirect } from 'react-router-dom'
import { AsyncComponent } from '@utils/component'

const Edit = AsyncComponent(() => import('@pages/admin/products/Edit'))
const List = AsyncComponent(() => import('@pages/admin/products/List'))
const Role = AsyncComponent(() => import('@pages/role'))


const routes = [
    {
        path: '/home',   // 对应的path
        component: AsyncComponent(() => import('@pages/home')),
        isShow: true,   // 是否显示菜单
        title: '首页',   // 菜单标题名称
        exact: true,
        icon: 'HomeOutlined'  // 图标名称
    },
    {
        path: '/dashboard',
        component: AsyncComponent(() => import('@pages/admin/dashboard/Index')),
        isShow: true,
        title: '看板',
        exact: true,
        icon: 'AreaChartOutlined'
    },
    {
        path: '/goods',
        component: AsyncComponent(() => import('@pages/goods')),
        isShow: true,
        title: '商品管理',
        icon: 'ShopOutlined',
        routes: [ // 子菜单列表
            {
                path: '/goods/category',
                component: AsyncComponent(() => import('@pages/goods/category')),
                isShow: true,
                title: '品类管理',
                icon: 'SplitCellsOutlined',
            },
            {
                path: '/goods/product',
                component: AsyncComponent(() => import('@pages/goods/product')),
                isShow: true,
                title: '产品管理',
                icon: 'GiftOutlined',
                isMenu: true,
                routes: [
                    {
                        path: '/goods/product/home',
                        component: AsyncComponent(() => import('@pages/goods/product/home')),
                        isShow: false,
                        title: '产品主页',
                        icon: 'AreaChartOutlined'
                    },
                    {
                        path: '/goods/product/detail',
                        component: AsyncComponent(() => import('@pages/goods/product/detail')),
                        isShow: false,
                        title: '产品详情页',
                        icon: 'AreaChartOutlined'
                    },
                    {
                        path: '/goods/product/addupdate',
                        component: AsyncComponent(() => import('@pages/goods/product/add-update')),
                        isShow: false,
                        title: '产品详情页',
                        icon: 'AreaChartOutlined'
                    }
                ]
            },

        ]
    },
    {
        path: '/users',
        component: AsyncComponent(() => import('@pages/user')),
        isShow: true,
        title: '用户管理',
        exact: true,
        icon: 'UserOutlined'
    },
    {
        path: '/configs',
        isShow: true,
        title: '配置管理',
        exact: true,
        icon: 'EditOutlined'
    },
    {
        path: '/charts',
        title: '图形图表',
        isShow: true,
        icon: 'AreaChartOutlined',
        routes: [
            {
                path: '/charts/bar',
                isShow: true,
                title: '柱形图',
                icon: 'BarChartOutlined'
            },
            {
                title: '折线图',
                isShow: true,
                path: '/charts/line',
                icon: 'LineChartOutlined'
            },
            {
                title: '饼图',
                isShow: true,
                path: '/charts/pie',
                icon: 'PieChartOutlined'
            },
        ]
    },

]


const menuList = [
    {
        title: '首页', // 菜单标题名称
        path: '/home', // 对应的path
        icon: 'HomeOutlined', // 图标名称
        isPublic: true, // 公开的
    },
    {
        title: '商品',
        path: '/products',
        icon: 'HomeOutlined',
        routes: [ // 子菜单列表
            {
                title: '品类管理',
                path: '/category',
                icon: 'HomeOutlined'
            },
            {
                title: '商品管理',
                path: '/product',
                icon: 'HomeOutlined'
            },
        ]
    },

    {
        title: '用户管理',
        path: '/user',
        icon: 'HomeOutlined'
    },
    {
        title: '角色管理',
        path: '/role',
        icon: 'HomeOutlined',
    },

    {
        title: '图形图表',
        path: '/charts',
        icon: 'HomeOutlined',
        routes: [
            {
                title: '柱形图',
                path: '/charts/bar',
                icon: 'BarChartOutlined'
            },
            {
                title: '折线图',
                path: '/charts/line',
                icon: 'LineChartOutlined'
            },
            {
                title: '饼图',
                path: '/charts/pie',
                icon: 'PieChartOutlined'
            },
        ]
    },

    {
        title: '订单管理',
        path: '/order',
        icon: 'HomeOutlined',
    },
]

export { routes, menuList }

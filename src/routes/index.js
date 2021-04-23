import Login from "@pages/login"
import Admin from '@pages/admin'
import PageNotFound from "@pages/PageNotFound"

export const mainRoutes = [
    {
        path: '/login',
        component: Login
    },
    {
        path: '/404',
        component: PageNotFound
    },
    {
        path: '/',
        component: Admin
    }
]



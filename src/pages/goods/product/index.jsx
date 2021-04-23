/**
 * 产品路由
 */
import { useEffect } from 'react'
import renderRoutes from '@utils/renderRoutes'
const Product = (props) => {
    const { route } = props
    useEffect(() => {
        console.log(props);
    }, [])

    return (
        <div>
            Product
            {renderRoutes(route.routes)}
        </div>
    )
}

export default Product
import { useEffect } from 'react'
import renderRoutes from '@utils/renderRoutes'
const Goods = (props) => {

    const { route } = props
    useEffect(() => {

    }, [])

    return (
        <div>
            {renderRoutes(route.routes)}
        </div>
    )
}
export default Goods

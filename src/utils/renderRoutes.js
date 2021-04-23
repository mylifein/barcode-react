import React from "react"
import { Switch, Route, Redirect } from "react-router"
import checkPermissions from './checkPermissions'
const renderRoutes = (routes, authed, multipleRoutes, extraProps = {}, switchProps = {}) => routes ? (
    <Switch {...switchProps}>
        {routes.map((route, i) => (
            <Route
                key={route.key || i}
                path={route.path}
                exact={route.exact}
                strict={route.strict}
                render={props => {
                    if (!route.permissions || checkPermissions(route.permissions, authed)) {
                        return route.render
                            ? route.render({ ...props, ...extraProps, route: route })
                            : route.component && <route.component {...props} {...extraProps} route={route} />
                    }
                    return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
                }}
            />
        ))}
    </Switch>
) : null
export default renderRoutes

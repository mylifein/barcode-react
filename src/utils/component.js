import React, { lazy, Suspense } from 'react'
import { Spin } from 'antd'

export const AsyncComponent = (importFuc) => {
    const Component = lazy(importFuc)
    return (props) => (
        <Suspense fallback={<Spin tip="loading" spinning={true}></Spin>}>
            <Component {...props} />
        </Suspense>
    )
}

export const AsyncComponent2 = (url) => {
    const Component = lazy(() => import(url))
    return (props) => (
        <Suspense fallback={<Spin tip="loading" spinning={true}></Spin>}>
            <Component {...props} />
        </Suspense>
    )
}


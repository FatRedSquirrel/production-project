import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from 'shared/config/routeConfig/routeConfig'

const AppRouter = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                {Object.values(routeConfig).map((route, index) => (
                    <Route
                        key={index}
                        path={route.path}
                        element={(
                            <div className='page-wrapper'>
                                {route.element}
                            </div>
                        )}
                    />
                ))}
            </Routes>
        </Suspense>
    )
}

export { AppRouter }

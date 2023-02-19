import React, { Suspense } from 'react'
import { useTheme } from 'app/providers/ThemeProvider'
import { classNames } from 'shared/lib/classNames'
import { AppRouter } from 'app/providers/router'
import { Navbar } from 'widgets/Navbar'

import './styles/index.scss'
import { Sidebar } from 'widgets/Sidebar'

const App = () => {
    const { theme } = useTheme()

    const additional = theme ? [theme] : [];

    return (
        <div className={classNames('app', {}, additional)}>
            <Suspense fallback="">
                <Navbar/>
                <div className='content-page'>
                    <Sidebar/>
                    <AppRouter/>
                </div>
            </Suspense>
        </div>
    )
}

export default App

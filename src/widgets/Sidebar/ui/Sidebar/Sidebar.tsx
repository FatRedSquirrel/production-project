import { classNames } from 'shared/lib/classNames'
import cls from './Sidebar.module.scss'
import React, { useState } from 'react'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher'
import { Button } from 'shared/ui/Button/Button'

interface SidebarProps {
    className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false)

    const toggleMenu = () => {
        setCollapsed(prev => !prev)
    }

    return (
        <div
            className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [className])}
        >
            <Button onClick={toggleMenu}>toggle</Button>
            <div className={cls.switchers}>
                <ThemeSwitcher/>
                <LangSwitcher/>
            </div>
        </div>
    )
}

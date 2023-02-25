import React from 'react'

import { classNames } from 'shared/lib/classNames'
import { Theme, useTheme } from 'app/providers/ThemeProvider'
import { Button, ThemeButton } from 'shared/ui/Button/Button'

import LightThemeIcon from 'shared/assets/icons/themeLight.svg'
import DarkThemeIcon from 'shared/assets/icons/themeDark.svg'

import cls from './ThemeSwitcher.module.scss'

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme()

    const additional = className ? [className] : []

    return (
        <Button
            theme={ThemeButton.CLEAR}
            className={classNames(cls.themeSwitcher, {}, additional)}
            onClick={toggleTheme}
        >
            {theme === Theme.LIGHT
                ? <LightThemeIcon/>
                : <DarkThemeIcon/>
            }
        </Button>
    )
}

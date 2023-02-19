import React from 'react'

import { classNames } from 'shared/lib/classNames'
import { Theme, useTheme } from 'app/providers/ThemeProvider'
import { Button, ThemeButton } from 'shared/ui/Button/Button'

import LightThemeIcon from '../../../../src/shared/assets/icons/themeLight.svg'
import DarkThemeIcon from '../../../../src/shared/assets/icons/themeDark.svg'

import cls from './ThemeSwitcher.module.scss'

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme()

    return (
        <Button
            theme={ThemeButton.CLEAR}
            className={classNames(cls.themeSwitcher, {}, [className])}
            onClick={toggleTheme}
        >
            {theme === Theme.LIGHT
                ? <LightThemeIcon/>
                : <DarkThemeIcon/>
            }
        </Button>
    )
}

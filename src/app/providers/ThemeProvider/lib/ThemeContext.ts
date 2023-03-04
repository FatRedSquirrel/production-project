import { createContext } from 'react'

export enum Theme {
    LIGHT = 'light',
    DARK = 'dark'
}

export interface ThemeContextProps {
    theme?: Theme
    setTheme: any
}

export const ThemeContext = createContext<ThemeContextProps>({
    theme: Theme.LIGHT,
    setTheme: () => console.log('hi')
})

export const LOCAL_STORAGE_THEME_KEY = 'theme'

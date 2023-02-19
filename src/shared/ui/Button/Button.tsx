import { type ButtonHTMLAttributes, type PropsWithChildren } from 'react'

import { classNames } from 'shared/lib/classNames'

import cls from './Button.module.scss'

export enum ThemeButton {
    CLEAR = 'clear'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: ThemeButton
}

export const Button = (props: PropsWithChildren<ButtonProps>) => {
    const {
        className,
        children,
        theme,
        ...otherProps
    } = props

    return (
        <button
            type='button'
            className={classNames(cls.button, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    )
}

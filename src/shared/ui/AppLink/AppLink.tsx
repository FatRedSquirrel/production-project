import { classNames } from 'shared/lib/classNames'
import cls from './AppLink.module.scss'
import { Link, type LinkProps } from 'react-router-dom'
import { type PropsWithChildren } from 'react'

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps {
    className?: string
    theme?: AppLinkTheme
}

export const AppLink = (props: PropsWithChildren<AppLinkProps>) => {
    const {
        to,
        className,
        children,
        theme = AppLinkTheme.PRIMARY,
        ...otherProps
    } = props

    const additional = className ? [className, cls[theme]] : [cls[theme]]

    return (
        <Link
            to={to}
            className={classNames(cls.appLink, {}, additional)}
            {...otherProps}
        >
            {children}
        </Link>
    )
}



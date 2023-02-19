import { classNames } from 'shared/lib/classNames'
import cls from './NotFound.module.scss'
import { useTranslation } from 'react-i18next'

interface NotFoundProps {
    className?: string
}

export const NotFound = ({ className }: NotFoundProps) => {
    const additional = className ? [className] : []

    const { t } = useTranslation()

    return (
        <div className={classNames(cls.notFound, {}, additional)}>
            {t('Страница не найдена')}
        </div>
    )
}

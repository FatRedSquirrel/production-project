import React from "react";
import {useTranslation} from "react-i18next";

import {classNames} from "shared/lib/classNames";
import {Button, ThemeButton} from "shared/ui/Button/Button";

import cls from './LangSwitcher.module.scss';


interface LangSwitcherProps {
    className?: string;
}

export const LangSwitcher = ({className}: LangSwitcherProps) => {

    const {i18n} = useTranslation();

    const toggleLanguage = () => {
        i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en');
    }

    return (
        <Button
            onClick={toggleLanguage}
            className={classNames(cls.langSwitcher, {}, [className])}
            theme={ThemeButton.CLEAR}
        >
            {i18n.language}
        </Button>
    );
};

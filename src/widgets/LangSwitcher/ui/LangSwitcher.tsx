import React from "react";
import { useTranslation } from "react-i18next";

import { classNames } from "shared/lib/classNames";
import { Button, ButtonTheme } from "shared/ui/Button/Button";

import cls from "./LangSwitcher.module.scss";

interface LangSwitcherProps {
    className?: string
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
  const { i18n } = useTranslation();

  const toggleLanguage = async () => {
    await i18n.changeLanguage(i18n.language === "en" ? "ru" : "en");
  };

  const additional = className ? [className] : [];

  return (
    <Button
      onClick={toggleLanguage}
      className={classNames(cls.langSwitcher, {}, additional)}
      theme={ButtonTheme.CLEAR}
    >
      {i18n.language}
    </Button>
  );
};

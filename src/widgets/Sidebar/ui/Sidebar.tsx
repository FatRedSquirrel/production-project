import React, { useState } from "react";

import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { LangSwitcher } from "widgets/LangSwitcher";
import { Button, ButtonSize, ButtonTheme } from "shared/ui/Button/Button";

import { classNames } from "shared/lib/classNames";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { RoutePath } from "shared/config/routeConfig/routeConfig";

import HomeIcon from "shared/assets/icons/home.svg";
import AboutIcon from "shared/assets/icons/about.svg";

import cls from "./Sidebar.module.scss";
import { useTranslation } from "react-i18next";

interface SidebarProps {
  className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleMenu = () => {
    setCollapsed(prev => !prev);
  };

  const additional = className ? [className] : [];

  const { t } = useTranslation();

  return (
    <div
      data-testid='sidebar'
      className={
        classNames(
          cls.sidebar,
          { [cls.collapsed]: collapsed },
          additional
        )
      }
    >
      <div className={cls.items}>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          to={RoutePath.main}
          className={cls.link}
        >
          <HomeIcon className={cls.icon}/>
          <span>
            {t("Главная")}
          </span>
        </AppLink>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          to={RoutePath.about}
          className={cls.link}
        >
          <AboutIcon className={cls.icon}/>
          <span>
            {t("Информация")}
          </span>
        </AppLink>
      </div>
      <div className={cls.switchers}>
        <ThemeSwitcher/>
        <LangSwitcher/>
      </div>
      <Button
        data-testid='sidebar-toggle'
        className={cls.collapseBtn}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        square
        size={ButtonSize.L}
        onClick={toggleMenu}
      >
        {collapsed ? ">" : "<"}
      </Button>
    </div>
  );
};

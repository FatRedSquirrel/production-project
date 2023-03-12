import React, { useCallback, useState } from "react";
import { classNames } from "shared/lib/classNames";
import cls from "./Navbar.module.scss";
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { LoginModal } from "features/AuthByUsername";

interface NavbarProps {
  className?: string
}

const links = [
  "Войти"
];

export const Navbar = ({ className }: NavbarProps) => {
  const additional = className ? [className] : [];

  const { t } = useTranslation();

  const [isAuthModal, setIsAuthModal] = useState(false);

  const onModalToggle = useCallback(() => {
    setIsAuthModal(prev => !prev);
  }, []);

  return (
    <div className={classNames(cls.navbar, {}, additional)}>
      <div className={cls.links}>
        {links.map((link, index) =>
          <Button
            key={index}
            // className={cls.navbar__link}
            theme={ButtonTheme.CLEAR_INVERTED}
            onClick={onModalToggle}
          >
            {t(link)}
          </Button>
        )}
      </div>
      <LoginModal
        isOpen={isAuthModal}
        onClose={onModalToggle}
        lazy={true}
      />
    </div>
  );
};



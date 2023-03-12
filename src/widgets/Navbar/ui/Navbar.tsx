import React, { useCallback, useState } from "react";
import { classNames } from "shared/lib/classNames";
import cls from "./Navbar.module.scss";
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { LoginModal } from "features/AuthByUsername";
import { useDispatch, useSelector } from "react-redux";
import { getUserAuthData, userActions } from "entitites/User";

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
  const additional = className ? [className] : [];

  const dispatch = useDispatch();

  const { t } = useTranslation();

  const [isAuthModal, setIsAuthModal] = useState(false);

  const authData = useSelector(getUserAuthData);

  const onModalToggle = useCallback(() => {
    setIsAuthModal(prev => !prev);
  }, []);

  const logout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  return (
    <div className={classNames(cls.navbar, {}, additional)}>
      <div className={cls.links}>
        <Button
          theme={ButtonTheme.CLEAR_INVERTED}
          onClick={authData ? logout : onModalToggle}
        >
          {authData
            ? t("Выйти")
            : t("Войти")
          }
        </Button>
      </div>
      <LoginModal
        isOpen={isAuthModal}
        onClose={onModalToggle}
        lazy={true}
      />
    </div>
  );
};



import { Modal } from "shared/ui/Modal";
import { useTranslation } from "react-i18next";
import cls from "./index.module.scss";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";
import { useDispatch, useSelector } from "react-redux";
import { loginActions } from "features/AuthByUsername";
import { memo, useCallback } from "react";
import { selectLoginState } from "../model/selectors/selectLoginState/selectLoginState";
import { loginByUsername } from "features/AuthByUsername/model/services/loginByUsername/loginByUsername";
import { Text, TextTheme } from "shared/ui/Text/Text";

interface LoginModalProps {
  isOpen: boolean
  onClose: () => void
  lazy?: boolean
}

export const LoginModal = memo((props: LoginModalProps) => {

  const {
    isOpen,
    onClose,
    lazy
  } = props;

  const { t } = useTranslation();
  const dispatch = useDispatch();

  const { username, password, error, isLoading } = useSelector(selectLoginState);

  const onUsernameChange = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value));
  }, [dispatch]);

  const onPasswordChange = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value));
  }, [dispatch]);

  const login = useCallback((e) => {
    e.preventDefault();
    dispatch(loginByUsername({ username, password, onClose }));
  }, [dispatch, password, username, onClose]);

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      lazy={lazy}
    >
      <form
        className={cls.loginForm}
        onSubmit={login}
      >
        <Text title={t("Форма авторизации")} />
        {error &&
            <Text
              theme={TextTheme.ERROR}
              text={error}
            />
        }
        <Input
          value={username}
          placeholder={t("Введите логин")}
          type="text"
          autofocus={true}
          onChange={onUsernameChange}
        />
        <Input
          value={password}
          placeholder={t("Введите пароль")}
          type="text"
          onChange={onPasswordChange}
        />
        <Button
          type="submit"
          theme={ButtonTheme.OUTLINE}
          disabled={isLoading}
          loading={isLoading}
        >
          {t("Войти")}
        </Button>
      </form>
    </Modal>
  );
});

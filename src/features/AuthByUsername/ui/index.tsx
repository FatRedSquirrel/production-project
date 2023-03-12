import { Modal } from "shared/ui/Modal";
import { useTranslation } from "react-i18next";
import cls from "./index.module.scss";
import { Button } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";

interface LoginModalProps {
  isOpen: boolean
  onClose: () => void
  lazy?: boolean
}

export const LoginModal = (props: LoginModalProps) => {

  const {
    isOpen,
    onClose,
    lazy
  } = props;

  const { t } = useTranslation();

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      lazy={lazy}
    >
      <div className={cls.loginForm}>
        <Input
          placeholder={t("Введите логин")}
          type="text"
          autofocus={true}
        />
        <Input
          placeholder={t("Введите пароль")}
          type="text"
        />
        <Button>
          {t("Войти")}
        </Button>
      </div>
    </Modal>
  );
};

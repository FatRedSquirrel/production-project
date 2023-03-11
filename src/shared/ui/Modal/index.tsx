import React, { ReactNode, useCallback, useEffect, useRef, useState } from "react";
import { classNames } from "shared/lib/classNames";
import cls from "./index.module.scss";
import { Portal } from "shared/ui/Portal";
import { useTheme } from "app/providers/ThemeProvider";


interface ModalProps {
  className?: string
  children?: ReactNode
  isOpen: boolean
  onClose?: () => void
}

export const Modal = (props: ModalProps) => {
  const {
    className,
    children,
    isOpen,
    onClose
  } = props;

  const [isClosing, setIsClosing] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  const { theme } = useTheme();

  const mods: Record<string, boolean> = {
    [cls.opened]: isOpen,
    [cls.isClosing]: isClosing
  };

  const additional = [
    theme,
    className && className
  ];

  const handleClose = useCallback(() => {
    if (onClose) {
      setIsClosing(true);
      timerRef.current = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, 280);
    }
  }, [onClose]);

  const onContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") {
      handleClose();
    }
  }, [handleClose]);

  useEffect(() => {

    if (isOpen) {
      window.addEventListener("keydown", onKeyDown);
    }

    return () => {
      // @ts-ignore
      clearTimeout(timerRef.current);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, onKeyDown]);

  return (
    <Portal>
      <div className={classNames(cls.modal, mods, additional)}>
        <div className={cls.overlay} onClick={handleClose}>
          <div className={cls.content} onClick={onContentClick}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};

import { type ButtonHTMLAttributes, type PropsWithChildren } from "react";

import { classNames } from "shared/lib/classNames";
import cls from "./Button.module.scss";

export enum ThemeButton {
    CLEAR = "clear",
    OUTLINE = "outline"
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: ThemeButton
}

export const Button = (props: PropsWithChildren<ButtonProps>) => {
  const {
    className,
    children,
    theme,
    ...otherProps
  } = props;

  const themeClass = theme ? cls[theme] : "";

  const additional = className ? [className, themeClass] : [themeClass];

  return (
    <button
      type='button'
      className={classNames(cls.button, {}, additional)}
      {...otherProps}
    >
      {children}
    </button>
  );
};

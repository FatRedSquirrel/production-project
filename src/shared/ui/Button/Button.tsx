import { type ButtonHTMLAttributes, type PropsWithChildren } from "react";

import { classNames } from "shared/lib/classNames";

import cls from "./Button.module.scss";

export enum ButtonTheme {
  CLEAR = "clear",
  OUTLINE = "outline",
  BACKGROUND = "background",
  BACKGROUND_INVERTED = "backgroundInverted",
}

export enum ButtonSize {
  M = "size_m",
  L = "size_l",
  XL = "size_xl"
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ButtonTheme
  square?: boolean
  size?: ButtonSize
}

export const Button = (props: PropsWithChildren<ButtonProps>) => {
  const {
    className,
    children,
    theme,
    square,
    size,
    ...otherProps
  } = props;

  const additional = [
    className,
    theme && cls[theme],
    size && cls[size]
  ];

  const mods: Record<string, boolean | undefined> = {
    [cls.square]: square
  };

  return (
    <button
      type='button'
      className={classNames(cls.button, mods, additional)}
      {...otherProps}
    >
      {children}
    </button>
  );
};

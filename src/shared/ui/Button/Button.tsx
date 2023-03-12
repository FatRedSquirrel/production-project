import { type ButtonHTMLAttributes, type PropsWithChildren } from "react";
import { classNames } from "shared/lib/classNames";
import Spinner from "shared/assets/icons/spinner.svg";
import cls from "./Button.module.scss";

export enum ButtonTheme {
  CLEAR = "clear",
  CLEAR_INVERTED = "clearInverted",
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
  loading?: boolean
}

export const Button = (props: PropsWithChildren<ButtonProps>) => {
  const {
    className,
    children,
    theme,
    square,
    size,
    loading,
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
      {loading
        ? <Spinner/>
        : children}
    </button>
  );
};

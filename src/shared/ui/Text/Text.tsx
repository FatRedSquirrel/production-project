import { classNames } from "shared/lib/classNames";
import cls from "./Text.module.scss";
import { useTranslation } from "react-i18next";

export enum TextTheme {
  PRIMARY = "primary",
  ERROR = "error"
}

interface TextProps {
  className?: string
  title?: string
  text?: string
  theme?: string
}

export const Text = (props: TextProps) => {
  const {
    className,
    title,
    text,
    theme = TextTheme.PRIMARY
  } = props;

  const additional = [
    className && className
  ];

  const mods = {
    [cls[theme]]: true
  };

  const { t } = useTranslation();

  return (
    <div className={classNames(cls.text, mods, additional)}>
      {title &&
          <p className={cls.title}>
            {t(title)}
          </p>
      }
      {text &&
          <p className={cls.text}>
            {t(text)}
          </p>
      }
    </div>
  );
};

import { classNames } from "shared/lib/classNames";
import cls from "./Input.module.scss";
import { ChangeEvent, InputHTMLAttributes, useEffect, useRef, useState } from "react";

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "onChange">;

interface InputProps extends HTMLInputProps {
  className?: string
  value?: string
  onChange?: (value: string) => void
  autofocus?: boolean
}

export const Input = (props: InputProps) => {

  const {
    className,
    value,
    onChange,
    type = "text",
    placeholder,
    autofocus,
    ...otherProps
  } = props;

  const ref = useRef<HTMLInputElement>();

  const additional = [
    className && className
  ];

  const [isFocused, setIsFocused] = useState(false);
  const [caretPosition, setCaretPosition] = useState(0);

  useEffect(() => {
    if (autofocus) {
      setIsFocused(true);
      ref.current?.focus();
    }
  }, [autofocus]);

  const onFocus = () => {
    setIsFocused(true);
  };

  const onBlur = () => {
    setIsFocused(false);
  };

  const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
    setCaretPosition(e.target.value.length);
  };

  const onSelect = (e: any) => {
    setCaretPosition(e?.target?.selectionStart || 0);
  };

  return (
    <div className={classNames(cls.container, {}, additional)}>
      {placeholder &&
          <div>
            {`${placeholder} >`}
          </div>
      }
      <div className={cls.inputWrapper}>
        <input
          // @ts-ignore
          ref={ref}
          className={cls.input}
          type={type}
          value={value}
          onChange={inputChangeHandler}
          onFocus={onFocus}
          onBlur={onBlur}
          onSelect={onSelect}
          {...otherProps}
        />
        {isFocused &&
            <span
              className={cls.input__caret}
              style={{ left: `${caretPosition * 9}px` }}
            />
        }
      </div>
    </div>
  );
};

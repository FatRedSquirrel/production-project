import React from "react";

import { classNames } from "shared/lib/classNames";


import cls from "./Navbar.module.scss";

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
  const additional = className ? [className] : [];

  return (
    <div className={classNames(cls.navbar, {}, additional)}>
      <div className={cls.links}>

      </div>
    </div>
  );
};



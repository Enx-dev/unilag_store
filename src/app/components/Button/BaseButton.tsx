"use client";

import React, { ButtonHTMLAttributes } from "react";

interface IButton extends Partial<ButtonHTMLAttributes<HTMLButtonElement>> {
  children: React.ReactNode;
}

const BaseButton = ({ children, ...rest }: IButton) => {
  return <button {...rest}>{children}</button>;
};

export default BaseButton;

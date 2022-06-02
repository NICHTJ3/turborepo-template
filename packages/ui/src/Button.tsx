import React, { ComponentProps } from "react";

interface Props extends ComponentProps<"button"> {
  children?: React.ReactNode;
}

export const Button = ({ children = "Boop", ...props }: Props) => {
  return <button {...props}>{children}</button>;
};

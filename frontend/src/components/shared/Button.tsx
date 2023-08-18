import React, { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  version?: string;
  type?: "submit" | "button" | "reset";
  isDisabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  version = "primary",
  isDisabled = false,
  onClick,
  type = "button",
}) => {
  return (
    <button
      type={type}
      disabled={isDisabled}
      className={`btn btn-${version}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;

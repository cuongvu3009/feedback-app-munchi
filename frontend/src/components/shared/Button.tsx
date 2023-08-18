import React, { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  version?: string;
  type?: string;
  isDisabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  version = "primary",
  isDisabled = false,
  onClick,
}) => {
  return (
    <button
      type="button"
      disabled={isDisabled}
      className={`btn btn-${version}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;

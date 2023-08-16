import React, { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  version?: string;
  type?: string;
  isDisabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  version = "primary",
  isDisabled = false,
}) => {
  return (
    <button
      type="button"
      disabled={isDisabled}
      className={`btn btn-${version}`}
    >
      {children}
    </button>
  );
};

export default Button;

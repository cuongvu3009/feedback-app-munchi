import React from "react";

interface ButtonProps {
  version?: string;
  type?: "submit" | "button" | "reset";
  isDisabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  btnText?: string;
}

const Button: React.FC<ButtonProps> = ({
  version = "primary",
  isDisabled = false,
  onClick,
  type = "button",
  btnText = "next",
}) => {
  return (
    <button
      type={type}
      disabled={isDisabled}
      className={`btn btn-${version}`}
      onClick={onClick}
    >
      {btnText}
    </button>
  );
};

export default Button;

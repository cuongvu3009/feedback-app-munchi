import Button from "./Button";
import React from "react";

interface NavigationProps {
  btnVersion?: string;
  btnText?: string;
}

const Navigation: React.FC<NavigationProps> = ({
  btnVersion = "full",
  btnText = "next",
}) => {
  return (
    <div className="navigation">
      <Button version={`btn btn-${btnVersion}`}>
        <b>{btnText}</b>
      </Button>
      <p>
        Powered by <span className="red-text">munchi</span>
      </p>
    </div>
  );
};

export default Navigation;

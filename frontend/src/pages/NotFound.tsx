import Button from "../components/shared/Button";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };
  return (
    <div className="mobile">
      <h3>404 - Page Not Found</h3>
      <Button
        version="full"
        onClick={handleClick}
        btnText="Go Back Homepage"
      ></Button>
    </div>
  );
};

export default NotFound;

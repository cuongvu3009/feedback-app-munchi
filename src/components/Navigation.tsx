import Button from "./shared/Button";

const Navigation = () => {
  return (
    <div className="navigation">
      <Button version="btn btn-full">Next</Button>
      <p>
        Powered by <span className="red-text">munchi</span>
      </p>
    </div>
  );
};

export default Navigation;

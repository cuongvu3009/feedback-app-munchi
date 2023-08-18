import "./endfeedback.css";

import Button from "../../components/shared/Button";
import { PiHeartStraightLight } from "react-icons/pi";
import Title from "../../components/shared/Title";
import TradeMark from "../../components/shared/TradeMark";

const EndFeedBack = () => {
  return (
    <div className="mobile">
      <Title />

      <div className="end-feedback">
        <PiHeartStraightLight size={100} />
        <h3>Thank you!</h3>
        <p>You make us feel very special.</p>
      </div>

      <div className="navigation">
        <Button version="secondary" btnText="Submit another feedback" />
        <TradeMark />
      </div>
    </div>
  );
};

export default EndFeedBack;

import "./endfeedback.css";

import Navigation from "../../components/shared/Navigation";
import { PiHeartStraightLight } from "react-icons/pi";
import Title from "../../components/shared/Title";

const EndFeedBack = () => {
  return (
    <div className="mobile">
      <Title />

      <div className="end-feedback">
        <PiHeartStraightLight size={100} />
        <h3>Thank you!</h3>
        <p>You make us feel very special.</p>
      </div>

      <Navigation btnVersion="secondary" btnText="Submit another feedback" />
    </div>
  );
};

export default EndFeedBack;

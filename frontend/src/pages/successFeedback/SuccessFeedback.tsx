import "./successfeedback.css";

import Button from "../../components/shared/Button";
import Emoji from "../../components/shared/Emoji";
import FeedbackContext from "../../context/FeedbackContext";
import { GrStatusGood } from "react-icons/gr";
import PaymentButton from "../../components/shared/PaymentButton";
import Title from "../../components/shared/Title";
import TradeMark from "../../components/shared/TradeMark";
import { getLinkByTip } from "../../utils/getStripeLinkByTipAmount";
import { tipOptions } from "../../utils/tipOptions";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const SuccessFeedback = () => {
  const { selectedTip, setSelectedTip } = useContext(FeedbackContext);
  const navigate = useNavigate();

  const handleChange = (e: any) => {
    setSelectedTip(+e.target.value);
  };

  return (
    <div className="mobile">
      <Title />
      <div className="success">
        <GrStatusGood size={100} />
        <h3>
          <b>Thank you!</b>
        </h3>
        <p>Your feedback helps us improve our service.</p>
      </div>

      <div className="support">
        <p>
          <b>Do you want to support us?</b>
        </p>
        <p>Leave a tip for our hard working team!</p>

        <ul className="tip">
          {tipOptions.map((option, index) => (
            <li key={`tip-${index + 1}`}>
              <input
                type="radio"
                id={option.symbol}
                name="tip"
                value={option.value}
                onChange={handleChange}
              />
              <label htmlFor={option.symbol}>
                <Emoji symbol={option.symbol} label={option.symbol} size={25} />
                <p>
                  <b>{option.text}</b>
                </p>
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* getLinkByTip(0) will return default case because it does not exist in switch condition, user will get a link where tip amount is up to them */}
      <PaymentButton
        btnVersion="secondary"
        btnText="Choose other amount"
        paymentLink={getLinkByTip(0)}
      />

      <div className="navigation">
        {selectedTip ? (
          <PaymentButton
            btnVersion="full"
            btnText="Pay"
            paymentLink={getLinkByTip(selectedTip)}
          />
        ) : (
          <Button
            version="secondary"
            btnText="Submit another feedback"
            onClick={() => navigate("/")}
          />
        )}

        <TradeMark />
      </div>
    </div>
  );
};

export default SuccessFeedback;

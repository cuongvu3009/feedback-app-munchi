import "./successfeedback.css";

import Button from "../../components/shared/Button";
import Emoji from "../../components/shared/Emoji";
import FeedbackContext from "../../context/FeedbackContext";
import { GrStatusGood } from "react-icons/gr";
import Title from "../../components/shared/Title";
import TradeMark from "../../components/shared/TradeMark";
import { useContext } from "react";

const tipOptions = [
  { text: "0€", value: 0, symbol: "😄" },
  { text: "2€", value: 2, symbol: "😍" },
  { text: "3€", value: 3, symbol: "🤩" },
  { text: "5€", value: 5, symbol: "👏" },
];

const SuccessFeedback = () => {
  const { selectedTip, setSelectedTip } = useContext(FeedbackContext);

  const handleChange = (e: any) => {
    setSelectedTip(e.target.value);
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

      <div className="navigation">
        <Button version="secondary" btnText="Submit another feedback" />
        <TradeMark />
      </div>
    </div>
  );
};

export default SuccessFeedback;

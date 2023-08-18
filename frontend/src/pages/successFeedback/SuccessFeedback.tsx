import "./successfeedback.css";

import Emoji from "../../components/shared/Emoji";
import { GrStatusGood } from "react-icons/gr";
import Navigation from "../../components/shared/Navigation";
import Title from "../../components/shared/Title";

const tipOptions = [
  { text: "0€", value: 0, symbol: "😄" },
  { text: "2€", value: 2, symbol: "😍" },
  { text: "3€", value: 3, symbol: "🤩" },
  { text: "5€", value: 5, symbol: "👏" },
];

const SuccessFeedback = () => {
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
                // onChange={handleChange}
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

      <Navigation btnVersion="secondary" btnText="Submit another feedback" />
    </div>
  );
};

export default SuccessFeedback;

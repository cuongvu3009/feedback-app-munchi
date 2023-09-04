import React, { useContext } from "react";

import Emoji from "../shared/Emoji";
import FeedbackContext from "../../context/FeedbackContext";
import { ratingOptions } from "../../utils/ratingOptions";

const RatingList: React.FC = () => {
  const { emoji, setEmoji } = useContext(FeedbackContext);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmoji(e.currentTarget.value);
  };

  return (
    <ul className="rating">
      {ratingOptions.map((option, index) => (
        <li key={`rating-${index + 1}`}>
          <input
            type="radio"
            id={option.value}
            name="rating"
            value={option.value}
            onChange={handleChange}
            checked={emoji === option.value}
            disabled={emoji === option.value}
          />
          <label htmlFor={option.value}>
            <Emoji symbol={option.symbol} label={option.label} size={35} />
          </label>
        </li>
      ))}
    </ul>
  );
};

export default RatingList;

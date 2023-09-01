import Emoji from "../shared/Emoji";
import { RatingSelectProps } from "../../types/feedback.types";
import React from "react";
import { ratingOptions } from "../../utils/ratingOptions";

const RatingList: React.FC<RatingSelectProps> = ({ selected, setSelected }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelected(e.currentTarget.value);
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
            checked={selected === option.value}
            disabled={selected === option.value}
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

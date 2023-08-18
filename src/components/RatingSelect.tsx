import Emoji from "./shared/Emoji";
import React from "react";

const RatingSelect = ({ selected, setSelected }: any) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelected(e.currentTarget.value);
  };

  const ratingOptions = [
    { value: "angry", symbol: "😠", label: "angry" },
    { value: "frown", symbol: "🙁", label: "frown" },
    { value: "neutral", symbol: "🙂", label: "neutral" },
    { value: "like", symbol: "😄", label: "like" },
    { value: "love", symbol: "😍", label: "love" },
  ];

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
            checked={selected}
            disabled={selected}
          />
          <label htmlFor={option.value}>
            <Emoji symbol={option.symbol} label={option.label} />
          </label>
        </li>
      ))}
    </ul>
  );
};

export default RatingSelect;

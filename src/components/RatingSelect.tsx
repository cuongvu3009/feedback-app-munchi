import {
  BsEmojiHeartEyesFill,
  BsEmojiLaughingFill,
  BsFillEmojiAngryFill,
  BsFillEmojiFrownFill,
  BsFillEmojiNeutralFill,
} from "react-icons/bs";

import { useState } from "react";

const RatingSelect = () => {
  const [selected, setSelected] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelected(e.target.value);
  };

  console.log(selected);

  return (
    <ul className="rating">
      <li key="rating-1">
        <input
          type="radio"
          id="angry"
          name="rating"
          value="angry"
          onChange={handleChange}
          checked={selected === "angry"}
        />

        <label htmlFor="angry">
          <BsFillEmojiAngryFill size={45} color="red" />
        </label>
      </li>

      <li key="rating-2">
        <input
          type="radio"
          id="frown"
          name="rating"
          value="frown"
          onChange={handleChange}
          checked={selected === "frown"}
        />

        <label htmlFor="frown">
          <BsFillEmojiFrownFill size={45} color="red" />
        </label>
      </li>

      <li key="rating-3">
        <input
          type="radio"
          id="neutral"
          name="rating"
          value="neutral"
          onChange={handleChange}
          checked={selected === "neutral"}
        />

        <label htmlFor="neutral">
          <BsFillEmojiNeutralFill size={45} color="red" />
        </label>
      </li>

      <li key="rating-4">
        <input
          type="radio"
          id="like"
          name="rating"
          value="like"
          onChange={handleChange}
          checked={selected === "like"}
        />

        <label htmlFor="like">
          <BsEmojiLaughingFill size={45} color="red" />
        </label>
      </li>

      <li key="rating-5">
        <input
          type="radio"
          id="love"
          name="rating"
          value="love"
          onChange={handleChange}
          checked={selected === "love"}
        />

        <label htmlFor="love">
          <BsEmojiHeartEyesFill size={45} color="red" />
        </label>
      </li>
    </ul>
  );
};

export default RatingSelect;

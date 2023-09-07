import React, { useEffect, useState } from "react";

import Comment from "./Comment";
import Emoji from "../shared/Emoji";
import TagsOrder from "./TagsOrder";
import { ratingOptions } from "../../utils/ratingOptions";

const RatingOrder: React.FC = () => {
  const [emojiOrder, setEmojiOrder] = useState<string | null>(
    localStorage.getItem("emojiOrder") || null
  );

  useEffect(() => {
    if (emojiOrder !== null) {
      setEmojiOrder(emojiOrder);
      localStorage.setItem("emojiOrder", emojiOrder);
    }
  }, [emojiOrder]);

  return (
    <>
      <ul className="rating">
        {ratingOptions.map((option, index) => (
          <li key={`rating-${index + 1}`}>
            <input
              type="radio"
              id={option.value}
              name="rating"
              value={option.value}
              onChange={(e) => {
                setEmojiOrder(e.target.value);
                localStorage.setItem("emojiOrder", e.target.value);
              }}
              checked={emojiOrder === option.value}
              disabled={emojiOrder !== null}
            />
            <label
              htmlFor={option.value}
              className={
                emojiOrder === option.value
                  ? "selected-button"
                  : "unselected-button"
              }
            >
              <Emoji symbol={option.symbol} label={option.label} size={35} />
            </label>
          </li>
        ))}
      </ul>

      {emojiOrder !== null && (
        <>
          <TagsOrder emojiOrder={emojiOrder} />
          <Comment storageKey="commentOrder" />
        </>
      )}
    </>
  );
};

export default RatingOrder;

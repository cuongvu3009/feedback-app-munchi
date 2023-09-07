import React, { useEffect, useState } from "react";

import CommentService from "./CommentService";
import Emoji from "../shared/Emoji";
import TagsService from "./TagsService";
import { ratingOptions } from "../../utils/ratingOptions";

const RatingService: React.FC = () => {
  const [emojiService, setEmojiService] = useState<string | null>(
    localStorage.getItem("emojiService") || null
  );

  useEffect(() => {
    // If you want to set a default value when the component mounts and localStorage is empty
    if (emojiService !== null) {
      setEmojiService(emojiService);
      localStorage.setItem("emojiService", emojiService);
    }
  }, [emojiService]);

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
                setEmojiService(e.target.value);
                localStorage.setItem("emojiService", e.target.value);
              }}
              checked={emojiService === option.value}
              disabled={emojiService === option.value}
            />
            <label
              htmlFor={option.value}
              className={
                emojiService === option.value
                  ? "selected-button"
                  : "unselected-button"
              }
            >
              <Emoji symbol={option.symbol} label={option.label} size={35} />
            </label>
          </li>
        ))}
      </ul>

      {emojiService !== null && (
        <>
          <TagsService />
          <CommentService />
        </>
      )}
    </>
  );
};

export default RatingService;

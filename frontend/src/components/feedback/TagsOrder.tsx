import React, { useState } from "react";

import { defaultTags } from "../../utils/defaultTags";

const TagsOrder: React.FC = () => {
  const [emojiOrder, setEmojiOrder] = useState<string | null>(() =>
    localStorage.getItem("emojiService")
  );
  const [orderTags, setOrderTags] = useState<string[]>(
    JSON.parse(localStorage.getItem("orderTags") || "[]")
  );

  // Function to map emojiOrder to tags
  const getTagsForEmojiService = (emojiOrder: string | null) => {
    if (!emojiOrder) return []; // Handle the case where emojiOrder is not set

    // Map the emojiOrder value to the corresponding tags
    return defaultTags[emojiOrder] || [];
  };

  // Function to handle tag selection
  const handleTagSelection = (tag: string) => {
    // Toggle the tag in the serviceTags array
    const updatedOrderTags = orderTags.includes(tag)
      ? orderTags.filter((selectedTag) => selectedTag !== tag)
      : [...orderTags, tag];

    // Update the state and store it in local storage
    setOrderTags(updatedOrderTags);
    localStorage.setItem("orderTags", JSON.stringify(updatedOrderTags));
  };

  const tags = getTagsForEmojiService(emojiOrder);

  return (
    <div className="tags">
      <h3>What went well?</h3>
      <p>What did you specially enjoy?</p>
      <div className="tags-container">
        {tags?.map((tag, index) => {
          return (
            <li key={index}>
              <label
                className={
                  orderTags.includes(tag)
                    ? "selected-button"
                    : "unselected-button"
                }
              >
                <input
                  type="checkbox"
                  checked={orderTags.includes(tag)}
                  onChange={() => handleTagSelection(tag)}
                />
                {tag}
              </label>
            </li>
          );
        })}
      </div>
    </div>
  );
};

export default TagsOrder;

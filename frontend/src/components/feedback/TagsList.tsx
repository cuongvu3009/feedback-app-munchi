import React, { useEffect, useState } from "react";

import Button from "../shared/Button";
import { TagsListProps } from "../../types/feedback.types";
import { defaultTags } from "../../utils/defaultTags";

const TagsList: React.FC<TagsListProps> = ({ emoji, setCommentTags }) => {
  const [filteredArray, setFilteredArray] = useState<string[]>();
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  useEffect(() => {
    if (defaultTags.hasOwnProperty(emoji)) {
      setFilteredArray(defaultTags[emoji]);
    } else {
      setFilteredArray([]); // Set an empty array if emoji is not found
    }
  }, [emoji]);

  // When filteredArray changes, clear selectedTags
  useEffect(() => {
    setSelectedTags([]);
  }, [filteredArray]);

  const handleTagsSelect = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    item: string
  ) => {
    const buttonElement = e.target as HTMLButtonElement;
    const buttonText = buttonElement.textContent;
    if (buttonText) {
      if (selectedTags.includes(item)) {
        // If item is already in selectedTags, remove it
        setSelectedTags((prevSelectedTags) =>
          prevSelectedTags.filter((tag) => tag !== item)
        );
      } else {
        // If item is not in selectedTags, add it
        setSelectedTags((prevSelectedTags) => [...prevSelectedTags, item]);
      }
    }
    setCommentTags(selectedTags);
  };

  return (
    <div className="tags">
      <h3>What went well?</h3>
      <p>What did you specially enjoy?</p>
      <div className="tags-container">
        {filteredArray?.map((item) => {
          return (
            <Button
              key={item}
              version={selectedTags.includes(item) ? "primary" : "secondary"}
              btnText={item}
              onClick={(e) => handleTagsSelect(e, item)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TagsList;

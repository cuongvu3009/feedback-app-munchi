import {
  Feedback,
  FeedbackContextProps,
  FeedbackCount,
} from "../types/feedback.types";
import { createContext, useEffect, useState } from "react";

import axios from "axios";
import { constantAPI } from "../utils/constantAPI";
import useApiFeedback from "../hooks/useApiFeedback";

const FeedbackContext = createContext<FeedbackContextProps>({
  feedback: [],
  addFeedback: function (): void {
    throw new Error("Function not implemented.");
  },
  selectedTip: undefined,
  setSelectedTip: function (value: number): void {
    throw new Error("Function not implemented.");
  },
  feedbackCount: [],
  emoji: "",
  setEmoji: function (value: string): void {
    throw new Error("Function not implemented.");
  },
  comment: "",
  setComment: function (value: string): void {
    throw new Error("Function not implemented.");
  },
  commentTags: [],
  setCommentTags: function (value: string[]): void {
    throw new Error("Function not implemented.");
  },
});

export const FeedbackProvider = ({ children }: any) => {
  const [feedback, setFeedback] = useState<Feedback[]>([]);
  const [emoji, setEmoji] = useState<string>("");
  const [comment, setComment] = useState<string>("");
  const [commentTags, setCommentTags] = useState<string[]>([]);
  const [feedbackCount, setFeedbackCount] = useState<FeedbackCount[]>([]);
  const [selectedTip, setSelectedTip] = useState<number | undefined>(undefined);

  //	Get feedbacks
  const [feedbackData, loading, refresh] = useApiFeedback({
    url: `${constantAPI}/feedback`,
    method: "get",
  });

  // Fetch feedback count
  const fetchFeedbackCount = async () => {
    try {
      const response = await axios.get(`${constantAPI}/feedback/count`);
      setFeedbackCount(response.data);
    } catch (error) {
      console.error("There was an error fetching data", error);
    }
  };

  // Add feedback
  const addFeedback = async () => {
    try {
      const response = await axios.post(
        `${constantAPI}/feedback`,
        {
          emoji,
          comment,
          tags: commentTags,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setFeedback([response.data, ...feedback]);
    } catch (error) {
      console.error("There was an error sending the data", error);
    }
  };

  return (
    <FeedbackContext.Provider
      value={{
        addFeedback,

        feedback,
        selectedTip,
        setSelectedTip,
        feedbackCount,
        comment,
        setComment,
        emoji,
        setEmoji,
        commentTags,
        setCommentTags,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;

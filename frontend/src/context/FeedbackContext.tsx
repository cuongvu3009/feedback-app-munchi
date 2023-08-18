import { createContext, useEffect, useState } from "react";

import axios from "axios";

interface Feedback {
  id?: string;
  emoji: any;
  comment: string;
}

interface FeedbackContextProps {
  feedback: Feedback[];
  isLoading: boolean;
  addFeedback: (newFeedback: Feedback) => void;
}

const FeedbackContext = createContext<FeedbackContextProps>({
  feedback: [],
  isLoading: false,
  addFeedback: function (newFeedback: Feedback): void {
    throw new Error("Function not implemented.");
  },
});

export const FeedbackProvider = ({ children }: any) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [feedback, setFeedback] = useState<Feedback[]>([]);

  useEffect(() => {
    fetchFeedback();
  }, []);

  // Fetch feedback
  const fetchFeedback = async () => {
    try {
      const response = await axios.get(`/feedback`);
      setFeedback(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error("There was an error fetching data", error);
      setIsLoading(false);
    }
  };

  // Add feedback
  const addFeedback = async (newFeedback: Feedback) => {
    try {
      const response = await axios.post("/feedback", newFeedback, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      setFeedback([response.data, ...feedback]);
    } catch (error) {
      console.error("There was an error sending the data", error);
    }
  };

  return (
    <FeedbackContext.Provider
      value={{
        addFeedback,
        isLoading,
        feedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;

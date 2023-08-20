import { createContext, useEffect, useState } from "react";

import axios from "axios";

interface Feedback {
  id?: string;
  createdAt?: Date | string;
  emoji: any;
  comment: string;
}
interface FeedbackCount {
  type: string;
  count: number | null;
}

interface FeedbackContextProps {
  feedback: Feedback[];
  isLoading: boolean;
  setIsLoading: (value: boolean) => void;
  addFeedback: (newFeedback: Feedback) => void;
  selectedTip: number | undefined;
  setSelectedTip: (value: number) => void;
  feedbackCount: FeedbackCount[];
}

const FeedbackContext = createContext<FeedbackContextProps>({
  feedback: [],
  isLoading: false,
  setIsLoading: function (value: boolean): void {},
  addFeedback: function (newFeedback: Feedback): void {
    throw new Error("Function not implemented.");
  },
  selectedTip: undefined,
  setSelectedTip: function (value: number): void {
    throw new Error("Function not implemented.");
  },
  feedbackCount: [],
});

export const FeedbackProvider = ({ children }: any) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [feedback, setFeedback] = useState<Feedback[]>([]);
  const [feedbackCount, setFeedbackCount] = useState<FeedbackCount[]>([]);
  const [selectedTip, setSelectedTip] = useState<number | undefined>(undefined);

  useEffect(() => {
    fetchFeedbackCount();
    fetchFeedback();
  }, []);

  // Fetch feedback
  const fetchFeedback = async () => {
    setIsLoading(true);

    try {
      const response = await axios.get(`/feedback`);
      setFeedback(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error("There was an error fetching data", error);
      setIsLoading(false);
    }
  };

  // Fetch feedback count
  const fetchFeedbackCount = async () => {
    setIsLoading(true);

    try {
      const response = await axios.get(`/feedback/count`);
      setFeedbackCount(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error("There was an error fetching data", error);
      setIsLoading(false);
    }
  };

  // Add feedback
  const addFeedback = async (newFeedback: Feedback) => {
    setIsLoading(true);

    try {
      const response = await axios.post("/feedback", newFeedback, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      setFeedback([response.data, ...feedback]);
      setIsLoading(false);
    } catch (error) {
      console.error("There was an error sending the data", error);
      setIsLoading(false);
    }
  };

  return (
    <FeedbackContext.Provider
      value={{
        addFeedback,
        isLoading,
        setIsLoading,
        feedback,
        selectedTip,
        setSelectedTip,
        feedbackCount,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;

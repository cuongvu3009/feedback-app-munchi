import { createContext, useEffect, useState } from "react";

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
    // const response = await fetch(`/feedback?_sort=id&_order=desc`);
    // const data = await response.json();
    // setFeedback(data);
    // setIsLoading(false);
  };

  // Add feedback
  const addFeedback = async (newFeedback: Feedback) => {
    // const response = await fetch("/feedback", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(newFeedback),
    // });

    // const data = await response.json();

    // setFeedback([data, ...feedback]);
    console.log(newFeedback);
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

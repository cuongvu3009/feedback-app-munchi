export interface Feedback {
  id?: string;
  createdAt?: Date | string;
  emoji: any;
  comment: string;
}
export interface FeedbackCount {
  type: string;
  count: number | null;
}

export interface FeedbackContextProps {
  feedback: Feedback[];
  isLoading: boolean;
  setIsLoading: (value: boolean) => void;
  addFeedback: (newFeedback: Feedback) => void;
  selectedTip: number | undefined;
  setSelectedTip: (value: number) => void;
  feedbackCount: FeedbackCount[];
  commentTags: string[];
  setCommentTags: (value: string[]) => void;
}

export interface ButtonProps {
  version?: "primary" | "secondary" | "full";
  type?: "submit" | "button" | "reset";
  isDisabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  btnText?: string;
}

export interface EmojiProps {
  symbol: string;
  label: string;
  size: number;
}

export interface PaymentButtonProps {
  btnText: string;
  paymentLink: string;
  btnVersion: string;
}

export interface RatingSelectProps {
  selected: string;
  setSelected: (value: string) => void;
}

export interface TagsListProps {
  emoji: string;
}

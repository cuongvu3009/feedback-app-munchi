import { useContext, useRef, useState } from "react";

import Button from "../shared/Button";
import FeedbackContext from "../../context/FeedbackContext";
import Spinner from "../shared/Spinner";
import { useNavigate } from "react-router-dom";

const CommentCard = ({ emoji }: { emoji: string }) => {
  const { isLoading, addFeedback } = useContext(FeedbackContext);

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const navigate = useNavigate();

  const commentInputRef = useRef<HTMLInputElement>(null); // Create a ref for the input element

  const openPopup = () => {
    setIsPopupOpen(true);

    // Focus the comment input when the popup opens
    if (commentInputRef.current) {
      commentInputRef.current.focus();
    }
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Collect the comment from the input ref
    const comment = commentInputRef.current?.value || "";

    if (!comment.trim()) {
      // If comment is empty or only contains whitespace, don't submit
      return;
    }

    // Save it to the server
    const newFeedback = {
      comment,
      emoji,
    };
    addFeedback(newFeedback);

    // Clear the input value
    if (commentInputRef.current) {
      commentInputRef.current.value = "";
    }

    // Close the popup
    closePopup();
    navigate("/thankyou");
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <div className="comment">
        <div className="user-comment">
          <div className="card card-comment" onClick={openPopup}>
            + Add a comment for the restaurant
          </div>
        </div>
      </div>

      {isPopupOpen && (
        <div className="popup">
          <form className="popup-container" onSubmit={handleSubmit}>
            <h3>Add a comment for the restaurant</h3>
            <input
              type="text"
              placeholder="Your comment here..."
              ref={commentInputRef} // Attach the ref to the input element
            />
            <Button type="submit" version="primary" btnText="Save"></Button>
            <Button
              onClick={closePopup}
              version="secondary"
              btnText="Cancel"
            ></Button>
          </form>
        </div>
      )}
    </>
  );
};

export default CommentCard;

import { useContext, useState } from "react";

import Button from "./shared/Button";
import FeedbackContext from "../context/FeedbackContext";
import Spinner from "./shared/Spinner";
import { useNavigate } from "react-router-dom";

const CommentCard = ({ emoji }: { emoji: string }) => {
  const { isLoading, addFeedback } = useContext(FeedbackContext);

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [comment, setComment] = useState("");
  const navigate = useNavigate();

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const handleCommentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    //	save it to the server
    const newFeedback = {
      comment,
      emoji,
    };
    addFeedback(newFeedback);
    setComment("");

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
            + Add a comments for the restaurant
          </div>
        </div>
      </div>

      {isPopupOpen && (
        <div className="popup">
          <form className="popup-container" onSubmit={handleSubmit}>
            <h3>Add a comment for the restaurant</h3>
            <input
              type="text"
              value={comment}
              onChange={handleCommentChange}
              placeholder="Your comment here..."
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

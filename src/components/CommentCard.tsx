import { useContext, useState } from "react";

import FeedbackContext from "../context/FeedbackContext";

const CommentCard = ({ emoji }: any) => {
  const { addFeedback } = useContext(FeedbackContext);

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [comment, setComment] = useState("");

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
      emoji,
      comment,
    };
    addFeedback(newFeedback);

    // Close the popup
    closePopup();
  };

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
            <button type="submit" className="btn btn-primary">
              Save
            </button>
            <button onClick={closePopup} className="btn btn-secondary">
              Cancel
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default CommentCard;

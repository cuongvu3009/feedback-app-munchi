import { useContext, useRef, useState } from "react";

import Button from "../shared/Button";
import FeedbackContext from "../../context/FeedbackContext";
import { useNavigate } from "react-router-dom";

const CommentCard = () => {
  const { setComment, addFeedback } = useContext(FeedbackContext);
  // const [userComment, setUserComment] = useState<string>("")

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const navigate = useNavigate();

  const commentInputRef = useRef<HTMLInputElement>(null);

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

  // const handleUserInput = (e:React.ChangeEvent<HTMLInputElement>) => {
  // 	console.log(e.target.value)
  // }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Collect the comment from the input ref
    const comment = commentInputRef.current?.value || "";

    if (!comment.trim()) {
      // If comment is empty or only contains whitespace, don't submit
      return;
    }

    setComment(comment);

    addFeedback();

    // Clear the input value
    if (commentInputRef.current) {
      // commentInputRef.current.value = "";
    }

    // Close the popup
    closePopup();
    navigate("/thankyou");
  };

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
              // value={userComment}
              // onChange={handleUserInput}
            />
            <Button type="submit" version="primary" btnText="Save" />
            <Button onClick={closePopup} version="secondary" btnText="Cancel" />
          </form>
        </div>
      )}
    </>
  );
};

export default CommentCard;

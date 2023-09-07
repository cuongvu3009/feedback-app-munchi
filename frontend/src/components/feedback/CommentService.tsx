import { useEffect, useRef, useState } from "react";

import Button from "../shared/Button";

const CommentService = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

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

  useEffect(() => {
    // Retrieve the commentService value from local storage when the component mounts
    const storedCommentService = localStorage.getItem("commentService");
    if (storedCommentService) {
      // Set the value of the commentInputRef from local storage
      if (commentInputRef.current) {
        commentInputRef.current.value = storedCommentService;
      }
    }
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const comment = commentInputRef.current?.value || "";
    if (!comment.trim()) {
      return;
    }

    // Store the commentInputRef value in local storage as "commentService"
    localStorage.setItem("commentService", comment);

    // Clear the input value
    if (commentInputRef.current) {
      commentInputRef.current.value = "";
    }

    // Close the popup
    closePopup();

    // Mark the form as submitted
    setIsFormSubmitted(true);
  };

  return (
    <>
      <div className="comment">
        <div className="user-comment">
          <div
            className={`card card-comment ${
              isFormSubmitted ? "form-submitted" : ""
            }`}
            onClick={openPopup}
          >
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
              ref={commentInputRef}
            />
            <Button type="submit" version="primary" btnText="Save" />
            <Button onClick={closePopup} version="secondary" btnText="Cancel" />
          </form>
        </div>
      )}
    </>
  );
};

export default CommentService;

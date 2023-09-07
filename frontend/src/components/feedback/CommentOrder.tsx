import React, { useEffect, useRef, useState } from "react";

import Button from "../shared/Button";

const CommentOrder = () => {
  const commentInputRef = useRef<HTMLInputElement | null>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    const storedCommentOrder = localStorage.getItem("commentOrder");
    if (storedCommentOrder && commentInputRef.current) {
      commentInputRef.current.value = storedCommentOrder;
    }
  }, []);

  const openPopup = () => {
    setIsPopupOpen(true);
    if (commentInputRef.current) {
      commentInputRef.current.focus();
    }
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const comment = commentInputRef.current?.value.trim();
    if (!comment) {
      return;
    }

    localStorage.setItem("commentOrder", comment);

    closePopup();
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

export default CommentOrder;

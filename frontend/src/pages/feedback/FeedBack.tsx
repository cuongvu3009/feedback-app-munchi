import "./feedback.css";

import { useContext, useState } from "react";

import Button from "../../components/shared/Button";
import CommentCard from "../../components/feedback/CommentCard";
import FeedbackContext from "../../context/FeedbackContext";
import Logo from "../../components/shared/Logo";
import RatingList from "../../components/feedback/RatingList";
import TagsList from "../../components/feedback/TagsList";
import Title from "../../components/shared/Title";
import TradeMark from "../../components/shared/TradeMark";
import { useNavigate } from "react-router-dom";

const FeedBack: React.FC = () => {
  const navigate = useNavigate();
  const { emoji, addFeedback } = useContext(FeedbackContext);

  function handleClick(e: any): void {
    e.preventDefault();

    addFeedback();
    navigate("/thankyou");
  }

  return (
    <div className="feedback mobile">
      <Title />

      <div className="feedback-wrapper">
        <Logo />
        <div className="feedback-container">
          <div className="feedback-description">
            <h3>How was your experience?</h3>
            <p>Your feedback helps us improve our service.</p>
          </div>
        </div>
      </div>
      <RatingList />

      {emoji && (
        <>
          <TagsList />
          <CommentCard />
        </>
      )}

      <div className="navigation">
        <Button onClick={handleClick} version="full" isDisabled={!emoji} />
        <TradeMark />
      </div>
    </div>
  );
};

export default FeedBack;

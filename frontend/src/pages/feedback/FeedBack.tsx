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
  const [emoji, setEmoji] = useState<string>("");
  const navigate = useNavigate();
  const { commentTags, addFeedback } = useContext(FeedbackContext);

  function handleClick(e: any): void {
    e.preventDefault();

    const comment = "no comment";
    //	save it to the server
    const newFeedback = {
      comment,
      emoji,
      tags: commentTags,
    };
    addFeedback(newFeedback);
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
      <RatingList selected={emoji} setSelected={setEmoji} />

      {emoji && (
        <>
          <TagsList emoji={emoji} />
          <CommentCard emoji={emoji} />
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

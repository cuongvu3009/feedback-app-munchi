import "./feedback.css";

import CommentCard from "../../components/CommentCard";
import Logo from "../../components/shared/Logo";
import Navigation from "../../components/shared/Navigation";
import RatingSelect from "../../components/RatingSelect";
import Title from "../../components/shared/Title";
import { useState } from "react";

const FeedBack: React.FC = () => {
  const [emoji, setEmoji] = useState("");

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

      <RatingSelect seleted={emoji} setSelected={setEmoji} />
      {emoji && <CommentCard emoji={emoji} />}

      <Navigation />
    </div>
  );
};

export default FeedBack;

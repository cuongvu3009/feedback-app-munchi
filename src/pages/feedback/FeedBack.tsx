import "./feedback.css";

import Logo from "../../components/Logo";
import Navigation from "../../components/Navigation";
import RatingSelect from "../../components/RatingSelect";
import Title from "../../components/Title";

const FeedBack: React.FC = () => {
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
      <RatingSelect />

      <Navigation />
    </div>
  );
};

export default FeedBack;

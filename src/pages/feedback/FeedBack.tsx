import "./feedback.css";

import {
  BsEmojiAngry,
  BsEmojiExpressionless,
  BsEmojiFrown,
  BsEmojiHeartEyes,
  BsEmojiLaughing,
} from "react-icons/bs";
import {
  BsEmojiHeartEyesFill,
  BsEmojiLaughingFill,
  BsFillEmojiAngryFill,
  BsFillEmojiFrownFill,
  BsFillEmojiNeutralFill,
} from "react-icons/bs";
import React, { useState } from "react";

import Navigation from "../../components/navigation/Navigation";
import Title from "../../components/title/Title";

const FeedBack: React.FC = () => {
  const [isAngryHovered, setIsAngryHovered] = useState(false);
  const [isFrownHovered, setIsFrownHovered] = useState(false);
  const [isNeutralHovered, setIsNeutralHovered] = useState(false);
  const [isLaughingHovered, setIsLaughingHovered] = useState(false);
  const [isHeartHovered, setIsHeartHovered] = useState(false);

  return (
    <div className="feedback mobile">
      <Title />

      <div className="feedback-wrapper">
        <div className="logo-container">
          <div className="logo"></div>
          <div className="restaurant-name">Le Chateau</div>
        </div>
        <div className="feedback-container">
          <div className="feedback-description">
            <h3>How was your experience?</h3>
            <p>Your feedback helps us improve our service.</p>
          </div>

          <div className="emoji-container">
            <div
              className="angry-emoji"
              onMouseEnter={() => setIsAngryHovered(true)}
              onMouseLeave={() => setIsAngryHovered(false)}
            >
              {!isAngryHovered ? (
                <>
                  <BsEmojiAngry size={40} />
                  <p>Terrible</p>
                </>
              ) : (
                <>
                  <BsFillEmojiAngryFill size={40} />
                  <p>
                    <b>Terrible</b>
                  </p>
                </>
              )}
            </div>
            <div
              className="frown-emoji"
              onMouseEnter={() => setIsFrownHovered(true)}
              onMouseLeave={() => setIsFrownHovered(false)}
            >
              {!isFrownHovered ? (
                <>
                  <BsEmojiFrown size={40} />
                  <p>Bad</p>
                </>
              ) : (
                <>
                  <BsFillEmojiFrownFill size={40} />
                  <p>
                    <b>Bad</b>
                  </p>
                </>
              )}
            </div>
            <div
              className="neutral-emoji"
              onMouseEnter={() => setIsNeutralHovered(true)}
              onMouseLeave={() => setIsNeutralHovered(false)}
            >
              {!isNeutralHovered ? (
                <>
                  <BsEmojiExpressionless size={40} />
                  <p>Okay</p>
                </>
              ) : (
                <>
                  <BsFillEmojiNeutralFill size={40} />
                  <p>
                    <b>Okay</b>
                  </p>
                </>
              )}
            </div>
            <div
              className="laughing-emoji"
              onMouseEnter={() => setIsLaughingHovered(true)}
              onMouseLeave={() => setIsLaughingHovered(false)}
            >
              {!isLaughingHovered ? (
                <>
                  <BsEmojiLaughing size={40} />
                  <p>Good</p>
                </>
              ) : (
                <>
                  <BsEmojiLaughingFill size={40} />
                  <p>
                    <b>Good</b>
                  </p>
                </>
              )}
            </div>
            <div
              className="heart-emoji"
              onMouseEnter={() => setIsHeartHovered(true)}
              onMouseLeave={() => setIsHeartHovered(false)}
            >
              {!isHeartHovered ? (
                <>
                  <BsEmojiHeartEyes size={40} />
                  <p>Awesome</p>
                </>
              ) : (
                <>
                  <BsEmojiHeartEyesFill size={40} />
                  <p>
                    <b>Awesome</b>
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      <Navigation />
    </div>
  );
};

export default FeedBack;

import { useContext, useState } from "react";

import Button from "../shared/Button";
import FeedbackContext from "../../context/FeedbackContext";
import moment from "moment";

const DashboardContent = () => {
  const { feedback } = useContext(FeedbackContext);
  const [feedbackLimit, setFeedbackLimit] = useState<number>(7);

  const handleToggleDisplay = () => {
    if (feedbackLimit === 7) {
      setFeedbackLimit(feedback.length);
    } else {
      setFeedbackLimit(7);
    }
  };

  // const roundedAverageScore = calculateAverageScore(feedbackCount);

  return (
    <div className="dashboard-content">
      <div className="dashboard-card dashboard-info">
        <h3>Average score</h3>
        <div className="dashboard-score">
          <span className="score"> 4.8</span>
        </div>

        {/* <div className="dashboard-answers">
          <div className="flex-between">
            <p>Answered "Awesome" 😍</p>
            <p>{feedbackCount[0]?.count}</p>
          </div>

          <div className="flex-between">
            <p>Answered "Good" 😄</p>
            <p>{feedbackCount[1]?.count}</p>
          </div>

          <div className="flex-between">
            <p>Answered "Okey" 🙂</p>
            <p>{feedbackCount[2]?.count}</p>
          </div>

          <div className="flex-between">
            <p>Answered "Bad" 🙁</p>
            <p>{feedbackCount[3]?.count}</p>
          </div>

          <div className="flex-between">
            <p>Answered "Terrible" 😠</p>
            <p>{feedbackCount[4]?.count}</p>
          </div>

          <div className="flex-between">
            <p>
              <b>Total response</b>
            </p>
            <p>{feedbackCount[5]?.count}</p>
          </div>
        </div> */}
      </div>

      <div className="dashboard-card dashboard-response">
        <h3>Responses</h3>

        {feedback.slice(0, feedbackLimit).map((item) => {
          return (
            <div className="flex-between" key={item.id}>
              <p>{item.emoji}</p>
              <p>{moment(item.createdAt).fromNow()}</p>
            </div>
          );
        })}

        {/* Toggle between "See All" and "See Less" */}
        {feedback.length > 7 && (
          <Button
            btnText={feedbackLimit === 7 ? "See All" : "See Less"}
            version="secondary"
            onClick={handleToggleDisplay}
          />
        )}
      </div>
    </div>
  );
};

export default DashboardContent;

import "./dashboard.css";

import { useContext, useState } from "react";

import Button from "../../components/shared/Button";
import FeedbackContext from "../../context/FeedbackContext";
import { Link } from "react-router-dom";
import moment from "moment";

const Dashboard = () => {
  const { feedback, feedbackCount } = useContext(FeedbackContext);
  const [feedbackLimit, setFeedbackLimit] = useState<number>(7);

  const handleToggleDisplay = () => {
    if (feedbackLimit === 7) {
      setFeedbackLimit(feedback.length);
    } else {
      setFeedbackLimit(7);
    }
  };

  const scores: { [key: string]: number } = {
    love: 5,
    like: 4,
    neutral: 3,
    frown: 2,
    angry: 1,
  };

  const validFeedbacks = feedbackCount.filter(
    (feedback) => feedback.type !== "total"
  );
  const weightedSum = validFeedbacks.reduce((acc, feedback) => {
    return acc + (feedback.count ?? 0) * (scores[feedback.type] || 0);
  }, 0);

  const totalCount = validFeedbacks.reduce((acc, feedback) => {
    return acc + (feedback.count ?? 0);
  }, 0);

  const averageScore = weightedSum / totalCount;
  const roundedAverageScore = Math.round(averageScore * 10) / 10;

  return (
    <div className="dashboard">
      <h2 className="red-text">
        <Link to="/">Munchi</Link>
      </h2>
      <div className="flex">
        <div className="dashboard-card dashboard-info">
          <h3>Average score</h3>
          <div className="dashboard-score">
            <span className="score"> {roundedAverageScore.toFixed(1)}</span>
          </div>

          <div className="dashboard-answers">
            <div className="flex-between">
              <p>Answered "Awesome"</p>
              <p>{feedbackCount[0]?.count}</p>
            </div>

            <div className="flex-between">
              <p>Answered "Good"</p>
              <p>{feedbackCount[1]?.count}</p>
            </div>

            <div className="flex-between">
              <p>Answered "Okey"</p>
              <p>{feedbackCount[2]?.count}</p>
            </div>

            <div className="flex-between">
              <p>Answered "Bad"</p>
              <p>{feedbackCount[3]?.count}</p>
            </div>

            <div className="flex-between">
              <p>Answered "Terrible"</p>
              <p>{feedbackCount[4]?.count}</p>
            </div>

            <div className="flex-between">
              <p>
                <b>Total response</b>
              </p>
              <p>{feedbackCount[5]?.count}</p>
            </div>
          </div>
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
          <Button
            btnText={feedbackLimit === 7 ? "See All" : "See Less"}
            version="secondary"
            onClick={handleToggleDisplay}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

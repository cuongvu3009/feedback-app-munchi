import "./dashboard.css";

import Button from "../../components/shared/Button";
import FeedbackContext from "../../context/FeedbackContext";
import moment from "moment";
import { useContext } from "react";

const Dashboard = () => {
  const { feedback, feedbackCount } = useContext(FeedbackContext);

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
      <h2 className="red-text">Munchi</h2>
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

          {feedback.map((item) => {
            return (
              <div className="flex-between" key={item.id}>
                <p>{item.emoji}</p>
                <p>{moment(item.createdAt).fromNow()}</p>
              </div>
            );
          })}

          <Button btnText="See All" version="secondary" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

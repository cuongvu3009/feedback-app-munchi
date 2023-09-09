import Button from "../shared/Button";
// import moment from "moment";
import styles from "./dashboardResponses.module.css";
// import { useFeedbackContext } from "../../context/FeedbackContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const DashboardResponses = () => {
  // const { feedback } = useFeedbackContext();
  const [feedbackLimit, setFeedbackLimit] = useState<number>(7);
  const navigate = useNavigate();
  const handleBtnClick = () => {
    navigate("/dashboard/responses");
  };

  return (
    <div className={`${styles["dashboard-card"]}`}>
      <h3>Responses</h3>

      {/* {feedback.slice(0, feedbackLimit).map((item) => {
        return (
          <div className="flex-between" key={item.id}>
            <p>{item.emoji}</p>
            <p>{moment(item.createdAt).fromNow()}</p>
          </div>
        );
      })} */}

      <div className={`${styles["flex-between"]}`}>
        <p>🙂 Okey</p>
        <p>11.08.2023 at 09:43</p>
      </div>
      <div className={`${styles["flex-between"]}`}>
        <p>🙂 Okey</p>
        <p>11.08.2023 at 09:43</p>
      </div>
      <div className={`${styles["flex-between"]}`}>
        <p>🙂 Okey</p>
        <p>11.08.2023 at 09:43</p>
      </div>
      <div className={`${styles["flex-between"]}`}>
        <p>🙂 Okey</p>
        <p>11.08.2023 at 09:43</p>
      </div>
      <div className={`${styles["flex-between"]}`}>
        <p>🙂 Okey</p>
        <p>11.08.2023 at 09:43</p>
      </div>
      <div className={`${styles["flex-between"]}`}>
        <p>🙂 Okey</p>
        <p>11.08.2023 at 09:43</p>
      </div>

      {feedbackLimit >= 7 && (
        <Button
          btnText="See All"
          version="secondary"
          onClick={handleBtnClick}
        />
      )}

      {/* Toggle between "See All" and "See Less" */}
      {/* {feedback.length > 7 && (
        <Button
          btnText={feedbackLimit === 7 ? "See All" : "See Less"}
          version="secondary"
          onClick={handleToggleDisplay}
        />
      )} */}
    </div>
  );
};

export default DashboardResponses;

import DashboardResponses from "./DashboardResponses";
import DashboardScore from "./DashboardScore";
import FeedbackChart from "./FeedbackChart";
import { data } from "./data";
import styles from "./dashboardInfo.module.css";

const DashboardInfo = () => {
  return (
    <div className="dashboard-info">
      <div className={`${styles["dashboard-content"]}`}>
        <DashboardScore />
        <DashboardResponses />
      </div>
      <div className={`${styles["dashboard-chart"]}`}>
        <div className={`${styles["chart"]}`}>
          <h4>Service feedback</h4>
          <FeedbackChart data={data} type="service" />
        </div>
        <h4>Order feedback</h4>
        <div className={`${styles["chart"]}`}>
          <FeedbackChart data={data} type="order" />
        </div>
      </div>
    </div>
  );
};

export default DashboardInfo;

import DashboardResponses from "./DashboardResponses";
import DashboardScore from "./DashboardScore";
import FeedbackChart from "./FeedbackChart";
import styles from "./dashboardInfo.module.css";

const DashboardInfo = () => {
  const data = [
    { reaction: "okey", quantity: 100 },
    { reaction: "okey", quantity: 100 },
    { reaction: "okey", quantity: 100 },
    { reaction: "okey", quantity: 100 },
    { reaction: "okey", quantity: 100 },
    { reaction: "okey", quantity: 100 },
  ];

  return (
    <div className="dashboard-info">
      <div className={`${styles["dashboard-content"]}`}>
        <DashboardScore />
        <DashboardResponses />
      </div>
      <div className={`${styles["dashboard-chart"]}`}>
        <FeedbackChart data={data} />
      </div>
    </div>
  );
};

export default DashboardInfo;

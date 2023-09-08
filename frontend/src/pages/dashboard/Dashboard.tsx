import "./dashboard.css";

import DashboardInfo from "../../components/dashboard/DashboardInfo";
import FeedbackChart from "../../components/dashboard/FeedbackChart";
import Sidebar from "../../components/dashboard/Sidebar";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <DashboardInfo />
    </div>
  );
};

export default Dashboard;

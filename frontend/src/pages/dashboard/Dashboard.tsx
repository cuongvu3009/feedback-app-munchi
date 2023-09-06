import "./dashboard.css";

import DashboardContent from "../../components/dashboard/DashboardContent";
import FeedbackChart from "../../components/dashboard/FeedbackChart";
import Sidebar from "../../components/dashboard/Sidebar";

//	mock data
const data = [
  { reaction: "terrible", quantity: 1 },
  { reaction: "bad", quantity: 2 },
  { reaction: "okey", quantity: 30 },
  { reaction: "good", quantity: 4 },
  { reaction: "awesome", quantity: 105 },
];

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />

      <div className="">
        <FeedbackChart data={data} />
        <DashboardContent />
      </div>
    </div>
  );
};

export default Dashboard;

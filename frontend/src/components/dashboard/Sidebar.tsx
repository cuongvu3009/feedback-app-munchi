import { Link } from "react-router-dom";
import MunchiLogo from "../shared/MunchiLogo";
import React from "react";

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <ul>
        <li className="munchi">
          {/* For temporary, logo should be image  */}
          <MunchiLogo />
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/feedback-manager">Feedback Manager</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Dashboard from "./pages/dashboard/Dashboard";
import DashboardLogin from "./pages/dashboard/DashboardLogin";
import EndFeedBack from "./pages/endFeedBack/EndFeedBack";
import FeedbackOrder from "./pages/feedback/FeedbackOrder";
import FeedbackService from "./pages/feedback/FeedbackService";
import NotFound from "./pages/NotFound";
import SuccessFeedback from "./pages/successFeedback/SuccessFeedback";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<NotFound />} />
        {/* Feedback */}
        <Route path="/" element={<FeedbackService />} />
        <Route path="/order-feedback" element={<FeedbackOrder />} />
        <Route path="/feedbacksent" element={<SuccessFeedback />} />
        <Route path="/endfeedback" element={<EndFeedBack />} />

        {/* dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/login" element={<DashboardLogin />} />
      </Routes>
    </Router>
  );
}

export default App;

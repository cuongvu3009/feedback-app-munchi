import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Dashboard from "./pages/dashboard/Dashboard";
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
        <Route path="/service-feedback" element={<FeedbackService />} />
        <Route path="/order-feedback" element={<FeedbackOrder />} />

        <Route path="/thankyou" element={<SuccessFeedback />} />
        <Route path="/endfeedback" element={<EndFeedBack />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;

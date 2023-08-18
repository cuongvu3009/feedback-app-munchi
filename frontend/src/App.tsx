import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import EndFeedBack from "./pages/endFeedBack/EndFeedBack";
import FeedBack from "./pages/feedback/FeedBack";
import { FeedbackProvider } from "./context/FeedbackContext";
import SuccessFeedback from "./pages/successFeedback/SuccessFeedback";

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Routes>
          <Route path="/" element={<FeedBack />} />
          <Route path="/thankyou" element={<SuccessFeedback />} />
          <Route path="/endfeedback" element={<EndFeedBack />} />
        </Routes>
      </Router>
    </FeedbackProvider>
  );
}

export default App;

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Checkout from "./pages/CheckoutForm";
import Dashboard from "./pages/dashboard/Dashboard";
import EndFeedBack from "./pages/endFeedBack/EndFeedBack";
import FeedBack from "./pages/feedback/FeedBack";
import NotFound from "./pages/NotFound";
import SuccessFeedback from "./pages/successFeedback/SuccessFeedback";

function App() {
  return (
    <Router>
      <Routes>
        {/* Keep this route at the bottom */}
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<FeedBack />} />
        <Route path="/thankyou" element={<SuccessFeedback />} />
        <Route path="/endfeedback" element={<EndFeedBack />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* Legacy route*/}
        {/* <Route path="/payment" element={<Checkout />} /> */}
      </Routes>
    </Router>
  );
}

export default App;

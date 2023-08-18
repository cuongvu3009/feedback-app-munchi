import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import FeedBack from "./pages/feedback/FeedBack";
import { FeedbackProvider } from "./context/FeedbackContext";

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Routes>
          <Route path="/" element={<FeedBack />} />
        </Routes>
      </Router>
    </FeedbackProvider>
  );
}

export default App;

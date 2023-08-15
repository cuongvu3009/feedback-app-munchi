import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import FeedBack from "./pages/feedback/FeedBack";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FeedBack />} />
      </Routes>
    </Router>
  );
}

export default App;

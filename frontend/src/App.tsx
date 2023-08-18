import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import CheckoutForm from "./components/CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import EndFeedBack from "./pages/endFeedBack/EndFeedBack";
import FeedBack from "./pages/feedback/FeedBack";
import FeedbackContext from "./context/FeedbackContext";
import NotFound from "./pages/NotFound";
import SuccessFeedback from "./pages/successFeedback/SuccessFeedback";
import { loadStripe } from "@stripe/stripe-js";
import { useContext } from "react";

//	stripe

const stripePromise = loadStripe(
  "pk_test_51KeKGIBuYhaJOtomcWf9SqJ2iKEazVKzYo6xRVTywYE3f8UUFQxYYK4AerD6UDqi79A7640zgwBOf24iIVIeRSy200XlpHliEO"
);

function App() {
  const { selectedTip } = useContext(FeedbackContext);
  console.log(selectedTip);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FeedBack />} />
        <Route path="/thankyou" element={<SuccessFeedback />} />
        <Route path="/endfeedback" element={<EndFeedBack />} />

        {selectedTip && (
          <Route
            path="/payment"
            element={
              <Elements stripe={stripePromise}>
                <CheckoutForm />
              </Elements>
            }
          />
        )}

        {/* Keep this route at the bottom */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;

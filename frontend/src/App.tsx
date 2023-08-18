import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import CheckoutForm from "./components/CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import EndFeedBack from "./pages/endFeedBack/EndFeedBack";
import FeedBack from "./pages/feedback/FeedBack";
import { FeedbackProvider } from "./context/FeedbackContext";
import SuccessFeedback from "./pages/successFeedback/SuccessFeedback";
import { loadStripe } from "@stripe/stripe-js";

//	stripe

const stripePromise = loadStripe(
  "pk_test_51KeKGIBuYhaJOtomcWf9SqJ2iKEazVKzYo6xRVTywYE3f8UUFQxYYK4AerD6UDqi79A7640zgwBOf24iIVIeRSy200XlpHliEO"
);

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Routes>
          <Route path="/" element={<FeedBack />} />
          <Route path="/thankyou" element={<SuccessFeedback />} />
          <Route path="/endfeedback" element={<EndFeedBack />} />
          <Route
            path="/payment"
            element={
              <Elements stripe={stripePromise}>
                <CheckoutForm />
              </Elements>
            }
          />
        </Routes>
      </Router>
    </FeedbackProvider>
  );
}

export default App;

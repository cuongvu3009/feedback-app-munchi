import "./index.css";

import App from "./App";
//	stripe
import { Elements } from "@stripe/react-stripe-js";
import { FeedbackProvider } from "./context/FeedbackContext";
import React from "react";
import ReactDOM from "react-dom/client";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51KeKGIBuYhaJOtomcWf9SqJ2iKEazVKzYo6xRVTywYE3f8UUFQxYYK4AerD6UDqi79A7640zgwBOf24iIVIeRSy200XlpHliEO"
);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <FeedbackProvider>
      <Elements stripe={stripePromise}>
        <App />
      </Elements>
    </FeedbackProvider>
  </React.StrictMode>
);

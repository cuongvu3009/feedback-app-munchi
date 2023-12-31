import "dotenv/config";

import businessRoutes from "./features/business/business.route";
import connectDB from "./db/connectDB";
import cors from "cors";
import express from "express";
import feedbackRoutes from "./features/feedback/feedback.route";
import stripeRoutes from "./features/stripe/stripe.route";

connectDB(process.env.MONGO_URI as string);

const app = express();
const PORT = process.env.PORT || 5000;

//	middleware
app.use(cors());
app.use(express.json());

//	routes
app.use("/feedback", feedbackRoutes);
app.use("/business", businessRoutes);
app.use("/payment", stripeRoutes);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

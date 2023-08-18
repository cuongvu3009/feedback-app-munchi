import "dotenv/config";

import connectDB from "./db/connectDB";
import express from "express";
import feedbackRoutes from "./feedback/feedback.route";

connectDB(process.env.MONGO_URI as string);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/feedback", feedbackRoutes);

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

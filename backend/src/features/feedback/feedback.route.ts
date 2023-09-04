import FeedbackController from "./feedback.controller";
import { Router } from "express";

const router = Router();

// router.post("/:businessID", FeedbackController.createFeedback);
router.get(
  "/business/:businessID/feedback",
  FeedbackController.getAllFeedbacks
);
// router.get("/count", FeedbackController.countFeedbackType);

export default router;

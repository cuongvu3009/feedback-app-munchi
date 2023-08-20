import FeedbackController from "./feedback.controller";
import { Router } from "express";

const router = Router();

router.post("/", FeedbackController.createFeedback);
router.get("/", FeedbackController.getAllFeedbacks);
router.get("/count", FeedbackController.countFeedbackType);

export default router;

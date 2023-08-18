import FeedbackController from "./feedback.controller";
import { Router } from "express";

const router = Router();

router.post("/", FeedbackController.createFeedback);
router.get("/", FeedbackController.getAllFeedbacks);

export default router;

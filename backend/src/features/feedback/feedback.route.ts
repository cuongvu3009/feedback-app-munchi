import FeedbackController from "./feedback.controller";
import { Router } from "express";

const router = Router();

router.post("/", FeedbackController.createFeedback);
router.get("/:businessSlug", FeedbackController.getFeedbacksByBusinessSlug);

export default router;

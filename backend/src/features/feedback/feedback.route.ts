import FeedbackController from "./feedback.controller";
import { Router } from "express";

const router = Router();

router.post("/:id", FeedbackController.createFeedback);
router.get("/", FeedbackController.getFeedbacksByBusinessID);

export default router;

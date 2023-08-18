import { Request, Response } from "express";

import FeedbackService from "./feedback.service";

class FeedbackController {
  static async createFeedback(req: Request, res: Response) {
    try {
      const { emoji, comment } = req.body;
      const feedback = await FeedbackService.createFeedback(emoji, comment);
      res.status(201).json(feedback);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  static async getAllFeedbacks(req: Request, res: Response) {
    try {
      const feedbacks = await FeedbackService.getAllFeedbacks();
      res.status(200).json(feedbacks);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}

export default FeedbackController;

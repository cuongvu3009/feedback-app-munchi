import { Request, Response } from "express";

import EmailService from "../emailService/email.service";
import FeedbackService from "./feedback.service";

class FeedbackController {
  // static async createFeedback(req: Request, res: Response) {
  //   try {
  //     const { emoji, comment, tags } = req.body;
  //     const feedback = await FeedbackService.createFeedback(
  //       emoji,
  //       comment,
  //       tags
  //     );

  //     // Send email notification
  //     const info = await EmailService.sendEmail(
  //       "New Feedback Created",
  //       `Hello there! You got the a new feedback from client. Emoji: ${emoji}, Comment: ${comment}`
  //     );
  //     console.log("Message sent: %s", info);
  //     res.status(201).json(feedback);
  //   } catch (error) {
  //     res.status(500).json({ error: "Internal Server Error" });
  //   }
  // }

  static async getAllFeedbacks(req: Request, res: Response) {
    try {
      const businessID = req.params.businessID;
      const feedbacks = await FeedbackService.getAllFeedbacks(businessID);
      res.status(200).json(feedbacks);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  // static async countFeedbackType(req: Request, res: Response) {
  //   try {
  //     const counts = await FeedbackService.countByType();
  //     res.status(200).json(counts);
  //   } catch (error) {
  //     res.status(500).json({ error: "Internal Server Error" });
  //   }
  // }
}

export default FeedbackController;

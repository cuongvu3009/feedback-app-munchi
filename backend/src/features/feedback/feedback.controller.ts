import { Request, Response } from "express";

import BusinessService from "../business/business.service";
import EmailService from "../emailService/email.service";
import FeedbackService from "./feedback.service";

class FeedbackController {
  static async getFeedbacksByBusinessID(req: Request, res: Response) {
    try {
      const businessID = req.query.businessID;

      if (typeof businessID === "string") {
        const feedbacks = await FeedbackService.findFeedbacksByBusinessID(
          businessID
        );
        res.status(200).json(feedbacks);
      } else {
        // Handle the case where businessID is not provided or is not a string
        res.status(400).json({ message: "Invalid businessID" });
      }
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  static async createFeedback(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const { businessID, emoji, comment, tags } = req.body;

      const business = await BusinessService.getOneBusinessById(id);

      if (business) {
        const feedbacks = await FeedbackService.createOneFeedback(
          businessID,
          emoji,
          comment,
          tags
        );

        // Send email notification
        const info = await EmailService.sendEmail(
          "New Feedback Created from customer",
          `Hello there! You got the a new feedback from client. Emoji: ${emoji}, Comment: ${comment}`
        );

        console.log("Message sent: %s", info);
        res.status(200).json(feedbacks);
      } else {
        return res.status(404).json({ message: "Business not found" });
      }
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }
}

export default FeedbackController;

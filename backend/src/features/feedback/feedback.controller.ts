import { Request, Response } from "express";

import BusinessService from "../business/business.service";
import EmailService from "../emailService/email.service";
import FeedbackService from "./feedback.service";

class FeedbackController {
  static async getFeedbacksByBusinessSlug(req: Request, res: Response) {
    try {
      const businessSlug = req.params.businessSlug;

      if (typeof businessSlug === "string") {
        const feedbacks = await FeedbackService.findFeedbacksBybusinessSlug(
          businessSlug
        );
        res.status(200).json(feedbacks);
      } else {
        res.status(400).json({ message: "Invalid business slug" });
      }
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  static async createFeedback(req: Request, res: Response) {
    try {
      const {
        businessSlug,
        emoji_service,
        comment_service,
        tags_service,
        emoji_order,
        comment_order,
        tags_order,
      } = req.body;

      const feedback = await FeedbackService.createOneFeedback(
        businessSlug,
        emoji_service,
        comment_service,
        tags_service,
        emoji_order,
        comment_order,
        tags_order
      );

      // Send email notification
      const info = await EmailService.sendEmail(
        "New Feedback Created from customer",
        `<div>
					<h3>Hello business ID ${businessSlug}, you got a new feedback from customer!</h3>
					<hr/>
					<div>
						<ul>
							<h4>Feedback for service:</h4>
							<li>Reaction: ${emoji_service}</li>
							<li>Comment: ${
                comment_service
                  ? comment_service
                  : "No comment for service experience"
              }</li>
							<li>Opinion: ${tags_service ? tags_service : "No opinion about service"} </li>
						</ul>
						
						 <ul>
							<h4>Feedback for order:</h4>
							<li>Reaction: ${emoji_order}</li>
							<li>Comment: ${comment_order ? comment_order : "No comment for order"}</li>
							<li>Opinion: ${tags_order ? tags_order : "No opinion about order"} </li>
						</ul>
						<p>More details can be found via feedback dashboard</p>
					</div>
				</div>`
      );

      console.log("Message sent: %s", info);
      res.status(200).json(feedback);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }
}

export default FeedbackController;

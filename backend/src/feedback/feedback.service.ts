import Feedback from "./feedback.schema";
import { IFeedbackDocument } from "./feedback.interface";

class FeedbackService {
  static async getAllFeedbacks(): Promise<IFeedbackDocument[]> {
    return await Feedback.find();
  }

  static async createFeedback(
    emoji: string,
    comment: string
  ): Promise<IFeedbackDocument> {
    const feedback = new Feedback({
      emoji,
      comment,
    });

    return await feedback.save();
  }
}

export default FeedbackService;

import Feedback from "./feedback.schema";
import { IFeedbackDocument } from "./feedback.interface";

class FeedbackService {
  static async findFeedbacksByBusinessID(
    businessID: string
  ): Promise<IFeedbackDocument[] | IFeedbackDocument | null> {
    return Feedback.find({ businessID }).exec();
  }

  static async createOneFeedback(
    businessID: string,
    emoji: string,
    comment: string,
    tags: string[]
  ): Promise<IFeedbackDocument> {
    const feedback = new Feedback({
      businessID,
      emoji,
      comment,
      tags,
    });

    return await feedback.save();
  }
}

export default FeedbackService;

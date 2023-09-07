import Feedback from "./feedback.schema";
import { IFeedbackDocument } from "./feedback.interface";

class FeedbackService {
  static async findFeedbacksBybusinessSlug(
    businessSlug: string
  ): Promise<IFeedbackDocument[] | IFeedbackDocument | null> {
    return Feedback.find({ businessSlug });
  }

  static async createOneFeedback(
    businessSlug: string,
    emoji_service: string,
    comment_service: string,
    tags_service: string[],
    emoji_order: string,
    comment_order: string,
    tags_order: string[]
  ): Promise<IFeedbackDocument> {
    const feedback = new Feedback({
      businessSlug,
      emoji_service,
      comment_service,
      tags_service,
      emoji_order,
      comment_order,
      tags_order,
    });

    return await feedback.save();
  }
}

export default FeedbackService;

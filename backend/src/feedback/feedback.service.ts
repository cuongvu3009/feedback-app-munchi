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

  static async countByType(): Promise<Array<{ type: string; count: number }>> {
    const emojiTypes = ["love", "like", "neutral", "frown", "angry"];

    const feedbackCounts = await Promise.all(
      emojiTypes.map((emoji) => Feedback.countDocuments({ emoji }))
    );

    const total = feedbackCounts.reduce((acc, current) => acc + current, 0);

    return [
      ...emojiTypes.map((type, index) => ({
        type,
        count: feedbackCounts[index],
      })),
      { type: "total", count: total },
    ];
  }
}

export default FeedbackService;

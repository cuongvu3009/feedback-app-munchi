import Feedback from "./feedback.schema";
import { IFeedbackDocument } from "./feedback.interface";
import { Request } from "express";

class FeedbackService {
  static async getAllFeedbacks(
    businessID: string
  ): Promise<IFeedbackDocument[]> {
    return Feedback.find({ businessID }).exec();
  }

  // static async createFeedback(
  //   emoji: string,
  //   comment: string,
  //   tags: string[]
  // ): Promise<IFeedbackDocument> {
  //   const feedback = new Feedback({
  //     emoji,
  //     comment,
  //     tags,
  //   });

  //   return await feedback.save();
  // }

  // static async countByType(): Promise<Array<{ type: string; count: number }>> {
  //   const emojiTypes = ["awesome", "good", "okey", "bad", "terrible"];

  //   const feedbackCounts = await Promise.all(
  //     emojiTypes.map((emoji) => Feedback.countDocuments({ emoji }))
  //   );

  //   const total = feedbackCounts.reduce((acc, current) => acc + current, 0);

  //   return [
  //     ...emojiTypes.map((type, index) => ({
  //       type,
  //       count: feedbackCounts[index],
  //     })),
  //     { type: "total", count: total },
  //   ];
  // }
}

export default FeedbackService;

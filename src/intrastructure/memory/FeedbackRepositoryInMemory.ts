import { IFeedback } from "../../domain/models/Feedback";
import { FeedbackRepository } from "../../domain/repositories/FeedbackRepository";

export class FeedbackRepositoryInMemory implements FeedbackRepository {
    
  public async save(feedback: IFeedback): Promise<void> {
    return Promise.resolve();
  }
}

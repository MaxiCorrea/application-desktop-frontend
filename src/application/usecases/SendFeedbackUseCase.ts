import { IFeedback } from "../../domain/models/Feedback";
import { FeedbackRepository } from "../../domain/repositories/FeedbackRepository";

export class SendFeedbackUseCase {
  private repository: FeedbackRepository;

  constructor(repository: FeedbackRepository) {
    this.repository = repository;
  }

  public send = async (feedback: IFeedback) => {
    return this.repository.save(feedback).then(() => {
      return Promise.resolve();
    });
  };
}

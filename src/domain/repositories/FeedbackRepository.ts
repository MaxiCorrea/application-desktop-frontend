import { IFeedback } from "../models/Feedback";

export interface FeedbackRepository {
  readonly save: (payload: IFeedback) => Promise<void>;
}

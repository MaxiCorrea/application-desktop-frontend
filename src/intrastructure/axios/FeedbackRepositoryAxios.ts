import { IFeedback } from "../../domain/models/Feedback";
import { FeedbackRepository } from "../../domain/repositories/FeedbackRepository";
import { AxiosApp } from "./AxiosConfig";

export class FeedbackRepositoryAxios implements FeedbackRepository {
  public async save(feedback: IFeedback): Promise<void> {
    const body = {
      ...feedback,
    };
    return AxiosApp.post("", body).then((res) => {
      const { data } = res;
      return data;
    });
  }
}

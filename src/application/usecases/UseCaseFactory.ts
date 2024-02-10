import { DisplayMenuUseCase } from "./DisplayMenuUseCase";
import { SendFeedbackUseCase } from "./SendFeedbackUseCase";

export interface UseCaseFactory {
  readonly displayMenuUseCase: DisplayMenuUseCase;
  readonly sendFeedbackUseCase: SendFeedbackUseCase;
}

import { DisplayMenuUseCase } from "../../application/usecases/DisplayMenuUseCase";
import { SendFeedbackUseCase } from "../../application/usecases/SendFeedbackUseCase";
import { UseCaseFactory } from "../../application/usecases/UseCaseFactory";
import { AppRepositoryInMemory } from "../memory/AppRepositoryInMemory";
import { FeedbackRepositoryInMemory } from "../memory/FeedbackRepositoryInMemory";

export const useCases: UseCaseFactory = {
  displayMenuUseCase: new DisplayMenuUseCase(new AppRepositoryInMemory()),
  sendFeedbackUseCase: new SendFeedbackUseCase( new FeedbackRepositoryInMemory())
};

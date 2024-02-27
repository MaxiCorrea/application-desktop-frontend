import { DisplayMenuUseCase } from "../../application/usecases/DisplayMenuUseCase";
import { SendFeedbackUseCase } from "../../application/usecases/SendFeedbackUseCase";
import { UseCaseFactory } from "../../application/usecases/UseCaseFactory";
import { AppRepositoryAxios } from "../axios/AppRepositoryAxios";
import { FeedbackRepositoryInMemory } from "../memory/FeedbackRepositoryInMemory";

export const useCases: UseCaseFactory = {
  displayMenuUseCase: new DisplayMenuUseCase(new AppRepositoryAxios()),
  sendFeedbackUseCase: new SendFeedbackUseCase( new FeedbackRepositoryInMemory())
};

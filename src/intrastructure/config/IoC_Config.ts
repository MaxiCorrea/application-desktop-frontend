import { DisplayMenuUseCase } from "../../application/usecases/DisplayMenuUseCase";
import { UseCaseFactory } from "../../application/usecases/UseCaseFactory";
import { AppRepositoryInMemory } from "../memory/AppRepositoryInMemory";

export const useCases: UseCaseFactory = {
  displayMenuUseCase: new DisplayMenuUseCase(new AppRepositoryInMemory()),
};

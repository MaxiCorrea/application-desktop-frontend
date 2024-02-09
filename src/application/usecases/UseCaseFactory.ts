import { DisplayMenuUseCase } from "./DisplayMenuUseCase";

export interface UseCaseFactory {
    readonly displayMenuUseCase : DisplayMenuUseCase;
}
import { App } from "../../domain/models/App";
import { AppRepository } from "../../domain/repositories/AppRepository";
import { appsMock } from "../mocks/AppsMock";

export class AppRepositoryInMemory implements AppRepository {
  public async getListApps(): Promise<App[]> {
    return Promise.resolve(appsMock);
  }
}

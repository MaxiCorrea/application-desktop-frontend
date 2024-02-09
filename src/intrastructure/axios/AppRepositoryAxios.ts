import { App } from "../../domain/models/App";
import { AppRepository } from "../../domain/repositories/AppRepository";
import { AxiosApp } from "./AxiosConfig";

export class AppRepositoryAxios implements AppRepository {
  
  public async getListApps(): Promise<App[]> {
    return AxiosApp.get<App[]>("").then((res) => {
      const { data } = res;
      return data;
    });
  }
}

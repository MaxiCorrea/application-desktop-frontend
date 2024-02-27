import { App, IApp } from "../../domain/models/App";
import { IMenu, Menu } from "../../domain/models/Menu";
import { AppRepository } from "../../domain/repositories/AppRepository";
import { AxiosApp } from "./AxiosConfig";

export class AppRepositoryAxios implements AppRepository {
  
  public async getListApps(): Promise<IApp[]> {
    return AxiosApp.get<Menu>("/").then((res) => {
      const { data } = res;
      let apps : App[]=[];
      data.apps.forEach((e) => apps.push(new App(e)))
      return apps;
    });
  }
}

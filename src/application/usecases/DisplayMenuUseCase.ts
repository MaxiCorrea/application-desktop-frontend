import { AppRepository } from "../../domain/repositories/AppRepository";
import { Menu } from "../../domain/models/Menu";

export class DisplayMenuUseCase {
  private repository: AppRepository;

  constructor(repository: AppRepository) {
    this.repository = repository;
  }

  public getMenuApps = async () => {
    return this.repository
      .getListApps()
      .then((apps) => {
        const menu = new Menu(apps);
        return menu;
      })
  };
}

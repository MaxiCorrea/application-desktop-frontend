import { App } from "./App";

export interface IMenu {
  readonly getApps: () => App[];
}

export class Menu implements IMenu {
  readonly apps: App[];

  constructor(apps: App[]) {
    this.apps = apps;
  }

  public getApps = () => {
    return this.apps;
  };
}

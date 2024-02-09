import { App } from "../models/App";

export interface AppRepository {
  readonly getListApps: () => Promise<App[]>;
}

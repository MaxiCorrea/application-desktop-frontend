import * as React from "react";
import { App } from "../../../domain/models/App";

interface ItemProps {
  readonly app: App;
}

export const Item: React.FC<ItemProps> = ({app}) => {
  return <>{app.description}</>;
};

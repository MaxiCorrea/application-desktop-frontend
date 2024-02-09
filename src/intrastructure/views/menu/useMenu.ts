import * as React from "react";
import { App } from "../../../domain/models/App";
import { DisplayMenuUseCase } from "../../../application/usecases/DisplayMenuUseCase";

export const useMenu = (usecase: DisplayMenuUseCase) => {
  const [data, setData] = React.useState<App[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);

  React.useEffect(() => {
    setLoading(true);
    usecase
      .getMenuApps()
      .then((menu) => {
        setData(menu.getApps());
      })
      .catch((err) => {
        setData([]);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [usecase]);

  return [data, loading] as const;
};

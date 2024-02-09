import * as React from "react";
import { MxSpinner } from "@maxicorrea/mx-spinner";
import { DisplayMenuUseCase } from "../../../application/usecases/DisplayMenuUseCase";
import { useMenu } from "./useMenu";
import { Item } from "../item/Item";

interface MenuProps {
  readonly useCase: DisplayMenuUseCase;
}

export const Menu: React.FC<MenuProps> = ({ useCase }) => {
  const [data, loading] = useMenu(useCase);
  return (
    <>
      {loading ? (
        <MxSpinner />
      ) : (
        <div>
          {data.map((app) => (
            <Item key={app.id} app={app} />
          ))}
        </div>
      )}
    </>
  );
};

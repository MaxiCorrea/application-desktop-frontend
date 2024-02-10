import * as React from "react";
import { UseCaseFactory } from "../../../application/usecases/UseCaseFactory";
import { MxScrollbar } from "@maxicorrea/mx-scrollbar";
import { MxHeader } from "@maxicorrea/mx-header";
import pkg from "../../../../package.json";
import { Menu } from "../menu/Menu";
import logo from "../assets/desktop-logo.png";

interface HomeProps {
  readonly useCases: UseCaseFactory;
}

export const Home: React.FC<HomeProps> = ({ useCases }) => {
  return (
    <MxScrollbar>
      <MxHeader
        tooltipText={`Application Desktop v${pkg.version}`}
        leftLinks={
          <img
            src={logo.toString()}
            alt="Application Logo"
            style={{ height: "45px" }}
          />
        }
      />
      <div style={{ 
          display : "flex",
          justifyContent : "center",
          alignItems : "flex-start",
          height: "100vh", 
          overflowY: "scroll",
        }}>
        <Menu useCase={useCases.displayMenuUseCase} />
      </div>
    </MxScrollbar>
  );
};

import * as React from "react";
import pkg from "../../package.json";
import { MxHeader } from "@maxicorrea/mx-header";
import { MxScrollbar } from "@maxicorrea/mx-scrollbar";

export const UI: React.FC = () => {
  return (
    <MxScrollbar>
      <MxHeader 
        tooltipText={`Application Desktop v${pkg.version}`} 
      />
    </MxScrollbar>
  );
};

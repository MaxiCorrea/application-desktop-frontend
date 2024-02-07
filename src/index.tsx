import React from "react";
import ReactDOM from "react-dom";
import { UI } from "./views/UI";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
   <UI />, 
  document.getElementById("root")
);
  
serviceWorker.unregister();

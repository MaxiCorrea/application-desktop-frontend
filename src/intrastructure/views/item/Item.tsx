import * as React from "react";
import { App } from "../../../domain/models/App";
import { makeStyles } from "@material-ui/core/styles";

const useItemStyles = makeStyles(() => ({
  btn: {
    outline: "none",
    border: "transparent",
    background: "transparent",
    cursor: "pointer",
    transition: "transform 1.6s",
    "&:hover": {
      opacity: "0.85",
      filter: "alpha(opacity=85)",
      transform: "scale(1.2)",
    },
    marginBottom: "10px",
  },
  img: {
    maxHeight: "45px",
  },
}));

interface ItemProps {
  readonly app: App;
}

export const Item: React.FC<ItemProps> = ({ app }) => {
  const classes = useItemStyles();
  return (
    <button 
      className={classes.btn}
      onClick={()=> {
        alert(`Click in ${app.name}`)
      }}
    >
      <img className={classes.img} src={app.base64} alt="App Logo" />
    </button>
  );
};

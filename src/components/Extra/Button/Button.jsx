import React from "react";
import "./Button.css";

export const Button = (props) => {
  return (
    <button
      className={
        props.class +
        " " +
        props.btnstyle +
        " " +
        props.size +
        " " +
        props.border +
        " "
      }
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

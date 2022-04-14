import React from "react";
import "./MenuButton.css";

export default function MenuButton(props) {
  return (
    <div className="menu--button" onClick={props.handleClick}>
      {props.value}
    </div>
  );
}

import React from "react";
import Header from "../Header/Header";
import "./Menu.css";

import { Link } from "react-router-dom";
import MenuButton from "../Button/MenuButton";

export default function Menu(props) {
  console.log(props);
  return (
    <div
      className="menu"
      style={props.display ? { display: "block" } : { display: "none" }}
    >
      <Header handleClick={props.handleClick} />

      <div className="wrapper">
        <Link to="/vote4game">
          <MenuButton value="Change Game" handleClick={props.handleClick} />
        </Link>
        <Link to="/vote4country">
          <MenuButton value="Change Country" handleClick={props.handleClick} />
        </Link>
        <Link to="#">
          <MenuButton value="Change Language" handleClick={props.handleClick} />
        </Link>
      </div>
    </div>
  );
}

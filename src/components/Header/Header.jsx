import React from "react";
import "./Header.css";

import menuOpen from "../../assets/menuOpen.png";
import menuClose from "../../assets/menuClose.png";

import { Link } from "react-router-dom";

export default function Header(props) {
  console.log(props.display);
  return (
    <header style={props.display ? { display: "none" } : {}}>
      <Link to="/">
        <div className="title">ConnecTable</div>
      </Link>

      <div className="hamburger" onClick={props.handleClick}>
        <img
          src={props.open ? menuOpen : menuClose}
          alt=""
          className="ham--img"
        />
      </div>
    </header>
  );
}

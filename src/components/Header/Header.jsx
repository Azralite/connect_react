import React from "react";
import "./Header.css";

import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <Link to="/">
        <div className="title">ConnecTable</div>
      </Link>

      <div className="hamburger">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </header>
  );
}

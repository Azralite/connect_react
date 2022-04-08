import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <header>
      <a href="index.html">
        <div className="title">ConnecTable</div>
      </a>

      <div className="hamburger">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </header>
  );
}

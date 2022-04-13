import React from "react";
import "./AppIndex.css";

import { Link } from "react-router-dom";
import ConfirmButton from "../Button/ConfirmButton";

function AppIndex() {
  return (
    <div className="wrapper">
      <div className="select">Select your choice</div>

      <Link to="/vote4country" className="voteBox">
        <div className="vote">Vote 4 country</div>
      </Link>

      <Link to="vote4game" className="voteBox">
        <div className="vote">Vote 4 game</div>
      </Link>
    </div>
  );
}

export default AppIndex;

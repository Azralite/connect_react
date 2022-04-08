import React from "react";
import "./AppIndex.css";

import ConfirmButton from "../Button/ConfirmButton";

function AppIndex() {
  return (
    <div className="wrapper">
      <div className="select">Select your choice</div>

      <a href="vote4country.html" className="voteBox">
        <div className="vote">Vote 4 country</div>
      </a>

      <a href="vote4game.html" className="voteBox">
        <div className="vote">Vote 4 game</div>
      </a>

      {/* <ConfirmButton /> */}
    </div>
  );
}

export default AppIndex;

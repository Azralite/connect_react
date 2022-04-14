import React from "react";
import ConfirmButton from "../Button/ConfirmButton";
import "./Vote4Game.css";

import { Link } from "react-router-dom";

export default function Vote4Country() {
  return (
    <div className="wrapper">
      <div className="select2">Vote 4 the game</div>

      <Link to="/rate" className="voteBox">
        <div className="game">Do(n't) do that</div>
      </Link>

      <Link to="/image" className="voteBox">
        <div className="game">Words + images</div>
      </Link>

      <Link to="#" className="voteBox">
        <div className="game">Geo-guesser</div>
      </Link>

      {/* <ConfirmButton /> */}
    </div>
  );
}

import React from "react";
import ConfirmButton from "../Button/ConfirmButton";
import "./Vote4Game.css";

export default function Vote4Country() {
  return (
    <div className="wrapper">
      <div className="select2">Vote 4 the game</div>

      <a href="rate1.html" className="voteBox">
        <div className="game">Do(n't) do that</div>
      </a>

      <a href="image1.html" className="voteBox">
        <div className="game">Words + images</div>
      </a>

      <a href="#" className="voteBox">
        <div className="game">Geo-guesser</div>
      </a>

      {/* <ConfirmButton /> */}
    </div>
  );
}

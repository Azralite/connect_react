import React from "react";
import "./Card.css";
import { useParams } from "react-router-dom";

export default function Card(props) {
  const param = useParams();

  return (
    <div className="card">
      <h1>
        {props.wait
          ? "Wait for the other player to read the statement out loud. 🙌"
          : param.question}
      </h1>
    </div>
  );
}

import React from "react";
import DoneButton from "../Button/DoneButton";
import Card from "./Card";

import { useParams } from "react-router";

import { Link } from "react-router-dom";

export default function Discussion(props) {
  let tmp = Math.floor(Math.random() * 2);

  const param = useParams();
  let read = (
    <>
      <h3>Read the statement out loud!</h3>
      <Card />
    </>
  );

  let wait = (
    <>
      <h3>Discussion Time!</h3>
      <Card wait={true} />
    </>
  );
  return (
    <div className="wrapper">
      {tmp == 1 ? read : wait}

      <Link to={`/discussion2/${param.question}`} style={{ width: "80%" }}>
        <DoneButton />
      </Link>
    </div>
  );
}

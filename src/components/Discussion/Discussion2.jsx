import React from "react";
import DoneButton from "../Button/DoneButton";
import Card from "./Card";
import "./Card.css";

import { useParams } from "react-router-dom";
import NextButton from "../Button/NextButton";

import { Link } from "react-router-dom";

export default function Discussion2(props) {
  let tmp = Math.floor(Math.random() * 2);
  const par = useParams();

  let wait = <></>;
  return (
    <div className="wrapper">
      <h3>Discussion Time!</h3>
      <Card />
      <div className="button--wrapper">
        <Link to="/rate" className="link">
          <NextButton title="Next Statement" />
        </Link>
        <Link to="/rate" className="link">
          <NextButton title="Different Discussion" />
        </Link>
      </div>
    </div>
  );
}

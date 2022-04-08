import React from "react";
import "./Card.css";

export default function Card(props) {
  return (
    <div className="imageWrapper">
      <img src={props.img} alt="" className="mainImage" />
      <div className="caption">{props.caption}</div>
    </div>
  );
}

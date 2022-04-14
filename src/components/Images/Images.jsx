import React from "react";
import ConfirmButton from "../Button/ConfirmButton";
import "./Images.css";
import word2imagesData from "./word2imagesData";

export default function Images() {
  let idx = Math.floor(Math.random() * word2imagesData.length);
  let obj = word2imagesData[idx];

  return (
    <div className="wrapper">
      <h4 className="title">
        Choose a picture based on the word <i>{obj.word}</i>
      </h4>
      <div className="grid">
        <img src={obj.images.image1} alt="" />
        <img src={obj.images.image2} alt="" />
        <img src={obj.images.image3} alt="" />
        <img src={obj.images.image4} alt="" />
      </div>
      <div style={{ height: "20%" }}></div>
    </div>
  );
}

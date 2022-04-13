import React from "react";
import rateData from "./rateData";
import Card from "./Card";
import Slider from "./Slider";
import ConfirmButton from "../Button/ConfirmButton";
import "./Rate.css";

// import cheese from "../../assets/cheese.png";
// import croissant from "../../assets/dippingCroissant.png";
// // import cheese from "../../assets/cheese.png";
// // import cheese from "../../assets/cheese.png";

export default function Rate() {
  let tmp = Math.floor(Math.random() * rateData.length);
  let imgSrc = rateData[tmp].img;
  let caption = rateData[tmp].caption;

  console.log(imgSrc);

  let rateRandom = Math.floor(Math.random() * 2);
  let question;
  if (rateRandom) {
    question = <div className="rate">Rate this behavior</div>;
  } else {
    question = (
      <div className="rate">Guess the answer of the player to your right!</div>
    );
  }

  console.log(question);

  return (
    <div className="wrapper">
      {question}
      <Card img={imgSrc} caption={caption} />
      <Slider />

      <ConfirmButton />
    </div>
  );
}

import React from "react";
import "./Slider.css";

export default function Slider() {
  return (
    <div className="sliderWrapper">
      <input
        type="range"
        min="1"
        max="100"
        defaultValue="50"
        className="slider"
      />
    </div>
  );
}

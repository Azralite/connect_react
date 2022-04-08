import React from "react";
import ConfirmButton from "../Button/ConfirmButton";
import "./Vote4Country.css";

import map from "../../assets/map.png";

export default function Vote4Country() {
  return (
    <div className="wrapper">
      <div className="select2">Vote 4 country</div>

      <div className="map">
        <img src={map} alt="map of the world" className="map-img" />
      </div>

      <ConfirmButton />
    </div>
  );
}

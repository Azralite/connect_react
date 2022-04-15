import React from "react";
import ConfirmButton from "../Button/ConfirmButton";
import "./Vote4Country.css";

import { Link } from "react-router-dom";

import map from "../../assets/map.png";
import mapFrance from "../../assets/mapFrance.png";

export default function Vote4Country() {
  const [maps, setMaps] = React.useState(true);

  function changeMap() {
    setMaps((prevMap) => !prevMap);
    console.log("changing map");
  }

  return (
    <div className="wrapper">
      <div className="select2">Vote 4 country</div>

      <div className="map">
        <img
          src={maps ? map : mapFrance}
          alt="map of the world"
          className="map-img"
          onClick={changeMap}
        />
      </div>

      <Link to="/">
        <ConfirmButton />
      </Link>
    </div>
  );
}

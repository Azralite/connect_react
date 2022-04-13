import React from "react";
import InactiveButton from "../Button/InactiveButton";

export default function Inactive() {
  return (
    <div className="wrapper">
      <h4>Oh oh. You have not been active for a while...</h4>
      <InactiveButton />
    </div>
  );
}

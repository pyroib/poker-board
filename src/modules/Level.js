import constants from "../constants.js";
import { useState } from "react";

export default function Level(props) {
  return (
    <div>
      <p className="text-20xl font-bold">Level: {props.currentLevel}</p>
    </div>
  );
}

import constants from "../constants.js";
import { useState } from "react";

export function BonusDetails(props) {
  return (
    <div>
      re buys count = {props.reBuyCount}
      <br />
      re buy cash amount = {props.reBuyCount * props.reBuyCash}
      <br />
    </div>
  );
}

import React from "react";
import constants from "../constants.js";

const BubblePrize = (props) => {
  let BubblePrize =
    props.currentCashPool * constants.DEFAULT_THIRD_PRIZE_FACTOR;

  return (
    <div>
      <p className="text-4xl"> BubblePrize: {BubblePrize}</p>
    </div>
  );
};

export default BubblePrize;

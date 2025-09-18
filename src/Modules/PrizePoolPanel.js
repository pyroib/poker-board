"use client";

import { CURRENCY, PRIZE_POOL } from "../Constants/Strings.js";

export default function PrizePoolPanel(props) {
  let cashPool = Number(props.cashPool).toLocaleString(navigator.language, {
    minimumFractionDigits: 0,
  });

  return (
    <div className="flexitems-center justify-center   ">
      <h2 className="lg:text-4xl sm:text-lg  border-b border-white mx-7">
        {PRIZE_POOL}
      </h2>
      <p className="lg:text-4xl sm:text-3xl lg:mt-2">
        {CURRENCY}
        {cashPool}
      </p>
    </div>
  );
}

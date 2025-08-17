import constants from "../constants.js";
import { useState } from "react";

import SettingsIcon from "./SettingsIcon.js";

export default function Footer(props) {
  const [buyInCash, setBuyInCash] = useState(constants.DEFAULT_BUYIN_CASH);
  const [buyInChips, setBuyInChips] = useState(constants.DEFAULT_BUYIN_CHIPS);
  const [reBuyCash, setReBuyCash] = useState(constants.DEFAULT_REBUY_CASH);
  const [reBuyChips, setReBuyChips] = useState(constants.DEFAULT_BUYIN_CHIPS);
  const [bonusCash, setbonusCash] = useState("0"); ///useState(constants.DEFAULT_BONUS_CASH);
  const [bonusChips, setbonusChips] = useState(constants.DEFAULT_BONUS_CHIPS);
  const [freezOut, setFreezeOut] = useState("9pm");

  //<SettingsIcon />
  return (
    <footer className="poker-board-footer-card  rounded-3xl  relative">
      <div
        className={
          bonusCash === "0"
            ? "grid grid-cols-3 gap-3"
            : " grid grid-cols-4 gap-3"
        }
      >
        <div className=" text-10xl font-bold und p-2 leading-[100px]">
          buy in = ${buyInCash} for {buyInChips} chips
        </div>

        <div className=" text-10xl font-bold und p-2  leading-[100px]">
          Re-buy = ${reBuyCash} for {reBuyChips} chips
        </div>

        <div className=" text-10xl font-bold und p-2 leading-[100px]">
          Freezeout: {freezOut}
        </div>

        {bonusCash !== "0" && (
          <div className="text-10xl font-bold und p-2 leading-[100px]">
            9PM Bonus = ${bonusCash} for {bonusChips} chips
          </div>
        )}
      </div>
    </footer>
  );
}

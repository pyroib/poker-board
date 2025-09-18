import { useState } from "react";
import {
  STRING_FREEZE_OUT,
  COLON,
  CURRENCY,
  POST_MERIDIEM,
  CHIPS,
  FOR,
  RE_BUY,
  BONUS,
  BUY_IN,
} from "../Constants/Strings.js";

import { DEFAULT_FREEZE_OUT } from "../Constants/Settings.js";

import BuyInModal from "../Modals/BuyInModal.js";
import ReBuyModal from "../Modals/ReBuyModal.js";
import BonusModal from "../Modals/BonusModal.js";
import FreezeOutModal from "../Modals/FreezeOutModal.js";

export default function Footer({
  buyInCost,
  buyInChips,
  reBuyCost,
  reBuyChips,
  bonusOption,
  bonusCost,
  bonusChips,
  setBuyInCost,
  setBuyInChips,
  setReBuyCost,
  setReBuyChips,
  setBonusCost,
  setBonusChips,
}) {
  const [isBuyInModalOpen, setIsBuyInModalOpen] = useState(false);
  const [isReBuyModalOpen, setIsReBuyModalOpen] = useState(false);
  const [isBonusModalOpen, setIsBonusModalOpen] = useState(false);
  const [isFreezeOutModalOpen, setIsFreezeOutModalOpen] = useState(false);
  const [freezeOutTime, setFreezeOutTime] = useState(DEFAULT_FREEZE_OUT);

  const saveBuyIn = (cost, chips) => {
    setBuyInCost(cost);
    setBuyInChips(chips);
    setIsBuyInModalOpen(false);
  };
  const saveReBuy = (cost, chips) => {
    setReBuyCost(cost);
    setReBuyChips(chips);
    setIsReBuyModalOpen(false);
  };

  const saveBonus = (cost, chips) => {
    setBonusCost(cost);
    setBonusChips(chips);
    setIsBonusModalOpen(false);
  };

  const saveFreezeOut = (time) => {
    setFreezeOutTime(time);
    setIsReBuyModalOpen(false);
  };

  return (
    <footer className="sm:h-[16vh] lg:h-[10vh] ">
      <div className="relative w-full h-full flex items-center justify-center">
        <div
          className={
            "flex-1 grid h-full gap-3 " +
            (bonusOption === true ? "grid-cols-4" : "grid-cols-3")
          }
        >
          <div
            className="glassPanel rounded-xl h-full py-2 px-5 flex flex-col items-center justify-center cursor-pointer"
            onClick={() => setIsBuyInModalOpen(true)}
          >
            {BUY_IN} {COLON} {CURRENCY}
            {cleanNumberFormat(buyInCost)} {FOR} {cleanNumberFormat(buyInChips)}{" "}
            {CHIPS}
          </div>

          <div
            className="glassPanel rounded-xl h-full py-2 px-5 flex flex-col items-center justify-center cursor-pointer"
            onClick={() => setIsReBuyModalOpen(true)}
          >
            {RE_BUY} {COLON} {CURRENCY}
            {cleanNumberFormat(reBuyCost)} {FOR} {cleanNumberFormat(reBuyChips)}{" "}
            {CHIPS}
          </div>
          {bonusOption === true && (
            <div
              className="glassPanel rounded-xl h-full py-2 px-5 flex flex-col items-center justify-center cursor-pointer"
              onClick={() => setIsBonusModalOpen(true)}
            >
              {BONUS} {COLON} {CURRENCY}
              {bonusCost} {FOR} {cleanNumberFormat(bonusChips)} {CHIPS}
            </div>
          )}

          <div
            className="glassPanel rounded-xl h-full py-2 px-5 flex flex-col items-center justify-center cursor-pointer"
            onClick={() => setIsFreezeOutModalOpen(true)}
          >
            {STRING_FREEZE_OUT} {COLON} {freezeOutTime}
            {POST_MERIDIEM}
          </div>
        </div>

        <BuyInModal
          isBuyInModalOpen={isBuyInModalOpen}
          buyInCost={buyInCost}
          buyInChips={buyInChips}
          closeBuyInModal={() => setIsBuyInModalOpen(false)}
          saveBuyIn={saveBuyIn}
        />
        <ReBuyModal
          isReBuyModalOpen={isReBuyModalOpen}
          reBuyCost={reBuyCost}
          reBuyChips={reBuyChips}
          closeReBuyModal={() => setIsReBuyModalOpen(false)}
          saveReBuy={saveReBuy}
        />
        <BonusModal
          isBonusModalOpen={isBonusModalOpen}
          bonusCost={bonusCost}
          bonusChips={bonusChips}
          closeBonusModal={() => setIsBonusModalOpen(false)}
          saveBonus={saveBonus}
        />
        <FreezeOutModal
          isFreezeOutModalOpen={isFreezeOutModalOpen}
          freezeOutTime={freezeOutTime}
          closeFreezeOutModal={() => setIsFreezeOutModalOpen(false)}
          saveFreezeOut={saveFreezeOut}
        />
      </div>
    </footer>
  );
}

function cleanNumberFormat(num) {
  return Number(num).toLocaleString(navigator.language, {
    minimumFractionDigits: 0,
  });
}

import { useState } from "react";

import Header from "../Layout/Header.js";
import Main from "../Layout/Main.js";
import Footer from "../Layout/Footer.js";

import {
  DEFAULT_BUYIN_COST,
  DEFAULT_BUYIN_CHIPS,
  DEFAULT_REBUY_COST,
  DEFAULT_REBUY_CHIPS,
  DEFAULT_BONUS_COST,
  DEFAULT_BONUS_CHIPS,
} from "../Constants/Settings.js";

export default function PokerBoard() {
  const [buyInCost, setBuyInCost] = useState(DEFAULT_BUYIN_COST);
  const [reBuyCost, setReBuyCost] = useState(DEFAULT_REBUY_COST);
  const [bonusCost, setBonusCost] = useState(DEFAULT_BONUS_COST);
  const [buyInChips, setBuyInChips] = useState(DEFAULT_BUYIN_CHIPS);
  const [reBuyChips, setReBuyChips] = useState(DEFAULT_REBUY_CHIPS);
  const [bonusChips, setBonusChips] = useState(DEFAULT_BONUS_CHIPS);

  const [bonusOption, setBonusOption] = useState(true);

  return (
    <div className="h-screen flex flex-col text-white sm:text-l lg:text-xl sm:gap-1 lg:gap-2">
      <Header />
      <Main
        buyInCost={buyInCost}
        reBuyCost={reBuyCost}
        bonusCost={bonusCost}
        buyInChips={buyInChips}
        reBuyChips={reBuyChips}
        bonusChips={bonusChips}
        bonusOption={bonusOption}
        setBonusOption={setBonusOption}
      />
      <Footer
        buyInCost={buyInCost}
        buyInChips={buyInChips}
        reBuyCost={reBuyCost}
        reBuyChips={reBuyChips}
        bonusOption={bonusOption}
        bonusCost={bonusCost}
        bonusChips={bonusChips}
        setBuyInCost={setBuyInCost}
        setBuyInChips={setBuyInChips}
        setReBuyCost={setReBuyCost}
        setReBuyChips={setReBuyChips}
        setBonusCost={setBonusCost}
        setBonusChips={setBonusChips}
      />
    </div>
  );
}

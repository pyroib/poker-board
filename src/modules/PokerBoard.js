import { useState, useEffect } from "react";
import constants from "../constants.js";

import PrizeBoard from "./PrizeBoard.js";
import PlayerBoard from "./PlayerBoard.js";
import CountDownTimer from "./CountDownTimer.js";
import Level from "./Level.js";
import { StatsBoard } from "./StatsBoard.js";

import BlindBoard from "./BlindBoard.js";

export default function PokerBoard() {
  const [currentLevel, setCurrentLevel] = useState(1);

  const [cashPool, setCashPool] = useState(0);
  const [chipPool, setChipPool] = useState(0);

  const [chipAvg, setChipAvg] = useState(0);

  const [buyinCount, setBuyinCount] = useState(1);
  const [buyinCost, setBuyinCost] = useState(constants.DEFAULT_BUYIN_CASH);
  const [buyinChips, setBuyinChips] = useState(constants.DEFAULT_BUYIN_CHIPS);
  const [buyInCashPool, setBuyInCashPool] = useState(0);
  const [buyinChipPool, setBuyinChipPool] = useState(0);

  const [rebuyCount, setReBuyCount] = useState(5);
  const [rebuyCost, setRebuyCost] = useState(constants.DEFAULT_REBUY_CASH);
  const [rebuyChips, setRebuyChips] = useState(constants.DEFAULT_REBUY_CHIPS);
  const [reBuyCashPool, setReBuyCashPool] = useState(0);
  const [rebuyChipPool, setRebuyChipPool] = useState(0);

  const [bonusCount, setBonusCount] = useState(8);
  const [bonusCost, setBonusCost] = useState(constants.DEFAULT_BONUS_CASH);
  const [bonusChips, setBonusChips] = useState(constants.DEFAULT_BONUS_CHIPS);
  const [bonusCashPool, setBonusCashPool] = useState(0);
  const [bonusChipPool, setBonusChipPool] = useState(0);

  useEffect(() => {
    const buyin = calcChipsAndCash({
      count: buyinCount,
      cost: buyinCost,
      chips: buyinChips,
    });
    setBuyInCashPool(buyin.cashPool);
    setBuyinChipPool(buyin.chipPool);

    const rebuy = calcChipsAndCash({
      count: rebuyCount,
      cost: rebuyCost,
      chips: rebuyChips,
    });
    setReBuyCashPool(rebuy.cashPool);
    setRebuyChipPool(rebuy.chipPool);

    const bonus = calcChipsAndCash({
      count: bonusCount,
      cost: bonusCost,
      chips: bonusChips,
    });
    setBonusCashPool(bonus.cashPool);
    setBonusChipPool(bonus.chipPool);

    setCashPool(buyin.cashPool + rebuy.cashPool + bonus.cashPool);
    setChipPool(buyin.chipPool + rebuy.chipPool + bonus.chipPool);

    let avg = (buyin.chipPool + rebuy.chipPool + bonus.chipPool) / buyinCount;
    setChipAvg(avg);
  }, [buyinCount, rebuyCount, bonusCount]);

  const calcChipsAndCash = (data) => {
    let cashPool = data.count * data.cost;
    let chipPool = data.count * data.chips;
    return {
      cashPool: cashPool,
      chipPool: chipPool,
    };
  };

  const callNextLevel = () => {
    let t = currentLevel + 1;
    setCurrentLevel(t);
  };

  return (
    <div
      id="poker-board-container"
      className="grid grid-cols-[20vw_1fr_20vw] gap-3 flex flex-grow flex-col h-64 mt-10"
    >
      <div id="poker-board-left">
        <PrizeBoard CashPool={cashPool} />
      </div>
      <div id="poker-board-center">
        <div id="poker-board-countdown-timer" className=" rounded-3xl p-5 ">
          <CountDownTimer callNextLevel={callNextLevel} />
          <Level currentLevel={currentLevel} />
        </div>
        <div id="poker-board-blind-display" className=" rounded-3xl p-5 mt-10 ">
          <BlindBoard currentLevel={currentLevel} />
        </div>
      </div>

      <div id="poker-board-right">
        <PlayerBoard
          setTotalBuyIns={setBuyinCount}
          setTotalRebuys={setReBuyCount}
          setTotalBonuss={setBonusCount}
        />
        <StatsBoard
          buyInCount={buyinCount}
          buyInCashPool={buyInCashPool}
          reBuyCount={rebuyCount}
          reBuyCashPool={reBuyCashPool}
          bonusCount={bonusCount}
          bonusCashPool={bonusCashPool}
          chipPool={chipPool}
          chipAvg={chipAvg}
        />
      </div>
    </div>
  );
}

import { useState } from "react";

import Left from "../Layout/Left.js";

import Center from "../Layout/Center.js";

import Right from "../Layout/Right.js";

export default function Main({
  buyInCost,
  reBuyCost,
  bonusCost,
  buyInChips,
  reBuyChips,
  bonusChips,
  bonusOption,
  setBonusOption,
}) {
  const [cashPool, setCashPool] = useState(0);
  const [playerCount, setPlayerCount] = useState(0);
  const [activePlayers, setActivePlayers] = useState(0);
  const [currentLevel, setCurrentLevel] = useState(1);

  return (
    <main className="flex-1 grid grid-cols-[20vw,1fr,20vw] sm:gap-1 lg:gap-2">
      <div className="flex flex-col gap-2">
        <Left
          cashPool={cashPool}
          playerCount={playerCount}
          setBonusOption={setBonusOption}
        />
      </div>

      <div className="flex flex-col glassPanel rounded-xl py-2 px-5 ">
        <Center currentLevel={currentLevel} setCurrentLevel={setCurrentLevel} />
      </div>

      <div className="flex flex-col gap-2">
        <Right
          PlayerCount={playerCount}
          CashPool={cashPool}
          ActivePlayers={activePlayers}
          BuyInCost={buyInCost}
          ReBuyCost={reBuyCost}
          BonusCost={bonusCost}
          BuyInChips={buyInChips}
          ReBuyChips={reBuyChips}
          BonusChips={bonusChips}
          BonusOption={bonusOption}
          SetCashPool={setCashPool}
          SetPlayerCount={setPlayerCount}
          SetActivePlayers={setActivePlayers}
        />
      </div>
    </main>
  );
}

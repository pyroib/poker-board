"use client";

import PlayerStatusPanel from "../Modules/PlayerStatusPanel.js";
import PlayingStatsPanel from "../Modules/PlayingStatsPanel.js";

export default function Right({
  PlayerCount,
  CashPool,
  ActivePlayers,
  BuyInCost,
  ReBuyCost,
  BonusCost,
  BuyInChips,
  ReBuyChips,
  BonusChips,
  BonusOption,
  SetCashPool,
  SetPlayerCount,
  SetActivePlayers,
}) {
  return (
    <>
      <div className=" glassPanel rounded-xl lg:py-2 lg:px-5 sm:py-1 sm:px-1">
        <PlayerStatusPanel
          PlayerCount={PlayerCount}
          SetPlayerCount={SetPlayerCount}
          SetActivePlayers={SetActivePlayers}
        />
      </div>
      <div className="flex-1 flex items-center justify-center glassPanel rounded-xl py-2 px-5 ">
        <PlayingStatsPanel
          PlayerCount={PlayerCount}
          CashPool={CashPool}
          ActivePlayers={ActivePlayers}
          BonusOption={BonusOption}
          BuyInCost={BuyInCost}
          ReBuyCost={ReBuyCost}
          BonusCost={BonusCost}
          BuyInChips={BuyInChips}
          ReBuyChips={ReBuyChips}
          BonusChips={BonusChips}
          SetCashPool={SetCashPool}
        />
      </div>
    </>
  );
}

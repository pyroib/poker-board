"use client";
import { useState } from "react";

import PrizePoolPanel from "../Modules/PrizePoolPanel.js";
import PrizeDetailsPanel from "../Modules/PrizeDetailsPanel.js";

export default function Left({ cashPool, playerCount, setBonusOption }) {
  const [isPrizeModalOpen, setIsPrizeModalOpen] = useState(false);

  return (
    <>
      <div className="flex-1 flex items-center justify-center  glassPanel rounded-xl py-2 px-5 ">
        <PrizePoolPanel cashPool={cashPool} />
      </div>
      <div
        className="flex-1 flex items-center justify-center  glassPanel rounded-xl py-2 px-5 cursor-pointer "
        onClick={() => setIsPrizeModalOpen(true)}
      >
        <PrizeDetailsPanel
          isPrizeModalOpen={isPrizeModalOpen}
          playerCount={playerCount}
          CashPool={cashPool}
          PlayerCount={playerCount}
          setBonusOption={setBonusOption}
          setIsPrizeModalOpen={setIsPrizeModalOpen}
        />
      </div>
    </>
  );
}

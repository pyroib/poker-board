"use client";
import { useState } from "react";

import {
  DEFAULT_BUBBLE_BOOL,
  DEFAULT_BUBBLE_SHARE,
  DEFAULT_FIRST_PRIZE_FACTOR,
  DEFAULT_SECOND_PRIZE_FACTOR,
  DEFAULT_THIRD_PRIZE_FACTOR,
} from "../Constants/Settings.js";

import {
  FirstPrize,
  SecondPrize,
  ThirdPrize,
  BubblePrize,
} from "../Components/PrizeCards.js";

import PrizeModal from "../Modals/PrizeModal.js";

export default function PrizeDetailsPanel({
  isPrizeModalOpen,
  playerCount,
  CashPool,
  PlayerCount,
  setIsPrizeModalOpen,
}) {
  const [bubbleOption, setBubbleOption] = useState(DEFAULT_BUBBLE_BOOL);
  const [bubblePrize, setBubblePrize] = useState(DEFAULT_BUBBLE_SHARE);

  const [firstPrizeShare, setFirstPrizeShare] = useState(
    DEFAULT_FIRST_PRIZE_FACTOR
  );
  const [secondPrizeShare, setSecondPrizeShare] = useState(
    DEFAULT_SECOND_PRIZE_FACTOR
  );
  const [thirdPrizeShare, setThirdPrizeShare] = useState(
    DEFAULT_THIRD_PRIZE_FACTOR
  );

  const SavePrize = (
    firstPrize,
    secondPrize,
    thirdPrize,
    bubbleOpt,
    bubblePrz
  ) => {
    setFirstPrizeShare(firstPrize);
    setSecondPrizeShare(secondPrize);
    setThirdPrizeShare(thirdPrize);
    setBubbleOption(bubbleOpt);
    setBubblePrize(bubblePrz);
  };

  return (
    <div>
      {playerCount !== 0 && (
        <FirstPrize FirstPrize={(CashPool - bubblePrize) * firstPrizeShare} />
      )}
      {playerCount > 1 && (
        <SecondPrize
          SecondPrize={(CashPool - bubblePrize) * secondPrizeShare}
        />
      )}
      {playerCount > 2 && (
        <ThirdPrize
          ThirdPrize={(CashPool - bubblePrize) * thirdPrizeShare}
          BubbleOption={bubbleOption}
        />
      )}
      {bubbleOption === true && PlayerCount > 3 && (
        <BubblePrize BubblePrize={CashPool <= bubblePrize ? 0 : bubblePrize} />
      )}

      <PrizeModal
        isPrizeModalOpen={isPrizeModalOpen}
        firstPrizeShare={firstPrizeShare}
        secondPrizeShare={secondPrizeShare}
        thirdPrizeShare={thirdPrizeShare}
        bubbleOption={bubbleOption}
        bubblePrize={bubblePrize}
        SavePrize={SavePrize}
        setIsPrizeModalOpen={setIsPrizeModalOpen}
      />
    </div>
  );
}

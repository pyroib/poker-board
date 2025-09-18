"use client";
import { useState, useEffect } from "react";

import {
  CURRENCY,
  CHIPS,
  BUY_INS,
  RE_BUYS,
  BONUSS,
  TOTAL_CHIPS,
  AVERAGE,
} from "../Constants/Strings.js";

import NumberChange from "../Icons/NumberChange.js";

export default function PlayingStatsPanel({
  PlayerCount,
  CashPool,
  ActivePlayers,
  BonusOption,
  BuyInCost,
  ReBuyCost,
  BonusCost,
  BuyInChips,
  ReBuyChips,
  BonusChips,
  SetCashPool,
}) {
  const [cashPool, setCashPool] = useState(CashPool);
  const [chipPool, setChipPool] = useState(0);

  const [chipAvg, setChipAvg] = useState(0);

  const [buyInCount, setBuyInCount] = useState(0);
  const [buyInChipPool, setBuyInChipPool] = useState(0);
  const [buyInCashPool, setBuyInCashPool] = useState(0);

  const [reBuyCount, setReBuyCount] = useState(0);
  const [reBuyChipPool, setReBuyChipPool] = useState(0);
  const [reBuyCashPool, setReBuyCashPool] = useState(0);

  const [bonusCount, setBonusCount] = useState(0);
  const [bonusChipPool, setBonusChipPool] = useState(0);
  const [bonusCashPool, setBonusCashPool] = useState(0);

  const AddBuyIn = () => {
    let t = buyInCount + 1;
    setBuyInCount(t >= PlayerCount ? PlayerCount : t);
  };
  const RemoveBuyIn = () => {
    let t = buyInCount - 1;
    setBuyInCount(t < 0 ? 0 : t);
  };

  const AddReBuy = () => {
    let t = reBuyCount + 1;
    setReBuyCount(t);
  };
  const RemoveReBuy = () => {
    let t = reBuyCount - 1;
    setReBuyCount(t < 0 ? 0 : t);
  };

  const Addbonus = () => {
    let t = bonusCount + 1;
    setBonusCount(t > PlayerCount ? PlayerCount : t);
  };
  const RemoveBonus = () => {
    let t = bonusCount - 1;
    setBonusCount(t < 0 ? 0 : t);
  };

  useEffect(() => {
    let cashTally = BuyInCost * buyInCount;
    let chipTally = BuyInChips * buyInCount;
    setBuyInChipPool(chipTally);
    setBuyInCashPool(cashTally);
  }, [buyInCount]);

  useEffect(() => {
    let cashTally = ReBuyCost * reBuyCount;
    let chipTally = ReBuyChips * reBuyCount;
    setReBuyChipPool(chipTally);
    setReBuyCashPool(cashTally);
  }, [reBuyCount]);

  useEffect(() => {
    let cashTally = BonusCost * bonusCount;
    let chipTally = BonusChips * bonusCount;
    setBonusChipPool(chipTally);
    setBonusCashPool(cashTally);
  }, [bonusCount]);

  useEffect(() => {
    let chips = buyInChipPool + reBuyChipPool + bonusChipPool;
    setChipPool(chips);
    let AP = ActivePlayers < 1 ? 1 : ActivePlayers;
    let chipAverage = chips / AP;

    setChipAvg(Math.round(chipAverage));
  }, [buyInChipPool, reBuyChipPool, bonusChipPool, ActivePlayers]);

  useEffect(() => {
    let cash = buyInCashPool + reBuyCashPool + bonusCashPool;
    setCashPool(cash);
    SetCashPool(cash);
  }, [buyInCashPool, reBuyCashPool, bonusCashPool]);

  return (
    <div className="flex-1 items-center justify-center   ">
      <h2 className="lg:text-3xl sm:text-base  border-b border-white mx-7">
        {BUY_INS}
      </h2>

      <div className="text-2xl flex items-center justify-center ">
        <div
          className=" cursor-pointer size-4 relative lg:top-3 sm:top-1"
          onClick={() => RemoveBuyIn()}
          style={{ transform: "scale(1,1) scale(-1,-1)" }}
        >
          <NumberChange />
        </div>
        <div>
          <p className="lg:text-2xl sm:text-sm lg:mt-2">
            {buyInCount || 0} = {CURRENCY}
            {buyInCashPool.toLocaleString(navigator.language, {
              minimumFractionDigits: 0,
            }) || 0}
          </p>
        </div>
        <div
          className="cursor-pointer size-4 relative lg:bottom-1 sm:bottom-0"
          onClick={() => AddBuyIn()}
        >
          <NumberChange />
        </div>
      </div>

      <h2 className="lg:text-3xl sm:text-base  border-b border-white lg:mt-5 mx-7">
        {RE_BUYS}
      </h2>

      <div className="text-2xl flex items-center justify-center">
        <div
          className=" cursor-pointer size-4 relative lg:top-3 sm:top-1"
          onClick={() => RemoveReBuy()}
          style={{ transform: "scale(1,1) scale(-1,-1)" }}
        >
          <NumberChange />
        </div>
        <div>
          <p className="lg:text-2xl sm:text-sm lg:mt-2">
            {reBuyCount || 0} = {CURRENCY}
            {reBuyCashPool.toLocaleString(navigator.language, {
              minimumFractionDigits: 0,
            }) || 0}
          </p>
        </div>
        <div
          className="cursor-pointer size-4 relative lg:bottom-1 sm:bottom-0"
          onClick={() => AddReBuy()}
        >
          <NumberChange />
        </div>
      </div>
      {BonusOption === true && (
        <>
          <h2 className="lg:text-3xl sm:text-base  border-b border-white lg:mt-5 mx-7">
            {BONUSS}
          </h2>

          <div className="text-2xl flex items-center justify-center">
            <div
              className=" cursor-pointer size-4 relative lg:top-3 sm:top-1"
              onClick={() => RemoveBonus()}
              style={{ transform: "scale(1,1) scale(-1,-1)" }}
            >
              <NumberChange />
            </div>
            <div>
              <p className="lg:text-2xl sm:text-sm lg:mt-2">
                {bonusCount || 0} = {CURRENCY}
                {bonusCashPool.toLocaleString(navigator.language, {
                  minimumFractionDigits: 0,
                }) || 0}
              </p>
            </div>
            <div
              className="cursor-pointer size-4 relative lg:bottom-1 sm:bottom-0"
              onClick={() => Addbonus()}
            >
              <NumberChange />
            </div>
          </div>
        </>
      )}
      <h2 className="lg:text-3xl sm:text-base border-b border-white lg:mt-5 mx-7">
        {TOTAL_CHIPS}
      </h2>
      <p className="lg:text-2xl sm:text-base lg:mt-2">
        {chipPool.toLocaleString(navigator.language, {
          minimumFractionDigits: 0,
        }) || 0}
      </p>
      <h2 className="lg:text-3xl sm:text-base border-b border-white lg:mt-5 mx-7">
        {AVERAGE}
      </h2>
      <p className="lg:text-2xl sm:text-sm lg:mt-2">
        {chipAvg.toLocaleString(navigator.language, {
          minimumFractionDigits: 0,
        }) || 0}{" "}
        {CHIPS}
      </p>
    </div>
  );
}
/*
export function BuyInDetails(props) {
  return (
    <div className="">
      <div className="false-block ">
        <p className="text-lg border-b border-white">{BUY_INS}</p>
        <p className="text-m">
          {buyInCount || 0} = ${buyInCash || 0}
        </p>
      </div>
    </div>
  );
}
export function ReBuyDetails(props) {
  return (
    <div className="">
      <p className="text-lg border-b border-white">{RE_BUYS}</p>
      <p className="text-m">
        {reBuyCount || 0} = ${reBuyCash || 0}
      </p>
    </div>
  );
}

export function BonusDetails(props) {
  return (
    <div className="">
      <p className="text-lg border-b border-white">{BONUSS}</p>
      <p className="text-m">
        {bonusCount || 0} = {bonusCash || 0}
      </p>
    </div>
  );
}

export function ChipsDetails(props) {
  return (
    <div className=" ">
      <p className="text-lg border-b border-white">{CHIPS}</p>
      <p className="text-m">
        {chipPool || 0} {AVERAGE} {chipAvg || 0}
      </p>
    </div>
  );
}
*/

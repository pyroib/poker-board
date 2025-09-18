"use client";
import { useState, useEffect } from "react";

import {
  COLON,
  PLAYERS,
  TOTAL_PLAYERS,
  PLAYERS_ACTIVE,
} from "../Constants/Strings.js";

import NumberChange from "../Icons/NumberChange.js";

export default function PlayerStatusPanel({
  PlayerCount,
  SetPlayerCount,
  SetActivePlayers,
}) {
  const [playerCount, setPlayerCount] = useState(PlayerCount);
  const [activePlayers, setActivePlayers] = useState(0);

  const AddPlayer = () => {
    let t = playerCount + 1;

    setPlayerCount(t);
    SetPlayerCount(t);
  };
  const RemovePlayer = () => {
    let t = playerCount - 1;
    setPlayerCount(t < 0 ? 0 : t);
    SetPlayerCount(t < 0 ? 0 : t);
  };

  const AddActive = () => {
    let t = activePlayers + 1;
    setActivePlayers(t > playerCount ? playerCount : t);
    SetActivePlayers(t > playerCount ? playerCount : t);
  };
  const RemoveActive = () => {
    let t = activePlayers - 1;
    setActivePlayers(t < 1 ? 1 : t);
    SetActivePlayers(t < 1 ? 1 : t);
  };

  useEffect(() => {
    SetPlayerCount(playerCount < 0 ? 0 : playerCount);
    setActivePlayers(activePlayers);
    SetActivePlayers(activePlayers);
  }, [playerCount, activePlayers]);

  return (
    <>
      <h2 className="lg:text-3xl sm:text-base border-b border-white lg:mt-2 lg:mx-7 sm:mx-7">
        {PLAYERS}
      </h2>
      <div className="text-2xl flex items-center justify-center">
        <div
          className=" cursor-pointer size-4 relative lg:top-3 sm:top-1"
          onClick={(e) => RemovePlayer()}
          style={{ transform: "scale(1,1) scale(-1,-1)" }}
        >
          <NumberChange />
        </div>
        <div>
          <p className="lg:text-xl sm:text-sm lg:mt-2">
            {TOTAL_PLAYERS}
            {COLON} {PlayerCount}
          </p>
        </div>
        <div
          className="cursor-pointer size-4 relative lg:bottom-1 sm:bottom-0"
          onClick={(e) => AddPlayer()}
        >
          <NumberChange />
        </div>
      </div>

      <div className="text-2xl flex items-center justify-center">
        <div
          className=" cursor-pointer size-4 relative lg:top-3 sm:top-1"
          onClick={(e) => RemoveActive()}
          style={{ transform: "scale(1,1) scale(-1,-1)" }}
        >
          <NumberChange />
        </div>
        <div>
          <p className="lg:text-xl sm:text-sm lg:mt-2">
            {PLAYERS_ACTIVE}
            {COLON} {activePlayers}
          </p>
        </div>
        <div
          className="cursor-pointer size-4 relative lg:bottom-1 sm:bottom-0"
          onClick={(e) => AddActive()}
        >
          <NumberChange />
        </div>
      </div>
    </>
  );
}

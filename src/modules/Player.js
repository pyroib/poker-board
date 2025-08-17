import constants from "../constants.js";
import { useState } from "react";
import SettingsIcon from "./SettingsIcon.js";

export default function Player() {
  return <div>Players</div>;
}

export function PlayerDetails() {
  /*      
  const [playerList, setPlayerList] = useState(
      constants.DEFAULT_PLAYER_LIST
  );
*/

  const [playerList, setPlayerList] = useState([
    "Mancavedave",
    "ian",
    "soooosh",
    "alex",
    "Jay",
    "patty",
  ]);

  const [activePlayers, setActivePlayers] = useState([
    "Mancavedave",
    "ian",
    "Jay",
    "patty",
  ]);

  return (
    <div className="relative">
      <SettingsIcon />
      <p className="text-5xl pb-2 mb-2 border-b ">Table</p>

      <div id="poker-board-players-count">
        total players: {playerList.length}
      </div>

      <div id="poker-board-players-remaining">
        player still playing: {activePlayers.length}
      </div>

      <p className="text-5xl pb-2 mb-2 mt-10 border-b ">Player List</p>

      <ol>
        {playerList.map((item, k) => {
          return PlayerCard(item, k);
        })}
      </ol>
    </div>
  );
}

function PlayerCard(player, k) {
  return <li key={k}>{player}</li>;
}

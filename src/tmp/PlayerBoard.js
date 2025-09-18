"use client";

import { useState, useEffect, useRef } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

import SettingsIcon from "./SettingsIcon.js";

import {
  TABLE,
  TOTAL_PLAYERS,
  PLAYERS_ACTIVE,
  RE_BUYS,
  BONUSS,
} from "../Constants/Strings.js";

export function PlayerBoard(props) {
  /* Modal */

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [playerList, setPlayerList] = useState([
    { id: 0, name: "1-", active: true, buyin: true, rebuy: 0 },
    { id: 1, name: "2-", active: true, buyin: false, rebuy: 0 },
    { id: 2, name: "3-", active: true, buyin: true, rebuy: 0 },
    { id: 3, name: "44-", active: true, buyin: false, rebuy: 0 },
    { id: 4, name: "-5", active: true, buyin: false, rebuy: 0 },
    { id: 5, name: "-5", active: true, buyin: true, rebuy: 0 },
    { id: 6, name: "-566", active: true, buyin: false, rebuy: 0 },
    { id: 7, name: "567-", active: true, buyin: true, rebuy: 0 },
    { id: 8, name: "-567", active: true, buyin: false, rebuy: 0 },
    { id: 9, name: "675675-", active: true, buyin: false, rebuy: 0 },
  ]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const toggleModal = (e) => {
    if (e.data) openModal();
    else closeModal();
  };

  /*
  useEffect(() => {
    const totals = playerList.reduce(
      (acc, playa) => {
        if (playa.buyin) acc.buyins++;
        if (playa.rebuy > 0) acc.rebuys += playa.rebuy;
        if (playa.bonus) acc.bonuss++;
        return acc;
      },
      { buyins: 0, rebuys: 0, bonuss: 0 }
    );

    const { buyins, rebuys, bonuss } = totals;

    setTotalBuyIns(buyins);
    setTotalRebuys(rebuys);
    setTotalBonuss(bonuss);
  }, [playerList]);

*/

  /*



export const PRIZE_POOL = "Prize Pool";
export const START = "Start";
export const LEVEL = "Level:";
export const CURRENT_BLINDS = "Current Blinds";
export const NEXT_BLINDS = "Next Blinds";
export const TABLE = "Table";
export const TOTAL_PLAYERS = "Total Players";
export const PLAYERS_ACTIVE = "Players Active";
export const BUY_INS = "Buy-Ins";
export const BUY_IN = "buy in";
export const RE_BUYS = "Re-Buys";
export const RE_BUY = "Re-buy";
export const CHIPS = "Chips";
export const AVERAGE = "Avg";
export const FOR = "for";
export const FREEZE_OUT = "Freeze out";
export const POST_MERIDIEM = "PM";
export const ANTE_MERIDIEM = "AM";
export const SOLIDUS = "/";
export const EQUALS = "=";
export const CURRENCY = "$";
export const COLON = ":";

*/

  const saveData = (e) => {
    // setPlayerList(e);
    //closeModal();
  };

  let active = 0;

  playerList.map((player) => {
    if (player.active === true) {
      active++;
    }
  });

  return (
    <div className="w-48 flex flex-col h-full m-2 ">
      <div
        id="poker-board-stats-board"
        className="p-2 items-center justify-center mb-3"
      >
        <span className="poker-board-playing-stats">
          <div className="relative">
            <h2 className="text-xl border-b border-white">{TABLE}</h2>
            <p className="text-lg mt-1">
              {TOTAL_PLAYERS} {playerList.length}
            </p>
            <p className="text-lg mt-1">
              {PLAYERS_ACTIVE} {active}
            </p>
          </div>
        </span>
      </div>

      <ModalDialogue
        PlayerList={playerList}
        isModalOpen={isModalOpen}
        toggleModal={toggleModal}
        saveData={saveData}
      />
    </div>
  );
}
//<PlayerList PlayerList={playerList} />;

export function PlayerList({ PlayerList }) {
  return (
    <div className="relative">
      <h2 className="text-2xl border-b border-white">{}</h2>
      <ol>
        {PlayerList.map((player) => (
          <li
            key={player.id}
            className={"text-lg " + (player.name === "-" ? "hidden" : "")}
          >
            {player.buyin === false ? "" : "*"}
            {player.name}
            {player.rebuy > 0 ? "(" + player.rebuy + ")" : ""}
          </li>
        ))}
      </ol>
    </div>
  );
}

export function ModalDialogue({
  PlayerList,
  isModalOpen,
  toggleModal,
  saveData,
}) {
  const [playerList, setPlayerList] = useState(PlayerList);

  const [selectedId, setSelectedId] = useState("-");
  const [newName, setNewName] = useState(null);
  const [newActive, setNewActive] = useState(null);
  const [newBuyin, setNewBuyin] = useState(false);
  const [newRebuy, setNewRebuy] = useState(false);
  const [foundItem, setFoundItem] = useState(null);

  const onClose = () => {
    toggleModal(false);
  };

  const onCancel = () => {
    toggleModal(false);
  };

  const handleFind = (e) => {
    setSelectedId(Number(e));
    const result = playerList.find((item) => item.id === e);
    setFoundItem(result || null);
    setNewName(result.name);
    setNewActive(result.active);
    setNewBuyin(result.buyin);
    setNewRebuy(result.rebuy);
  };

  const updateName = (e) => {
    setNewName(e);
  };

  const updateActive = (e) => {
    setNewActive(e);
  };

  const updateBuyin = (e) => {
    setNewBuyin(e);
  };

  const updateRebuy = (e) => {
    setNewRebuy(Number(e));
  };

  const save = () => {
    let newPlayerList = updateById(selectedId, {
      name: newName,
      active: newActive,
      buyin: newBuyin,
      rebuy: newRebuy,
    });
    setPlayerList(newPlayerList);
    saveData(newPlayerList);
  };

  const updateById = (id, newData) => {
    const updatedArray = playerList.map((item) =>
      item.id === id ? { ...item, ...newData } : item
    );
    return updatedArray;
  };

  return (
    <div>
      <Dialog open={isModalOpen} onClose={onClose} className="relative z-10">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500/75 transition-opacity 
          data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
        />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all 
              data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out 
              data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-[60vw] data-closed:sm:translate-y-0 
              data-closed:sm:scale-95"
            >
              <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:size-10">
                    <ExclamationTriangleIcon
                      aria-hidden="true"
                      className="size-6 text-red-600"
                    />
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <DialogTitle
                      as="h3"
                      className="text-base font-semibold text-gray-900"
                    >
                      Player
                    </DialogTitle>
                    <div className="mt-2">
                      <div className="w-full">
                        <form className="pt-6 pb-8">
                          <div className="grid grid-cols-1 mb-3">
                            <select
                              value={selectedId}
                              onChange={(e) =>
                                handleFind(Number(e.target.value))
                              }
                              className="border p-2 rounded"
                            >
                              <option id="null" name="null">
                                Select
                              </option>
                              {playerList.map((p) => (
                                <option key={p.id} value={p.id}>
                                  {p.name}
                                </option>
                              ))}
                            </select>
                          </div>

                          {foundItem ? (
                            <div
                              className="grid grid-cols-[20vw_10vw_5vw_10vw] gap-3"
                              key={foundItem.id}
                            >
                              <div>
                                <label
                                  className="block text-gray-700 text-sm font-bold mb-2"
                                  htmlFor="name"
                                >
                                  Name
                                </label>
                                <input
                                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                  name="name"
                                  type="text"
                                  value={newName}
                                  placeholder="Name"
                                  onChange={(e) => updateName(e.target.value)}
                                />
                              </div>
                              <div className="ml-3">
                                <label
                                  className="block text-gray-700 text-sm font-bold mb-2"
                                  htmlFor="buyin"
                                >
                                  Buy In Paid
                                </label>
                                <input
                                  className="rounded mt-3 mx-auto ml-8"
                                  name="buyin"
                                  type="checkbox"
                                  value="true"
                                  checked={newBuyin}
                                  onChange={(e) =>
                                    updateBuyin(e.currentTarget.checked)
                                  }
                                />
                              </div>
                              <div>
                                <label
                                  className="block text-gray-700 text-sm font-bold mb-2"
                                  htmlFor="active"
                                >
                                  Active
                                </label>
                                <input
                                  className="shadow border rounded mt-3  ml-4"
                                  name="active"
                                  type="checkbox"
                                  value="true"
                                  checked={newActive}
                                  onChange={(e) =>
                                    updateActive(e.target.checked)
                                  }
                                />
                              </div>
                              <div>
                                <label
                                  className="block text-gray-700 text-sm font-bold mb-2"
                                  htmlFor="rebuy"
                                >
                                  Re-Buys
                                </label>
                                <input
                                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700
                                   leading-tight focus:outline-none focus:shadow-outline"
                                  name="rebuy"
                                  type="number"
                                  value={newRebuy}
                                  placeholder="0"
                                  onChange={(e) => updateRebuy(e.target.value)}
                                />
                              </div>
                            </div>
                          ) : (
                            <p style={{ marginTop: "1rem" }}>No match found</p>
                          )}
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  type="button"
                  onClick={() => save()}
                  className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold   shadow-xs hover:bg-red-500 sm:ml-3 sm:w-auto"
                >
                  Save
                </button>
                <button
                  type="button"
                  data-autofocus
                  onClick={() => onCancel(false)}
                  className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs inset-ring inset-ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                >
                  Cancel
                </button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  );
}

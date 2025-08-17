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

export default function BlindBoard(props) {
  const [currentLevel] = useState(props.currentLevel || 1);
  const [smallBlind, setSmallBlind] = useState(0);
  const [bigBlind, setBigBlind] = useState(0);
  const [nextSmallBlind, setNextSmallBlind] = useState(0);
  const [nextbigBlind, setNextBigBlind] = useState(0);

  const [blindList] = useState([
    { id: 1, level: 1, small: 25, big: 50 },
    { id: 2, level: 2, small: 50, big: 100 },
    { id: 3, level: 3, small: 75, big: 150 },
    { id: 4, level: 4, small: 100, big: 200 },
    { id: 5, level: 5, small: 200, big: 400 },
    { id: 6, level: 6, small: 300, big: 600 },
    { id: 7, level: 7, small: 500, big: 1000 },
    { id: 8, level: 8, small: 800, big: 1600 },
    { id: 9, level: 9, small: 1000, big: 2000 },
    { id: 10, level: 10, small: 1500, big: 3000 },
    { id: 11, level: 11, small: 2000, big: 4000 },
    { id: 12, level: 12, small: 3000, big: 6000 },
    { id: 13, level: 13, small: 5000, big: 10000 },
    { id: 14, level: 14, small: 7500, big: 15000 },
    { id: 15, level: 15, small: 10000, big: 20000 },
    { id: 16, level: 16, small: 15000, big: 30000 },
  ]);

  useEffect(() => {
    const levelNumber = Number(props.currentLevel || currentLevel);
    const result = blindList.find((item) => item.id === levelNumber);
    if (result) {
      setSmallBlind(result.small);
      setBigBlind(result.big);
    }

    const nextLevelNumber = levelNumber + 1;
    const nextresult = blindList.find((item) => item.id === nextLevelNumber);
    if (nextresult) {
      setNextSmallBlind(nextresult.small);
      setNextBigBlind(nextresult.big);
    }
  }, [props.currentLevel]);

  /* modal */
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const toggleModal = (e) => {
    if (e.data) openModal();
    else closeModal();
  };

  const saveData = (e) => {
    closeModal();
  };

  return (
    <div className="relative grid grid-cols-2 gap-3 ">
      <div
        className="absolute top-2 right-2 size-6 cursor-pointer z-10"
        onClick={(e) => openModal()}
      >
        <SettingsIcon />
      </div>
      <div id="poker-board-current-blind">
        <CurrentBlind
          level={currentLevel}
          smallBlind={smallBlind}
          bigBlind={bigBlind}
        />
      </div>
      <div id="poker-board-next-blind">
        <NextBlind
          level={currentLevel}
          smallBlind={nextSmallBlind}
          bigBlind={nextbigBlind}
        />
      </div>

      <ModalDialogue
        incrimentFactor={currentLevel}
        isModalOpen={isModalOpen}
        toggleModal={toggleModal}
        saveData={saveData}
      />
    </div>
  );
}

export function CurrentBlind({ smallBlind, bigBlind }) {
  return (
    <div id="poker-board-blind-details" className="poker-board-current-blinds">
      <p className="text-3xl">Current Blinds</p>
      <div className="poker-board-blinds-card text-9xl">
        {smallBlind} / {bigBlind}
      </div>
    </div>
  );
}

export function NextBlind({ smallBlind, bigBlind }) {
  return (
    <div
      id="poker-board-blind-details"
      className="poker-board-next-blinds relative"
    >
      <p className="text-3xl">Next Blinds</p>
      <div className="poker-board-blinds-card">
        <p className="text-9xl">
          {smallBlind} / {bigBlind}
        </p>
      </div>
    </div>
  );
}

export function ModalDialogue({
  incrimentFactor,
  isModalOpen,
  toggleModal,
  saveData,
}) {
  let incrimentInput = incrimentFactor;
  const [Incriment, setIncriment] = useState(incrimentInput);

  const onClose = () => {
    toggleModal(false);
  };
  const onCancel = () => {
    toggleModal(false);
  };

  const handleIncrimentChange = (fact) => {
    // console.log(fact);
    //   setIncriment(fact);
  };

  const save = () => {
    saveData(Incriment);
    toggleModal(false);
  };

  return (
    <div>
      <Dialog open={isModalOpen} onClose={onClose} className="relative z-10">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
        />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
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
                      Set Incriment Factor
                    </DialogTitle>
                    <div className="mt-2">
                      <div className="w-full max-w-xs">
                        <form className="px-8 pt-6 pb-8 mb-4">
                          <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="Incriment"
                          >
                            Incriment
                          </label>
                          <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="Incriment"
                            type="number"
                            value={Incriment}
                            placeholder="Incriment"
                            onChange={() => handleIncrimentChange}
                          />
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  type="button"
                  onClick={() => save(Incriment)}
                  className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-red-500 sm:ml-3 sm:w-auto"
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

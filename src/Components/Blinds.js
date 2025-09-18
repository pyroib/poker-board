"use client";
import { useState, useEffect } from "react";

import { CURRENT_BLINDS, NEXT_BLINDS, SOLIDUS } from "../Constants/Strings.js";

import { DEFAULT_BLIND_LIST } from "../Constants/Settings.js";

import SettingsIcon from "../Icons/SettingsIcon.js";

import BlindsModal from "../Modals/BlindsModal.js";

export default function Blinds(props) {
  const [smallBlind, setSmallBlind] = useState(0);
  const [bigBlind, setBigBlind] = useState(0);
  const [nextSmallBlind, setNextSmallBlind] = useState(0);
  const [nextBigBlind, setNextBigBlind] = useState(0);
  const [blindsList, setBlindsList] = useState(DEFAULT_BLIND_LIST);

  const [isBlindsModalOpen, setIsBlindsModalOpen] = useState(false);

  const handleBlindsListChange = (l) => {
    setBlindsList(l);
  };

  useEffect(() => {
    const levelNumber = Number(props.currentLevel || props.currentLevel);
    const result = blindsList.find((item) => item.id === levelNumber);
    if (result) {
      setSmallBlind(result.small);
      setBigBlind(result.big);
    }

    const nextLevelNumber = levelNumber + 1;
    const nextresult = blindsList.find((item) => item.id === nextLevelNumber);
    if (nextresult) {
      setNextSmallBlind(nextresult.small);
      setNextBigBlind(nextresult.big);
    }
  }, [props.currentLevel]);

  return (
    <>
      <div
        className="absolute top-2 right-2 size-6 cursor-pointer z-10"
        onClick={(e) => setIsBlindsModalOpen(true)}
      >
        <SettingsIcon />
      </div>

      <div className=" border-r border-white flex-1 items-center justify-center">
        <h2 className="text-lg border-b border-white mx-7">{CURRENT_BLINDS}</h2>

        <p className="text-5xl ">
          {smallBlind >= 1000 ? smallBlind / 1000 + "k" : smallBlind}
          {SOLIDUS}
          {bigBlind >= 1000 ? bigBlind / 1000 + "k" : bigBlind}
        </p>
      </div>
      <div className=" flex-1 items-center justify-center">
        <h2 className="text-lg border-b border-white mx-7">{NEXT_BLINDS}</h2>
        <p className="text-5xl ">
          {nextSmallBlind >= 1000
            ? nextSmallBlind / 1000 + "k"
            : nextSmallBlind}
          {SOLIDUS}
          {nextBigBlind >= 1000 ? nextBigBlind / 1000 + "k" : nextBigBlind}
        </p>
      </div>
      <BlindsModal
        isBlindsModalOpen={isBlindsModalOpen}
        BlindsList={blindsList}
        HandleBlindsListChange={handleBlindsListChange}
        closeBlindsModal={() => setIsBlindsModalOpen(false)}
      />
    </>
  );
}
/*
  const [currentLevel] = useState(props.currentLevel || 1);
  const [smallBlind, setSmallBlind] = useState(0);
  const [bigBlind, setBigBlind] = useState(0);
  const [nextSmallBlind, setNextSmallBlind] = useState(0);
  const [nextbigBlind, setNextBigBlind] = useState(0);

  const [blindList] = useState(constants.DEFAULT_BLIND_LIST);

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

  /* modal 
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
  );*/

/*
export function CurrentBlind({ smallBlind, bigBlind }) {
  return (
    <div id="poker-board-blind-details" className="poker-board-blinds-card">
      <p className="text-lg">Current Blinds</p>
      <p className="text-5xl">
        {smallBlind} / {bigBlind}
      </p>
    </div>
  );
}

export function NextBlind({ smallBlind, bigBlind }) {
  return (
    <div
      id="poker-board-next-blind-details"
      className="poker-board-blinds-card relative"
    >
      <p className="text-lg">Next Blinds</p>

      <p className="text-5xl">
        {smallBlind} / {bigBlind}
      </p>
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
*/

"use client";

import { useState, useEffect, useRef } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

import constants from "../constants.js";

import SettingsIcon from "./SettingsIcon.js";

export default function PrizeBoard(props) {
  const [bubbleOption, setBubbleOption] = useState(false);
  const [bubblePrize, setBubblePrize] = useState(0);

  const [firstPrizeShare, setFirstPrizeShare] = useState(
    constants.DEFAULT_FIRST_PRIZE_FACTOR
  );
  const [secondPrizeShare, setSecondPrizeShare] = useState(
    constants.DEFAULT_SECOND_PRIZE_FACTOR
  );
  const [thirdPrizeShare, setThirdPrizeShare] = useState(
    constants.DEFAULT_THIRD_PRIZE_FACTOR
  );

  const [totalPrizes, setTotalPrizes] = useState(0);

  /* modal */
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const toggleModal = (e) => {
    if (e.data) openModal();
    else closeModal();
  };

  const saveData = ({ first, second, third, bubble, bubblePrize }) => {
    setFirstPrizeShare(first);
    setSecondPrizeShare(second);
    setThirdPrizeShare(third);
    setBubbleOption(bubble);
    setBubblePrize(bubblePrize);

    let poolMinusBubble =
      bubble === "true" ? props.CashPool - bubblePrize : props.CashPool;

    let newtotal =
      poolMinusBubble * first +
      poolMinusBubble * second +
      poolMinusBubble * third;

    setTotalPrizes(newtotal);

    closeModal();
  };

  return (
    <>
      <div className=" rounded-3xl p-5 mb-10 poker-board-current-prize-pool">
        <p className="text-5xl pb-2 mb-2 border-b ">Prize Pool</p>
        <h2 className="text-6xl">${props.CashPool}</h2>
      </div>

      <div id="poker-board-prizeboard" className=" rounded-3xl p-5 ">
        <div>
          <div className="relative">
            <div
              className="absolute top-2 right-2 size-6 cursor-pointer z-10"
              onClick={(e) => openModal()}
            >
              <SettingsIcon />
            </div>
            <div className="poker-board-winning p-7">
              <FirstPrize
                FirstPrize={(props.CashPool - bubblePrize) * firstPrizeShare}
              />
              <SecondPrize
                SecondPrize={(props.CashPool - bubblePrize) * secondPrizeShare}
              />
              <ThirdPrize
                ThirdPrize={(props.CashPool - bubblePrize) * thirdPrizeShare}
                bubbleOption={bubbleOption}
              />
              {bubbleOption === true && (
                <BubblePrize BubblePrize={bubblePrize} />
              )}
            </div>
          </div>
        </div>

        <ModalDialogue
          CashPool={props.CashPool}
          First={firstPrizeShare}
          Second={secondPrizeShare}
          Third={thirdPrizeShare}
          Bubble={bubbleOption}
          BubblePrize={bubblePrize}
          isModalOpen={isModalOpen}
          toggleModal={toggleModal}
          saveData={saveData}
        />
      </div>
    </>
  );
}

export function FirstPrize(props) {
  return (
    <div className="PrizeCard mb-5">
      <PrizeCard title="First" colour="gold" prize={props.FirstPrize} />
    </div>
  );
}

export function SecondPrize(props) {
  return (
    <div className="PrizeCard mb-5">
      <PrizeCard title="Second" colour="silver" prize={props.SecondPrize} />
    </div>
  );
}

export function ThirdPrize(props) {
  return (
    <div
      className={props.bubbleOption === true ? "mb-5 PrizeCard" : "PrizeCard"}
    >
      <PrizeCard title="Third" colour="#CD7F32" prize={props.ThirdPrize} />
    </div>
  );
}

export function BubblePrize(props) {
  return (
    <div className=" PrizeCard">
      <PrizeCard title="Bubble" colour="white" prize={props.BubblePrize} />
    </div>
  );
}

export function PrizeCard(props) {
  return (
    <div>
      <span className="text-3xl flex">
        <Trophy colour={props.colour} />${props.prize}
      </span>
    </div>
  );
}

export function Trophy(props) {
  return (
    <svg
      className="mr-2 "
      width="40"
      height="40"
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22 22V34"
        stroke={props.colour}
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M22 34C18.6527 34 15.7394 36.0241 14.2353 39.0099C13.5169 40.436 14.5478 42 15.9175 42H28.0825C29.4522 42 30.4831 40.436 29.7647 39.0099C28.2606 36.0241 25.3473 34 22 34Z"
        stroke={props.colour}
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M8 8H5.96942C3.99637 8 3.00985 8 2.40034 8.74106C1.79082 9.48212 1.96956 10.3119 2.32705 11.9716C3.00988 15.1417 4.49096 17.9268 6.4978 20"
        stroke={props.colour}
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M36 8H38.0306C40.0036 8 40.9901 8 41.5997 8.74106C42.2092 9.48212 42.0304 10.3119 41.673 11.9716C40.9901 15.1417 39.509 17.9268 37.5022 20"
        stroke={props.colour}
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M22 22C29.732 22 36 15.7662 36 8.07642C36 7.87478 35.9957 7.67414 35.9872 7.47458C35.9017 5.47612 35.859 4.47689 34.5046 3.23845C33.1502 2 31.6495 2 28.6481 2H15.3519C12.3505 2 10.8498 2 9.49543 3.23844C8.14103 4.47689 8.0983 5.47612 8.01284 7.47458C8.00431 7.67414 8 7.87478 8 8.07642C8 15.7662 14.268 22 22 22Z"
        stroke={props.colour}
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ModalDialogue({
  CashPool,
  First,
  Second,
  Third,
  Bubble,
  BubblePrize,
  isModalOpen,
  toggleModal,
  saveData,
}) {
  const [first, setFirst] = useState(First);
  const [second, setSecond] = useState(Second);
  const [third, setThird] = useState(Third);
  const [bubble, setBubble] = useState(Bubble);
  const [bubblePrize, setBubblePrize] = useState(BubblePrize);
  const [oneTwoThree, setOneTwoThree] = useState(0);

  const onClose = () => {
    toggleModal(false);
  };
  const onCancel = () => {
    toggleModal(false);
  };

  const handleFirstChange = (perc) => {
    setFirst(perc);
  };

  const handleSecondChange = (perc) => {
    setSecond(perc);
  };

  const handlethirdChange = (perc) => {
    setThird(perc);
  };

  const handleBubbleChange = (event) => {
    let bbl = event.target.checked;
    setBubble(bbl);
  };

  const handleBubbleAmtChange = (amt) => {
    setBubblePrize(amt);
    if (amt > 0) {
      setBubble(true);
    } else {
      setBubble(false);
    }
  };

  // Countdown logic
  useEffect(() => {
    let ott = Number(first) + Number(second) + Number(third);
    setOneTwoThree(ott);
  }, [first, second, third, bubble]);

  const save = () => {
    saveData({ first, second, third, bubble, bubblePrize });
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
                      Set Prize Share
                    </DialogTitle>

                    <div className="mt-2">
                      <div className="w-full max-w-xs">
                        {oneTwoThree > 1 && (
                          <div className="PrizeCard mb-5">
                            <h1 className="text-3xl text-red-500">Alert</h1>
                            <span className="text-xl flex">
                              The share total is greater than the cash total
                            </span>
                          </div>
                        )}

                        <form className="px-8 pt-6 pb-8 mb-4">
                          <label
                            className="block text-gray-700 text-sm font-bold mb-2 mt-5"
                            htmlFor="first"
                          >
                            First
                          </label>
                          <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="first"
                            name="first"
                            type="text"
                            value={first}
                            placeholder="0.5"
                            onChange={(e) => handleFirstChange(e.target.value)}
                          />
                          <label
                            className="block text-gray-700 text-sm font-bold mb-2 mt-5"
                            htmlFor="second"
                          >
                            Second
                          </label>
                          <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="second"
                            name="second"
                            type="text"
                            value={second}
                            placeholder="0.3"
                            onChange={(e) => handleSecondChange(e.target.value)}
                          />
                          <label
                            className="block text-gray-700 text-sm font-bold mb-2 mt-5"
                            htmlFor="third"
                          >
                            Third
                          </label>
                          <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="third"
                            name="third"
                            type="text"
                            value={third}
                            placeholder="0.2"
                            onChange={(e) => handlethirdChange(e.target.value)}
                          />
                          <label
                            className="block text-gray-700 text-sm font-bold mb-2 mt-5"
                            htmlFor="bubble"
                          >
                            Bubble
                          </label>
                          <input
                            className="shadow border rounded py-2 px-3 text-gray-700"
                            id="bubble"
                            name="bubble"
                            type="checkbox"
                            checked={bubble}
                            onChange={handleBubbleChange}
                          />
                          <label
                            className="block text-gray-700 text-sm font-bold mb-2 mt-5"
                            htmlFor="bubbleAmt"
                          >
                            Bubble Amount (${bubblePrize})
                          </label>
                          <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="bubbleAmt"
                            name="bubbleAmt"
                            type="text"
                            value={bubblePrize}
                            placeholder="50"
                            onChange={(e) =>
                              handleBubbleAmtChange(e.target.value)
                            }
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
                  onClick={() => save()}
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

import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";

import {
  MODAL_PRIZE_TITLE,
  MODAL_FIRST_PRIZE,
  MODAL_SECOND_PRIZE,
  MODAL_THIRD_PRIZE,
  MODAL_PAY_BUBBLE,
  MODAL_BUBBLE_AMT,
  YES,
  NO,
} from "../Constants/Strings.js";

export default function PrizeModal({
  isPrizeModalOpen,
  firstPrizeShare,
  secondPrizeShare,
  thirdPrizeShare,
  bubbleOption,
  bubblePrize,
  SavePrize,
  setIsPrizeModalOpen,
}) {
  const [FirstPrizeShare, setFirstPrizeShare] = useState(firstPrizeShare);
  const [SecondPrizeShare, setSecondPrizeShare] = useState(secondPrizeShare);
  const [ThirdPrizeShare, setThirdPrizeShare] = useState(thirdPrizeShare);
  const [BubbleOption, setBubbleOption] = useState(bubbleOption);
  const [BubblePrize, setBubblePrize] = useState(bubblePrize);

  const onClose = () => {
    setIsPrizeModalOpen(false);
  };

  const onCancel = () => {
    setIsPrizeModalOpen(false);
  };

  const savePrize = () => {
    SavePrize(
      FirstPrizeShare,
      SecondPrizeShare,
      ThirdPrizeShare,
      BubbleOption,
      BubblePrize
    );
    onClose();
  };

  return (
    <div>
      <Dialog
        open={isPrizeModalOpen}
        onClose={onClose}
        className="relative z-10"
      >
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
        />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-black bg-opacity-50 text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
            >
              <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4 w-full">
                <div className="items-start w-full">
                  <div className="text-center sm:text-left">
                    <DialogTitle
                      as="h3"
                      className="text-base font-semibold text-white"
                    >
                      {MODAL_PRIZE_TITLE}
                    </DialogTitle>
                    <div className="mt-2">
                      <div className="w-full max-w-xs">
                        <form className="px-8 pt-6 pb-8 mb-4">
                          <label
                            className="block text-white text-sm font-bold"
                            htmlFor="firstPrizeShare"
                          >
                            {MODAL_FIRST_PRIZE}
                          </label>
                          <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-white bg-black bg-opacity-50 leading-tight focus:outline-none focus:shadow-outline"
                            id="firstPrizeShare"
                            name="firstPrizeShare"
                            type="text"
                            value={FirstPrizeShare}
                            onChange={(e) => setFirstPrizeShare(e.target.value)}
                          />
                          <label
                            className="block text-white text-sm font-bold mt-5"
                            htmlFor="secondPrizeShare"
                          >
                            {MODAL_SECOND_PRIZE}
                          </label>
                          <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-white bg-black bg-opacity-50  leading-tight focus:outline-none focus:shadow-outline"
                            id="secondPrizeShare"
                            name="secondPrizeShare"
                            type="text"
                            value={SecondPrizeShare}
                            placeholder="0"
                            onChange={(e) =>
                              setSecondPrizeShare(e.target.value)
                            }
                          />
                          <label
                            className="block text-white text-sm font-bold mt-5"
                            htmlFor="thirdPrizeShare"
                          >
                            {MODAL_THIRD_PRIZE}
                          </label>
                          <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-white bg-black bg-opacity-50  leading-tight focus:outline-none focus:shadow-outline"
                            id="thirdPrizeShare"
                            name="thirdPrizeShare"
                            type="text"
                            value={ThirdPrizeShare}
                            placeholder="0"
                            onChange={(e) => setThirdPrizeShare(e.target.value)}
                          />
                          <label
                            className="block text-white text-sm font-bold mt-5"
                            htmlFor="BubbleOption"
                          >
                            {MODAL_PAY_BUBBLE}
                          </label>
                          {YES}
                          <input
                            className="shadow border rounded p-2 mx-2 bg-black bg-opacity-50"
                            name="BubbleOption"
                            type="radio"
                            value="true"
                            defaultChecked={BubbleOption === true}
                            onChange={(e) => setBubbleOption(true)}
                          />
                          {NO}

                          <input
                            className="shadow border rounded p-2 mx-2 bg-black bg-opacity-50"
                            name="BubbleOption"
                            type="radio"
                            value="false"
                            defaultChecked={BubbleOption === false}
                            onChange={(e) => setBubbleOption(false)}
                          />

                          <label
                            className="block text-white text-sm font-bold mt-5"
                            htmlFor="BubblePrize"
                          >
                            {MODAL_BUBBLE_AMT}
                          </label>
                          <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-white bg-black bg-opacity-50  leading-tight focus:outline-none focus:shadow-outline"
                            id="BubblePrize"
                            name="BubblePrize"
                            type="text"
                            value={BubblePrize}
                            placeholder="0"
                            onChange={(e) => setBubblePrize(e.target.value)}
                          />
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  type="button"
                  onClick={(e) => savePrize()}
                  className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold   shadow-xs hover:bg-red-500 sm:ml-3 sm:w-auto"
                >
                  Save
                </button>
                <button
                  type="button"
                  data-autofocus
                  onClick={() => onCancel()}
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

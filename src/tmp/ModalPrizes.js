import { useState, useEffect } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

export function ModalPrizes(props) {
  const [isPrizeModalOpen, setIsPrizeModalOpen] = useState(
    props.isPrizeModalOpen
  );
  const [first, setFirst] = useState(props.FirstPrize);
  const [second, setSecond] = useState(props.SecondPrize);
  const [third, setThird] = useState(props.ThirdPrize);
  const [bubbleOption, setBubbleOption] = useState(props.BubbleOption);
  const [bubblePrize, setBubblePrize] = useState(props.BubblePrize);

  const [oneTwoThree, setOneTwoThree] = useState(0);

  const closePrizeModalOpen = () => {
    resetToProps();
    props.closePrizeModal();
  };

  const cancelPrizeModalOpen = () => {
    resetToProps();
    props.closePrizeModal();
  };

  const resetToProps = () => {
    setFirst(props.FirstPrize);
    setSecond(props.SecondPrize);
    setThird(props.ThirdPrize);
    setBubbleOption(props.BubbleOption);
    setBubblePrize(props.BubblePrize);
  };

  // Countdown logic
  useEffect(() => {
    let ott = Number(first) + Number(second) + Number(third);
    setOneTwoThree(ott);
  }, [first, second, third, bubblePrize]);

  const save = () => {
    // saveData({ first, second, third, bubble, bubblePrize });
  };
  /*
            <ModalPrizes
              isPrizeModalOpen={isPrizeModalOpen}
              FirstPrize={firstPrizeShare}
              SecondPrize={secondPrizeShare}
              ThirdPrize={thirdPrizeShare}
              BubbleOption={bubbleOption}
              BubblePrize={bubblePrize}
              closePrizeModal={closePrizeModal}
            />

            */
  return (
    <div>
      <Dialog
        open={isPrizeModalOpen}
        onClose={closePrizeModalOpen}
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
                            onChange={(e) => setFirst(e.target.value)}
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
                            onChange={(e) => setSecond(e.target.value)}
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
                            onChange={(e) => setThird(e.target.value)}
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
                            checked={bubbleOption}
                            onChange={(e) => setBubbleOption(e.target.value)}
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
                            onChange={(e) => setBubblePrize(e.target.value)}
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
                  className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold   shadow-xs hover:bg-red-500 sm:ml-3 sm:w-auto"
                >
                  Save
                </button>
                <button
                  type="button"
                  data-autofocus
                  onClick={() => cancelPrizeModalOpen()}
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

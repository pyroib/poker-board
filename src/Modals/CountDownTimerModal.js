import { useState } from "react";

import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";

import {
  MODAL_COUNTDOWN_TIMER_TITLE,
  MODAL_COUNTDOWN_TIMER_SECONDS,
} from "../Constants/Strings.js";

export default function CountDownTimerModal({
  IsCountDownModalOpen,
  InputSeconds,
  closeCountDownModal,
  saveCountDown,
}) {
  const [inputSeconds, setInputSeconds] = useState(InputSeconds);

  const onClose = () => {
    closeCountDownModal();
  };

  const onCancel = () => {
    closeCountDownModal();
  };

  const save = () => {
    saveCountDown(inputSeconds);
    onClose();
  };

  return (
    <div>
      <Dialog
        open={IsCountDownModalOpen}
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
                      {MODAL_COUNTDOWN_TIMER_TITLE}
                    </DialogTitle>
                    <div className="mt-2">
                      <div className="w-full max-w-xs">
                        <form className="px-8 pt-6 pb-8 mb-4">
                          <label
                            className="block text-white text-sm font-bold"
                            htmlFor="BuyInCost"
                          >
                            {MODAL_COUNTDOWN_TIMER_SECONDS}
                          </label>
                          <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-white bg-black bg-opacity-50 leading-tight focus:outline-none focus:shadow-outline"
                            id="countDownSeconds"
                            name="countDownSeconds"
                            type="number"
                            value={inputSeconds}
                            placeholder="0"
                            onChange={(e) => setInputSeconds(e.target.value)}
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
                  onClick={(e) => save()}
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

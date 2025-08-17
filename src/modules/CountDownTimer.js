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

import Modal from "react-modal";
Modal.setAppElement("#root"); // Important for accessibility

export default function CountDownTimer({ callNextLevel }) {
  /* settings */
  const saveData = (timer) => {
    setInputSeconds(timer);
    setTimeLeft(timer);
    closeModal();
    setRunning(true);
  };

  /* level adder */
  const triggerNextLevel = () => {
    callNextLevel();
  };

  /* Modal */
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const toggleModal = (e) => {
    if (e.data) openModal();
    else closeModal();
  };

  /* timer */
  const [inputSeconds, setInputSeconds] = useState(
    constants.DEFAULT_COUNTDOWN_SECONDS
  );
  const [timeLeft, setTimeLeft] = useState(constants.DEFAULT_COUNTDOWN_SECONDS);
  const [running, setRunning] = useState(false);
  const timerRef = useRef(null);

  // Play a simple beep
  const beep = (frequency = 440, duration = 0.3) => {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();
    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);
    oscillator.type = "square";
    oscillator.frequency.setValueAtTime(frequency, ctx.currentTime);
    oscillator.start();
    gainNode.gain.exponentialRampToValueAtTime(
      0.0001,
      ctx.currentTime + duration
    );
    oscillator.stop(ctx.currentTime + duration);
  };

  // Handle alerts
  useEffect(() => {
    if (!running) return;

    if (timeLeft === 30) {
      beep(550, 0.75);
      console.log("30 seconds remaining!");
    }
    if ([5, 4, 3, 2, 1].includes(timeLeft)) {
      beep(660, 0.4); //
      console.log(`${timeLeft} seconds remaining!`);
    }
    if (timeLeft === 0) {
      beep(550, 0.75);
      setTimeLeft(inputSeconds); // Reset
      triggerNextLevel();
    }
  }, [timeLeft, running, inputSeconds]);

  // Countdown logic
  useEffect(() => {
    if (running) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => (prev > 0 ? prev - 1 : inputSeconds)); // Loop indefinitely
      }, 1000);
    } else {
      clearInterval(timerRef.current);
    }
    return () => clearInterval(timerRef.current);
  }, [running, inputSeconds]);

  const startTimer = () => {
    setTimeLeft(inputSeconds);
    setRunning(true);
  };
  const toggleTimer = () => {
    setRunning(!running);
  };

  return (
    <div>
      <div className="relative">
        <div
          className="absolute top-2 right-2 size-6 cursor-pointer z-10"
          onClick={(e) => openModal()}
        >
          <SettingsIcon />
        </div>
        <span
          className="poker-board-countdown-timer text-50xl font-bold"
          onClick={toggleTimer}
        >
          {formatSecondsToMinutesSeconds(timeLeft)}
        </span>
        {!running && timeLeft === inputSeconds && (
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={startTimer}
          >
            Start
          </button>
        )}
      </div>

      <ModalDialogue
        timerInput={constants.DEFAULT_COUNTDOWN_SECONDS}
        isModalOpen={isModalOpen}
        toggleModal={toggleModal}
        saveData={saveData}
      />
    </div>
  );
}

export function ModalDialogue({
  timerInput,
  isModalOpen,
  toggleModal,
  saveData,
}) {
  const [timer, setTimer] = useState(timerInput);

  const onClose = () => {
    toggleModal(false);
  };
  const onCancel = () => {
    toggleModal(false);
  };

  const handleTimerChange = (min) => {
    setTimer(min * 60);
  };

  const save = () => {
    saveData(timer);
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
                      Set Blind Timer
                    </DialogTitle>
                    <div className="mt-2">
                      <div className="w-full max-w-xs">
                        <form className="px-8 pt-6 pb-8 mb-4">
                          <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="username"
                          >
                            Minutes
                          </label>
                          <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="timer"
                            type="number"
                            value={timer / 60}
                            placeholder="Minutes"
                            onChange={(e) => handleTimerChange(e.target.value)}
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
                  onClick={() => save(timer.value)}
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

const formatSecondsToMinutesSeconds = (totalSeconds) => {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  // Pad with leading zero if less than 10 for consistent formatting
  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(seconds).padStart(2, "0");

  return `${formattedMinutes}:${formattedSeconds}`;
};

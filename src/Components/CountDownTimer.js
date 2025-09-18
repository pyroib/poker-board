"use client";

import { useState, useEffect, useRef } from "react";

import { DEFAULT_COUNTDOWN_SECONDS } from "../Constants/Settings.js";

import SettingsIcon from "../Icons/SettingsIcon.js";
import { Beep } from "../Audio/Beep.js";

import CountDownTimerModal from "../Modals/CountDownTimerModal.js";

export default function CountDownTimer(props) {
  const [isCountDownModalOpen, setIsCountDownModalOpen] = useState(false);
  const [inputSeconds, setInputSeconds] = useState(DEFAULT_COUNTDOWN_SECONDS);
  const [timeLeft, setTimeLeft] = useState(DEFAULT_COUNTDOWN_SECONDS);
  const [running, setRunning] = useState(false);

  const timerRef = useRef(null);

  const callNextLevel = () => {
    let t = props.currentLevel + 1;
    props.setCurrentLevel(t);
  };

  const toggleTimer = () => {
    setTimeLeft(timeLeft);
    setRunning(!running);
  };

  const saveCountDown = (time) => {
    console.log(time);
    setInputSeconds(time);
    setTimeLeft(time);
    setRunning(false);
  };
  // Handle alerts
  useEffect(() => {
    if (!running) return;

    if (timeLeft === 30) {
      Beep(550, 0.75);
      console.log("30 seconds remaining!");
    }
    if ([5, 4, 3, 2, 1].includes(timeLeft)) {
      Beep(660, 0.4); //
      console.log(`${timeLeft} seconds remaining!`);
    }
    if (timeLeft === 0) {
      Beep(550, 0.75);
      setTimeLeft(inputSeconds); // Reset
      callNextLevel();
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

  return (
    <div className="flex-1 flex items-center justify-center ">
      <div
        className="absolute top-2 right-2 size-6 cursor-pointer z-10"
        onClick={(e) => setIsCountDownModalOpen(true)}
      >
        <SettingsIcon />
      </div>
      <div
        className="sm:text-[15vw] lg:text-[20vw] cursor-pointer"
        onClick={toggleTimer}
      >
        {formatSecondsToMinutesSeconds(timeLeft)}
      </div>

      <CountDownTimerModal
        IsCountDownModalOpen={isCountDownModalOpen}
        InputSeconds={inputSeconds}
        closeCountDownModal={() => setIsCountDownModalOpen(false)}
        saveCountDown={saveCountDown}
      />
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

"use client";

import Levels from "../Components/Levels.js";
import Blinds from "../Components/Blinds.js";
import CountDownTimer from "../Components/CountDownTimer.js";

export default function Center(props) {
  return (
    <>
      <CountDownTimer
        currentLevel={props.currentLevel}
        setCurrentLevel={props.setCurrentLevel}
      />

      <div className="sm:h-[10vh] lg:h-[7vh] flex items-center justify-center ">
        <Levels
          CurrentLevel={props.currentLevel}
          SetCurrentLevel={props.setCurrentLevel}
        />
      </div>

      <div className="sm:h-[16vh] lg:h-[15vh] flex items-center justify-center w-100 relative grid grid-cols-2">
        <Blinds currentLevel={props.currentLevel} />
      </div>
    </>
  );
}

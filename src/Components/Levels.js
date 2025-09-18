import { COLON, LEVEL } from "../Constants/Strings.js";

import NumberChange from "../Icons/NumberChange.js";

export default function Levels({ CurrentLevel, SetCurrentLevel }) {
  const callNextLevel = () => {
    let t = CurrentLevel + 1;
    SetCurrentLevel(t);
  };
  const callLastLevel = () => {
    let t = CurrentLevel - 1;
    SetCurrentLevel(t > 0 ? t : 1);
  };

  return (
    <div className="text-2xl flex">
      <div
        className=" cursor-pointer size-6 relative top-3"
        onClick={() => callLastLevel()}
        style={{ transform: "scale(1,1) scale(-1,-1)" }}
      >
        <NumberChange />
      </div>
      <div>
        {LEVEL}
        {COLON}
        {CurrentLevel}
      </div>
      <div
        className="cursor-pointer size-6 relative bottom-1"
        onClick={() => callNextLevel()}
      >
        <NumberChange />
      </div>
    </div>
  );
}

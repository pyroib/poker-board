import { WELCOME_TO, MANCAVE_SOCIAL } from "../Constants/Strings.js";

export default function Header() {
  return (
    <header className="sm:h-[10vh] lg:h-[5vh] flex items-center justify-center">
      <h2>
        {WELCOME_TO}
        <span className="rounded-xl border-white outline-solid border-4 p-1 ml-2 uppercase font-black tracking-tight leading-[1.6em]">
          {MANCAVE_SOCIAL}
        </span>
      </h2>
    </header>
  );
}

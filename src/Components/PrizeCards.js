import { CURRENCY } from "../Constants/Strings.js";

import TrophyIcon from "../Icons/TrophyIcon.js";

export function PrizeCards() {
  return <></>;
}

export function FirstPrize(props) {
  return (
    <div className="PrizeCard mb-2">
      <PrizeCard title="First" colour="gold" prize={props.FirstPrize} />
    </div>
  );
}

export function SecondPrize(props) {
  return (
    <div className="PrizeCard mb-2">
      <PrizeCard title="Second" colour="silver" prize={props.SecondPrize} />
    </div>
  );
}

export function ThirdPrize(props) {
  return (
    <div
      className={props.bubbleOption === true ? "mb-2 PrizeCard" : "PrizeCard"}
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
  let prize = props.prize < 0 ? 0 : props.prize;

  prize = Number(prize).toLocaleString(navigator.language, {
    minimumFractionDigits: 0,
  });

  return (
    <div>
      <span className="lg:text-4xl sm:text-lg sm:mt-2 lg:mt-5 flex">
        <TrophyIcon colour={props.colour} />
        {CURRENCY}
        {prize || 0}
      </span>
    </div>
  );
}

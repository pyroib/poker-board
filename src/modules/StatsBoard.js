export function StatsBoard(props) {
  return (
    <div id="poker-board-stats-details" className="rounded-3xl p-5 mt-10">
      <div className="relative">
        <p className="text-5xl pb-2 mb-2 border-b ">Stats</p>

        <BuyInDetails
          buyInCount={props.buyInCount || 0}
          buyInCash={props.buyInCashPool || 0}
        />

        <ReBuyDetails
          reBuyCount={props.reBuyCount || 0}
          reBuyCash={props.reBuyCashPool || 0}
        />

        {props.bonusCount > 0 && (
          <BonusDetails
            bonusCount={props.bonusCount || 0}
            bonusCash={props.bonusCashPool || 0}
          />
        )}

        <ChipsDetails
          chipPool={props.chipPool || 0}
          chipAvg={props.chipAvg || 0}
        />
      </div>
    </div>
  );
}

export function BuyInDetails(props) {
  return (
    <div className="mt-4">
      <h6 className="text-3xl">Buy-Ins</h6>
      <p className="text-xl">Total: {props.buyInCount || 0}</p>
      <p className="text-xl">Amount: ${props.buyInCash || 0}</p>
    </div>
  );
}
export function ReBuyDetails(props) {
  return (
    <div className="mt-4">
      <h6 className="text-3xl">Re-Buys</h6>
      <p className="text-xl">Total: {props.reBuyCount || 0}</p>
      <p className="text-xl">Re-Buy: ${props.reBuyCash || 0}</p>
    </div>
  );
}

export function BonusDetails(props) {
  return (
    <div className="mt-4">
      <h6 className="text-3xl">Bonus's</h6>
      <p className="text-xl">Total: {props.bonusCount || 0}</p>
      <p className="text-xl">Average: {props.bonusCash || 0}</p>
    </div>
  );
}

export function ChipsDetails(props) {
  return (
    <div className="mt-4">
      <h6 className="text-3xl">Chips</h6>
      <p className="text-xl">Total: {props.chipPool || 0}</p>
      <p className="text-xl">Average: {props.chipAvg || 0}</p>
      <br />
    </div>
  );
}

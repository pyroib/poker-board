export const DEFAULT_BUY_IN_COUNT = "0";

export const DEFAULT_BUYIN_COST = "100";
export const DEFAULT_BUYIN_CASH = "0";
export const DEFAULT_BUYIN_CHIPS = "18000";

export const DEFAULT_REBUY_COST = "100";
export const DEFAULT_REBUY_CASH = "0";
export const DEFAULT_REBUY_CHIPS = "18000";

export const DEFAULT_BONUS_COST = "200";
export const DEFAULT_BONUS_CASH = "0";
export const DEFAULT_BONUS_CHIPS = "40000";

export const DEFAULT_CURRENT_CASH_POOL = "0";
export const DEFAULT_CURRENT_CHIP_POOL = "0";

export const DEFAULT_BUBBLE_BOOL = "false";
export const DEFAULT_BUBBLE_SHARE = "50";

export const DEFAULT_FIRST_PRIZE_FACTOR = "0.5";
export const DEFAULT_SECOND_PRIZE_FACTOR = "0.3";
export const DEFAULT_THIRD_PRIZE_FACTOR = "0.2";

//export const DEFAULT_COUNTDOWN_SECONDS = "1200";
export const DEFAULT_COUNTDOWN_SECONDS = "60";

export const DEFAULT_BLIND_LIST = [
  { id: 1, level: 1, small: 25, big: 50 }, // 25
  { id: 2, level: 2, small: 50, big: 100 }, // 25
  { id: 3, level: 3, small: 75, big: 150 }, // 25
  { id: 4, level: 4, small: 100, big: 200 }, // 25 - 4
  { id: 5, level: 5, small: 150, big: 300 }, // 50
  { id: 6, level: 6, small: 200, big: 400 }, // 50
  { id: 7, level: 7, small: 250, big: 500 }, // 50
  { id: 8, level: 8, small: 300, big: 600 }, // 50 -5
  { id: 9, level: 9, small: 400, big: 800 }, // 100

  { id: 10, level: 10, small: 500, big: 1000 }, // 100
  { id: 11, level: 11, small: 600, big: 1200 }, // 100
  { id: 12, level: 12, small: 700, big: 1400 }, // 100
  { id: 13, level: 13, small: 800, big: 1600 }, // 100
  { id: 14, level: 14, small: 900, big: 1800 }, // 100 - 6
  { id: 15, level: 15, small: 1000, big: 2000 }, // 200
  { id: 16, level: 16, small: 1200, big: 2400 }, // 200
  { id: 17, level: 17, small: 1400, big: 2800 }, // 200
  { id: 18, level: 18, small: 1600, big: 3200 }, // 200
  { id: 19, level: 19, small: 1800, big: 3600 }, // 200

  { id: 20, level: 20, small: 2000, big: 4000 }, // 200
  { id: 21, level: 21, small: 2500, big: 5000 }, // 200 - 7
  { id: 22, level: 22, small: 3000, big: 6000 }, // 500
  { id: 23, level: 23, small: 3500, big: 7000 }, // 500
  { id: 24, level: 24, small: 4000, big: 8000 }, // 500
  { id: 25, level: 25, small: 4500, big: 9000 }, // 500
  { id: 26, level: 26, small: 5000, big: 10000 }, // 500
  { id: 27, level: 27, small: 5500, big: 11000 }, // 500
  { id: 28, level: 28, small: 6000, big: 12000 }, // 500
  { id: 29, level: 29, small: 6500, big: 13000 }, // 500 - 8

  { id: 30, level: 30, small: 7000, big: 14000 }, // 1000
  { id: 31, level: 31, small: 8000, big: 16000 }, // 1000
  { id: 32, level: 32, small: 9000, big: 18000 }, // 1000
  { id: 33, level: 33, small: 10000, big: 20000 }, // 1000
  { id: 34, level: 34, small: 11000, big: 22000 }, // 1000
  { id: 35, level: 35, small: 12000, big: 24000 }, // 1000
  { id: 36, level: 36, small: 13000, big: 26000 }, // 1000
  { id: 37, level: 37, small: 14000, big: 28000 }, // 1000
  { id: 38, level: 38, small: 15000, big: 30000 }, // 1000 - 9
  { id: 39, level: 39, small: 16000, big: 32000 }, // 2000

  { id: 40, level: 40, small: 18000, big: 36000 }, // 2000
  { id: 41, level: 41, small: 20000, big: 40000 }, // 2000
  { id: 42, level: 42, small: 22000, big: 44000 }, // 2000
  { id: 43, level: 43, small: 24000, big: 48000 }, // 2000
  { id: 44, level: 44, small: 26000, big: 52000 }, // 2000
  { id: 45, level: 45, small: 28000, big: 56000 }, // 2000
  { id: 46, level: 46, small: 30000, big: 58000 }, // 2000 - 8

  { id: 47, level: 47, small: 35000, big: 70000 },
  { id: 48, level: 48, small: 40000, big: 80000 },
  { id: 49, level: 49, small: 45000, big: 90000 },
  { id: 50, level: 50, small: 50000, big: 100000 },
];

export const DEFAULT_FREEZE_OUT = "21:00:00";

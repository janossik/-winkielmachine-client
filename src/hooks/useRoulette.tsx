import * as React from 'react';

interface Bet {
  order: number;
  id: string;
  primary: number;
  secondary: number;
  lock: boolean;
  visible: boolean;
}

const bets: Bet[] = [
  { order: 1, id: '6', primary: 1, secondary: 1, lock: true, visible: true },
  { order: 2, id: '9', primary: 1, secondary: 1, lock: true, visible: true },
  { order: 3, id: '12', primary: 1, secondary: 1, lock: true, visible: true },
  { order: 4, id: '15', primary: 1, secondary: 1, lock: true, visible: true },
  { order: 5, id: '18', primary: 1, secondary: 1, lock: true, visible: true },
  { order: 6, id: '21', primary: 1, secondary: 1, lock: true, visible: false },
  { order: 7, id: '24', primary: 1, secondary: 1, lock: true, visible: true },
  { order: 8, id: '27', primary: 1, secondary: 1, lock: true, visible: true },
  { order: 9, id: '30', primary: 1, secondary: 1, lock: true, visible: true },
  { order: 10, id: '33', primary: 1, secondary: 1, lock: true, visible: true },
  { order: 11, id: '36', primary: 1, secondary: 1, lock: true, visible: true },
  { order: 12, id: '5', primary: 1, secondary: 1, lock: true, visible: true },
  { order: 13, id: '8', primary: 1, secondary: 1, lock: true, visible: true },
  { order: 14, id: '11', primary: 1, secondary: 1, lock: true, visible: true },
  { order: 15, id: '14', primary: 1, secondary: 1, lock: true, visible: true },
  { order: 16, id: '17', primary: 1, secondary: 1, lock: true, visible: true },
  { order: 17, id: '20', primary: 1, secondary: 1, lock: true, visible: false },
  { order: 18, id: '23', primary: 1, secondary: 1, lock: true, visible: true },
  { order: 19, id: '26', primary: 1, secondary: 1, lock: true, visible: true },
  { order: 20, id: '29', primary: 1, secondary: 1, lock: true, visible: true },
  { order: 21, id: '32', primary: 1, secondary: 1, lock: true, visible: true },
  { order: 22, id: '35', primary: 1, secondary: 1, lock: true, visible: true },
];

export const rules: { [key: string]: { cost: number; min: number; max: number; win: number } } = {
  '1': { cost: 1, min: 1, max: 8, win: 9 },
  '2': { cost: 2, min: 1, max: 4, win: 18 },
  '3': { cost: 3, min: 1, max: 3, win: 27 },
  '4': { cost: 4, min: 1, max: 2, win: 36 },
  '5': { cost: 5, min: 1, max: 2, win: 45 },
  '6': { cost: 6, min: 1, max: 1, win: 54 },
  '7': { cost: 7, min: 1, max: 1, win: 63 },
  '8': { cost: 8, min: 1, max: 1, win: 72 },
  '9': { cost: 9, min: 1, max: 1, win: 81 },
  '10': { cost: 10, min: 1, max: 1, win: 90 },
  '11': { cost: 11, min: 1, max: 1, win: 99 },
  '12': { cost: 12, min: 1, max: 1, win: 108 },
  '13': { cost: 14, min: 1, max: 1, win: 126 },
  '14': { cost: 16, min: 1, max: 1, win: 144 },
  '15': { cost: 18, min: 1, max: 1, win: 162 },
  '16': { cost: 20, min: 1, max: 1, win: 180 },
  '17': { cost: 22, min: 1, max: 1, win: 198 },
  '18': { cost: 25, min: 1, max: 1, win: 225 },
  '19': { cost: 28, min: 1, max: 1, win: 252 },
  '20': { cost: 32, min: 1, max: 1, win: 288 },
  '21': { cost: 36, min: 1, max: 1, win: 324 },
  '22': { cost: 40, min: 1, max: 1, win: 360 },
  '23': { cost: 45, min: 1, max: 1, win: 405 },
  '24': { cost: 51, min: 1, max: 1, win: 459 },
  '25': { cost: 57, min: 1, max: 1, win: 513 },
  '26': { cost: 64, min: 1, max: 1, win: 576 },
  '27': { cost: 72, min: 1, max: 1, win: 648 },
  '28': { cost: 81, min: 1, max: 1, win: 729 },
  '29': { cost: 91, min: 1, max: 1, win: 819 },
  '30': { cost: 103, min: 1, max: 1, win: 927 },
  '31': { cost: 116, min: 1, max: 1, win: 1044 },
  '32': { cost: 130, min: 1, max: 1, win: 1170 },
  '33': { cost: 147, min: 1, max: 1, win: 1323 },
  '34': { cost: 165, min: 1, max: 1, win: 1485 },
  '35': { cost: 186, min: 1, max: 1, win: 1674 },
  '36': { cost: 210, min: 1, max: 1, win: 1890 },
};

type Dispatch = (action: Action) => void;

type Action =
  | { type: 'add-primary'; id: string }
  | { type: 'add-secondary'; id: string }
  | { type: 'sub-secondary'; id: string }
  | { type: 'add-global' }
  | { type: 'max'; max: string }
  | { type: 'lock'; id: string }
  | { type: 'reset'; id: string }
  | { type: 'light-reset'; id: string }
  | { type: 'reset-global' };

type State = {
  value: number;
  max: string;
  bets: { order: number; id: string; primary: number; secondary: number; lock: boolean; visible: boolean }[];
};
type RouletteProviderProps = { children: React.ReactNode };

const RouletteStateContext = React.createContext<{ state: State; dispatch: Dispatch } | undefined>(undefined);

const getCurrentBet = (state: State, id: string) => {
  const current = state.bets.find((bet) => bet.id === id);
  if (!current) return null;
  return current;
};

const setMax = (state: State, max: string) => ({ ...state, max });

const factoryRound =
  (state: State) =>
  (valueCallback = (value: number) => value, betsCallback: (bet: Bet) => Bet = (bet) => bet) => {
    return {
      ...state,
      value: valueCallback(state.value),
      bets: state.bets.map(betsCallback),
    };
  };

const grow = (v: number) => v + 1;
const shrink = (v: number) => v - 1;

const getCost = (id: number | string) => rules[`${id}`].cost;

const resetBet = (id: string) => (bet: Bet) => {
  if (bet.id !== id) return bet;
  return { ...bet, primary: 1, secondary: 1 };
};
const primaryUp = (id: string) => (bet: Bet) => {
  if (bet.id !== id) return bet;
  return { ...bet, primary: bet.primary + 1, secondary: 1 };
};
const secondaryUp = (id: string) => (bet: Bet) => {
  if (bet.id !== id) return bet;
  return { ...bet, secondary: bet.secondary + 1 };
};
function rouletteReducer(state: State, action: Action) {
  const round = factoryRound(state);
  switch (action.type) {
    case 'max': {
      return setMax(state, action.max);
    }
    case 'add-primary': {
      const current = getCurrentBet(state, action.id);
      if (!current || current.primary + 1 > Number(state.max)) return state;
      if (!rules[`${current.primary + 1}`] || current.primary + 1 > Number(state.max)) {
        return round(shrink, resetBet(action.id));

        /*return {
          ...state,
          value: state.value - 1,
          bets: state.bets.map((v) => {
            if (v.id !== action.id) return v;
            return { ...v, primary: 1, secondary: 1 };
          }),
        };*/
      }
      return round(shrink, primaryUp(action.id));
      /*      return {
        ...state,
        value: state.value - 1,
        bets: state.bets.map((bet) => {
          if (bet.id === action.id) return { ...current, primary: current.primary + 1, secondary: 1 };
          return bet;
        }),
      };*/
    }
    case 'add-secondary': {
      const current = getCurrentBet(state, action.id);
      if (!current) return state;
      if (current.secondary >= rules[`${current.primary}`].max) {
        if (current.primary === Number(state.max)) {
          return round((v) => v - rules[`${current.primary}`].cost, secondaryUp(action.id));
          /*return {
            ...state,
            value: state.value - rules[`${current.primary}`].cost,
            bets: state.bets.map((v) => {
              if (v.id !== action.id) return v;
              return { ...v, secondary: current.secondary + 1 };
            }),
          };*/
        }
        if (!rules[`${current.primary + 1}`]) {
          return round(shrink, resetBet(action.id));
          /*return {
            ...state,
            value: state.value - 1,
            bets: state.bets.map((v) => {
              if (v.id !== action.id) return v;
              return { ...v, primary: 1, secondary: 1 };
            }),
          };*/
        }
        return round((v) => v - rules[`${current.primary}`].cost, primaryUp(action.id));
        /*        return {
          ...state,
          value: state.value - rules[`${current.primary}`].cost,
          bets: [...state.bets.filter(({ id }) => id !== action.id), { ...current, primary: current.primary + 1, secondary: 1 }],
        };*/
      } else {
        return round((v) => v - rules[`${current.primary}`].cost, secondaryUp(action.id));
        /*        return {
          ...state,
          value: state.value - rules[`${current.primary}`].cost,
          bets: [...state.bets.filter(({ id }) => id !== action.id), { ...current, secondary: current.secondary + 1 }],
        };*/
      }
    }
    case 'sub-secondary': {
      const current = getCurrentBet(state, action.id);
      if (!current || current.secondary <= 1) return state;

      return {
        ...state,
        value: state.value + rules[`${current.primary}`].cost,
        bets: state.bets.map((bet) => {
          if (bet.id !== action.id) return bet;
          return { ...bet, secondary: bet.secondary - 1 };
        }),
      };
    }
    case 'light-reset': {
      return {
        ...state,
        bets: state.bets.map((v) => {
          if (v.id !== action.id) return v;
          return { ...v, primary: 1, secondary: 1 };
        }),
      };
    }
    case 'reset': {
      const current = getCurrentBet(state, action.id);
      if (!current || current.lock) return state;
      if (current.primary === 1) {
        return {
          ...state,
          value: state.value + rules[`${current.primary}`].win,
          bets: state.bets.map((v) => {
            if (v.id !== action.id) return v;
            return { ...v, primary: 1, secondary: 1 };
          }),
        };
      }
      if (current.secondary === 1) {
        return {
          ...state,
          value: state.value + rules[`${current.primary - 1}`].win,
          bets: state.bets.map((v) => {
            if (v.id !== action.id) return v;
            return { ...v, primary: 1, secondary: 1 };
          }),
        };
      }
      return {
        ...state,
        value: state.value + rules[`${current.primary}`].win,
        bets: state.bets.map((v) => {
          if (v.id !== action.id) return v;
          return { ...v, primary: 1, secondary: 1 };
        }),
      };
    }
    case 'reset-global': {
      return {
        ...state,
        value: 0,
        bets: state.bets.map((v) => {
          return { ...v, primary: 1, secondary: 1 };
        }),
      };
    }
    case 'lock': {
      const current = getCurrentBet(state, action.id);
      if (!current) return state;
      return {
        ...state,
        bets: state.bets.map((v) => {
          if (v.id !== action.id) return v;
          return v.lock ? { ...v, lock: false } : { ...v, lock: true };
        }),
      };
    }
    default: {
      throw new Error(`Unhandled action type: \n${JSON.stringify(action, null, 1)}`);
    }
  }
}

function RouletteProvider({ children }: RouletteProviderProps) {
  const [state, dispatch] = React.useReducer(rouletteReducer, { value: 0, max: '36', bets });
  const value = { state, dispatch };
  return <RouletteStateContext.Provider value={value}>{children}</RouletteStateContext.Provider>;
}

function useRoulette() {
  const context = React.useContext(RouletteStateContext);
  if (context === undefined) {
    throw new Error('useRoulette must be used within a RouletteProvider');
  }
  return context;
}

export { RouletteProvider, useRoulette };

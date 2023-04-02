import * as React from 'react';

const bets: { order: number; id: string; primary: number; secondary: number; cost: number; lock: boolean; visible: boolean }[] = [
  { order: 1, id: '6', primary: 1, secondary: 1, cost: 2, lock: true, visible: true },
  { order: 2, id: '9', primary: 1, secondary: 1, cost: 2, lock: true, visible: true },
  { order: 3, id: '12', primary: 1, secondary: 1, cost: 2, lock: true, visible: true },
  { order: 4, id: '15', primary: 1, secondary: 1, cost: 2, lock: true, visible: true },
  { order: 5, id: '18', primary: 1, secondary: 1, cost: 2, lock: true, visible: true },
  { order: 6, id: '21', primary: 1, secondary: 1, cost: 2, lock: true, visible: false },
  { order: 7, id: '24', primary: 1, secondary: 1, cost: 2, lock: true, visible: true },
  { order: 8, id: '27', primary: 1, secondary: 1, cost: 2, lock: true, visible: true },
  { order: 9, id: '30', primary: 1, secondary: 1, cost: 2, lock: true, visible: true },
  { order: 10, id: '33', primary: 1, secondary: 1, cost: 2, lock: true, visible: true },
  { order: 11, id: '36', primary: 1, secondary: 1, cost: 2, lock: true, visible: true },
  { order: 12, id: '5', primary: 1, secondary: 1, cost: 2, lock: true, visible: true },
  { order: 13, id: '8', primary: 1, secondary: 1, cost: 2, lock: true, visible: true },
  { order: 14, id: '11', primary: 1, secondary: 1, cost: 2, lock: true, visible: true },
  { order: 15, id: '14', primary: 1, secondary: 1, cost: 2, lock: true, visible: true },
  { order: 16, id: '17', primary: 1, secondary: 1, cost: 2, lock: true, visible: true },
  { order: 17, id: '20', primary: 1, secondary: 1, cost: 2, lock: true, visible: false },
  { order: 18, id: '23', primary: 1, secondary: 1, cost: 2, lock: true, visible: true },
  { order: 19, id: '26', primary: 1, secondary: 1, cost: 2, lock: true, visible: true },
  { order: 20, id: '29', primary: 1, secondary: 1, cost: 2, lock: true, visible: true },
  { order: 21, id: '32', primary: 1, secondary: 1, cost: 2, lock: true, visible: true },
  { order: 22, id: '35', primary: 1, secondary: 1, cost: 2, lock: true, visible: true },
];

const oneCorner: { [key: string]: { cost: number; min: number; max: number; win: number } } = {
  '1': { cost: 2, min: 1, max: 8, win: 18 },
  '2': { cost: 4, min: 1, max: 4, win: 36 },
  '3': { cost: 6, min: 1, max: 3, win: 54 },
  '4': { cost: 8, min: 1, max: 2, win: 72 },
  '5': { cost: 10, min: 1, max: 2, win: 90 },
  '6': { cost: 12, min: 1, max: 1, win: 108 },
  '7': { cost: 14, min: 1, max: 1, win: 126 },
};

type Action =
  | { type: 'add-primary'; id: string }
  | { type: 'add-secondary'; id: string }
  | { type: 'sub-secondary'; id: string }
  | { type: 'add-global' }
  | { type: 'max'; max: string }
  | { type: 'lock'; id: string }
  | { type: 'reset'; id: string }
  | { type: 'reset-global' };

type Dispatch = (action: Action) => void;
type State = {
  value: number;
  max: string;
  bets: { order: number; id: string; primary: number; secondary: number; cost: number; lock: boolean; visible: boolean }[];
};
type RouletteProviderProps = { children: React.ReactNode };

const RouletteStateContext = React.createContext<{ state: State; dispatch: Dispatch } | undefined>(undefined);

function rouletteReducer(state: State, action: Action) {
  switch (action.type) {
    case 'max': {
      return { ...state, max: action.max };
    }
    case 'add-primary': {
      const current = state.bets.find(({ id }) => id === action.id);
      if (!current) return state;
      if (!oneCorner[`${current.primary + 1}`] || current.primary + 1 > Number(state.max)) {
        return {
          ...state,
          value: state.value - 2,
          bets: state.bets.map((v) => {
            if (v.id !== action.id) return v;
            return { ...v, primary: 1, secondary: 1 };
          }),
        };
      }
      return {
        ...state,
        value: state.value - 2,
        bets: [...state.bets.filter(({ id }) => id !== action.id), { ...current, primary: current.primary + 1, secondary: 1 }],
      };
    }
    case 'add-secondary': {
      const current = state.bets.find(({ id }) => id === action.id);
      if (!current) return state;
      if (current.secondary >= oneCorner[`${current.primary}`].max) {
        if (!oneCorner[`${current.primary + 1}`] || current.primary === Number(state.max)) {
          return {
            ...state,
            value: state.value - 2,
            bets: state.bets.map((v) => {
              if (v.id !== action.id) return v;
              return { ...v, primary: 1, secondary: 1 };
            }),
          };
        }
        return {
          ...state,
          value: state.value - oneCorner[`${current.primary + 1}`].cost,
          bets: [...state.bets.filter(({ id }) => id !== action.id), { ...current, primary: current.primary + 1, secondary: 1 }],
        };
      } else {
        return {
          ...state,
          value: state.value - oneCorner[`${current.primary}`].cost,
          bets: [...state.bets.filter(({ id }) => id !== action.id), { ...current, secondary: current.secondary + 1 }],
        };
      }
    }
    case 'sub-secondary': {
      const current = state.bets.find(({ id }) => id === action.id);
      if (!current || current.secondary <= 1) return state;

      return {
        ...state,
        value: state.value + oneCorner[`${current.primary}`].cost,
        bets: [...state.bets.filter(({ id }) => id !== action.id), { ...current, secondary: current.secondary - 1 }],
      };
    }
    case 'add-global': {
      return state;
    }
    case 'reset': {
      const current = state.bets.find(({ id }) => id === action.id);
      if (!current) return state;
      return {
        ...state,
        value: state.value + oneCorner[`${current.primary}`].win - 2,
        bets: state.bets.map((v) => {
          if (v.id !== action.id) return v;
          return { ...v, primary: 1, secondary: 1 };
        }),
      };
    }
    case 'reset-global': {
      return {
        ...state,
        value: 0 /*- state.bets.filter(({ lock }) => !lock).length * 2*/,
        bets: state.bets.map((v) => {
          return { ...v, primary: 1, secondary: 1 };
        }),
      };
    }
    case 'lock': {
      const current = state.bets.find(({ id }) => id === action.id);
      if (!current) return state;
      return {
        ...state,
        /*        value: state.bets.find(({ id }) => id === action.id)?.lock
          ? state.value - oneCorner[`${current.primary || 1}`].cost
          : state.value + oneCorner[`${current.primary || 1}`].cost,*/
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
  const [state, dispatch] = React.useReducer(rouletteReducer, { value: 0, max: '7', bets });
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

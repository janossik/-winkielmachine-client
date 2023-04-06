import * as React from 'react';
import { bets } from '~/utils/bets';
import { setMax } from '~/helpers/roulette';
import { Action, DefaultValue, RouletteProviderProps, State } from '~/hooks/useRoulette/useRoulette';
import { addPrimary, addSecondary, lock, reset, resetGlobal, subSecondary, winBet } from '~/hooks/useRoulette/useRoulette.helper';

const RouletteStateContext = React.createContext<DefaultValue>(undefined);

function rouletteReducer(state: State, action: Action) {
  switch (action.type) {
    case 'max': {
      return setMax(state, action.max);
    }
    case 'add-primary': {
      return addPrimary(state, action);
    }
    case 'add-secondary': {
      return addSecondary(state, action);
    }
    case 'sub-secondary': {
      return subSecondary(state, action);
    }
    case 'reset': {
      return reset(state, action);
    }
    case 'win': {
      return winBet(state, action);
    }
    case 'reset-global': {
      return resetGlobal(state);
    }
    case 'lock': {
      return lock(state, action);
    }
    case 'unlock-all': {
      return { ...state, bets: state.bets.map((bet) => (bet.visible ? { ...bet, lock: false } : bet)) };
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

function index() {
  const context = React.useContext(RouletteStateContext);
  if (context === undefined) {
    throw new Error('index must be used within a RouletteProvider');
  }
  return context;
}

export { RouletteProvider, index };

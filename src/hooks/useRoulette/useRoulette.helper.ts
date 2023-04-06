import { State } from '~/hooks/useRoulette/useRoulette';
import { getCost, getCurrentBet, getRule, getWin, primaryUp, reduceByTokenValue, resetBet, secondaryDown, secondaryUp } from '~/helpers/roulette';
import { Bet } from '~/type/bet';

const factoryRound =
  (state: State) =>
  (valueCallback = (value: number) => value, mapBetsCallback: (bet: Bet) => Bet = (bet) => bet) => {
    return {
      ...state,
      value: valueCallback(state.value),
      bets: state.bets.map(mapBetsCallback),
    };
  };
export const addPrimary = <TAction extends { id: string }>(state: State, { id }: TAction) => {
  const round = factoryRound(state);
  const { primary } = getCurrentBet(state.bets, id);
  if (primary + 1 > Number(state.max)) return state;
  if (!getRule(primary + 1)) return round(reduceByTokenValue, resetBet(id));
  return round(reduceByTokenValue, primaryUp(id));
};
export const addSecondary = <TAction extends { id: string }>(state: State, { id }: TAction) => {
  const round = factoryRound(state);
  const { secondary, primary } = getCurrentBet(state.bets, id);
  if (primary === Number(state.max)) return round((v) => v - getCost(primary), secondaryUp(id));
  if (secondary >= getRule(primary).max) return round((v) => v - getCost(primary), primaryUp(id));

  return round((v) => v - getCost(primary), secondaryUp(id));
};
export const subSecondary = <TAction extends { id: string }>(state: State, { id }: TAction) => {
  const round = factoryRound(state);
  const current = getCurrentBet(state.bets, id);
  if (current.secondary <= 1) return state;
  return round((v) => v + getCost(current.primary), secondaryDown(id));
};
export const reset = <TAction extends { id: string }>(state: State, { id }: TAction) => {
  const round = factoryRound(state);
  return round((v) => v, resetBet(id));
};
export const winBet = <TAction extends { id: string }>(state: State, { id }: TAction) => {
  const round = factoryRound(state);
  const { lock, primary, secondary } = getCurrentBet(state.bets, id);
  if (lock) return state;

  if (primary === 1) return round((v) => v + getWin(primary), resetBet(id));
  if (secondary === 1) return round((v) => v + getWin(primary - 1), resetBet(id));
  return round((v) => v + getWin(primary), resetBet(id));
};
export const resetGlobal = (state: State) => {
  const round = factoryRound(state);
  return round(
    () => 0,
    (bet) => ({ ...bet, primary: 1, secondary: 1 }),
  );
};
export const lock = <TAction extends { id: string }>(state: State, { id }: TAction) => {
  const round = factoryRound(state);
  return round(
    (v) => v,
    (bet) => {
      if (bet.id !== id) return bet;
      return bet.lock ? { ...bet, lock: false } : { ...bet, lock: true };
    },
  );
};

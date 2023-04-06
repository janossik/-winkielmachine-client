import { Bet, Bets } from '~/type/bet';
import { rules } from '~/utils/rules';

export const getCurrentBet = (bets: Bets, id: string) => {
  const current = bets.find((bet) => bet.id === id);
  if (!current) {
    throw new Error(`Bet by ID ${id} not exist`);
  }
  return current;
};
export const setMax = <TState extends { max: string }>(state: TState, max: string): TState => ({ ...state, max });
export const expand = (v: number, tokenValue = 1) => v + tokenValue;
export const reduceByTokenValue = (v: number, tokenValue = 1) => v - tokenValue;
export const getRule = (id: number | string) => {
  const rule = rules[`${id}`];
  if (!rule) {
    throw new Error(`Rule by ID ${id} not exist`);
  }
  return rule;
};
export const getCost = (id: number | string) => getRule(id).cost;
export const getWin = (id: number | string) => getRule(id).win;
export const resetBet = (id: string) => (bet: Bet) => {
  if (bet.id !== id) return bet;
  return { ...bet, primary: 1, secondary: 1 };
};
export const primaryUp = (id: string) => (bet: Bet) => {
  if (bet.id !== id) return bet;
  return { ...bet, primary: bet.primary + 1, secondary: 1 };
};
export const secondaryUp = (id: string) => (bet: Bet) => {
  if (bet.id !== id) return bet;
  return { ...bet, secondary: bet.secondary + 1 };
};
export const secondaryDown = (id: string) => (bet: Bet) => {
  if (bet.id !== id) return bet;
  return { ...bet, secondary: bet.secondary - 1 };
};

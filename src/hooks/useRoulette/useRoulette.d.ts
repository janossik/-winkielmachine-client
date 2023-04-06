import { Bets } from '~/type/bet';
import * as React from 'react';

type Dispatch = (action: Action) => void;
export type Action =
  | { type: 'add-primary'; id: string }
  | { type: 'add-secondary'; id: string }
  | { type: 'sub-secondary'; id: string }
  | { type: 'add-global' }
  | { type: 'unlock-all' }
  | { type: 'max'; max: string }
  | { type: 'lock'; id: string }
  | { type: 'win'; id: string }
  | { type: 'reset'; id: string }
  | { type: 'reset-global' };
export type State = { value: number; max: string; bets: Bets };
export type RouletteProviderProps = { children: React.ReactNode };
export type DefaultValue = { state: State; dispatch: Dispatch } | undefined;

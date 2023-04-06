export interface Bet {
  order: number;
  id: string;
  primary: number;
  secondary: number;
  lock: boolean;
  visible: boolean;
}

export type Bets = Bet[];

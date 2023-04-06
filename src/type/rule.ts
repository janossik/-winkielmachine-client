interface Rule {
  cost: number;
  min: number;
  max: number;
  win: number;
}

export type Rules = Record<string, Rule>;

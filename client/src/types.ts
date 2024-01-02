// src/types/index.tsx

export interface IBox {
  color: string;
  x: number;
  y: number;
}

export interface IGameState {
  grid: string[][];
  nclick: number;
  maxclick: number;
  nrows: number;
  ncols: number;
  ncolors: number;
}

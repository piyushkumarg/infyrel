export type levelType = 'easy' | 'medium' | 'hard' | null;

export type gamePlayerType = 1 | 2 | null;

export type turnType = 'X' | 'O';

export interface getStatusMessageInterface {
  winner: string | null;
  draw: boolean;
  turn: turnType;
}

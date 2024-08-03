export interface ControlsProps {
    onNewGame: (difficulty: 'easy' | 'medium' | 'hard') => void;
    onSolve: () => void;
  }

 export  interface CellProps {
    row: number;
    col: number;
    value: number;
    onChange: (row: number, col: number, value: number) => void;
  }

  export interface BoardProps {
    board: number[][];
    onCellChange: (row: number, col: number, value: number) => void;
  }
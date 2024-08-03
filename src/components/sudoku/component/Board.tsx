import React from 'react';
import Cell from './Cell';
import { BoardProps } from '../types/sudoku.type';

const Board: React.FC<BoardProps> = ({
  board,
  originalBoard,
  onCellChange,
}) => {
  return (
    <div className="grid grid-cols-9 ">
      {board.map((row, rowIndex) =>
        row.map((cell, colIndex) => (
          <Cell
            key={`${rowIndex}-${colIndex}`}
            row={rowIndex}
            col={colIndex}
            value={cell}
            onChange={onCellChange}
            rowIndex={rowIndex}
            colIndex={colIndex}
            originalBoard={originalBoard}
          />
        ))
      )}
    </div>
  );
};

export default Board;

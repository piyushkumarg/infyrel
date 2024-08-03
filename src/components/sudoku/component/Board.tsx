import React from 'react';
import Cell from './Cell';
import { BoardProps } from '../types/sudoku.type';



const Board: React.FC<BoardProps> = ({ board, onCellChange }) => {
  return (
    <div className="grid grid-cols-9 bg-black">
      {board.map((row, rowIndex) =>
        row.map((cell, colIndex) => (
          <Cell
            key={`${rowIndex}-${colIndex}`}
            row={rowIndex}
            col={colIndex}
            value={cell}
            onChange={onCellChange}
          />
        ))
      )}
    </div>
  );
};

export default Board;

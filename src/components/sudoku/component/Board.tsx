import React from 'react';
import Cell from './Cell';

interface BoardProps {
  board: number[][];
  onChange: (row: number, col: number, value: number) => void;
}

const Board: React.FC<BoardProps> = ({ board, onChange }) => {
  return (
    <div className="grid grid-cols-9  bg-black">
      {board.map((row, rowIndex) =>
        row.map((cell, colIndex) => (
          <Cell
            key={`${rowIndex}-${colIndex}`}
            row={rowIndex}
            col={colIndex}
            value={cell}
            onChange={onChange}
          />
        ))
      )}
    </div>
  );
};

export default Board;

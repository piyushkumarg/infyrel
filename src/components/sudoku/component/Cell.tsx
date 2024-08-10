import React from 'react';
import { CellProps } from '../types/sudoku.type';

const Cell: React.FC<CellProps> = ({
  row,
  col,
  value,
  rowIndex,
  colIndex,
  originalBoard,
  onChange,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value) || 0;
    onChange(row, col, newValue);
  };

  const getCellClass = () => {
    let classes =
      'w-full aspect-square text-center text-base sm:text-lg  lg:text-2xl border border-gray-400 focus:bg-gray-600/15 outline-none md:font-semibold text-balck/20 transition-all duration-300';
    if ((Math.floor(row / 3) + Math.floor(col / 3)) % 2 === 0) {
      classes += ' bg-gray-100';
    }
    return classes;
  };

  return (
    <input
      type="text"
      value={value || ''}
      onChange={handleChange}
      className={getCellClass()}
      maxLength={1}
      disabled={
        originalBoard[rowIndex] && originalBoard[rowIndex][colIndex] !== 0
      }
    />
  );
};

export default Cell;

import React from 'react';
import { CellProps } from '../types/sudoku.type';

const Cell: React.FC<CellProps> = ({ row, col, value, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value) || 0;
    onChange(row, col, newValue);
  };

  const getCellClass = () => {
    let classes =
      'w-16 h-16 text-center text-3xl border border-gray-400 outline-none';
    if ((Math.floor(row / 3) + Math.floor(col / 3)) % 2 === 0) {
      classes += ' bg-gray-200';
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
    />
  );
};

export default Cell;

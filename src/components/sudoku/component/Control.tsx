import React, { useMemo, useState } from 'react';
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from '@nextui-org/react';
import { ControlsProps } from '../types/sudoku.type';

const Controls: React.FC<ControlsProps> = ({ onNewGame, onSolve }) => {
  const [selectedKeys, setSelectedKeys] = useState(new Set(['Level']));

  const selectedValue = useMemo(
    () => Array.from(selectedKeys).join(', ').replaceAll('_', ' '),
    [selectedKeys]
  );

  return (
    <div className=" flex  gap-4 py-1  h-fit  justify-between">
      <div className='flex md:flex-col justify-between items-center gap-2 '>
      <p className='text-xs md:text-sm font-bold text-gray-400'>Difficulty:</p>
      <Dropdown size='sm'>
        <DropdownTrigger>
          <Button variant="bordered" className="capitalize font-semibold text-xs md:text-sm py-2 px-3 md:px-4 max-w-[30px] h-[32px] md:h-[37px]  outline-none">
            {selectedValue}
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          aria-label="Single selection example"
          variant="light"
          disallowEmptySelection
          selectionMode="single"
          selectedKeys={selectedKeys}
          onSelectionChange={setSelectedKeys as any}
          
        >
          <DropdownItem onClick={() => onNewGame('easy')} key="easy">
            Easy
          </DropdownItem>
          <DropdownItem onClick={() => onNewGame('medium')} key="medium">
            Medium
          </DropdownItem>
          <DropdownItem onClick={() => onNewGame('hard')} key="hard">
            Hard
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
      </div>
      <div className='flex  h-fit'>
      <button
        onClick={onSolve}
        className=" w-fit bg-primary-400 hover:bg-gradient-tr from-slate-100 shadow-md text-white font-medium py-2 px-5 hover:ring-2 hover:ring-blue-700/30 rounded-xl text-xs md:text-sm transition-all duration-400 hover:scale-[1.01] active:scale-[1.03] hover:text-gray-200"
      >
        Solve
      </button>

      </div>
    </div>
  );
};

export default Controls;

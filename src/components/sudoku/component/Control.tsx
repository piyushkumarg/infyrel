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
    <div className="flex flex-col items-center mt-4">
      <Dropdown>
        <DropdownTrigger>
          <Button variant="bordered" className="capitalize">
            {selectedValue}
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          aria-label="Single selection example"
          variant="flat"
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
      <button
        onClick={onSolve}
        className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
      >
        Solve
      </button>
    </div>
  );
};

export default Controls;

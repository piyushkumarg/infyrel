import React, { useMemo, useState } from 'react';

interface ControlsProps {
  onNewGame: (difficulty: 'easy' | 'medium' | 'hard') => void;
  onSolve: () => void;
}

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from '@nextui-org/react';

const Controls = ({ onNewGame, onSolve }: ControlsProps) => {
  const [selectedKeys, setSelectedKeys] = useState(new Set(['Level']));

  const selectedValue = useMemo(
    () => Array.from(selectedKeys).join(', ').replaceAll('_', ' '),
    [selectedKeys]
  );

  return (
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
        <DropdownItem onClick={() => onNewGame('easy')} key="Easy">
          Easy
        </DropdownItem>
        <DropdownItem onClick={() => onNewGame('medium')} key="Medium">
          Medium
        </DropdownItem>
        <DropdownItem onClick={() => onNewGame('hard')} key="Hard">
          Hard
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default Controls;

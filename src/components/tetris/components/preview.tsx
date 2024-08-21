import { memo } from 'react';
import { buildBoard } from '../helper/board';
import { transferToBoard } from '../helper/tetrominoes';
import BoardCell from './boardCell';

const Preview = ({ tetromino, index }: any) => {
  const { shape, className } = tetromino;

  const board = buildBoard({ rows: 4, columns: 4 });

  const style = { top: `${index * 15}vw` };

  console.log('board', board);

  board.rows = transferToBoard({
    className,
    isOccupied: false,
    position: { row: 0, column: 0 },
    rows: board.rows,
    shape,
  });

  return (
    <div
      className="absolute top-0 left-[72.2vw] bg-[rgba(0,0,0,0.1)] border-[10px] border-[rgba(0,0,0,0)] rounded-[10px]"
      style={style}
    >
      <div className="grid gap-[2px] grid-rows-4 grid-cols-4 w-[11vw] h-[11vh]">
        {board.rows.map((row, y) =>
          row.map((cell, x) => (
            <BoardCell key={x * board.size.columns + x} cell={cell} />
          ))
        )}
      </div>
    </div>
  );
};

export default memo(Preview);

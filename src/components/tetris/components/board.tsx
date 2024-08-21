import BoardCell from './boardCell';

const Board = ({ board }: any) => {
  const boardStyles = {
    gridTemplateRows: `repeat(${board.size.rows}, 1fr)`,
    gridTemplateColumns: `repeat(${board.size.columns}, 1fr)`,
  };

  return (
    <div
      className="m-[2em] mx-auto grid gap-[2px] max-w-[450px] h-[90vh] bg-[#200040] border-[10px] border-[#200040] rounded-[10px] shadow-[0px_5px_15px_rgba(0,0,0,0.35)]"
      style={boardStyles}
    >
      {board.rows.map((row: any, y: any) =>
        row.map((cell: any, x: any) => (
          <BoardCell key={x * board.size.columns + x} cell={cell} />
        ))
      )}
    </div>
  );
};

export default Board;

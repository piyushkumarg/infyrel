import { DragEvent } from 'react';

const GameBoard = ({
  currentColorArrangement,
  dragStart,
  dragDrop,
  dragEnd,
}: {
  currentColorArrangement: string[];
  dragStart: (e: DragEvent<HTMLImageElement>) => void;
  dragDrop: (e: DragEvent<HTMLImageElement>) => void;
  dragEnd: (e: DragEvent<HTMLImageElement>) => void;
}) => {
  return (
    <div className="sm:w-[560px] sm:h-[560px]  h-[360px] w-[360px] flex  justify-center items-center flex-wrap sm:gap-2 gap-1">
      {currentColorArrangement.map((candyColor, index) => (
        <img
          className="sm:w-[60px] sm:h-[60px] w-[40px] h-[40px] p-1 cursor-move rounded-lg shadow-lg shadow-blue-800 border-2 border-blue-500"
          width={100}
          height={100}
          key={index}
          src={candyColor}
          alt={candyColor}
          data-id={index}
          draggable={true}
          onDragStart={dragStart}
          onDragOver={(e) => e.preventDefault()}
          onDragEnter={(e) => e.preventDefault()}
          onDragLeave={(e) => e.preventDefault()}
          onDrop={dragDrop}
          onDragEnd={dragEnd}
        />
      ))}
    </div>
  );
};

export default GameBoard;

import { DragEvent, TouchEvent } from 'react';

const GameBoard = ({
  currentColorArrangement,
  dragStart,
  dragDrop,
  dragOrTouchEnd,
  touchStart,
  touchMove,
}: {
  currentColorArrangement: string[];
  dragStart: (e: DragEvent<HTMLImageElement>) => void;
  dragDrop: (e: DragEvent<HTMLImageElement>) => void;
  dragOrTouchEnd: () => void;
  touchStart: (e: TouchEvent<HTMLImageElement>) => void;
  touchMove: (e: TouchEvent<HTMLImageElement>) => void;
}) => {
  return (
    <div className="sm:w-[560px] sm:h-[560px] h-[360px] w-[360px] flex justify-center items-center flex-wrap sm:gap-2 gap-1">
      {currentColorArrangement.map((candyColor, index) => (
        <img
          className="sm:w-[60px] sm:h-[60px] w-[40px] h-[40px] p-1 cursor-move rounded-lg shadow-lg shadow-blue-800 border-2 border-blue-500 transition-transform duration-300"
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
          onDragEnd={dragOrTouchEnd}
          onTouchStart={touchStart}
          onTouchMove={touchMove}
          onTouchEnd={dragOrTouchEnd}
        />
      ))}
    </div>
  );
};

export default GameBoard;

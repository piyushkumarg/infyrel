'use client';
import useCandyCrush from './hooks/useCandyCrush';
import { SiteLayout } from '@/layout';
import GameBoard from './components/game-board';

const CandyCrush = () => {
  const {
    scoreDisplay,
    currentColorArrangement,
    dragStart,
    dragDrop,
    dragOrTouchEnd,
    touchStart,
    touchMove,
    draggingElementStyles,
    squareBeingDragged,
  } = useCandyCrush();

  //console.log(currentColorArrangement)
  return (
    <SiteLayout className="bg-gradient-to-b from-blue-800 to-blue-500 bg-cover bg-center">
      <div className="flex flex-col justify-center items-center p-2 gap-4 h-[90vh]">
        <div className="flex gap-2 bg-green-600 py-2 px-5 rounded-3xl shadow-md shadow-black/20 text-white font-medium text-xl">
          <p>Score: {scoreDisplay}</p>
        </div>
        <GameBoard
          currentColorArrangement={currentColorArrangement}
          dragStart={dragStart}
          dragDrop={dragDrop}
          dragOrTouchEnd={dragOrTouchEnd}
          touchStart={touchStart}
          touchMove={touchMove}
          draggingElementStyles={draggingElementStyles}
          squareBeingDraggedId={Number(
            squareBeingDragged?.getAttribute('data-id')
          )}
        />
      </div>
    </SiteLayout>
  );
};

export default CandyCrush;

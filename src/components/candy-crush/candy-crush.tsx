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
    dragEnd,
  } = useCandyCrush();

  //console.log(currentColorArrangement)
  return (
    <SiteLayout className="min-h-[90vh] bg-blue-500">
      <div className="flex flex-col justify-center items-center p-2 bg-blue-500 gap-4">
        <div className="flex gap-2 bg-green-600 py-2 px-5 rounded-3xl shadow-md shadow-black/20 text-white font-medium text-xl">
          <p>Score: {scoreDisplay}</p>
        </div>
        <GameBoard
          currentColorArrangement={currentColorArrangement}
          dragStart={dragStart}
          dragDrop={dragDrop}
          dragEnd={dragEnd}
        />
      </div>
    </SiteLayout>
  );
};

export default CandyCrush;

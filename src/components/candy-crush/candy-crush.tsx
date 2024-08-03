'use client';
import ScoreBoard from './components/score-board';
import useCandyCrush from './hooks/useCandyCrush';
import { SiteLayout } from '@/layout';
import GameBoard from './components/game-board';
import { useEffect } from 'react';

const CandyCrush = () => {
  const {
    width,
    createBoard,
    scoreDisplay,
    currentColorArrangement,
    setCurrentColorArrangement,
  } = useCandyCrush();

  useEffect(() => {
    createBoard();
  }, []);

  return (
    <SiteLayout className="min-h-[90vh] bg-blue-500">
      <div className="flex flex-col justify-center items-center p-2 bg-blue-500 gap-4">
        <ScoreBoard score={10} />
        <GameBoard currentColorArrangement={currentColorArrangement} />
      </div>
    </SiteLayout>
  );
};

export default CandyCrush;

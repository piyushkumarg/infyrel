import { useState, useCallback } from 'react';

const useGameOver = () => {
  const [gameOver, setGameOver] = useState<any>(true);

  const resetGameOver = useCallback(() => {
    setGameOver(false);
  }, []);

  return {
    gameOver,
    setGameOver,
    resetGameOver,
  };
};
export default useGameOver;

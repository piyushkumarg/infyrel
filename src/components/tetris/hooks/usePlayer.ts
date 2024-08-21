import { useState, useCallback } from 'react';
import { randomTetromino } from '../helper/tetrominoes';

const buildPlayer = (previous?: any) => {
  let tetrominoes;

  if (previous) {
    tetrominoes = [...previous.tetrominoes];
    tetrominoes.unshift(randomTetromino());
  } else {
    tetrominoes = Array(5)
      .fill(0)
      .map((_) => randomTetromino());
  }

  return {
    collided: false,
    isFastDropping: false,
    position: { row: 0, column: 4 },
    tetrominoes,
    tetromino: tetrominoes.pop(),
  };
};

export const usePlayer = () => {
  const [player, setPlayer] = useState<any>(buildPlayer());

  const resetPlayer = useCallback(() => {
    setPlayer((prev: any) => buildPlayer(prev));
  }, []);

  return {
    player,
    setPlayer,
    resetPlayer,
  };
};

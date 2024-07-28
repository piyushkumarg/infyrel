'use client';
import { useEffect, useRef } from 'react';
import Snake from './Snake';
import Food from './Food';
import useSnakeGame, { GameModeType } from '../hooks/useSnakeGame';

const GameBoard: React.FC = () => {
  const gameBoardRef = useRef<HTMLDivElement>(null);
  const {
    snakeDots,
    food,
    handleKeyDown,
    toggleGame,
    isRunning,
    score,
    highScore,
    mode,
    setMode,
  } = useSnakeGame(gameBoardRef);
  useEffect(() => {
    if (gameBoardRef.current) {
      gameBoardRef.current.focus();
    }
  }, []);
  const handleKeyPress = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (!isRunning) {
      toggleGame();
    }
    handleKeyDown(e);
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-[90vh] bg-gray-200 bg-[url('/snakeGame/snakeBackground.jpg')] bg-cover bg-center">
      <div className="text-2xl mb-5 flex justify-between max-w-[550px] w-full">
        <div>Score: {score}</div>
        <div>High Score: {highScore}</div>
      </div>
      <div
        ref={gameBoardRef}
        className={`relative w-full rounded-md shadow-md md:max-w-[550px] md:h-[550px] max-w-[400px] h-[400px] bg-[#90a4ae] flex items-center justify-center mb-5 outline-none ${mode === 'medium' || mode === 'hard' ? 'border-2 border-red-500' : ''}`}
        onKeyDown={handleKeyPress}
        tabIndex={0}
      >
        <Snake snakeDots={snakeDots} />
        <Food dot={food} />
      </div>
      <div className="flex justify-between max-w-[550px] items-center w-full">
        <button
          onClick={toggleGame}
          className={`py-2 px-8 text-lg font-semibold cursor-pointer border-none rounded-lg shadow-md text-white ${isRunning ? 'bg-red-600 hover:bg-red-500' : 'bg-green-600 hover:bg-green-500'}`}
        >
          {isRunning ? 'Pause' : 'Start'}
        </button>
        <div className="flex gap-2 font-medium text-lg  items-center">
          <label>Level:</label>
          <select
            value={mode}
            onChange={(e) => setMode(e.target.value as GameModeType)}
            className="p-2 rounded-md shadow-md"
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default GameBoard;

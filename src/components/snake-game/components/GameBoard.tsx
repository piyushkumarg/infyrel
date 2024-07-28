'use client';

import React, { useState, useRef, useEffect } from 'react';
import Snake from './Snake';
import Food from './Food';
import useSnakeGame from '../hooks/useSnakeGame';

const GameBoard: React.FC = () => {
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
  } = useSnakeGame('easy');
  const gameBoardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (gameBoardRef.current) {
      gameBoardRef.current.focus();
    }
  }, []);

  const handleModeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setMode(e.target.value as 'easy' | 'medium' | 'hard');
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (!isRunning) {
      toggleGame();
    }
    handleKeyDown(e);
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-[90vh] bg-gray-200 bg-[url('/snakeGame/snakeBackground.jpg')] bg-cover bg-center">
      <div className="text-2xl mb-5 flex justify-between w-[400px]">
        <div>Score: {score}</div>
        <div>High Score: {highScore}</div>
      </div>
      <div
        ref={gameBoardRef}
        className={`relative w-[400px] h-[400px] bg-[#90a4ae] flex items-center justify-center mb-5 outline-none ${mode === 'medium' || mode === 'hard' ? 'border-2 border-red-500' : ''}`}
        onKeyDown={handleKeyPress}
        tabIndex={0}
      >
        <Snake snakeDots={snakeDots} />
        <Food dot={food} />
      </div>
      <div className="flex justify-between items-center gap-[200px]">
        <button
          onClick={toggleGame}
          className={`py-2 px-4 text-lg cursor-pointer border-none rounded-lg text-white ${isRunning ? 'bg-red-500' : 'bg-green-500'}`}
        >
          {isRunning ? 'Pause' : 'Start'}
        </button>
        <div>
          <label className="mr-2">Level:</label>
          <select
            value={mode}
            onChange={handleModeChange}
            className="mb-5 p-2 text-lg"
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

'use client';
import { SiteLayout } from '@/layout';
import React, { useEffect, useState } from 'react';
import useTicTacToe from '../hooks/useTicTacToe';
import { gamePlayerType, levelType } from '../types/level.type';

const TicTacToeContainer = () => {
  const [gamePlayer, setGamePlayer] = useState<gamePlayerType>(null);
  const [level, setLevel] = useState<levelType>(null);
  const [player, setPlayer] = useState<{ [key: string]: string }>({
    X: 'Player A',
    O: 'Player B',
  });

  const [isStarted, setIsStarted] = useState<boolean>(false);

  const {
    board,
    turn,
    setboard,
    winner,
    setScores,
    handleClick,
    getStatusMessage,
    resetGame,
    getComputerMove,
  } = useTicTacToe();

  if (gamePlayer === 1 && turn === 'O' && !winner) {
    setTimeout(() => {
      const index = getComputerMove(board, level);
      handleClick(index, 'O');
    }, 1000); // Delay of 1000 milliseconds (1 second)
  }

  const goToStart = () => {
    resetGame();
    setIsStarted(false);
    setGamePlayer(null);
    setLevel(null);
    setScores({ X: 0, O: 0 });
  };

  const response = getStatusMessage();

  return (
    <SiteLayout className="bg-slate-300 min-h-[90vh]">
      <div className="flex flex-col justify-center items-center gap-4 p-8">
        <h1 className="text-3xl font-bold">TicTacToe</h1>

        {!gamePlayer && (
          <>
            <div className="flex gap-4 text-white ">
              <button
                onClick={() => {
                  setGamePlayer(1);
                  setPlayer({ X: 'Player A', O: 'AI Player' });
                }}
                className="sm:text-lg text-sm font-semibold shadow-md  rounded-xl bg-green-700 hover:bg-green-600 cursor-pointer px-4 py-2"
              >
                1 Player Game
              </button>
              {gamePlayer !== 1 && (
                <button
                  onClick={() => {
                    setGamePlayer(2);
                    setPlayer({ X: 'Player A', O: 'Player B' });
                  }}
                  className="sm:text-lg text-sm font-semibold shadow-md rounded-xl bg-green-700 hover:bg-green-600 cursor-pointer px-4 py-2"
                >
                  2 Player Game
                </button>
              )}
            </div>
          </>
        )}

        {gamePlayer === 1 && !level && !isStarted && (
          <>
            <div className="flex flex-col gap-4">
              <p>Player Name</p>
              <input
                type="text"
                required
                value={player.X}
                className="h-10 rounded-lg px-2"
                onChange={(e) => setPlayer({ ...player, X: e.target.value })}
              />
            </div>
            <div className="flex gap-4">
              <button
                onClick={() => {
                  setLevel('easy');
                  setIsStarted(true);
                }}
                className="sm:text-lg text-sm text-white font-medium bg-blue-600 px-8 py-2 rounded-md hover:bg-blue-500"
              >
                Esay
              </button>
              <button
                onClick={() => {
                  setLevel('medium');
                  setIsStarted(true);
                }}
                className="sm:text-lg text-sm text-white font-medium bg-blue-600 px-8 py-2 rounded-md hover:bg-blue-500"
              >
                Medium
              </button>
              <button
                onClick={() => alert('Will be available soon')}
                className="sm:text-lg text-sm text-white font-medium bg-blue-600 px-8 py-2 rounded-md hover:bg-blue-500"
              >
                Hard
              </button>
            </div>
            {/* <button className='text-xl text-white font-medium bg-blue-600 px-8 py-2 rounded-md hover:bg-blue-500' onClick={() => setIsStarted(true)}>Start</button> */}
          </>
        )}
        {gamePlayer === 2 && !isStarted && (
          <>
            <div className="flex flex-col gap-4">
              <p>Player Name</p>
              <input
                type="text"
                required
                value={player.X}
                className="h-10 rounded-lg px-2"
                onChange={(e) => setPlayer({ ...player, X: e.target.value })}
              />
              <input
                type="text"
                required
                value={player.O}
                className="h-10 rounded-lg px-2"
                onChange={(e) => setPlayer({ ...player, O: e.target.value })}
              />
            </div>
            <button
              className="text-xl text-white font-medium bg-blue-600 px-8 py-2 rounded-md hover:bg-blue-500"
              onClick={() => setIsStarted(true)}
            >
              Start
            </button>
          </>
        )}

        {isStarted && (
          <>
            {/* <p>Player {gamePlayer} level {level}</p> */}
            <div className="font-medium text-gray-800">
              <h1 className="text-xl font-bold text-center">
                Game Points {level ? '(' + level.toUpperCase() + ')' : ''}
              </h1>
              <p className="text-center">
                {player.X || 'X'}: Points {response.score.X} & {player.O || 'O'}: Points{' '}
                {response.score.O}
              </p>
            </div>
            {response.draw && (
              <div className="text-2xl font-medium text-gray-800">Draw</div>
            )}

            {!response.draw && response.winner && (
              <div className="text-2xl font-medium text-gray-800">
                {player[response.winner]} is winner
              </div>
            )}

            {!response.draw && !response.winner && (
              <div className="text-2xl font-medium text-gray-800">
                {player[response.turn]} Turn
              </div>
            )}

            {/* Game Grid Board */}
            <div className="grid grid-cols-3 gap-4">
              {board.map((b, i) => {
                return (
                  <div
                    key={i}
                    className="text-6xl font-semibold border-2 rounded-xl hover:bg-slate-200 cursor-pointer shadow-md"
                  >
                    <button
                      className="h-28 w-28 hover:animate-spin"
                      onClick={() => handleClick(i, turn)}
                      disabled={b !== null}
                    >
                      {b}
                    </button>
                  </div>
                );
              })}
            </div>

            {/* Game Control */}
            <div className="flex gap-4">
              <button
                className="sm:text-lg text-sm text-white font-medium bg-blue-600 px-8 py-2 rounded-md hover:bg-blue-500"
                onClick={goToStart}
              >
                Go to Start
              </button>
              <button
                onClick={resetGame}
                className="sm:text-lg text-sm text-white font-medium bg-red-600 px-8 py-2 rounded-md hover:bg-red-500"
              >
                Reset Game
              </button>
            </div>
          </>
        )}
      </div>
    </SiteLayout>
  );
};

export default TicTacToeContainer;

'use client';
import { SiteLayout } from '@/layout';
import React, { useEffect, useState } from 'react';
import useTicTacToe from './hooks/useTicTacToe';
import { gamePlayerType, levelType } from './types/level.type';

const TicTacToe = () => {
  const [gamePlayer, setGamePlayer] = useState<gamePlayerType>(null);
  const [level, setLevel] = useState<levelType>(null);
  const [player, setPlayer] = useState<any>({
    X: 'Player A',
    O: 'Player B',
  });

  const {
    board,
    turn,
    setboard,
    handleClick,
    getStatusMessage,
    resetGame,
    getComputerMove,
  } = useTicTacToe();

  if (gamePlayer === 1 && turn === 'O') {
    setTimeout(() => {
      const index = getComputerMove(board, level);
      handleClick(index, 'O');
    }, 1000); // Delay of 1000 milliseconds (1 second)
  }

  const response = getStatusMessage();

  return (
    <SiteLayout className="bg-slate-300 min-h-[90vh]">
      <div className="flex flex-col justify-center items-center gap-8 p-8">
        <h1 className="text-3xl font-bold">TicTacToe</h1>

        {!gamePlayer && (
          <>
            <div className="flex gap-4 text-white ">
              <button
                onClick={() => {
                  setGamePlayer(1);
                  setPlayer({ X: 'Player A', O: 'AI Player' });
                }}
                className="text-lg font-semibold shadow-md  rounded-xl bg-green-700 hover:bg-green-600 cursor-pointer px-4 py-2"
              >
                1 Player Game
              </button>
              {gamePlayer !== 1 ? (
                <button
                  onClick={() => setGamePlayer(2)}
                  className="text-lg font-semibold shadow-md rounded-xl bg-green-700 hover:bg-green-600 cursor-pointer px-4 py-2"
                >
                  2 Player Game
                </button>
              ) : (
                ''
              )}
            </div>
          </>
        )}

        {gamePlayer === 1 && !level && (
          <div className="flex gap-4">
            <button
              onClick={() => setLevel('easy')}
              className="text-xl text-white font-medium bg-blue-600 px-8 py-2 rounded-md hover:bg-blue-500"
            >
              Esay
            </button>
            <button
              onClick={() => setLevel('medium')}
              className="text-xl text-white font-medium bg-blue-600 px-8 py-2 rounded-md hover:bg-blue-500"
            >
              Medium
            </button>
            <button
              onClick={() => alert('Will be available soon')}
              className="text-xl text-white font-medium bg-blue-600 px-8 py-2 rounded-md hover:bg-blue-500"
            >
              Hard
            </button>
          </div>
        )}

        {(gamePlayer && level) || gamePlayer === 2 ? (
          <>
            <div className="text-xl font-medium text-gray-800"></div>
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

            <div className="flex gap-4">
              <button
                className="text-lg text-white font-medium bg-blue-600 px-8 py-2 rounded-md hover:bg-blue-500"
                onClick={() => {
                  setGamePlayer(null);
                  setLevel(null);
                }}
              >
                Go to Start
              </button>
              <button
                onClick={resetGame}
                className="text-lg text-white font-medium bg-red-600 px-8 py-2 rounded-md hover:bg-red-500"
              >
                Reset Game
              </button>
            </div>
          </>
        ) : (
          ''
        )}
      </div>
    </SiteLayout>
  );
};

export default TicTacToe;

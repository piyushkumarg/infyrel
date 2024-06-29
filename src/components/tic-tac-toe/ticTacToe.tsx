'use client';
import { SiteLayout } from '@/layout';
import React, { useState } from 'react';
import useTicTacToe from './hooks/useTicTacToe';
import { Level } from './types/level.type';

const TicTacToe = () => {
  const [player, setplayer] = useState<number>(0);
  const [medium, setmedium] = useState<Level>(null);

  const {
    board,
    isXNext,
    setboard,
    handleClick,
    calculateWinner,
    getStatusMessage,
    resetGame,
    getComputerMove,
  } = useTicTacToe();

  if (player === 1 && !isXNext) {
    const i = getComputerMove(board, medium);
    console.log(`computer move ${i}`);
    handleClick(i, 1);
  }

  return (
    <SiteLayout className="bg-slate-300 min-h-[90vh]">
      <div className="flex flex-col justify-center items-center gap-8 p-8">
        <h1 className="text-3xl font-bold">TicTacToe</h1>

        {!player ? (
          <>
            <div className="flex gap-4 text-white ">
              <button
                onClick={() => setplayer(1)}
                className="text-lg font-semibold shadow-md  rounded-xl bg-green-700 hover:bg-green-600 cursor-pointer px-4 py-2"
              >
                1 Player Game
              </button>
              {player !== 1 ? (
                <button
                  onClick={() => setplayer(2)}
                  className="text-lg font-semibold shadow-md rounded-xl bg-green-700 hover:bg-green-600 cursor-pointer px-4 py-2"
                >
                  2 Player Game
                </button>
              ) : (
                ''
              )}
            </div>
          </>
        ) : (
          ''
        )}

        {player === 1 && !medium ? (
          <div className="flex gap-4">
            <button
              onClick={() => setmedium('easy')}
              className="text-xl text-white font-medium bg-blue-600 px-8 py-2 rounded-md hover:bg-blue-500"
            >
              Esay
            </button>
            <button
              onClick={() => alert('Will be available soon')}
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
        ) : (
          ''
        )}

        {(player && medium) || player === 2 ? (
          <>
            <div className="text-xl font-medium text-gray-800">
              {getStatusMessage()}
            </div>

            <div className="grid grid-cols-3 gap-4">
              {board.map((b, i) => {
                return (
                  <div
                    key={i}
                    className="text-6xl font-semibold border-2 rounded-xl hover:bg-slate-200 cursor-pointer shadow-md"
                  >
                    <button
                      className="h-28 w-28 hover:animate-spin"
                      onClick={() => handleClick(i, player)}
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
                  setplayer(0);
                  setmedium(null);
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

'use client';
import { SiteLayout } from '@/layout';
import type { NextPage } from 'next';
import Head from 'next/head';
import Board from './component/Board';
import Controls from './component/Control';
import {
  Modal,
  ModalBody,
  ModalContent,
  useDisclosure,
} from '@nextui-org/react';
import useSudoku from './hooks/useSudoku'; // Adjust the path as necessary

const Sudoku: NextPage = () => {
  const {
    board,
    mistakes,
    errorMessage,
    gameStatus,
    timer,
    score,
    handleCellChange,
    handleNewGame,
    handleSolve,
    isOpen,
    originalBoard,
    setIsOpen,
    formatTime,
  } = useSudoku();

  return (
    <SiteLayout className=" max-w-screen-sm lg:max-w-screen-md md:mx-auto  flex flex-col items-center md:justify-center px-4 py-[10px] min-h-[calc(100vh-80px)] ">
      <div className=" flex flex-col md:flex-row gap-2 md:gap-4">
        <div className="flex flex-col justify-center w-full  order-1 md:order-none ">
          <div className="flex justify-between items-center mb-1 md:mb-2  font-bold ">
            <div className=" text-xs md:text-sm lg:text-base font-bold">
              Mistakes: <span className="text-red-500">{mistakes}</span> / 3
            </div>
            <div className=" text-xs md:text-sm lg:text-base font-bold">
              Score: {score}
            </div>{' '}
            {/* Display score */}
            <div className=" text-xs md:text-sm lg:text-base font-bold ">
              Time: <span className="text-blue-500">{formatTime(timer)}</span>{' '}
            </div>
          </div>

          <Board
            board={board}
            originalBoard={originalBoard}
            onCellChange={handleCellChange}
          />
        </div>
        <Controls onNewGame={handleNewGame} onSolve={handleSolve} />
      </div>

      <Modal
        isOpen={isOpen}
        onOpenChange={setIsOpen}
        size="lg"
        backdrop="blur"
        classNames={{ body: 'py-16' }}
      >
        <ModalContent>
          <ModalBody>
            {gameStatus === 'won' && (
              <div className="text-center">
                <h2 className="text-2xl font-bold text-green-600">
                  Congratulations!
                </h2>
                <p className="text-sm">You&apos;ve won the game!</p>
              </div>
            )}
            {gameStatus === 'lost' && (
              <div className="text-center">
                <h2 className="text-3xl font-bold text-red-600">Game Over</h2>
                <p className="text-lg mt-1">
                  You&apos;ve made too many mistakes. Try again!
                </p>
              </div>
            )}
            {errorMessage && (
              <div
                className={`mt-2 text-center text-lg ${gameStatus === 'won' ? 'text-green-500' : 'text-red-500'}`}
              >
                {errorMessage}
              </div>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </SiteLayout>
  );
};

export default Sudoku;

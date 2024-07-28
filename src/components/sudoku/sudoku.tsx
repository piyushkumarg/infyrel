'use client'
import { SiteLayout } from '@/layout';
import { generateSudoku, isSafe, solveSudoku } from '@/utils/Sudoku';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useState, useEffect, useMemo } from 'react';
import Board from './component/Board';
import Controls from './component/Control';
import { Modal, ModalBody, ModalContent, useDisclosure } from '@nextui-org/react';

const MISTAKE_LIMIT = 3; // Set the mistake limit

const Sudoku: NextPage = () => {
  const [board, setBoard] = useState<number[][]>(generateSudoku('easy'));
  const [originalBoard, setOriginalBoard] = useState<number[][]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [mistakes, setMistakes] = useState<number>(0);
  const [gameStatus, setGameStatus] = useState<'playing' | 'won' | 'lost'>('playing');
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [timer, setTimer] = useState<number>(0); // Initialize timer state
  const [score, setScore] = useState<number>(0); // Initialize score state

  useEffect(() => {
    // Save the original board when a new game starts
    setOriginalBoard(board.map(row => row.slice()));
  }, [board]);

  useEffect(() => {
    if (gameStatus === 'won' || gameStatus === 'lost') {
      onOpen();
    }
  }, [gameStatus, onOpen]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (gameStatus === 'playing') {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [gameStatus]);

  const handleCellChange = (row: number, col: number, value: number) => {
    if (gameStatus !== 'playing') return; // Prevent changes if game is over

    const newBoard = board.map(r => r.slice());

    // Check if the value is being cleared (set to 0)
    if (value === 0) {
      newBoard[row][col] = value;
      setBoard(newBoard);
      setErrorMessage(null);
      return;
    }

    // Check if the value is between 1 and 9
    if (value < 1 || value > 9) {
      setErrorMessage("Please enter a number between 1 and 9.");
      return;
    }

    // Check if the new value violates Sudoku rules
    if (!isSafe(newBoard, row, col, value)) {
      const newMistakes = mistakes + 1;
      setMistakes(newMistakes);
      setErrorMessage(`Invalid move. Try again.`);

      if (newMistakes >= MISTAKE_LIMIT) {
        setGameStatus('lost');
        setErrorMessage("You lost! Too many mistakes.");
      }
      return;
    }

    // If we've reached here, the number is valid
    newBoard[row][col] = value;
    setBoard(newBoard);
    setErrorMessage(null);

    // Check if the game is won
    if (isBoardComplete(newBoard)) {
      setGameStatus('won');
      setErrorMessage("Congratulations! You won!");
      setScore((prevScore) => prevScore + 1); // Increment score when the game is won
    }
  };

  const handleNewGame = (difficulty: 'easy' | 'medium' | 'hard') => {
    const newBoard = generateSudoku(difficulty);
    setBoard(newBoard);
    setOriginalBoard(newBoard.map(row => row.slice()));
    setErrorMessage(null);
    setMistakes(0);
    setGameStatus('playing');
    setTimer(0);  // Reset timer when starting a new game
  };

  const handleSolve = () => {
    const solvedBoard = board.map(row => row.slice());
    solveSudoku(solvedBoard);
    setBoard(solvedBoard);
    setErrorMessage(null);
    setGameStatus('playing');
  };

  const isBoardComplete = (board: number[][]): boolean => {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (board[i][j] === 0 || (board[i][j] !== originalBoard[i][j] && originalBoard[i][j] !== 0)) {
          return false;
        }
      }
    }
    return true;
  };

  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <SiteLayout className="min-h-screen   flex flex-col items-center justify-center">
      <div className='flex justify-center gap-16'>
        <div className='max-w-[563px]  '>

          <div className="flex justify-between items-center  text-lg font-bold">
            <div className='mb-4 text-xl font-bold'>Mistakes: <span className="text-red-500">{mistakes}</span> / {MISTAKE_LIMIT}</div>

            <div className="mb-4 text-xl font-bold">Score: {score}</div> {/* Display score */}
            <div className="mb-4 text-xl font-bold">Time: {formatTime(timer)}</div>
          </div>

          <Board board={board} onChange={handleCellChange} />
        </div>
        <Controls onNewGame={handleNewGame} onSolve={handleSolve} />

      </div>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}
        size='lg'
        backdrop='blur'
        classNames={{ body: " py-16" }}
      >
        <ModalContent>
          <ModalBody>
            {gameStatus === 'won' && (
              <div className='text-center'>
                <h2 className="text-2xl font-bold text-green-600">Congratulations!</h2>
                <p className='text-sm'>You've won the game!</p>
              </div>
            )}
            {gameStatus === 'lost' && (
              <div className='text-center '>
                <h2 className="text-3xl font-bold text-red-600">Game Over</h2>
                <p className='text-lg mt-1'>You've made too many mistakes. Try again!</p>
              </div>
            )}
            {errorMessage && (
              <div className={`mt-2 text-center text-lg ${gameStatus === 'won' ? 'text-green-500' : 'text-red-500'}`}>
                {errorMessage}
              </div>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>


      {gameStatus !== 'playing' && (
        <div className={`mt-4 text-xl font-bold ${gameStatus === 'won' ? 'text-green-500' : 'text-red-500'}`}>
          {gameStatus === 'won' ? 'You Won!' : 'Game Over!'}
        </div>
      )}
    </SiteLayout>
  );
};

export default Sudoku;






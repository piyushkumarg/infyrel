import { useState, useEffect } from 'react';

const MISTAKE_LIMIT = 3; // Set the mistake limit

const generateSudoku = (difficulty: 'easy' | 'medium' | 'hard'): number[][] => {
  const emptyBoard = Array.from({ length: 9 }, () => Array(9).fill(0));
  fillSudoku(emptyBoard);

  // Set difficulty levels for the number of removed cells
  let difficultyLevel: number;
  switch (difficulty) {
    case 'easy':
      difficultyLevel = 40; // Easy: remove 40 cells
      break;
    case 'medium':
      difficultyLevel = 50; // Medium: remove 50 cells
      break;
    case 'hard':
      difficultyLevel = 60; // Hard: remove 60 cells
      break;
    default:
      difficultyLevel = 40; // Default to easy
  }

  removeNumbers(emptyBoard, difficultyLevel);
  return emptyBoard;
};

const fillSudoku = (board: number[][]): boolean => {
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (board[row][col] === 0) {
        for (let num = 1; num <= 9; num++) {
          if (isSafe(board, row, col, num)) {
            board[row][col] = num; // Place the number
            if (fillSudoku(board)) {
              // Recursively try to fill the rest
              return true;
            }
            board[row][col] = 0; // Backtrack if not successful
          }
        }
        return false; // No valid number found
      }
    }
  }
  return true; // Board is completely filled
};

const removeNumbers = (board: number[][], difficulty: number): void => {
  let attempts = difficulty;
  while (attempts > 0) {
    const row = Math.floor(Math.random() * 9);
    const col = Math.floor(Math.random() * 9);
    if (board[row][col] !== 0) {
      board[row][col] = 0;
      attempts--;
    }
  }
};

const isSafe = (
  board: number[][],
  row: number,
  col: number,
  num: number
): boolean => {
  // Check if num is not in the current row and column
  for (let x = 0; x < 9; x++) {
    if (board[row][x] === num || board[x][col] === num) {
      return false;
    }
  }

  // Check if num is in the current 3x3 subgrid
  const startRow = row - (row % 3);
  const startCol = col - (col % 3);
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[i + startRow][j + startCol] === num) {
        return false;
      }
    }
  }

  return true; // Safe to place num
};

const solveSudoku = (board: number[][]): boolean => {
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (board[row][col] === 0) {
        for (let num = 1; num <= 9; num++) {
          if (isSafe(board, row, col, num)) {
            board[row][col] = num; // Place the number
            if (solveSudoku(board)) {
              // Recursively try to solve
              return true;
            }
            board[row][col] = 0; // Backtrack if not successful
          }
        }
        return false; // No valid number found
      }
    }
  }
  return true; // Board is completely solved
};

const useSudoku = () => {
  const [board, setBoard] = useState<number[][]>(generateSudoku('easy'));
  const [originalBoard, setOriginalBoard] = useState<number[][]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [mistakes, setMistakes] = useState<number>(0);
  const [gameStatus, setGameStatus] = useState<'playing' | 'won' | 'lost'>(
    'playing'
  );
  const [timer, setTimer] = useState<number>(0);
  const [score, setScore] = useState<number>(0);

  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    setOriginalBoard(board.map((row) => row.slice()));
  }, [board]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (gameStatus === 'playing') {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [gameStatus]);

  useEffect(() => {
    if (gameStatus === 'won' || gameStatus === 'lost') {
      setIsOpen(true);
    }
  }, [gameStatus]);

  const handleCellChange = (row: number, col: number, value: number) => {
    if (gameStatus !== 'playing') return;

    const newBoard = board.map((r) => r.slice());

    if (value === 0) {
      newBoard[row][col] = value;
      setBoard(newBoard);
      setErrorMessage(null);
      return;
    }

    if (value < 1 || value > 9) {
      setErrorMessage('Please enter a number between 1 and 9.');
      return;
    }

    if (!isSafe(newBoard, row, col, value)) {
      const newMistakes = mistakes + 1;
      setMistakes(newMistakes);
      setErrorMessage('Invalid move. Try again.');

      if (newMistakes >= MISTAKE_LIMIT) {
        setGameStatus('lost');
        setErrorMessage('You lost! Too many mistakes.');
      }
      return;
    }

    newBoard[row][col] = value;
    setBoard(newBoard);
    setErrorMessage(null);

    if (isBoardComplete(newBoard)) {
      setGameStatus('won');
      setErrorMessage('Congratulations! You won!');
      setScore((prevScore) => prevScore + 1);
    }
  };

  const handleNewGame = (difficulty: 'easy' | 'medium' | 'hard') => {
    const newBoard = generateSudoku(difficulty);
    setBoard(newBoard);
    setOriginalBoard(newBoard.map((row) => row.slice())); // Ensure this is defined properly
    setErrorMessage(null);
    setMistakes(0);
    setGameStatus('playing');
    setTimer(0); // Reset timer when starting a new game
  };

  const handleSolve = () => {
    const solvedBoard = board.map((row) => row.slice());
    solveSudoku(solvedBoard);
    setBoard(solvedBoard);
    setErrorMessage(null);
    setGameStatus('playing');
  };

  const isBoardComplete = (board: number[][]): boolean => {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (
          board[i][j] === 0 ||
          (board[i][j] !== originalBoard[i][j] && originalBoard[i][j] !== 0)
        ) {
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

  return {
    board,
    originalBoard,
    errorMessage,
    mistakes,
    gameStatus,
    timer,
    score,
    isOpen,
    setIsOpen,
    handleCellChange,
    handleNewGame,
    handleSolve,
    formatTime,
  };
};

export default useSudoku;

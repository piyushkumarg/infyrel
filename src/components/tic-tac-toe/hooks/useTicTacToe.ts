import { useState } from 'react';
import { Level } from '../types/level.type';

const initialBoard = () => Array(9).fill(null);

const useTicTacToe = () => {
  const [board, setboard] = useState(initialBoard());
  const [isXNext, setisXNext] = useState(true);

  const WINNING_PATTERNS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const calculateWinner = (currentBoard: Array<number>) => {
    for (let i = 0; i < WINNING_PATTERNS.length; i++) {
      const [a, b, c] = WINNING_PATTERNS[i];

      if (
        currentBoard[a] &&
        currentBoard[a] === currentBoard[b] &&
        currentBoard[a] === currentBoard[c]
      ) {
        return currentBoard[a];
      }
    }

    return null;
  };

  const handleClick = (i: number, player: number) => {
    //check for winner
    const winner = calculateWinner(board);
    if (winner || board[i]) return;

    const newBoard = [...board];
    newBoard[i] = isXNext ? 'x' : 'o';
    setboard(newBoard);
    setisXNext(!isXNext);
  };

  const getComputerMove = (
    board: Array<string | null>,
    medium: Level
  ): number => {
    if (medium === 'easy') {
      const emptySquares = board.reduce((acc, square, index) => {
        if (square === null) {
          acc.push(index);
        }
        return acc;
      }, [] as number[]);

      const randomIndex = Math.floor(Math.random() * emptySquares.length);
      return emptySquares[randomIndex];
    }
    return 0;
  };

  const getStatusMessage = () => {
    const winner = calculateWinner(board);
    console.log(`winner ${winner}`);
    if (winner) return `Player ${winner} wins!`;
    if (!board.includes(null)) return `It's a draw!`;

    return `Player ${isXNext ? 'X' : 'O'} turn`;
  };

  const resetGame = () => {
    setboard(initialBoard());
    setisXNext(true);
  };

  return {
    board,
    isXNext,
    setboard,
    handleClick,
    calculateWinner,
    getStatusMessage,
    resetGame,
    getComputerMove,
  };
};

export default useTicTacToe;

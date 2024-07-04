import { useState } from 'react';
import { levelType, turnType } from '../types/level.type';

const initialBoard = () => Array(9).fill(null);

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

const calculateWinner = (currentBoard: Array<string | null>): string | null => {
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

const chekWinProbability = (board: Array<string | null>, turn: string) => {
  return WINNING_PATTERNS.some((pattern) =>
    pattern.every((index) => board[index] === turn)
  );
};

const useTicTacToe = () => {
  const [board, setboard] = useState(initialBoard());
  const [turn, setTurn] = useState<turnType>('X');

  const handleClick = (index: number, turn: turnType) => {
    //check for winner
    const winner = calculateWinner(board);
    if (winner || board[index]) return;

    const newBoard = [...board];
    newBoard[index] = turn;
    setboard(newBoard);
    setTurn(turn === 'X' ? 'O' : 'X');
  };

  const getComputerMove = (
    board: Array<string | null>,
    level: levelType
  ): number => {
    // console.log(`computer move ${level} & turn:${turn} & board ${board}`);
    if (level === 'easy') {
      // console.log('level easy');
      const emptySquares = board.reduce((acc, square, index) => {
        if (square === null) {
          acc.push(index);
        }
        return acc;
      }, [] as number[]);

      const randomIndex = Math.floor(Math.random() * emptySquares.length);
      return emptySquares[randomIndex];
    } else if (level === 'medium') {
      // console.log('level medium');
      const opponent = turn === 'X' ? 'O' : 'X';

      // Check for a winning move
      for (let i = 0; i < board.length; i++) {
        if (board[i] === null) {
          board[i] = turn;
          if (chekWinProbability(board, turn)) {
            // console.log(`move: ${turn} ${i} winning for me`);
            board[i] = null;
            return i;
          }
          board[i] = null;
        }
      }

      // Check for a blocking move
      for (let i = 0; i < board.length; i++) {
        if (board[i] === null) {
          board[i] = opponent;
          if (chekWinProbability(board, opponent)) {
            // console.log(`move: ${opponent} ${i} block win`);
            board[i] = null;
            return i;
          }
          board[i] = null;
        }
      }

      // Pick a random available index
      const emptySquares = board.reduce((acc, square, index) => {
        if (square === null) {
          acc.push(index);
        }
        return acc;
      }, [] as number[]);

      const randomIndex = Math.floor(Math.random() * emptySquares.length);
      // console.log(`move random: ${turn} index: ${emptySquares[randomIndex]}`);
      return emptySquares[randomIndex];
    } else if (level === 'hard') {
      // console.log('level hard');
      return 0;
    }
    return 0; // should never happen
  };

  const getStatusMessage = (): {
    winner: string | null;
    draw: boolean;
    turn: turnType;
  } => {
    const winner = calculateWinner(board);

    if (winner)
      return {
        winner,
        draw: false,
        turn,
      };

    if (!board.includes(null))
      return {
        winner: null,
        draw: true,
        turn,
      };

    return {
      winner: null,
      draw: false,
      turn,
    };
  };

  const resetGame = () => {
    setboard(initialBoard());
    setTurn('X');
  };

  return {
    board,
    turn,
    setboard,
    handleClick,
    getStatusMessage,
    resetGame,
    getComputerMove,
  };
};

export default useTicTacToe;

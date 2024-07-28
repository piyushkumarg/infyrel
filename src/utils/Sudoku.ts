export const generateSudoku = (
  difficulty: 'easy' | 'medium' | 'hard'
): number[][] => {
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

export const isSafe = (
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

export const solveSudoku = (board: number[][]): boolean => {
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

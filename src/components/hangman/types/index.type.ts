export type LevelType = 'easy' | 'medium' | 'hard';
export interface HangmanWordInterface {
  guessedLetters: string[];
  wordToGuess: string;
  reveal?: boolean;
}

export interface HangmanDrawingInterface {
  numberOfGuesses: number;
}

export interface KeyboardInterface {
  disabled?: boolean;
  activeLetters: string[];
  inactiveLetters: string[];
  addGuessedLetter: (letter: string) => void;
}
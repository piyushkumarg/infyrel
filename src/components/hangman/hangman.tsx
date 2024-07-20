'use client';
import { HangmanDrawing } from './components/hangmanDrawing';
import { HangmanWord } from './components/hangmanWord';
import { Keyboard } from './components/keyboard';

import { SiteLayout } from '@/layout';
import useHangman from './hooks/useHangman';

function Hangman() {
  const {
    isLoser,
    isWinner,
    incorrectLetters,
    wordToGuess,
    guessedLetters,
    addGuessedLetter,
    handleStartGame,
  } = useHangman();

  // console.log({
  //   isLoser,
  //   isWinner,
  //   incorrectLetters,
  //   wordToGuess,
  //   guessedLetters,
  // });

  return (
    <SiteLayout className="min-h-[90vh]">
      <div className="flex flex-col gap-4 p-8">
        <h1 className="text-3xl font-bold text-center">
          HANGMAN (Guess the word)
        </h1>
        <div className="text-2xl text-center">
          {isWinner && 'Winner! - Restart to try again'}
          {isLoser && 'Nice Try again! - Restart to try again'}
        </div>
        <div className="flex lg:flex-row flex-col md:justify-between items-center p-8 gap-4 ">
          <HangmanDrawing numberOfGuesses={incorrectLetters.length} />

          <div className="flex flex-col gap-4 items-center">
            <HangmanWord
              reveal={isLoser}
              guessedLetters={guessedLetters}
              wordToGuess={wordToGuess}
            />
            <Keyboard
              disabled={isWinner || isLoser}
              activeLetters={guessedLetters.filter((letter) =>
                wordToGuess.includes(letter)
              )}
              inactiveLetters={incorrectLetters}
              addGuessedLetter={addGuessedLetter}
            />
            {(isLoser || isWinner) && (
              <button
                className="sm:text-lg text-sm text-white font-medium bg-blue-600 px-8 py-2 rounded-md hover:bg-blue-500"
                onClick={handleStartGame}
              >
                Start Game
              </button>
            )}
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}

export default Hangman;

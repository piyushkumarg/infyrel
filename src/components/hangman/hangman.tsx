'use client';
import { HangmanDrawing } from './components/hangmanDrawing';
import { HangmanWord } from './components/hangmanWord';
import { Keyboard } from './components/keyboard';
import { SiteLayout } from '@/layout';
import useHangman from './hooks/useHangman';
import { LevelType } from './types/index.type';
import { useEffect, useState } from 'react';
import HowToPlayHangman from './components/howToPlayHangman';

function Hangman() {
  const levelArray = ['easy', 'medium', 'hard'];

  const {
    level,
    isLoser,
    setLevel,
    isWinner,
    incorrectLetters,
    wordToGuess,
    guessedLetters,
    addGuessedLetter,
    handleStartGame,
    scoreBoard,
  } = useHangman();

  return (
    <SiteLayout className="min-h-[90vh]">
      <div className="flex flex-col gap-4 md:p-8 p-4 justify-center items-center">
        <h1 className="text-3xl font-bold text-center">
          HANGMAN (Guess the word)
        </h1>
        <div className="text-2xl">
          {isWinner && 'Winner! - Restart to try again'}
          {isLoser && 'Nice Try again! - Restart to try again'}
        </div>

        <div className="text-xl font-semibold flex gap-2 justify-center items-center">
          Select the level:
          <select
            name="level"
            id="level"
            value={level}
            className="p-1 border-2 font-medium border-black rounded-md"
            onChange={(e) => {
              setLevel(e.target.value as LevelType);
            }}
          >
            {levelArray.map((level) => (
              <option key={level} value={level}>
                {level.toUpperCase()}
              </option>
            ))}
          </select>
        </div>

        <div className="text-xl font-medium">
          Points: {scoreBoard.points} | Total Win Count:{' '}
          {scoreBoard.totalWinCount} | Total Lose Count:{' '}
          {scoreBoard.totalLoseCount}
        </div>

        <div className="flex w-full lg:flex-row flex-col md:justify-between items-center pt-8 gap-4">
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
                onClick={() => handleStartGame()}
              >
                Guess More
              </button>
            )}
          </div>
        </div>
        <HowToPlayHangman />
      </div>
    </SiteLayout>
  );
}

export default Hangman;

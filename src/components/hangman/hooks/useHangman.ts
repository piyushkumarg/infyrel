import { useCallback, useEffect, useState } from 'react';
import words from './wordList.json';

const useHangman = () => {
  const [wordToGuess, setWordToGuess] = useState('test');
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  const getWord = () => {
    return words[Math.floor(Math.random() * words.length)];
  };

  const incorrectLetters = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  );

  const isLoser = incorrectLetters.length >= 6;

  const isWinner = wordToGuess
    .split('')
    .every((letter) => guessedLetters.includes(letter));

  const addGuessedLetter = useCallback(
    (letter: string) => {
      if (guessedLetters.includes(letter) || isLoser || isWinner) return;

      setGuessedLetters((currentLetters) => [...currentLetters, letter]);
    },
    [guessedLetters, isWinner, isLoser]
  );

  const fillGuessedLettersForLevelOfGame = useCallback(() => {
    if (wordToGuess.length > 3) {
      const randomLetters = [];
      for (let i = 0; i < 2; i++) {
        const randomIndex = Math.floor(Math.random() * wordToGuess.length);
        randomLetters.push(wordToGuess[randomIndex]);
      }
      setGuessedLetters(randomLetters);
    } else {
      const randomIndex = Math.floor(Math.random() * wordToGuess.length);
      setGuessedLetters([wordToGuess[randomIndex]]);
    }
  }, [wordToGuess]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (!key.match(/^[a-z]$/)) return;

      e.preventDefault();
      addGuessedLetter(key);
    };

    document.addEventListener('keypress', handler);

    return () => {
      document.removeEventListener('keypress', handler);
    };
  }, [guessedLetters]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (key !== 'Enter') return;

      e.preventDefault();
      setGuessedLetters([]);
      setWordToGuess(getWord());
    };

    document.addEventListener('keypress', handler);

    return () => {
      document.removeEventListener('keypress', handler);
    };
  }, []);

  useEffect(() => {
    fillGuessedLettersForLevelOfGame();
  }, [wordToGuess]);

  const handleStartGame = () => {
    setWordToGuess(getWord());
    setGuessedLetters([]);
  };

  return {
    getWord,
    isWinner,
    isLoser,
    incorrectLetters,
    wordToGuess,
    guessedLetters,
    addGuessedLetter,
    handleStartGame,
  };
};

export default useHangman;

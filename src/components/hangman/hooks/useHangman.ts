import { useCallback, useEffect, useState } from 'react';
import words from './wordList.json';
import { LevelType, scoreBoardInterface } from '../types/index.type';

const intialScoreBoard: scoreBoardInterface = {
  points: 0,
  winCount: 0,
  loseCount: 0,
  totalWinCount: 0,
  totalLoseCount: 0,
};

const useHangman = () => {
  const [wordToGuess, setWordToGuess] = useState('test');
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [level, setLevel] = useState<LevelType>('easy');
  const [scoreBoard, setScoreBoard] =
    useState<scoreBoardInterface>(intialScoreBoard);

  const incorrectLetters = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  );

  const isLoser = incorrectLetters.length >= 6;

  const isWinner = wordToGuess
    .split('')
    .every((letter) => guessedLetters.includes(letter));

  const calculateScoreBoard = useCallback(() => {
    if (isWinner && !isLoser) {
      setScoreBoard({
        ...scoreBoard,
        points: scoreBoard.points + 5,
        winCount: scoreBoard.winCount + 1,
        totalWinCount: scoreBoard.totalWinCount + 1,
      });
    } else if (isLoser && !isWinner) {
      if (scoreBoard.loseCount === 3) {
        setScoreBoard({
          ...scoreBoard,
          loseCount: 0,
          points: scoreBoard.points - 1,
          totalLoseCount: scoreBoard.totalLoseCount + 1,
        });
        return;
      } else {
        setScoreBoard({
          ...scoreBoard,
          loseCount: scoreBoard.loseCount + 1,
          totalLoseCount: scoreBoard.totalLoseCount + 1,
        });
      }
    }
  }, [isWinner, isLoser]);

  const getWord = async () => {
    let filteredWords = [];
    switch (level) {
      case 'easy':
        filteredWords = words.filter((w) => w.length <= 6);
        console.log(
          `filteredWords: ${filteredWords.length} Total words: ${words.length}`
        );
        return filteredWords[Math.floor(Math.random() * filteredWords.length)];

      case 'medium':
        filteredWords = words.filter((w) => w.length <= 7 && w.length >= 4);
        console.log(
          `filteredWords: ${filteredWords.length} Total words: ${words.length}`
        );
        return filteredWords[Math.floor(Math.random() * filteredWords.length)];

      case 'hard':
        filteredWords = words.filter((w) => w.length >= 4);
        console.log(
          `filteredWords: ${filteredWords.length} Total words: ${words.length}`
        );
        return filteredWords[Math.floor(Math.random() * filteredWords.length)];

      default:
        return words[Math.floor(Math.random() * words.length)];
    }
  };

  const addGuessedLetter = useCallback(
    (letter: string) => {
      if (guessedLetters.includes(letter) || isLoser || isWinner) return;

      setGuessedLetters((currentLetters) => [...currentLetters, letter]);
    },
    [guessedLetters, isWinner, isLoser]
  );

  const getRandomLetterToFill = useCallback((word: string, length: number) => {
    const randomLetters = [];
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * word.length);
      randomLetters.push(word[randomIndex]);
    }

    return randomLetters;
  }, []);

  const fillGuessedLettersForLevelOfGame = useCallback(
    async (word: string) => {
      console.log(
        'fillGuessedLettersForLevelOfGame: ',
        level,
        word,
        wordToGuess,
        word === wordToGuess
      );

      if (word === wordToGuess) {
        console.log('fillGuessedLettersForLevelOfGame: Inside CORRECT');
        word = await getWord();
        setWordToGuess(word);
        console.log(word, wordToGuess);
      }

      switch (level) {
        case 'easy':
          console.log(
            'fillGuessedLettersForLevelOfGame: Inside EASY',
            word.length,
            word
          );
          if (word.length > 4) {
            setGuessedLetters(getRandomLetterToFill(word, 3));
          } else if (word.length == 4) {
            setGuessedLetters(getRandomLetterToFill(word, 2));
          } else {
            setGuessedLetters(getRandomLetterToFill(word, 1));
          }
          break;
        case 'medium':
          console.log(
            'fillGuessedLettersForLevelOfGame: Inside MEDIUM',
            word.length,
            word
          );
          if (word.length > 5) {
            setGuessedLetters(getRandomLetterToFill(word, 3));
          } else if (word.length == 5) {
            setGuessedLetters(getRandomLetterToFill(word, 2));
          } else {
            setGuessedLetters(getRandomLetterToFill(word, 1));
          }
          break;
        case 'hard':
          console.log(
            'fillGuessedLettersForLevelOfGame: Inside HARD',
            word.length,
            word
          );
          if (word.length > 8) {
            setGuessedLetters(getRandomLetterToFill(word, 3));
          } else if (word.length <= 8 && word.length > 5) {
            setGuessedLetters(getRandomLetterToFill(word, 2));
          } else {
            setGuessedLetters(getRandomLetterToFill(word, 0));
          }
          break;
        default:
          break;
      }

      console.log('fillGuessedLettersForLevelOfGame: ', word);
    },
    [wordToGuess, level, getRandomLetterToFill]
  );

  const handleChangeLevel = useCallback(
    async (level: LevelType) => {
      setScoreBoard(intialScoreBoard);
      console.log('handleChangeLevel: ', level);
      switch (level) {
        case 'easy':
          fillGuessedLettersForLevelOfGame(wordToGuess);
          break;

        case 'medium':
          fillGuessedLettersForLevelOfGame(wordToGuess);

          break;
        case 'hard':
          fillGuessedLettersForLevelOfGame(wordToGuess);
          break;
      }
    },
    [fillGuessedLettersForLevelOfGame, wordToGuess, level]
  );

  const handleStartGame = useCallback(async () => {
    setWordToGuess(await getWord());
    fillGuessedLettersForLevelOfGame(wordToGuess);
    setGuessedLetters([]);
  }, [handleChangeLevel]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      console.log(`key : ${key}`);
      console.log(`isWinner: ${isWinner} isLoser: ${isLoser}`);
      if (key === 'Enter' && (isWinner || isLoser)) {
        handleStartGame();
      }
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
    handleChangeLevel(level);
  }, [level]);

  useEffect(() => {
    calculateScoreBoard();
  }, [calculateScoreBoard]);

  console.log('render: ', guessedLetters, wordToGuess, level);

  return {
    isWinner,
    level,
    setLevel,
    isLoser,
    incorrectLetters,
    wordToGuess,
    guessedLetters,
    addGuessedLetter,
    handleStartGame,
    handleChangeLevel,
    scoreBoard,
  };
};

export default useHangman;

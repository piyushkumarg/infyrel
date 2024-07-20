import { HangmanWordInterface } from '../types/index.type';

export function HangmanWord({
  guessedLetters,
  wordToGuess,
  reveal = false,
}: HangmanWordInterface) {
  return (
    <div className="flex gap-2 lg:text-6xl md:text-4xl text-2xl font-bold uppercase">
      {wordToGuess.split('').map((letter, index) => (
        <div
          className="border-b-4 border-blue-500 min-w-[50px] min-h-[50px] "
          key={index}
        >
          <div
            className={`text-center p-2 ${guessedLetters.includes(letter) || reveal ? 'visible' : 'hidden'} ${!guessedLetters.includes(letter) && reveal ? 'text-red-500' : 'text-black'}`}
          >
            {letter}
          </div>
        </div>
      ))}
    </div>
  );
}

import { HangmanWordInterface } from '../types/index.type';

export function HangmanWord({
  guessedLetters,
  wordToGuess,
  reveal = false,
}: HangmanWordInterface) {
  return (
    <div className="flex gap-2 lg:text-6xl md:text-4xl text-2xl font-semibold uppercase flex-wrap justify-center">
      {wordToGuess.split('').map((letter, index) => (
        <div
          className="border-b-4 border-blue-500 rounded-lg shadow-md md:min-w-[50px] md:min-h-[50px] w-[40px] h-[40px] flex justify-center items-center text-3xl font-bold text-black"
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

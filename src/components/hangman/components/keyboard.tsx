import { KeyboardInterface } from '../types/index.type';

const KEYS = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

export function Keyboard({
  activeLetters,
  inactiveLetters,
  addGuessedLetter,
  disabled = false,
}: KeyboardInterface) {
  return (
    <div className="flex gap-1 flex-wrap max-w-[650px] justify-center">
      {KEYS.map((key) => {
        const isActive = activeLetters.includes(key);
        const isInactive = inactiveLetters.includes(key);
        return (
          <button
            onClick={() => addGuessedLetter(key)}
            className={`md:w-[65px] md:h-[65px] w-[45px] h-[45px] border-2  uppercase border-black shadow-md rounded-lg lg:text-2xl md:text-xl text-lg font-bold p-1 cursor-pointer hover:bg-sky-400 ${isActive ? 'bg-sky-500 text-white hover:bg-sky-500' : ''} ${isInactive ? 'opacity-50 bg-slate-300 hover:bg-slate-300' : ''} ${disabled ? 'opacity-25 hover:bg-transparent' : ''} `}
            disabled={isInactive || isActive || disabled}
            key={key}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
}

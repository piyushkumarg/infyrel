import {
  FaArrowUp,
  FaArrowDown,
  FaArrowLeft,
  FaArrowRight,
} from 'react-icons/fa';
import { DirectionType } from '../hooks/useSnakeGame';

const Controller = ({
  moveSnake,
}: {
  moveSnake: (direction: DirectionType) => void;
}) => {
  return (
    <div className="flex flex-col items-center justify-center">
      {/* Up Button */}
      <button
        onClick={() => moveSnake('UP')}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded  opacity-50 hover:opacity-80 transition-opacity duration-300"
      >
        <FaArrowUp size={24} />
      </button>

      <div className="flex justify-between w-44">
        {/* Left Button */}
        <button
          onClick={() => moveSnake('LEFT')}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded opacity-50 hover:opacity-80 transition-opacity duration-300"
        >
          <FaArrowLeft size={24} />
        </button>

        {/* Right Button */}
        <button
          onClick={() => moveSnake('RIGHT')}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded opacity-50 hover:opacity-80 transition-opacity duration-300"
        >
          <FaArrowRight size={24} />
        </button>
      </div>

      {/* Down Button */}
      <button
        onClick={() => moveSnake('DOWN')}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded  opacity-50 hover:opacity-80 transition-opacity duration-300"
      >
        <FaArrowDown size={24} />
      </button>
    </div>
  );
};

export default Controller;

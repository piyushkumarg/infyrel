'use client';
import Tetris from './components/tetris';
import useGameOver from './hooks/useGameOver';

const rows = 20;
const columns = 10;
const TetrisGame = () => {
  const { gameOver, setGameOver, resetGameOver } = useGameOver();

  return (
    <div className="Game">
      {gameOver ? (
        <div className="flex justify-center items-center min-h-[50vh] z-[100]">
          <button
            className="px-[80px] py-[40px] text-[2em] rounded-[20px] border-none shadow-[0px_0px_60px_rgba(0,0,0,0.5)] cursor-pointer"
            onClick={() => resetGameOver()}
          >
            Play Tetris
          </button>
        </div>
      ) : (
        <Tetris rows={rows} columns={columns} setGameOver={setGameOver} />
      )}
    </div>
  );
};

export default TetrisGame;

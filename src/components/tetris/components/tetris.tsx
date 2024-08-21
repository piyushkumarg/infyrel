import Board from './board';
import GameController from './gameController';
import GameStats from './gameStats';
import Previews from './previews';
import { useBoard } from '../hooks/useBoard';
import { useGameStats } from '../hooks/useGameStats';
import { usePlayer } from '../hooks/usePlayer';

const Tetris = ({ rows, columns, setGameOver }: any) => {
  const { gameStats, addLinesCleared } = useGameStats();
  const { player, setPlayer, resetPlayer } = usePlayer();
  const { board, setBoard } = useBoard({
    rows,
    columns,
    player,
    resetPlayer,
    addLinesCleared,
  });

  return (
    <div className="relative">
      <Board board={board} />
      <GameStats gameStats={gameStats} />
      <Previews tetrominoes={player.tetrominoes} />
      <GameController
        board={board}
        gameStats={gameStats}
        player={player}
        setGameOver={setGameOver}
        setPlayer={setPlayer}
      />
    </div>
  );
};

export default Tetris;

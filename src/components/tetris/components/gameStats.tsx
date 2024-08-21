import { memo } from 'react';

const GameStats = ({ gameStats }: any) => {
  const { level, points, linesCompleted, linesPerLevel } = gameStats;
  const linesToLevel = linesPerLevel - linesCompleted;

  return (
    <ul className="absolute w-[22vw] list-none text-[rgba(255,255,255,0.5)] right-0 top-[22vh] text-left">
      <li>Level</li>
      <li className="text-[2.8rem] mb-[0.5em] text-yellow-400">{level}</li>
      <li>Lines to level</li>
      <li className="text-[2.8rem] mb-[0.5em] text-yellow-400">
        {linesToLevel}
      </li>
      <li>Points</li>
      <li className="text-[2.8rem] mb-[0.5em] text-yellow-400">{points}</li>
    </ul>
  );
};

export default memo(GameStats);

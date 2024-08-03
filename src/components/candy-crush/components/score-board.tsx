import React from 'react';

const ScoreBoard = ({ score }: { score: number }) => {
  return (
    <div className="scoreBoard">
      <div className="flex gap-2 bg-green-600 py-2 px-5 rounded-3xl shadow-2xl shadow-black text-white font-medium text-xl">
        <p>Score: {score}</p>
      </div>
    </div>
  );
};

export default ScoreBoard;

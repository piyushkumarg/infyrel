import React from 'react';

interface FoodProps {
  dot: number[];
}

const Food: React.FC<FoodProps> = ({ dot }) => {
  return (
    <div
      className="absolute bg-red-500"
      style={{
        left: `${dot[0]}%`,
        top: `${dot[1]}%`,
        width: '2%',
        height: '2%',
      }}
    />
  );
};

export default Food;

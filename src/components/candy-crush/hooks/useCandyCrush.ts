import { useState } from 'react';
const width = 8;
const candyColors = [
  '/candy-crush/blue-candy.png',
  '/candy-crush/orange-candy.png',
  '/candy-crush/purple-candy.png',
  '/candy-crush/red-candy.png',
  '/candy-crush/yellow-candy.png',
  '/candy-crush/green-candy.png',
];

const useCandyCrush = () => {
  const [currentColorArrangement, setCurrentColorArrangement] = useState<
    Array<string>
  >([]);
  const [scoreDisplay, setScoreDisplay] = useState(0);

  const createBoard = () => {
    const randomColorManagement = [];
    for (let i = 0; i < width * width; i++) {
      const randomColor =
        candyColors[Math.floor(Math.random() * candyColors.length)];
      randomColorManagement.push(randomColor);
    }
    setCurrentColorArrangement(randomColorManagement);
  };

  return {
    width,
    createBoard,
    scoreDisplay,
    currentColorArrangement,
    setCurrentColorArrangement,
  };
};

export default useCandyCrush;

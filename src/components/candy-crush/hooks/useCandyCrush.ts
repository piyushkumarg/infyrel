import { useState, useEffect, DragEvent } from 'react';
const width = 8;
const candyColors = [
  '/candy-crush/blue-candy.png',
  '/candy-crush/orange-candy.png',
  '/candy-crush/purple-candy.png',
  '/candy-crush/red-candy.png',
  '/candy-crush/yellow-candy.png',
  '/candy-crush/green-candy.png',
];
const blank = '/candy-crush/blank.png';

const useCandyCrush = () => {
  const [currentColorArrangement, setCurrentColorArrangement] = useState<
    Array<string>
  >([]);
  const [scoreDisplay, setScoreDisplay] = useState<number>(0);
  const [squareBeingDragged, setSquareBeingDragged] =
    useState<HTMLImageElement | null>(null);
  const [squareBeingReplaced, setSquareBeingReplaced] =
    useState<HTMLImageElement | null>(null);

  const createBoard = () => {
    const randomColorManagement = [];
    for (let i = 0; i < width * width; i++) {
      const randomColor =
        candyColors[Math.floor(Math.random() * candyColors.length)];
      randomColorManagement.push(randomColor);
    }
    setCurrentColorArrangement(randomColorManagement);
  };

  const checkForColumnOfFour = () => {
    for (let i = 0; i <= 39; i++) {
      const columnOfFour = [i, i + width, i + width * 2, i + width * 3];
      const decidedColor = currentColorArrangement[i];
      const isBlank = currentColorArrangement[i] === blank;

      if (
        columnOfFour.every(
          (square) =>
            currentColorArrangement[square] === decidedColor && !isBlank
        )
      ) {
        setScoreDisplay((score) => score + 4);
        columnOfFour.forEach(
          (square) => (currentColorArrangement[square] = blank)
        );
        return true;
      }
    }
  };

  const checkForRowOfFour = () => {
    for (let i = 0; i < 64; i++) {
      const rowOfFour = [i, i + 1, i + 2, i + 3];
      const decidedColor = currentColorArrangement[i];

      const notValid = [
        5, 6, 7, 13, 14, 15, 21, 22, 23, 29, 30, 31, 37, 38, 39, 45, 46, 47, 53,
        54, 55, 62, 63, 64,
      ];
      const isBlank = currentColorArrangement[i] === blank;

      if (notValid.includes(i)) continue;

      if (
        rowOfFour.every(
          (square) =>
            currentColorArrangement[square] === decidedColor && !isBlank
        )
      ) {
        setScoreDisplay((score) => score + 4);
        rowOfFour.forEach(
          (square) => (currentColorArrangement[square] = blank)
        );
        return true;
      }
    }
  };

  const checkForColumnOfThree = () => {
    for (let i = 0; i <= 47; i++) {
      const columnOfThree = [i, i + width, i + width * 2];
      const decidedColor = currentColorArrangement[i];
      const isBlank = currentColorArrangement[i] === blank;

      if (
        columnOfThree.every(
          (square) =>
            currentColorArrangement[square] === decidedColor && !isBlank
        )
      ) {
        setScoreDisplay((score) => score + 3);
        columnOfThree.forEach(
          (square) => (currentColorArrangement[square] = blank)
        );
        return true;
      }
    }
  };

  const checkForRowOfThree = () => {
    for (let i = 0; i < 64; i++) {
      const rowOfThree = [i, i + 1, i + 2];
      const decidedColor = currentColorArrangement[i];
      const isBlank = currentColorArrangement[i] === blank;

      const notValid = [
        6, 7, 14, 15, 22, 23, 30, 31, 38, 39, 46, 47, 54, 55, 63, 64,
      ];
      if (notValid.includes(i)) continue;

      if (
        rowOfThree.every(
          (square) =>
            currentColorArrangement[square] === decidedColor && !isBlank
        )
      ) {
        setScoreDisplay((score) => score + 3);
        rowOfThree.forEach(
          (square) => (currentColorArrangement[square] = blank)
        );
        return true;
      }
    }
  };

  const moveIntoSquareBelow = () => {
    for (let i = 0; i <= 55; i++) {
      const firstRow = [0, 1, 2, 3, 4, 5, 6, 7];
      const isFirstRow = firstRow.includes(i);

      if (isFirstRow && currentColorArrangement[i] === blank) {
        let randomNumber = Math.floor(Math.random() * candyColors.length);
        currentColorArrangement[i] = candyColors[randomNumber];
      }

      if (currentColorArrangement[i + width] === blank) {
        currentColorArrangement[i + width] = currentColorArrangement[i];
        currentColorArrangement[i] = blank;
      }
    }
  };

  const dragStart = (e: DragEvent<HTMLImageElement>) => {
    console.log('Drag Start', e);
    setSquareBeingDragged(e.target as HTMLImageElement);
  };

  const dragDrop = (e: DragEvent<HTMLImageElement>) => {
    console.log('Drag Drop', e);
    setSquareBeingReplaced(e.target as HTMLImageElement);
  };

  const dragEnd = (e: DragEvent<HTMLImageElement>) => {
    console.log('Drag End');
    const squareBeingDraggedID = Number(
      squareBeingDragged?.getAttribute('data-id')
    );

    const squareBeingReplacedID = Number(
      squareBeingReplaced?.getAttribute('data-id')
    );

    console.log(
      'SquareBeingDraggedID',
      squareBeingDragged,
      squareBeingDraggedID
    );
    console.log(
      'SquareBeingReplacedID',
      squareBeingReplaced,
      squareBeingReplacedID
    );

    currentColorArrangement[squareBeingReplacedID] =
      squareBeingDragged?.getAttribute('src')!;
    currentColorArrangement[squareBeingDraggedID] =
      squareBeingReplaced?.getAttribute('src')!;

    const validMoves = [
      squareBeingDraggedID - 1,
      squareBeingDraggedID - width,
      squareBeingDraggedID + 1,
      squareBeingDraggedID + width,
    ];

    const validMove = validMoves.includes(squareBeingReplacedID);

    const isAColumnOfFour = checkForColumnOfFour();
    const isARowOfFour = checkForRowOfFour();
    const isAColumnOfThree = checkForColumnOfThree();
    const isARowOfThree = checkForRowOfThree();

    if (
      squareBeingReplacedID &&
      validMove &&
      (isARowOfThree || isARowOfFour || isAColumnOfFour || isAColumnOfThree)
    ) {
      setSquareBeingDragged(null);
      setSquareBeingReplaced(null);
    } else {
      currentColorArrangement[squareBeingReplacedID] =
        squareBeingReplaced?.getAttribute('src')!;
      currentColorArrangement[squareBeingDraggedID] =
        squareBeingDragged?.getAttribute('src')!;
      setCurrentColorArrangement([...currentColorArrangement]);
    }
  };

  useEffect(() => {
    createBoard();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      checkForColumnOfFour();
      checkForRowOfFour();
      checkForColumnOfThree();
      checkForRowOfThree();
      moveIntoSquareBelow();
      setCurrentColorArrangement([...currentColorArrangement]);
    }, 100);
    return () => clearInterval(timer);
  }, [
    checkForColumnOfFour,
    checkForRowOfFour,
    checkForColumnOfThree,
    checkForRowOfThree,
    moveIntoSquareBelow,
    currentColorArrangement,
  ]);

  return {
    scoreDisplay,
    currentColorArrangement,
    dragStart,
    dragDrop,
    dragEnd,
  };
};

export default useCandyCrush;

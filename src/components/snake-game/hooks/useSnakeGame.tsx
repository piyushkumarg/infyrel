import { useState, useEffect } from 'react';

type GameMode = 'easy' | 'medium' | 'hard';

const useSnakeGame = (initialMode: GameMode) => {
  const [snakeDots, setSnakeDots] = useState([[0, 0], [2, 0]]);
  const [food, setFood] = useState([6, 6]);
  const [direction, setDirection] = useState('RIGHT');
  const [speed, setSpeed] = useState(initialMode === 'hard' ? 100 : 200);
  const [isRunning, setIsRunning] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(() => {
    const storedHighScore = localStorage.getItem('highScore');
    return storedHighScore ? parseInt(storedHighScore, 10) : 0;
  });
  const [mode, setMode] = useState<GameMode>(initialMode);

  useEffect(() => {
    let moveSnake: NodeJS.Timeout;
    if (isRunning) {
      moveSnake = setInterval(() => {
        move();
      }, speed);
    }
    return () => clearInterval(moveSnake);
  }, [snakeDots, direction, isRunning]);

  useEffect(() => {
    setSpeed(mode === 'hard' ? 100 : 200);
  }, [mode]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    e = e || window.event;
    switch (e.keyCode) {
      case 38:
        setDirection('UP');
        break;
      case 40:
        setDirection('DOWN');
        break;
      case 37:
        setDirection('LEFT');
        break;
      case 39:
        setDirection('RIGHT');
        break;
    }
  };

  const toggleGame = () => {
    setIsRunning(!isRunning);
  };

  const move = () => {
    let dots = [...snakeDots];
    let head = dots[dots.length - 1];

    switch (direction) {
      case 'RIGHT':
        head = [head[0] + 2, head[1]];
        break;
      case 'LEFT':
        head = [head[0] - 2, head[1]];
        break;
      case 'DOWN':
        head = [head[0], head[1] + 2];
        break;
      case 'UP':
        head = [head[0], head[1] - 2];
        break;
    }

    head = mode === 'easy' ? wrapToBorders(head) : head;

    if (mode !== 'easy' && (head[0] >= 100 || head[0] < 0 || head[1] >= 100 || head[1] < 0)) {
      onGameOver();
      return;
    }

    dots.push(head);
    dots.shift();
    setSnakeDots(dots);

    checkIfCollapsed(dots);
    checkIfEat(head);
  };

  const wrapToBorders = (head: number[]) => {
    let newHead = [...head];
    if (head[0] >= 100) {
      newHead[0] = 0;
    } else if (head[0] < 0) {
      newHead[0] = 98;
    }

    if (head[1] >= 100) {
      newHead[1] = 0;
    } else if (head[1] < 0) {
      newHead[1] = 98;
    }

    return newHead;
  };

  const checkIfCollapsed = (snake: number[][]) => {
    let snakeBody = [...snake];
    let head = snakeBody[snakeBody.length - 1];
    snakeBody.pop();
    snakeBody.forEach(dot => {
      if (head[0] === dot[0] && head[1] === dot[1]) {
        onGameOver();
      }
    });
  };

  const checkIfEat = (head: number[]) => {
    if (head[0] === food[0] && head[1] === food[1]) {
      setFood(getRandomCoordinates());
      enlargeSnake();
      increaseSpeed();
      setScore(score + 1);
    }
  };

  const enlargeSnake = () => {
    let newSnake = [...snakeDots];
    newSnake.unshift([]);
    setSnakeDots(newSnake);
  };

  const increaseSpeed = () => {
    if (speed > 10) {
      setSpeed(speed - 10);
    }
  };

  const onGameOver = () => {
    alert(`Game Over. Your score is ${score}`);
    if (score > highScore) {
      setHighScore(score);
      localStorage.setItem('highScore', score.toString());
    }
    setSnakeDots([[0, 0], [2, 0]]);
    setFood(getRandomCoordinates());
    setDirection('RIGHT');
    setSpeed(mode === 'hard' ? 100 : 200);
    setScore(0);
    setIsRunning(false);
  };

  const getRandomCoordinates = () => {
    let min = 1;
    let max = 98;
    let x = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
    let y = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
    return [x, y];
  };

  return {
    snakeDots,
    food,
    handleKeyDown,
    toggleGame,
    isRunning,
    score,
    highScore,
    mode,
    setMode,
  };
};

export default useSnakeGame;

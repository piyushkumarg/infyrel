'use client';

import React from 'react';
import { SiteLayout } from '@/layout';
import GameBoard from './components/GameBoard';

const SnakeGame: React.FC = () => {
  return (
    <SiteLayout className="flex flex-col justify-center items-center min-h-[90vh] bg-gray-200 bg-[url('/snakeGame/snakeBackground.jpg')] bg-cover bg-center">
      <GameBoard />
    </SiteLayout>
  );
};

export default SnakeGame;

'use client';

import React from 'react';
import { SiteLayout } from '@/layout';
import GameBoard from './components/GameBoard';

const SnakeGame: React.FC = () => {
  return (
    <SiteLayout className="min-h-[90vh] bg-gray-200 bg-[url('/images/snakeGame/snakeBackground.jpg')] bg-cover bg-center p-4">
      <GameBoard />
    </SiteLayout>
  );
};

export default SnakeGame;

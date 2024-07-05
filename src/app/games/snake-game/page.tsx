import { Footer, Header } from '@/components/navigation';
import { SnakeGame } from '@/components/snake-game';
import React from 'react';

const SudokuPage = () => {
  return (
    <>
      <Header />
      <SnakeGame />
      <Footer />
    </>
  );
};

export default SudokuPage;

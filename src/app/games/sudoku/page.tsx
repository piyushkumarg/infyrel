import { Footer, Header } from '@/components/navigation';
import { Sudoku } from '@/components/sudoku';
import React from 'react';

const SudokuPage = () => {
  return (
    <>
      <Header />
      <Sudoku />
      <Footer />
    </>
  );
};

export default SudokuPage;

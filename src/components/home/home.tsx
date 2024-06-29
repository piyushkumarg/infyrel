'use client';
import { SiteLayout } from '@/layout';
import Link from 'next/link';
import React from 'react';

const Home = () => {
  return (
    <SiteLayout className="bg-slate-300 min-h-[90vh]">
      <div className="flex  justify-center items-center">
        <Link
          href={'/games/tic-tac-toe'}
          className="text-3xl border-2 px-8 py-2 hover:bg-gray-500"
        >
          ticTacToe
        </Link>
        <Link
          href={'/games/sudoku'}
          className="text-3xl border-2 px-8 py-2 hover:bg-gray-500"
        >
          Suduko
        </Link>
      </div>
    </SiteLayout>
  );
};

export default Home;

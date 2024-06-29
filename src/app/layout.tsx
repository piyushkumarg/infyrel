import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Khel Mitra',
  description: 'Your ultimate gaming companion! Enjoy a variety of games like Tic-Tac-Toe, Sudoku, Snake, 2048, and more. Challenge your mind, have fun, and connect with friends. Dive into endless entertainment and make every game an exciting adventure with Khel Mitra!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

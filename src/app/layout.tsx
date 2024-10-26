import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { AppProviders } from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'infyrel',
  description:
    'Your ultimate gaming companion! Enjoy a variety of games like Tic-Tac-Toe, Sudoku, Snake, 2048, and more. Challenge your mind, have fun, and connect with friends. Dive into endless entertainment and make every game an exciting adventure with infyrel Khel!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}

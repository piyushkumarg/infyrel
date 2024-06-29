export default function SudokuLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Sudoku</title>
        <meta name="description" content="Sudoku" />
      </head>
      <body>{children}</body>
    </html>
  );
}

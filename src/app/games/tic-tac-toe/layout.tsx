export default function TicTacToeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Tic Tac Toe</title>
        <meta name="description" content="ticTacToe" />
      </head>
      <body>{children}</body>
    </html>
  );
}

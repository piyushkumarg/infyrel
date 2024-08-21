export default function TetrisLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Tetris</title>
        <meta name="description" content="Tetris" />
      </head>
      <body>{children}</body>
    </html>
  );
}

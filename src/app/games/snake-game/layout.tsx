export default function SudokuLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Snake game</title>
        <meta name="description" content="snake game" />
      </head>
      <body>{children}</body>
    </html>
  );
}

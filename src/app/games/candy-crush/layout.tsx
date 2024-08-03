export default function CandyCrushLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Hangman Game</title>
        <meta name="description" content="Candy Crush " />
      </head>
      <body>{children}</body>
    </html>
  );
}

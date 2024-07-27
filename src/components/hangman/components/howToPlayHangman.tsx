const HowToPlayHangman = () => {
  return (
    <div className="m-4 p-6 border border-gray-300 rounded-lg bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">
        How to Play Hangman: Simple Steps
      </h1>

      <h2 className="text-xl font-semibold mt-4">Setup:</h2>
      <ul className="list-disc ml-6">
        <li>
          One player thinks of a word and draws blank spaces for each letter.
        </li>
        <li>Draw a gallows for the hangman figure.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-4">Hint:</h2>
      <ul className="list-disc ml-6">
        <li>
          The player gives a hint by filling in some blanks based on the
          difficulty level:
        </li>
        <ul className="list-circle ml-6">
          <li>
            <strong>Easy:</strong> Fill in several letters.
          </li>
          <li>
            <strong>Medium:</strong> Fill in a few letters.
          </li>
          <li>
            <strong>Hard:</strong> Fill in one or no letters.
          </li>
        </ul>
      </ul>

      <h2 className="text-xl font-semibold mt-4">Guessing:</h2>
      <ul className="list-disc ml-6">
        <li>Players take turns guessing letters.</li>
        <li>
          If a guessed letter is in the word, write it in the correct spaces.
        </li>
        <li>
          If a guessed letter is not in the word, draw a part of the hangman.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-4">Winning:</h2>
      <ul className="list-disc ml-6">
        <li>
          Players win if they guess the word before the hangman is fully drawn.
        </li>
        <li>
          The game ends if the hangman is fully drawn before the word is
          guessed.
        </li>
      </ul>
    </div>
  );
};

export default HowToPlayHangman;
